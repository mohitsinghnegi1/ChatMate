const mongoose = require('mongoose');
require('mongoose-type-email');
//attribute name should be in camelcase
const user = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  username: {
    type: String,
    index: {
      unique: true,
    },

    required: true,
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    // match:
    //   '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/',
    index: {
      unique: true,
    },

    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  userStatus: {
    type: String,
    default: 'offline',
  },
  conversationList: {
    type: [mongoose.Schema.Types.ObjectId],
  },
  LastSeen: {
    type: Date,
    default: new Date(),
  },
});

module.exports = User = mongoose.model('User', user);
