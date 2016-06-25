import Ember from 'ember';

const {
  getProperties,
  isEmpty
} = Ember;

export default function getOrCreateUser(authData, store) {
  let authUserProps = extractUserProperties(authData);
  return store.find('user', authData.uid)
    .then((user) => {
      // Check if any user values have changed
      if (userHasChanged(user, authUserProps)) {
        user.setProperties(authUserProps);
        return user.save();
      }
      return user;
    })
    .catch(() => {
      authUserProps.created = new Date().getTime();
      let newUser = store.createRecord('user', authUserProps);
      return newUser.save();
    });
}

function extractUserProperties(authData) {
  let name = 'Unknown';
  let { providerData: [userData] } = authData;
  let {
    photoURL,
    displayName,
    username,
    email
  } = userData;

  let { uid } = authData;

  if (displayName) {
    name = displayName;
  } else if (username) {
    name = username;
  }

  return {
    id: uid,
    displayName: name,
    email: !isEmpty(email) ? email : null,
    avatar: photoURL
  };
}

function userHasChanged(user, authProps) {
  let userProps = getProperties(user, 'avatar', 'displayName', 'email');
  return userProps.avatar       !== authProps.avatar      ||
         userProps.displayName  !== authProps.displayName ||
         userProps.email        !== authProps.email;
}
