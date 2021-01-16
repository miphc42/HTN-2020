var map1, map2

const fenway = { lat: 42.345573, lng: -71.098326 };
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
    title: "Marker #2",
    position: map2.getCenter()
  });
  if(user!=null){
  
  }
  var user = localStorage.getItem('user')

  if(user==null){
    marker = new google.maps.Marker({
      map: street,
      title: "Marker #2",
      position: map2.getCenter(),
      pixelOffset: new google.maps.Size(0, -90)
    });
  } else {
    var user = localStorage.getItem('user').split(",");
    marker = new google.maps.Marker({
      map: street,
      icon: user[2],
      title: "Marker #2",
      position: map2.getCenter(),
      pixelOffset: new google.maps.Size(0, -90)
    });

  }
  // // console.log(user);
  // marker = new google.maps.Marker({
  //   map: street,
  //   icon: user[2],
  //   title: "Marker #2",
  //   position: map2.getCenter(),
  //   pixelOffset: new google.maps.Size(0, -90)
  // });
  var contentString = 
  '<div id="callclick">'+
    '<div id="videos">'+
      '<div id="subscriber"></div>'+
      '<div id="publisher"></div>'+
    '</div>'+
  '</div>';
  const infowindow_map = new google.maps.InfoWindow({
    content: contentString,
    pixelOffset: new google.maps.Size(0, -20)
  });

  // var homeControlDiv = document.createElement('div');
  // var homeControl = new HomeControl(homeControlDiv, map);
  
  // homeControlDiv.index = 1;
  // map2.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);

  marker.addListener("click", () => {
    infowindow_map.open(street, marker);
  });

  document.getElementById('animate').onclick = function () {
    console.log("AAA")
    marker.setPosition(fenway2);
  }

  document.getElementById('callclick').onclick = function call() {

    var apiKey = '45828062';
    var sessionId = '2_MX40NTgyODA2Mn5-MTYxMDgyMjM3ODk4Mn5KRDJOWm5NeWpJc2pjbkRneE1kRU1zVXZ-UH4';
    var token = 'T1==cGFydG5lcl9pZD00NTgyODA2MiZzaWc9MGU2N2ZmYjFjYzUyZWU1YWMzYWMxZGEyZWM4Y2E4ODYwZmQ4OTg3OTpzZXNzaW9uX2lkPTJfTVg0ME5UZ3lPREEyTW41LU1UWXhNRGd5TWpNM09EazRNbjVLUkRKT1dtNU5lV3BKYzJwamJrUm5lRTFrUlUxelZYWi1VSDQmY3JlYXRlX3RpbWU9MTYxMDgyMzIwMyZub25jZT0wLjA1OTY2ODI2NjM4ODA3NTIxJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2MTA5MDk2MDM=';

    var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream

  // Create a publisher
    var publisher = OT.initPublisher('publisher', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);

    // Connect to the session
    session.connect(token, function(error) {
      // If the connection is successful, publish to the session
      if (error) {
        handleError(error);
      } else {
        session.publish(publisher, handleError);
      }
    });
    
    session.on('streamCreated', function(event) {
      session.subscribe(event.stream, 'subscriber', {
        insertMode: 'append',
        width: '100%',
        height: '100%'
      }, handleError);
    });
  }
  // POP UP WINDOW FOR ONCLICK ON MARKER
  // const infowindow_streetview = new google.maps.InfoWindow({
  //    content: contentString,
  //    pixelOffset: new google.maps.Size(0, -48)
  // });
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


