import React, { useContext, useState, useEffect } from 'react';
// import { StoreContext } from '../context/Store';
import Conversation from '../conversation/Conversation';
import '../../assets/css/home.css';
import avatar from '../../assets/img/sender_avatar.jpg';
import start_chat from '../../assets/img/start_chat.svg';
import './chat.scss';
import ConversationBox from './ConversationBox';
// import { GetUserMeals } from '../../services/util';

export default function Home(props) {
  var [isCoversationOpen, setIsConversationOpen] = useState(true);
  var [receivers, setReceivers] = useState([
    'Joe Chandler',
    'Mohit Singh',
    'Ritesh Singh',
    'Pratp Singh',
    'bipul Singh',
    'jatin Assif',
    'karam Jali',
    'Namved Hussain',
  ]);

  // useEffect(() => {
  //   GetUserMeals(changeState, setTotalCalories);
  //   getTodayMeals(userMeals);
  // }, []);

  // useEffect(() => {
  //   getTodayMeals(userMeals);
  // }, [userMeals]);
  const getConversations = (receivers) => {
    return receivers.map((receiver) => {
      return <Conversation name={receiver} />;
    });
  };

  const openConversation = () => {
    return <ConversationBox />;
  };

  const renderDefaultConversationBox = () => {
    return (
      <div>
        <div>
          <img src={start_chat} className='start-chat' />
        </div>
        <div className='text-center'>
          <h3 className='mb-4 mt-2 chatmate-head'>ChatMate Business App</h3>
          <div className='chatmate-desc'>
            ChatMate Connects you with your customers easily by using tools to
            automate, sort and quickly respond to messages. ChatMate can also
            help medium and large businesses provide customer support and
            deliver important notifications to customers.
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='container-fluid pl-0 pr-0'>
      <div className='row w-100 m-0'>
        <div className='col-4 conversation-header '>
          <img src={avatar} className='avatar sender' />
        </div>
        <div className='col-8 chat-header '></div>
      </div>

      <div className='row w-100 m-0'>
        <div className='col-4  conversation-wrapper pr-0 pl-0'>
          {getConversations(receivers)}
        </div>
        <div className='col-8 chat-wrapper pr-0'>
          <div className='chat-limiter'>
            {isCoversationOpen && openConversation()}
          </div>
          {!isCoversationOpen && renderDefaultConversationBox()}
          <div class='footer fixed-bottom typing-box'>
            <form className='d-flex'>
              <input
                type='text'
                className='input-msg-box'
                placeholder='Type Message Here'></input>
              <input
                type='submit'
                value='Send message'
                className='primary-btn ml-4 pl-3 pr-3'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
