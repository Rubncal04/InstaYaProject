const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
  name: {type: String, require: true},
  userName: {type: String, require: true, unique: true},
  password: {type: String, require: true}
},
{
  timestamps: true
}
);

module.exports = model('User', UserSchema);
