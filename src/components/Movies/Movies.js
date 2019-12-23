import React, {Component} from 'react';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';

import '../../imgs/avatar.jpg' 
import './Movies.css'
class Movies extends Component {
    constructor(props){
        super(props);
        this.d = new Date();
        this.state = {
            datetime: this.d.toLocaleDateString(),
            movies: {},
            redirectToReferrer: false
        };
        

            PostData('Movies',this.state).then((result) => {
                let responseJson = result;
                if(responseJson.movies){
                    this.setState({movies: responseJson.movies});
                // this.shows(responseJson.movies);
                // for(const movie in responseJson.movies){
                //     let mov = responseJson.movies[movie];
                //     let dtime = JSON.parse(mov[4]);
                //     if(dtime[this.state.datetime]) 
                //         // this.setState({redirectToReferrer: true});
                //         console.log(dtime[this.state.datetime]);
                    
                // }
                
                }
                else
                    alert(result.error);
            });
        
        
        this.shows = this.shows.bind(this);
        this.addDay = this.addDay.bind(this);
    }


    shows(time){

        var shows = [];
        if(this.state.movies){
            for(const movie in this.state.movies){
                let mov = this.state.movies[movie];
                
                let dtime = JSON.parse(mov[4]);
                var selectT = [];
                if(dtime[time]){
                    
                    for(let T in dtime[time]){
                       
                        selectT.push(
                            <h4 className="badgeTime"><a href="#" className="badge badge-info">{dtime[time][T]}</a></h4>
                        )
                    }
                    console.log(selectT);
                    shows.push(
                        <div className="row Box" >
                            <div className="col-2">
                                <img src='../../imgs/avatar.jpg' height="200px"/>
                            </div>
                            <div className="col">
                                <h4>{mov[0]}</h4>{/*movie name*/}
                                <h6>{mov[1]}</h6>{/*movie genre*/}
                                <p style={{color:'#27d727'}}>{mov[3]} Minutes</p>{/*movie length*/}
                                <p>Screen No. {mov[2]}</p>
                                <div style={{paddingBottom:"10px"}}>
                                On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars.
                                
                            </div>
                            <div className="Box">
                                Select Time: 

                                    {selectT}
                        
                            </div>
                        </div>
                    </div>
                        
                    )
                    
                }
            }
        }
        return shows;
    }
    

    addDay(inc){
       return new Date(new Date().setDate(new Date().getDate() + inc)).toLocaleDateString();
    }

    render(){
       

        return (
            
            <div id="Body">
                <nav className="navStyle">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-1" role="tab" aria-controls="nav-home" aria-selected="true">{this.state.datetime}</a>
                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-2" role="tab" aria-controls="nav-profile" aria-selected="false">{this.addDay(1)}</a>
                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-3" role="tab" aria-controls="nav-contact" aria-selected="false">{this.addDay(2)}</a>
                        <a className="nav-item nav-link " id="nav-home-tab" data-toggle="tab" href="#nav-4" role="tab" aria-controls="nav-home" aria-selected="false">{this.addDay(3)}</a>
                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-5" role="tab" aria-controls="nav-profile" aria-selected="false">{this.addDay(4)}</a>
                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-6" role="tab" aria-controls="nav-contact" aria-selected="false">{this.addDay(5)}</a>
                
                
                    </div>
                </nav>
                <div className=" tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-1" role="tabpanel" aria-labelledby="nav-home-tab">
                       {this.shows(this.state.datetime)? this.shows(this.state.datetime):"No Movies Yet"}
                    </div>
                    <div className="tab-pane fade" id="nav-2" role="tabpanel" aria-labelledby="nav-profile-tab">
                        {this.shows(this.addDay(1))? this.shows(this.addDay(1)):<h2>No Movies Yet</h2>}
                    </div>
                    <div className="tab-pane fade" id="nav-3" role="tabpanel" aria-labelledby="nav-contact-tab">
                        {this.shows(this.addDay(2))? this.shows(this.addDay(2)):<h2>No Movies Yet</h2>}
                    </div>
                    <div className="tab-pane fade" id="nav-4" role="tabpanel" aria-labelledby="nav-home-tab">
                        {this.shows(this.addDay(3))? this.shows(this.addDay(3)):<h2>No Movies Yet</h2>}
                    </div>
                    <div className="tab-pane fade" id="nav-5" role="tabpanel" aria-labelledby="nav-profile-tab">
                        {this.shows(this.addDay(4))? this.shows(this.addDay(4)):<h2>No Movies Yet</h2>}
                    </div>
                    <div className="tab-pane fade" id="nav-6" role="tabpanel" aria-labelledby="nav-contact-tab">
                        {this.shows(this.addDay(5))? this.shows(this.addDay(5)):<h2>No Movies Yet</h2>}
                    </div>
                </div>
            </div>
            
        )
    }

        

}
export default Movies;
