const express = require("express");
const EventModel = require("../models/Event");
const responseQuery = require("../middlewares/ResponseQuery");
const{getEvents,createEvent,getEventByCategory} = require("../controllers/EventController");

const eventRoute = express.Router();

eventRoute.route('/').get(responseQuery(EventModel,'category'),getEvents).post(createEvent);
eventRoute.get('/filter',getEventByCategory);

module.exports = eventRoute;
