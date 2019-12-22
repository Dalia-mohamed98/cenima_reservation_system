import React, { Component } from 'react';
import './styles/foundation.min.css';
import './styles/custom.css';
import Routes from './routes';
import Header from '././components/Header/Header';
import Footer from '././components/Footer/Footer';
import MobileHeader from './components/MobileHeader/MobileHeader';
class App extends Component {
    constructor(){
        super();
        this.state={
        Name: "Cinema One",
        Movies: "Movies",
        SignUp: "SignUp",
        Login: "Login",
        home: false
        }
    }
    render() {
        return (
            <div className="off-canvas-wrapper">
                <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
                    <div className="off-canvas-content" data-off-canvas-content>
                        <MobileHeader name={this.state.Name}/>
                        <Header name={this.state.Name} movies={this.state.Movies} signup={this.state.SignUp} login={this.state.Login}/>
                        <Routes name={this.state.Name}/>
                        {/* <hr/> */}
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;





// import React from 'react';
// import { BrowserRouter as Router, Route} from 'react-router-dom'
// import Header from './components/layout/Header'
// import Footer from './components/layout/Footer'
// import Login from './components/pages/Login/Login'
// import Movies from './components/pages/Movies/Movies'

// import axios from 'axios'
// import uuid from 'uuid'

// import './App.css';

// function App() {


//   return (
//     <Router>
//       <div className="App">
//       <Header/>
//         <div className="container">
          
//           <Route exact path="/" render={props => (
//             <React.Fragment>
//                {}
//             </React.Fragment>
//           )}/>

//           <Route path="/login" component={Login}/>
//           <Route path="/Movies" component={Movies}/>

          
//         </div>
//         <Footer/>
//       </div>
//     </Router>
//   );
// }

// export default App;
