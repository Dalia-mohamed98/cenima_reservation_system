import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Home.css';
import {PostData} from '../../services/PostData';
import UserFeed from "../UserFeed/UserFeed";
import { confirmAlert } from 'react-confirm-alert';
import '../../styles/react-confirm-alert.css';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data:[],
            userFeed: '',
            redirectToReferrer: false,
            name:'',
            res_mov:'',
        };

        this.Edit = this.Edit.bind(this);
        this.All_movies = this.All_movies.bind(this);
        this.onChange = this.onChange.bind(this);
        this.deleteFeed = this.deleteFeed.bind(this);
        this.deleteFeedAction = this.deleteFeedAction.bind(this);
        this.logout = this.logout.bind(this);
    }

    // componentWillMount() {

    //     if(sessionStorage.getItem("userData")){
    //         // this.getUserFeed();
    //     }

    //     else{
    //         this.setState({redirectToReferrer: true});
    //     }

    // }

    All_movies() {

        // e.preventDefault();
        // let data = JSON.parse(sessionStorage.getItem("userData"));
        // let postData = { user_id: data.userData.user_id, feed: this.state.userFeed };
        // if (this.state.userFeed) {
            PostData('All_movies').then((result) => {
                let responseJson = result;
                this.setState({data: responseJson.movies});
            });
        // }
    }

    deleteFeed(e){

        confirmAlert({
            title: 'Delete Movie',
            message: 'Are you sure to delete this Movie.',
            buttons: [
            {
                label: 'Yes',
                onClick: () => this.deleteFeedAction(e)
            },
            {
                label: 'No',
                // onClick: () => alert('Click No')
            }
            ]
        });

    }

    deleteFeedAction(e){

        let updateIndex=e.target.getAttribute('value');

        let mov_name=document.getElementById("del").getAttribute("data");

        let data = JSON.parse(sessionStorage.getItem("userData"));

        let postData = { type: data.userData.type,name: mov_name };
        if (postData) {

            PostData('movieDelete', postData).then((result) => {
                // this.state.data.splice(updateIndex,1);
                // this.setState({data:this.state.data});

            if(result.success){

                console.log(result.success);
            }
            else
                console.log(result.error);

            });
        }
    }

    // editFeed(e){

    //     alert("j");
    // }

    Edit(e) {
        let updateIndex=e.target.getAttribute('value');

        let mov_name=document.getElementById("edit").getAttribute("data");
        // let data = JSON.parse(sessionStorage.getItem("userData"));
        // this.setState({name:data.userData.username});
        let postData = { mov_name: mov_name};
      
        if (postData) {
            
            PostData('getMovie', postData).then((result) => {
                let responseJson = result;
                
                if(responseJson.res_mov){
                    console.log(responseJson.res_mov);
                    this.setState({res_mov:responseJson.res_mov});
                    
                    // this.setState({data: responseJson.res_mov});
                    // console.log(this.state);
                }
            });
        }

    }

    onChange(e){
        this.setState({userFeed:e.target.value});
    }


    logout(){
        sessionStorage.setItem("userData",'');
        sessionStorage.clear();
        this.setState({redirectToReferrer: true});
    }

    render() {
        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/login'}/>)
        }

        if(this.state.res_mov){
            return(<Redirect to={{
                    pathname: '/EditMovie',
                    state: { movie: this.state.res_mov }
            }}
                />)
        }
        this.All_movies();
        
        return (

            // <table>
            //     <thead>
            //         <th>Name</th>
            //         <th>Genre</th>
            //         <th>Screen No.</th>
            //         <th>Length</th>
            //         <th>Date</th>

            //     </thead>
            //     <tbody>
                    
                        
                        // <UserFeed feedData = {this.state.data} deleteFeed = {this.deleteFeed} name={this.state.name}/>

                       
            //     </tbody>
            // </table>

            <div className="row" style={{minHeight:"400px"}}>
                <div className="col-12">
                    <a href="#" onClick={this.logout} className="logout">Logout</a>
                    <h3 style={{margin:"0 70px",textAlign:"right"}}>
                    <button className="btn btn-warning "><a href="./AddMovie"  className="">Add Movie</a></button>
                    </h3>
                    {/* <form onSubmit={this.All_movies} method="post">
                        <input name="userFeed" onChange={this.onChange} value={this.state.userFeed} type="text" placeholder="Write your feed here..."/>
                        <input
                            type="submit"
                            value="Post"
                            className="button"
                            onClick={this.All_movies}/>
                    </form> */}

                </div>
                <UserFeed feedData = {this.state.data} deleteFeed = {this.deleteFeed} Edit = {this.Edit} name={this.state.name}/>

            </div>
        );
    }
}

export default Home;