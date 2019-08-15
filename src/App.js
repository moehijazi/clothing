import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import { Switch,Route } from 'react-router-dom';
import ShopPage from './Pages/Shop/Shop.jsx';
import Header from './Components/Header/Header.jsx';
import SignInAndSignUp from './Pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth} from './firebase/firebase.util';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component= {Homepage} />
        <Route path='/shop' component = {ShopPage} />
        <Route path='/signin' component = {SignInAndSignUp} />
      </Switch>
    </div>
  );}
}

export default App;
