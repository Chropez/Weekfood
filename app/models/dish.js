import DS from 'ember-data';

var Dish = DS.Model.extend({
  name : DS.attr('string'),
  description: DS.attr('string'),
  timeToCook: DS.attr('number'),
  image: DS.attr('string'),

  days : DS.hasMany('day', { async: true }),

  user: DS.attr('string')
  //,ingredients: DS.hasMany('ingredient')

});

/*
Dish.reopenClass({
	FIXTURES:[
		{ 	
			id: 1, 
			name : 'Korvstroganoff', 
			description: '',
			timeToCook : '30',
			picture: 'http://media.hemmahosandrea.se/2013/12/IMG_0766-1024x682.jpg',
			days: [1, 9],
			user: 'Luigi' 
		},
		{ 	
			id: 2, 
			name : 'Köttbullar och Makaroner', 
			description: '',
			timeToCook : '30',
			picture: 'https://cdn1.cdnme.se/cdn/8-1/3559414/images/2012/kttbullar-och-makaroner_4ffa71bbddf2b319280004e0.jpg',
			days: [2],
			user: 'Luigi' 
		},
		{ 	
			id: 3, 
			name : 'Tacos', 
			description: '',
			timeToCook : '30',
			picture: 'http://www.foodpeoplewant.com/wp-content/uploads/2010/03/Tacos-de-Barbacoa.jpg',
			days: [3],
			user: 'Luigi' 
		},
		{ 	
			id: 4, 
			name : 'Spaghetti och Köttfärsås', 
			description: '',
			timeToCook : '30',
			picture: 'http://matochmera.se/photos/2083971580_29508182_imagevaulthandler.aspx',
			days: [4, 8],
			user: 'Luigi' 
		},
		{ 	
			id: 5, 
			name : 'Pizza', 
			description: '',
			timeToCook : '30',
			picture: 'http://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg',
			days: [5, 7, 10],
			user: 'Luigi' 
		},
		{ 	
			id: 6, 
			name : 'Palak Gosht', 
			description: 'En god indisk maträtt',
			timeToCook : '30',
			picture: 'http://image.shutterstock.com/display_pic_with_logo/856/856,1320492101,5/stock-photo-indian-food-with-curries-rice-naan-bread-samosas-and-pakora-88137712.jpg',
			days: [6],
			user: 'Luigi' 
		},
		{ 	
			id: 7, 
			name : 'Oxfilé', 
			description: '',
			timeToCook : '30',
			picture: 'http://www.ica.se/imagevaultfiles/id_29641/cf_1286/oxfile_med_n-tgrmolata_b1210_713235.jpg',
			user: 'Luigi' 
		},
		
	]
});
*/
export default Dish;
