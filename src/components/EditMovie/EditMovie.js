import React, {Component} from 'react';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';
import '../Signup/Signup'
class EditMovie extends Component {
constructor(props){
    super(props);
    this.state = {
        movie:'',
        name: '',
        genre: '',
        length: '',
        screenNo: '',
        datetime: '',
        type:'',
        redirectToReferrer: false
    };
    
    this.Edit = this.Edit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getData = this.getData.bind(this);
    this.onChange = this.onChange.bind(this);

    
}



getData(){
    this.setState({movie: this.props.location.state.movie});
    console.log(this.state.movie);

    // PostData('GetMovie',this.state).then((result) => {
    //     let responseJson = result;
    // });
}

Edit(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    this.setState({type:data.userData.type});
    if(this.state.name && this.state.genre && this.state.length ){
        PostData('EditMovie',this.state).then((result) => {
            let responseJson = result;
            if(responseJson.Edit_movie){
                // sessionStorage.setItem('userData',JSON.stringify(responseJson));
                this.setState({redirectToReferrer: true});
            }
            else
                alert(result.error);
        });
    }
}

// val(e){
    // return (this.state[e.target.name]);
// }

onChange(e){
    this.setState({[e.target.name]:e.target.value});
}
render() {

    
    if (this.state.redirectToReferrer ) {
        return (<Redirect to={'/admin'}/>)
    }
   
    if(this.state.movie == '')
        this.getData();

    return (
        <form action="" method="post">
            <div className="row form" id="sBody">
                <div className="medium-5 columns m-auto">
                    <h3>Edit Movie</h3>
                    <input type="text" name="name" placeholder="Name" onChange={this.onChange} value={this.state.movie['name']} required/>
                    <input type="text" name="genre" placeholder="Genre" onChange={this.onChange} value={this.state.movie['genre']} required/>
                    <input type="text" name="length" placeholder="Length" onChange={this.onChange} value={this.state.movie['length']} required/>
                    <input type="text" name="screenNo" placeholder="ScreenNo" onChange={this.onChange} value={this.state.movie['screenNo']}  />
                    <input type="text" name="datetime" placeholder="datetime" onChange={this.onChange} value={this.state.movie['datetime']} />
                    <input type="submit" className="button" value="Add Movie" onClick={this.Edit}  />
                    
                </div>
            </div>
        </form>
        );
    }
}
export default EditMovie;
