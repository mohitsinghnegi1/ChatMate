import config from '../config/config';
import React from 'react';

const GetReceivers = async (setReceivers1) => {
  const cur_user = JSON.parse(localStorage.getItem('user'));
  const token = cur_user.token;

  const response = await fetch(config.USER_BASE_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + token,
    },
  })
    .then((response) => {
      if (response.status == 401) {
        localStorage.clear();
        window.location.href('/');
      }
      return response.json();
      //use response.text() if you send text , if you send json then use json()
    })
    .then((data) => {
      console.log('users details', data);
      const receivers = data.filter((user) => {
        return user._id !== cur_user.userInfo._id;
      });

      setReceivers1(receivers);
    })
    .catch((error) => {
      console.log('Something Went Wrong!! ', error);
    });

  // console.log('response', response);
  return response;
};

export { GetReceivers };
