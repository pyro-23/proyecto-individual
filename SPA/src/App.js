import React from 'react';

import Home from  './components/Home.js';
import Chat from  './components/Chat.js';

import {
  Router,
  Scene,
} from 'react-native-router-flux';

class App extends React.Component{
  render(){
    return(
      <Router>
        <Scene key='root' style={{paddingTop: 54}}>
          <Scene key='home' component={Home} title='Home'/>
          <Scene key='chat' component={Chat} title='Chat'/>
        </Scene>
      </Router>
    );
  }
}

export default App;
