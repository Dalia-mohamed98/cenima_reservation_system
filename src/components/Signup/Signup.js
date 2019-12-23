import React, {Component} from 'react';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';
import './Signup.css'
class Signup extends Component {
constructor(props){
    super(props);
    this.state = {
        username: '',
        password: '',
        email: '',
        Fname: '',
        Lname: '',
        DOB: '',
        type: 'customer',
        redirectToReferrer: false
    };
    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);
}

signup(e) {
    e.preventDefault();
    if(this.state.username && this.state.password && this.state.email && this.state.Lname && this.state.Fname){
        PostData('signup',this.state).then((result) => {
            let responseJson = result;
            if(responseJson.userData){
                sessionStorage.setItem('userData',JSON.stringify(responseJson));
                this.setState({redirectToReferrer: true});
            }
            else
                alert(result.error);
        });
    }
}

onChange(e){
    this.setState({[e.target.name]:e.target.value});
}
render() {
    if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
        return (<Redirect to={'/Movies'}/>)
    }
    return (
        <form action="" method="post">
            <div className="row form" id="sBody">
                <div className="medium-5 columns m-auto">
                    <h3>Signup</h3>
                    <input type="text" name="email" placeholder="Email" onChange={this.onChange} required/>
                    <input type="text" name="Fname" placeholder="First Name" onChange={this.onChange} required/>
                    <input type="text" name="Lname" placeholder="Last Name" onChange={this.onChange} required/>
                    <input type="text" name="username" placeholder="Username" onChange={this.onChange} required/>
                    <input type="password" name="password" placeholder="Password" onChange={this.onChange} required/>
                    <input type="date" name="DOB" placeholder="Username" onChange={this.onChange} required/>
                    <input type="submit" className="button" value="Sign Up" onClick={this.signup} />
                    
                    <a href="/login">Login</a>
                </div>
            </div>
        </form>
        );
    }
}
export default Signup;
