var DAYS = require('./days');

module.exports = function(app) {
  var express = require('express');
  var dayRouter = express.Router();
  dayRouter.get('/:id', function(req, res) {
  	var id = req.params.id;
  	var days = DAYS.days;

  	var day;
  	for(var i = 0 ; i < days.length ; i ++){
  		if(days[i].id == id ) {
  			day = days[i];
  			break;
  		}
  	}

    res.send({"days":day});
  });
  app.use('/api/day', dayRouter);
};
