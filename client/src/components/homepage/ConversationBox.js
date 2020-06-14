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
    ];
    return conversation.map((message) => {
      return <Messagebox msg={message} />;
    });
  };

  render() {
    return <div>{this.renderMessage()}</div>;
  }
}
