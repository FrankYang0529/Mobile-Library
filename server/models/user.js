const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  email: { type: String, require: true, index: { unique: true } },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  password: { type: String, require: true }
})

UserSchema.path('email').validate((email) => {
  const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
  return emailRegex.test(email)
}, 'Please fill a valid email address.')

UserSchema.set('toJSON', {
  transform: (doc, ret, options) => {
    return {
      email: ret.email,
      firstName: ret.firstName,
      lastName: ret.lastName
    }
  }
})

const User = mongoose.model('User', UserSchema)
module.exports = User