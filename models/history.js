var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var HistorySchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },

    date: {
        type: Date,
        trim: true,
        required: true
    },

    link: {
        type: String,
        //trim: true,
        required: true
    }


});

var History = mongoose.model("History", HistorySchema);
module.exports = History;

/*
from in class activity - addressMern_solved
replace address and date with Title, Date and Link - per homework instructions
*/
