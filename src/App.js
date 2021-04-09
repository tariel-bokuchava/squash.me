import './App.css';
import { LoginForm } from './LoginForm/LoginForm.component';
import { Component } from 'react';
import './DebugFunctions/DebugFunctions'
import debugLog from './DebugFunctions/DebugFunctions';


  
class App extends Component {
  constructor() {
    super();

    this.state = {
      isSignedIn: 0
    };
  }

  seSignedInState = (isSignedIn) => {
    debugLog("ChangeLoggedState called: isSignedIn = " + isSignedIn);
    this.setState({isSignedIn: isSignedIn})
  }

  render () {
    return ( this.state.isSignedIn ? 
              <h1>Congratulations! You are logged in!</h1> : 
              <LoginForm seSignedInState={this.seSignedInState}/>);
  }
  }

export default App;
