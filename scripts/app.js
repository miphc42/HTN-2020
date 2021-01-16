var apiKey = '45828062';
var sessionId = '2_MX40NTgyODA2Mn5-MTYxMDgyMjM3ODk4Mn5KRDJOWm5NeWpJc2pjbkRneE1kRU1zVXZ-UH4';
var token = 'T1==cGFydG5lcl9pZD00NTgyODA2MiZzaWc9MGU2N2ZmYjFjYzUyZWU1YWMzYWMxZGEyZWM4Y2E4ODYwZmQ4OTg3OTpzZXNzaW9uX2lkPTJfTVg0ME5UZ3lPREEyTW41LU1UWXhNRGd5TWpNM09EazRNbjVLUkRKT1dtNU5lV3BKYzJwamJrUm5lRTFrUlUxelZYWi1VSDQmY3JlYXRlX3RpbWU9MTYxMDgyMzIwMyZub25jZT0wLjA1OTY2ODI2NjM4ODA3NTIxJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2MTA5MDk2MDM=';

// Handling all of our errors here by alerting them
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