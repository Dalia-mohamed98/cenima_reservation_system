import React, {Component} from 'react';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';
import '../Signup/Signup'
class AddMovie extends Component {
constructor(props){
    super(props);
    this.state = {
        name: '',
        genre: '',
        length: '',
        screenNo: '',
        datetime: '',
        type:'',
        redirectToReferrer: false
    };
    this.Add = this.Add.bind(this);
    this.onChange = this.onChange.bind(this);
}

Add(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    this.setState({type:data.userData.type});
    if(this.state.name && this.state.genre && this.state.length ){
        PostData('AddMovie',this.state).then((result) => {
            let responseJson = result;
            // if(responseJson.Add_movie){
                // sessionStorage.setItem('userData',JSON.stringify(responseJson));
                this.setState({redirectToReferrer: true});
            // }
            // else
                // alert(result.error);
        });
    }
}

onChange(e){
    this.setState({[e.target.name]:e.target.value});
}
render() {
    if (this.state.redirectToReferrer ) {
        return (<Redirect to={'/admin'}/>)
    }
    
    return (
        <form action="" method="post">
            <div className="row form" id="sBody">
                <div className="medium-5 columns m-auto">
                    <h3>Add New Movie</h3>
                    <input type="text" name="name" placeholder="Name" onChange={this.onChange} required/>
                    <input type="text" name="genre" placeholder="Genre" onChange={this.onChange} required/>
                    <input type="text" name="length" placeholder="Length" onChange={this.onChange} required/>
                    <input type="text" name="screenNo" placeholder="ScreenNo" onChange={this.onChange}  />
                    <input type="text" name="datetime" placeholder="datetime" onChange={this.onChange} />
                    <input type="submit" className="button" value="Add Movie" onClick={this.Add} />
                    
                </div>
            </div>
        </form>
        );
    }
}
export default AddMovie;
