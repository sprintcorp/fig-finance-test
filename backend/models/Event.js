const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title to this event'],
        maxlength: [50, "Name can not be more than 50 characters"],
    },
    description: {
        type: String,
        required:[true, 'Please add description to this event']
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: true
    },
    address:{
        type: String
    },
    isVirtual:{
        type:String,
        default:false,
        required:true,
    },
    date:{
        type:Date,
        required:true
    }
});

module.exports = mongoose.model('Event', EventSchema);
