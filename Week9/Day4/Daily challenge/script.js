/*
In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

    1. Create a class named Video. The class should be constructed with the following parameters:
        * title (a string)
        * uploader (a string, the person who uploaded it)
        * time (a number, the duration of the video - in seconds)
    2. Create a method called watch() which displays a string as follows:
    “uploader parameter watched all time parameter of title parameter!”
    3. Instantiate a new Video instance and call the watch() method.
    4. Instantiate a second Video instance with different values.
    5. Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
    Think of the best data structure to save this information within the array.
    6. Bonus: Loop through the array to instantiate those instances.
*/
class Video {
	constructor(title, uploader, time) {
		this.title = title;
		this.uploader = uploader;
		this.time = time;
	}
	watch() {
		console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
	}
}

let avatar = new Video('Avatar', 'loveMovies4', 9720);
avatar.watch();

let theOffice = new Video('The Office', 'mikell', 1680);
theOffice.watch();

let videosArr = [
	new Video('Friends', 'david23', 1200),
	new Video('Rick and Morty', 'sandyH5', 1320),
	new Video('The Blacklist', 'amandaW', 2400),
	new Video('Suits', 'danny197', 2520),
	new Video('Breaking Bad', 'likeArnold', 2880),
];
console.log(videosArr);

let videosArrLoop = [
	['Friends', 'david23', 1200],
	['Rick and Morty', 'sandyH5', 1320],
	['The Blacklist', 'amandaW', 2400],
	['Suits', 'danny197', 2520],
	['Breaking Bad', 'likeArnold', 2880],
].map(([title, uploader, time]) => new Video(title, uploader, time));

console.log(videosArrLoop);

videosArr.map((vid) => vid.watch());
