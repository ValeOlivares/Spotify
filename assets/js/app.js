function spotify() {
	this.signInButton = document.getElementById('signin');
	this.signOutButton= document.getElementById('logout');
	this.signInButton.addEventListener('click', this.signIn.bind(this));
	this.signOutButton.addEventListener('click', this.signOut.bind(this));
	this.initFirebase();
};

spotify.prototype.signIn = function() {
	var provider = new firebase.auth.GoogleAuthProvider();
	this.auth.signInWithPopup(provider);
};

spotify.prototype.signOut = function() {
	this.auth.signOut();
};

spotify.prototype.initFirebase = function() {
  // Shortcuts to Firebase SDK features.
  this.auth = firebase.auth();
  this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};

spotify.prototype.onAuthStateChanged = function(user) {
  if (user) { // User is signed in!
    $('#log').hide();
    $('#mainPage').show();
   } else {
   	$('#mainPage').hide();
   }
};

window.onload = function() {
	mySpotify = new spotify();
};



