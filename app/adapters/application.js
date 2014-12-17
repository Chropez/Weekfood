/*import FirebaseAdapter from '../adapters/firebase';

export default FirebaseAdapter.extend({
});*/

/*import FixturesAdapter from '../adapters/fixtures';

export default FixturesAdapter.extend({
});
*/
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	namespace: 'api'
});




