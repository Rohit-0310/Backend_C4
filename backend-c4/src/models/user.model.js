const bcrypt = require("bcryptjs");


const { Schema, model} = require("mongoose");


const userSchema = new Schema ({
    name: {type: String; require: true},
    email: {type: String; require: true, unique: true},
    password: {type: String; require: true},
    profile_photo_url: {type: String; require: true},
    roles: [{type: String; require: true}],
}, {
    versionKey: false,
    timestamps: true,
});

userSchema.pre("save", function(next) {
    if(!this.isModified("password")) return next();
    bcrypt.hash(this.password, 10, (err,hash) => {
        this.password = hash;
        return next();
    });
});

userSchema.methods.checkPassword = function (password) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, this.password, function (err, same) {
        if (err) return reject(err);
  
        return resolve(same);
      });
    });
  };

  
module.exports= module("user", userSchema)