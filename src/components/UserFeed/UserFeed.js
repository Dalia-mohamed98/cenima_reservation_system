import React, {Component} from 'react';
import Linkify from 'react-linkify';
// import EditMovie from '../EditMovie/EditMovie'
import './UserFeed.css';
//import TimeAgo from 'react-timeago';
class UserFeed extends Component {

    constructor(props){
        super(props);
    }

    render() {

        let userFeed = this.props.feedData
        .map(function (feedData, index) {
            let dtime = JSON.parse(feedData[4]);
            let selectT = []
            for(let T in dtime){
                       
                selectT.push(
                    <h4 className=" badge badge-info">{T}</h4>
                    
                )
                selectT.push(
                    <h4 className=" badge badge-info">{dtime[T]}</h4>
                )
            }
            return (
                <div className="medium-12 columns" key={index}>

                    <div className="people-you-might-know">

                        <div className="row add-people-section">
                            <div className="small-12 medium-10 columns about-people">

                                <div className="about-people-author">
                                    {/* <p className="author-name"> */}
                                    <b>{feedData[0]}</b>
                                    
                                    <Linkify>{feedData[1]}</Linkify>
                                    <br/>

                                    {/* </p> */}
                                    <b>{feedData[3]} minutes</b>
                                    <b>Screen No. {feedData[2]}</b>

                                    <b>{selectT}</b>


                                </div>
                            </div>
                            <div className="small-12 medium-2 columns add-friend">
                                <div className="add-friend-action">
                                    <button id="del" className="button small btn-color" onClick={this.props.deleteFeed} data={feedData[0]} value={this.props.index} >
                                    <i className="fa fa-user-times" aria-hidden="true"></i>
                                    Delete
                                    </button>
                                    <button id="edit" className=" small btn btn-success" onClick={this.props.Edit} data={feedData[0]} value={this.props.index} >
                                    <i className="fa fa-user-times" aria-hidden="true"></i>
                                    Edit
                                    {/* <EditMovie data={feedData[0]}/> */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }, this);

        return (
        <div className="col-6 ">
        {userFeed}

        </div>
        );
    }

}

export default UserFeed;