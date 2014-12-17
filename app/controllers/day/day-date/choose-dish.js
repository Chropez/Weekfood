import Ember from 'ember';
export default Ember.ArrayController.extend({
	needs: 'day/day-date',
	chooseDishAction : null,
	actions: {
		chooseDish : function(dish){
			if(this.get('chooseDishAction')===null){
				this.get('controllers.day/day-date').send('chooseDish', dish);
			}else{
				this.get('controllers.day/day-date').send('chooseDishAction', dish);
			}
			
		}
	}
});
