import React from 'react';
import ReactEmoji from 'react-emoji';

export default function Messsage(props) {
  return <div className='message card'>{ReactEmoji.emojify(props.msg)}</div>;
}
