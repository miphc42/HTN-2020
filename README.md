# MapChat

https://devpost.com/software/mapchat-1d47zm?ref_content=user-portfolio&ref_feature=in_progress

# Inspiration
After a year of the global pandemic, all of us are tired. We can’t go out and meet our friends, we can’t travel and sometimes Zoom is just not a substitute for real life connection. We wanted to create an application that connected users, got them into a video call to help them explore and go places together. This technology also allows people with limited mobility to freely engage with others in a close to real world experience. We wanted to simulate a fun real world experience as closely as possible while social distancing!

# What it does
Quarantine and social distancing has made it near impossible for us to hang out with our friends in the real world. So, we made the next best thing. You can simulate the day to day social interaction from pre-COVID with your friends in Google street view and video call whether it be you and your friends just around the block or in Egypt staring at the pyramids. The possibilities are endless!

# How I built it
We built our technology using the Google Maps API with the Google Geolocation API along with the realtime database provided by Firebase in order to efficiently track the user’s movements and to sync users together seamlessly. The powerful tools within the Google Cloud API allowed us to integrate the video call with the map. Vonage API was used to connect and stream video calls with other users and we did this by embedding the video into a Google Maps Infoview. The Vonage API was surprisingly easy to use and helped us connect all the users in a video call.

# Challenges I ran into
We ran into challenges when dealing with some of the APIs we’ve never worked with before. Vonage API was new to us and it was challenging to fully grasp it’s usage. Additionally, there were many errors that we faced with the Google Maps API regarding the custom marks and the infoview that we used to display the video via Vonage. 

# Accomplishments that I'm proud of
We were new to the Vonage API and had never worked with the Google Maps API for web. We are happy that we got it working in a short time frame with minimal issues. Firestore’s ease of use meant that we could also set up the location tracking of the second user in a short time frame.

# What I learned
We learned to proficiently utilize new technologies and APIs for video calling and map tracking using Vonage API and Google Maps API. Additionally, we learned to efficiently sync data across users with the real time database.

# What's next for MapChat
Since this is a hackathon, our focus was to get a working prototype instead of perfecting features so there are lots of things for us to go over and edit. Adding multi-user support and grouping users into rooms are our top priorities.
