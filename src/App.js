/* eslint-disable react/jsx-filename-extension */
import './App.css';
import { React, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import HomePage from './pages/HomePage/HomePage';
import './includes/DebugFunctions/DebugFunctions';
// import debugLog from './includes/DebugFunctions/DebugFunctions';
import Header from './components/Header/Header.component';

import {
  auth,
  createOrReadUserDoc,
} from './includes/Firebase/firebase-auth-utils';

class App extends Component {
  unsubscribeFromAuth = null;

  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      if (!user) {
        this.setState({ currentUser: null });
        return;
      }

      createOrReadUserDoc(user).then((doc) => {
        this.setState({ currentUser: doc.data() });
        console.log('user is read');
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log('render');
    console.log(this.state.currentUser);
    return (
      <div className='main-div'>
        <div className='main-left' />
        <div className='main-center'>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route path='/signin'>
              <WelcomePage />
            </Route>
            <Route path='/players'>Players</Route>
            <Route path='/matches'>Matches</Route>
          </Switch>
        </div>
        <div className='main-right' />
      </div>
    );
  }
}

export default App;
