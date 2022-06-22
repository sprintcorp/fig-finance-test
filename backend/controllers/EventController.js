const asyncHandler = require("express-async-handler")
const Event = require("../models/Event");

exports.getEvents = asyncHandler(async(req,res,next)=>{

    res.status(200).json(res.responseQuery);

});

exports.getEventByCategory = asyncHandler(async(req,res,next)=>{
    const events = await Event.find({'category':req.query.category})
      .populate({'path':'category','select':'name'});
    res.status(200).json({data:events});
});

exports.createEvent = asyncHandler(async (req,res,next)=>{
    const event = await Event.create(req.body);
    res.status(201).json({ success: true, data: event,message:'Event created successfully' });
});


