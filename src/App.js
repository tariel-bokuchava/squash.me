import './App.css';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import HomePage from './pages/HomePage/HomePage';
import { Component } from 'react';
import './includes/DebugFunctions/DebugFunctions'
import debugLog from './includes/DebugFunctions/DebugFunctions';


  
class App extends Component {
  constructor() {
    super();

    this.state = {
      isSignedIn: 1
    };
  }

  setSignedInState = (isSignedIn) => {
    debugLog("ChangeLoggedState called: isSignedIn = " + isSignedIn);
    this.setState({isSignedIn: isSignedIn})
  }

  render () {
    return (    this.state.isSignedIn 
                  ? 
                <HomePage setSignedInState={this.setSignedInState}/>
                  :
                <WelcomePage setSignedInState={this.setSignedInState}/>
    );
  }
  }

export default App;
