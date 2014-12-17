var moment = require('moment');
module.exports = function(app) {
  var express = require('express');
  var daysRouter = express.Router();

  daysRouter.get('/', function(req, res) {

  	var date = req.query.date ;

  	var days ;

  	if(date){
  		days = DAYS.filter(function(day){
  			return day.date == date ;
  		});
  	} else {
  		days = DAYS;
  	}


    res.send({"days":days});
  });
  app.use('/api/days', daysRouter);


};


var DAYS = [
    { id: 1, date: moment().week(moment().week()).day(1).format("YYYY-MM-DD"), dish: 1, user: 'Luigi' },
    { id: 2, date: moment().week(moment().week()).day(2).format("YYYY-MM-DD"), dish: 2, user: 'Luigi' },
    { id: 3, date: moment().week(moment().week()).day(3).format("YYYY-MM-DD"), dish: 3, user: 'Luigi' },
    { id: 4, date: moment().week(moment().week()).day(5).format("YYYY-MM-DD"), dish: 4, user: 'Luigi' },
    { id: 5, date: moment().week(moment().week()).day(6).format("YYYY-MM-DD"), dish: 5, user: 'Luigi' },    
    { id: 6, date: moment().week(moment().week()-1).day(1).format("YYYY-MM-DD"), dish: 6, user: 'Luigi' },
    { id: 7, date: moment().week(moment().week()-1).day(4).format("YYYY-MM-DD"), dish: 5, user: 'Luigi' },
    { id: 8, date: moment().week(moment().week()-1).day(7).format("YYYY-MM-DD"), dish: 4, user: 'Luigi' },
    { id: 9, date: moment().week(moment().week()+1).day(3).format("YYYY-MM-DD"), dish: 1, user: 'Luigi' },
    { id: 10, date: moment().week(moment().week()+1).day(4).format("YYYY-MM-DD"), dish: 5, user: 'Luigi' }
];

module.exports.days = DAYS ;
