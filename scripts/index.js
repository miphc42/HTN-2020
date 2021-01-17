var tof = false;
window.onload = function(){
  getLocation();
}
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  localStorage.setItem('mylocation', [position.coords.latitude, position.coords.longitude]);
  console.log("Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude);
}
var out = localStorage.getItem('out?');
window.global_var = {
    name: "a",
    email: "a",
};
function bool_check() {
    tof = true;
    console.log("AAAA");
}
function onSuccess(googleUser) {
 
  console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  var profile = googleUser.getBasicProfile();
  
  // window.global_var.name = googleUser.getBasicProfile().getName();
  // window.global_var.email = googleUser.getBasicProfile().getEmail();
  var user = [profile.getName(), profile.getEmail(), profile.getImageUrl()];
  localStorage.setItem('user', user);
  localStorage.setItem('out?', false);
  console.log(global_var.name);
  if (tof){
      window.location.href = 'map.html';
  }
}

function onFailure(error) {
  console.log(error);
}
function renderButton() {
  gapi.signin2.render('my-signin2', {
    'scope': 'profile email',
    'width': 240,
    'height': 50,
    'longtitle': true,
    'theme': 'dark',
    'onsuccess': onSuccess,
    'onfailure': onFailure
  });
}