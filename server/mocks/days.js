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
    } else { days = DAYS; }

    res.send({"days":days});

  });

  daysRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  daysRouter.get('/:id', function(req, res) {
    var id = req.params.id;
    var days = DAYS;

    var day;
    for(var i = 0 ; i < days.length ; i ++){
      if(days[i].id == id ) {
        day = days[i];
        break;
      }
    }

    res.send({"days":day});
  });

  daysRouter.put('/:id', function(req, res) {
    res.send({
      'days': {
        id: req.params.id
      }
    });
  });

  daysRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/days', daysRouter);
};


var thisWeek = moment(),
    nextWeek = moment().add(1, 'week'),
    prevWeek = moment().subtract(1, 'week');

var DAYS = [
    { id: 1, date: thisWeek.day(1).format("YYYY-MM-DD"), dish: 1, user: 'Luigi' },
    { id: 2, date: thisWeek.day(2).format("YYYY-MM-DD"), dish: 2, user: 'Luigi' },
    { id: 3, date: thisWeek.day(3).format("YYYY-MM-DD"), dish: 3, user: 'Luigi' },
    { id: 4, date: thisWeek.day(5).format("YYYY-MM-DD"), dish: 4, user: 'Luigi' },
    { id: 5, date: thisWeek.day(6).format("YYYY-MM-DD"), dish: 5, user: 'Luigi' },    
    { id: 6, date: prevWeek.day(1).format("YYYY-MM-DD"), dish: 6, user: 'Luigi' },
    { id: 7, date: prevWeek.day(4).format("YYYY-MM-DD"), dish: 5, user: 'Luigi' },
    { id: 8, date: prevWeek.day(7).format("YYYY-MM-DD"), dish: 4, user: 'Luigi' },
    { id: 9, date: nextWeek.day(3).format("YYYY-MM-DD"), dish: 1, user: 'Luigi' },
    { id: 10, date: nextWeek.day(4).format("YYYY-MM-DD"), dish: 5, user: 'Luigi' }
];

module.exports.days = DAYS ;
