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


module.exports= module("user", userSchema)