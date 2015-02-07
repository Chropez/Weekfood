export default function(){
  this.transition(
    this.fromRoute('dishes.index'),
    this.toRoute('days.index'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}