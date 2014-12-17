export default function(){


	this.transition(
		this.fromRoute('week.week-number'),
		this.toRoute('day.day-number'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

}