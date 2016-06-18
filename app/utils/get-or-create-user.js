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
  let { provider } = authData;
  let userData = authData[provider];
  let avatar = userData.profileImageURL;

  if (userData.displayName) {
    name = userData.displayName;
  } else if (userData.username) {
    name = userData.username;
  }

  return {
    id: authData.uid,
    displayName: name,
    email: !isEmpty(userData.email) ? userData.email : null,
    avatar
  };
}

function userHasChanged(user, authProps) {
  let userProps = getProperties(user, 'avatar', 'displayName', 'email');
  return userProps.avatar       !== authProps.avatar      ||
         userProps.displayName  !== authProps.displayName ||
         userProps.email        !== authProps.email;
}
