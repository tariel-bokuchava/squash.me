import './App.css';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import HomePage from './pages/HomePage/HomePage';
import { Component } from 'react';
import './includes/DebugFunctions/DebugFunctions'
import debugLog from './includes/DebugFunctions/DebugFunctions';
import Header from './components/Header/Header.component';
import { Switch, Route } from 'react-router-dom';
import { auth, firestore, createOrReadUserDoc } from './includes/Firebase/firebase-auth-utils';

  
class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
        if(!user) {
          this.setState({currentUser: null});
          return;
        }

        createOrReadUserDoc(user).then((doc) => {
          this.setState({currentUser: doc.data()});
          console.log('user is read');
        });
        
      })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    console.log('render');
    console.log(this.state.currentUser);
    return (<div className='main-div'>    
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                  <Route exact path='/'>
                      <HomePage/>
                  </Route>
                  <Route path='/signin'>
                    <WelcomePage />
                  </Route>
                  <Route path='/players'>
                    Players
                  </Route>
                  <Route path='/matches'>
                    Matches
                  </Route>
                </Switch>
            </div>
    );
  }
  }

export default App;
