import React, { Component } from 'react';
import Messagebox from './Messsage';

export default class ConversationBox extends Component {
  constructor() {
    super();
    this.renderMessage = this.renderMessage.bind(this);
  }

  renderMessage = (conversation) => {
    //let suppose conversation happends between two people
    var conversation = [
      'Hi Raahul',
      'Hi Ravi',
      'Whatts Upp',
      'Hi ',
      'I am Ok ',
      'Thank god',
      'Hi Raahul',
      'Hi Ravi',
      'Whatts Upp',
      'Hi ',
      'I am Ok ',
      'Thank god',
      'Hi Raahul',
      'Hi Ravi',
      'Whatts Upp',
      'Hi ',
      'I am Ok ',
      'Thank god',
      'Hi Raahul',
      'Hi Ravi',
      'Whatts Upp',
      'Hi ',
      'I am Ok ',
      'Thank god',
      'New Feature We can Inset Emoji using Emoji code <3 :p New Feature We can Inset Emoji using Emoji code New Feature We can Inset Emoji using Emoji code',
      'my Emojis :)',
      ':) :( ',
      '(⊙＿⊙)',
    ];
    // TODO pass message and username or user id to differentiate user

    return conversation.map((message) => {
      return <Messagebox msg={message} />;
    });
  };

  render() {
    return <React.Fragment>{this.renderMessage()}</React.Fragment>;
  }
}
