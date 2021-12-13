const { Schema, model} = require("mongoose");


const screenSchema = new Schema ({
    name: {type: String, require: true},
    threatre :
    {
        type: Schema.Types.ObjectId, ref:"threatre",
    },
}, 
    {
        versionKey: false,
        timestamps: true,
    });


module.exports= model("screen", screenSchema)