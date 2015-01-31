export default function(){
	this.transition(
		this.fromRoute('plan.week'),
		this.toRoute('days'),
		this.use('toLeft'),
		this.reverse('toRight')
	);
}