var map1, map2
var loc = localStorage.getItem('mylocation').split(",");
console.log(loc[0].toString().replace("(", "").replace(")", ""));
latitude = parseFloat(loc[0]);
longitude = parseFloat(loc[1].toString().replace(" ", ""));
console.log(latitude, longitude);
const fenway = { lat: 43.474350, lng: -80.538026 };
const fenway2 = { lat: 42.345958, lng: -71.098530 };
var marker;
function initialize() {
  
  var mapElement2 = document.getElementById('pano');
  var streetViewOptions = {
    visible: false, //set to false so streetview is not triggered on the initial map load
    fullscreenControl: false,
    enableCloseButton: true,
    addressControl: false,
    addressControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    }
  };
  var street = new google.maps.StreetViewPanorama(mapElement2, streetViewOptions);
  var mapOptions2 = {
    zoom: 16,
    center: new google.maps.LatLng(fenway),
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    },
    streetView: street
  };
  map2 = new google.maps.Map(mapElement2, mapOptions2);
  var markerMap2 = new google.maps.Marker({
    map: map2,
    title: "My Location",
    // animation:google.maps.Animation.BOUNCE,
    position: map2.getCenter()
  });
  if(user!=null){
  
  }
  var user = localStorage.getItem('user')

  if(user==null){
    marker = new google.maps.Marker({
      map: street,
      title: "User",
      position: map2.getCenter(),
      pixelOffset: new google.maps.Size(0, -90)
    });
  } else {
    var user = localStorage.getItem('user').split(",");
    console.log(user[2]);
    marker = new google.maps.Marker({
      map: street,
      icon: {
        url: "https://lh3.googleusercontent.com/a-/AOh14Gh1tY_2muCRjY8UtyrxHhQTIsCnF_FZbl43co-P2w=s96-c",
  
      },
      title: user[0],
      position: map2.getCenter(),
      pixelOffset: new google.maps.Size(0, -90)
    });

  }

  // var myCity = new google.maps.Circle({
  //   center:map2.getCenter(),
  //   map: street,
  //   radius:20000,
  //   strokeColor:"#0000FF",
  //   strokeOpacity:0.8,
  //   strokeWeight:2,
  //   fillColor:"#0000FF",
  //   fillOpacity:0.4,
  //   icon: user[2]
  // });
  var firebaseConfig = {
    apiKey: "AIzaSyDh_V6eZVCkL6fpakRdUwQLVB-THBQAl_0",
    authDomain: "nocovid-301815.firebaseapp.com",
    databaseURL: "https://nocovid-301815-default-rtdb.firebaseio.com",
    projectId: "nocovid-301815",
    storageBucket: "nocovid-301815.appspot.com",
    messagingSenderId: "722298456324",
    appId: "1:722298456324:web:a0a259a10e817a8c772851",
    measurementId: "G-V6Q03XMF33"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
    // Set the configuration for your app
  // TODO: Replace with your project's config object
  // var config = {
  //   apiKey: "apiKey",
  //   authDomain: "projectId.firebaseapp.com",
  //   databaseURL: "https://databaseName.firebaseio.com",
  //   storageBucket: "bucket.appspot.com"
  // };
  // firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database().ref();


  // document.getElementById('ani').onclick = function () {
  //   firebase.database().ref().child('Ashish').set('AAA')
  //   firebase.database().ref().child('Philip').set('AAA')
  // }

  var username = localStorage.getItem('user').split(",")[0]
  var current,marker_pos;
  if(username[0] == 'A'){
    current = 'Ashish';
    marker_pos = 'Philip';
  } else {
    current = 'Philip';
    marker_pos = 'Ashish'
  }

  // GETTING THE LOCAtION OF THE OTHER PERSON!!!
  var REFERENCEEE = firebase.database().ref().child(marker_pos);
  REFERENCEEE.on('value', (snapshot) => {
      console.log(snapshot.val())
      console.log("OOGGAA")
      var shot = snapshot.val().toString().split(",");
      console.log(shot)
      latitude = parseFloat(shot[0].toString().replace("(", "").replace(")", ""));
      longitude = parseFloat(shot[1].toString().replace("(", "").replace(")", "").replace(" ", ""));
      console.log(latitude);
      ltlng = {lat: latitude, lng: longitude}
      marker.setPosition(ltlng)

    });



  firebase.database().ref().child(current).once('value').then((snapshot) =>{
       x = snapshot.val();
       console.log("AAAAAAAAAAAAAAAAAAAAAA", snapshot.val())
  })
  //setting database as the position on movement event
  street.addListener("position_changed", () => {
    console.log("AABA")
    console.log(street.getPosition().toString())
    var x;

    // console.log(x);
    firebase.database().ref().child(current).set(street.getPosition().toString())
    // firebase.database().ref().child('Philip').set('AAA')
    // positionCell.firstChild.nodeValue = panorama.getPosition() + "";
  });
  // // console.log(user);
  // marker = new google.maps.Marker({
  //   map: street,
  //   icon: user[2],
  //   title: "Marker #2",
  //   position: map2.getCenter(),
  //   pixelOffset: new google.maps.Size(0, -90)
  // });
  var contentString = 
  '<div id="videos" style="width: 500px; height: 250px;">'+
    '<div id="subscriber"></div>'+
    '<div id="publisher"></div>'+
  '</div>';
  const infowindow_map = new google.maps.InfoWindow({
    content: contentString,
    pixelOffset: new google.maps.Size(0, -20)
  });

  // var homeControlDiv = document.createElement('div');
  // var homeControl = new HomeControl(homeControlDiv, map);
  
  // homeControlDiv.index = 1;
  // map2.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);
  var trueorfalse = true;
  var i = 0;
  marker.addListener("click", () => {
    infowindow_map.open(street, marker);
    if(trueorfalse){
    
    var apiKey = '45828062';
    var sessionId = '2_MX40NTgyODA2Mn5-MTYxMDgyMjM3ODk4Mn5KRDJOWm5NeWpJc2pjbkRneE1kRU1zVXZ-UH4';
    var token = 'T1==cGFydG5lcl9pZD00NTgyODA2MiZzaWc9MGU2N2ZmYjFjYzUyZWU1YWMzYWMxZGEyZWM4Y2E4ODYwZmQ4OTg3OTpzZXNzaW9uX2lkPTJfTVg0ME5UZ3lPREEyTW41LU1UWXhNRGd5TWpNM09EazRNbjVLUkRKT1dtNU5lV3BKYzJwamJrUm5lRTFrUlUxelZYWi1VSDQmY3JlYXRlX3RpbWU9MTYxMDgyMzIwMyZub25jZT0wLjA1OTY2ODI2NjM4ODA3NTIxJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2MTA5MDk2MDM=';

    function handleError(error) {
      if (error) {
        alert(error.message);
      }
    }
    
    // (optional) add server code here
    initializeSession();
    
    function initializeSession() {
      var session = OT.initSession(apiKey, sessionId);
    
      // Subscribe to a newly created stream
      session.on('streamCreated', function(event) {
        session.subscribe(event.stream, 'subscriber', {
          insertMode: 'append',
          width: '100%',
          height: '100%'
        }, handleError);
      });
    
      // Create a publisher
      var publisher = OT.initPublisher('publisher', {
        insertMode: 'append',
        width: '100%',
        height: '100%'
      }, handleError);
    
      // Connect to the session
      session.connect(token, function(error) {
        // If the connection is successful, initialize a publisher and publish to the session
        if (error) {
          handleError(error);
        } else {
          session.publish(publisher, handleError);
        }
      });
    }
    
    i+=1;
    if(i==2){
    trueorfalse = false;
    }
  }
  });

  // document.getElementById('ani').onclick = function () {
  //   marker.setPosition(fenway2);
  // }
  // POP UP WINDOW FOR ONCLICK ON MARKER
  // const infowindow_streetview = new google.maps.InfoWindow({
  //    content: contentString,
  //    pixelOffset: new google.maps.Size(0, -48)
  // });
}

function handleError(error) {
  if (error) {
    alert(error.message);
  }
}


var startPos = fenway;
var speed = 50; // km/h

var delay = 100;
// If you set the delay below 1000ms and you go to another tab,
// the setTimeout function will wait to be the active tab again
// before running the code.
// See documentation :
// https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout#Inactive_tabs

function animateMarker(marker, coords, km_h)
{
    var target = 0;
    var km_h = km_h || 50;
    coords.push([startPos[0], startPos[1]]);
    
    function goToPoint()
    {
        var lat = marker.position.lat();
        var lng = marker.position.lng();
        var step = (km_h * 1000 * delay) / 3600000; // in meters
        console.log(lat, lng)
        var dest = new google.maps.LatLng(
        coords[target][0], coords[target][1]);
        
        var distance =
        google.maps.geometry.spherical.computeDistanceBetween(
        dest, marker.position); // in meters
        console.log(distance);
        var numStep = distance / step;
        var i = 0;
        var deltaLat = (coords[target][0] - lat) / numStep;
        var deltaLng = (coords[target][1] - lng) / numStep;
        
        function moveMarker()
        {
            lat += deltaLat;
            lng += deltaLng;
            i += step;
            
            if (i < distance)
            {
                marker.setPosition(new google.maps.LatLng(lat, lng));
                setTimeout(moveMarker, delay);
            }
            else
            {   marker.setPosition(dest);
                target++;
                if (target == coords.length){ target = 0; }
                
                setTimeout(goToPoint, delay);
            }
        }
        moveMarker();
    }
    goToPoint();
}

function getProfile() {
  var user = localStorage.getItem('user').split(",");

  console.log(user);

  document.getElementById('profilepic').src = user[2];
  document.getElementById('name').textContent = user[0];
  document.getElementById('email').textContent = user[1];
}