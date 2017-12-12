import React from 'react';

import{
  View,
  Text,
}from 'react-native';

import {GIfted Chat} from 'react-native-gifted-chat';


class Chat extends React.Component{
  render (){
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}


Chat.defaultProps={
  name: 'Chat',
};

Chat.propTypes={
  name: React.PropTypes.string,
}

export default Chat;
