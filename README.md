# Happy Birthday! #

This A-frame scene is a fun way to wish someone Happy Birthday.

To customise:
Near the top of the HTML, there are some consts that can be customised:
Customise the 'Happy Birthday!' text, perhaps with the person's name.
Set the correct age of the person with the birthday.
Replace the placeholder photo URLs with your own photos, e.g. of the birthday person.

To start:
npm start

To view in a VR device or phone:
You will need to install a service such as ngrok (free from https://ngrok.com/).
With ngrok, you'll need an auth token, which you can get by signing up for free.
Once you have your auth token, run the command ngrok authtoken <YOUR_AUTHTOKEN>.
Then start the secure ngrok tunnel using ngrok http 8080.
You will now be given a URL that you can visit in your VR device or phone.

The scene:
500 balloons of different colours are randomly placed in the scene, with randomised and hopefully balloon-like movement.
The cake holds the appropriate number of candles for the person's age.
The photo circle features one photo for every year.

Have fun:
Gaze at a balloon to increase its size - be careful not to blow up the balloon too much, or it might pop!
Gaze at a candle flame to try to blow it out - you'll see it flicker but you won't always succeed in blowing it out - you need some birthday luck! Keep trying!

Note:
This code was written a few years ago and I've noticed that local files no longer seem to work as images/textures.
Any suggestions about this (or anything else) gratefully received.