const fs = require('fs');

const BACKLIGHT_LOCATION = '/sys/class/backlight/intel_backlight';

// Get brightness
const brightnessPromise = new Promise((resolve, reject) => {
	fs.readFile(`${BACKLIGHT_LOCATION}/brightness`, (error, data) => {
		if (error) {
			return reject(error);
		}

		resolve(data.toString());
	});
});

// Get max brightness
const maxBrightnessPromise = new Promise((resolve, reject) => {
	fs.readFile(`${BACKLIGHT_LOCATION}/max_brightness`, (error, data) => {
		if (error) {
			return reject(error);
		}

		resolve(data.toString());
	});
});

brightnessPromise.then(brightness => {
	maxBrightnessPromise.then(maxBrightness => {
		brightness = parseInt(brightness);
		maxBrightness = parseInt(maxBrightness);

		console.log(brightness / maxBrightness * 100 + '%');
	});
});
