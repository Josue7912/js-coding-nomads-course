Now you will be making a project that should bring together almost all of what you have learnt so far.

The plan is to make a single page application that:

- Tells you where you are based on your IP address, displaying your country, region, city, latitude and longitude and time zone.
- Tells you the time at your location.
- Displays the flag of the country you are in, the country code, the population, the area, the language and the regional bloc
- Tells you the time on sunrise and sunset at your location, the day length and the solar noon time.
- Modifies the text color and background color and general stylings of the site according to whether its daytime, around sunrise or sunset, or night time.
- Tells you at what time the next ISS flyover is and how many people are currently in space.


Publish it on GitHub Pages when you have your structure and a couple of API calls made, and then iterate on it to build it out further.

Use try catch blocks or at least handle errors appropriately. There are many requests happening here so it is inevitable that at some point, you will run into an error, ensure that the output doesn't break if one of the requests fails.

All this can be done with free and no authentication APIs!

- <a href="http://restcountries.eu/" target="_blank">Country Data</a>
- <a href="http://open-notify.org/" target="_blank">General Space Data</a>
- <a href="https://freegeoip.io/" target="_blank">Geolocation of IP addresses</a>
- <a href="http://worldtimeapi.org/" target="_blank">World Time</a>