const { Schema, model} = require("mongoose");


const showSchema = new Schema ({
    timing: {type: Number, require: true},
    total_seats :{type: Number, require: true},

    movie: {
        type: Schema.Types.ObjectId, ref:"movie",
    },
    screen :
    {
        type: Schema.Types.ObjectId, ref:"screen",
    },
}, 
    {
        versionKey: false,
        timestamps: true,
    });


module.exports= model("show", showSchema)