const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define model
mongoose.set('useCreateIndex', true)
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String
});
//on save hook ,encrypt password
userSchema.pre('save', function (next) {
  const user = this;
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});
//for draw out salt to check for future when user want to login
userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch);
  }); //==> usage in localStrategy
}

//create model class
const ModelClass = mongoose.model('user', userSchema);
//exp
module.exports = ModelClass;