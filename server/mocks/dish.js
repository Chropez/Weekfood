var DISHES = require('./dishes');

module.exports = function(app) {
  var express = require('express');
  var dishRouter = express.Router();
  dishRouter.get('/:id', function(req, res) {
  	var id = req.params.id;
  	var dishes = DISHES.dishes;

  	var dish;
  	for(var i = 0 ; i < dishes.length ; i ++){
  		if(dishes[i].id == id ) {
  			dish = dishes[i];
  			break;
  		}
  	}

    res.send({"dishes":dish});
  });
  app.use('/api/dishes', dishRouter);
};
