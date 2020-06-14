import React from 'react';
import avatar from '../../assets/img/user.png';
import './conversation.scss';
export default function Conversation(props) {
  return (
    <div className='row conversation w-100 mr-0 ml-0'>
      <div className='col-2 d-flex '>
        <img src={avatar} className='avatar' />
      </div>
      <div className='chat'>
        {/* considering current user as sender and conversation user as receiver */}
        <div className='receiver'>{props.name}</div>
        <div className='last-msg'>Last Message</div>
      </div>
    </div>
  );
}
