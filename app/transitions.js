export default function(){

	this.transition(
		this.withinRoute('plan'),
		this.use('fade')
	);

	this.transition(
		this.fromRoute('days'),
		this.toRoute('plan'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	// Dishes

	this.transition(
		this.fromRoute('dishes.index'),
		this.toRoute('dishes.new'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('plan', 'days'),
		this.toRoute('dishes'),
		this.use('toLeft')
	);

	// Plan
	
	this.transition(
		this.fromRoute('dishes'),
		this.toRoute('plan'),
		this.use('toRight')
	);
	
	// From application

	this.transition(
		this.toRoute('plan'),
		this.use('crossFade')
	);

	this.transition(
		this.toRoute('dishes'),
		this.use('crossFade')
	);

}
