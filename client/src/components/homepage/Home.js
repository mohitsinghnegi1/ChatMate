import React, { useContext, useState, useEffect } from 'react';
// import { StoreContext } from '../context/Store';
import Conversation from '../conversation/Conversation';
import '../../assets/css/home.css';
import avatar from '../../assets/img/sender_avatar.jpg';
import start_chat from '../../assets/img/start_chat.svg';
import './chat.scss';
import ConversationBox from './ConversationBox';
import ScrollToBottom from 'react-scroll-to-bottom';
import { GetReceivers } from '../../services/util';

export default function Home(props) {
  //This state will show default conversation box if it false
  var [isCoversationOpen, setIsConversationOpen] = useState(false);

  //set message
  const [message, setMessage] = useState('');
  //This state will hold all the list of user that registered in Chat Mate except One who is logined
  const [receivers, setReceivers] = useState([]);

  useEffect(() => {
    GetReceivers(setReceivers);
  }, []);

  // useEffect(() => {
  //   getTodayMeals(userMeals);
  // }, [userMeals]);

  const getConversations = (receivers) => {
    console.log(receivers);
    return receivers.map((receiver) => {
      return (
        <Conversation
          name={receiver.username}
          otherInfo={receiver}
          setIsConversationOpen={setIsConversationOpen}
        />
      );
    });
  };

  const openConversation = () => {
    return <ConversationBox />;
  };

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      //TODO send this message the the current receiver using socket.io
    }
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
          {isCoversationOpen && (
            <ScrollToBottom className='chat-limiter'>
              {openConversation()}
            </ScrollToBottom>
          )}
          {!isCoversationOpen && renderDefaultConversationBox()}
          <div class='footer fixed-bottom typing-box'>
            <form className='d-flex'>
              <input
                type='text'
                className='input-msg-box'
                placeholder='Type Message Here'
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={(event) =>
                  event.key === 'Enter' ? sendMessage(event) : null
                }
              />
              <input
                type='submit'
                value='Send message'
                className='primary-btn ml-4 pl-3 pr-3'
                onClick={(event) => sendMessage(event)}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
