import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';
import '../Signup/Signup'

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            redirectToAdmin: false,
            redirectToCust: false
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    login(e) {
        e.preventDefault();
        if(this.state.username && this.state.password){
            PostData('login',this.state).then((result) => {
                let responseJson = result;
                if(responseJson.userData){
                    sessionStorage.setItem('userData',JSON.stringify(responseJson));
                    if(responseJson.userData.username == 'admin')
                        this.setState({redirectToAdmin: true});
                    else
                        this.setState({redirectToCust: true});

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
        if (this.state.redirectToAdmin) {
            return (<Redirect to={'/admin'}/>)
        }
        if(this.state.redirectToCust){
            return (<Redirect to={'/Movies'}/>)
        }
        if(sessionStorage.getItem('userData')){
            return (<Redirect to={'/admin'}/>)
        }
        return (
            <form action="" method="post">
                <div className="row form " id="Body">
                    <div className="medium-5 columns ml-auto mr-auto">
                        <h3>Login</h3>
                        <input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
                        <input type="password" name="password" placeholder="Password" onChange={this.onChange}/>
                        <input type="submit" className="button" value="Login" onClick={this.login}/>
                        <a href="/signup"> SignUp</a>
                    </div>
                </div>
            </form>
        );
    }
}
export default Login;