import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
SwiperCore.use([Pagination, Navigation, Autoplay, EffectFade]);

export const data = [
	{
		id: 1,
		name: "Notes",
		desc: [{ p: "This project mimicking the Mac Notes app using ReactJS as my front-end." }],
		github: "https://github.com/CChalland/Notes-app-ReactJS",
		link: "https://cchalland-notes-react-app.herokuapp.com",
		img: "img/portfolio/notes-example.jpg",
		tag: "ReatJS",
	},
	{
		id: 2,
		name: "Student Portal",
		desc: [
			{
				p: "This project was built with my group from Stranger Strings Actualize class using Ruby on Rails for the back-end and VueJS with axios for the front-end, mimicking a education student portal that can be used for schools.",
			},
		],
		github: "https://github.com/CChalland/Student-Portal",
		link: "https://cchalland-student-portal.herokuapp.com/#/show",
		img: "img/portfolio/student-portal.png",
		tag: "Ruby on Rails",
	},
	{
		id: 3,
		name: "Ultrasonic Guided RC Car",
		desc: [
			{
				p: "This project uses machine code on a micro-chip processor for ultrasonic sensors to communicate with the remote control car's servo motors that supply the car's drive-train power. By determining the desired wavelength of the ultrasonic sensor, representing the distance until the RC car has to make an action, I can customize the precision of the ultrasonic guidance of the RC car. Please check back later, updating files.",
			},
		],
		github: "https://github.com/CChalland/Ultrasound-RC-Car",
		link: "",
		img: "img/portfolio/ultrasonic-sensors-rc-car.jpg",
		tag: "C",
	},
	{
		id: 4,
		name: "Uchiha",
		desc: [
			{
				p: "Uchiha is a app that analyzes human faces. Uchiha uses the computer’s webcam to track human faces, determining which emotion is expressing. Uchiha then overlays various icons over the human faces to indicate the emotion each face is expressing.",
			},
		],
		github: "https://github.com/CChalland/Uchiha",
		link: "",
		img: "img/portfolio/emotions-Uchiha.jpeg",
		tag: "VueJS",
	},
	{
		id: 5,
		name: "AI Chat",
		desc: [
			{
				p: "Using machine learning neural networks to keep communications and socailize with people.",
			},
		],
		github: "#",
		link: "#",
		img: "img/portfolio/ai_chat.jpg",
		tag: "AI, Machine Learning",
	},
	// {
	// 	id: 6,
	// 	name: "Template",
	// 	desc: [
	// 		{
	// 			p: "Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in.",
	// 		},
	// 	],
	// 	github: "#",
	// 	link: "#",
	// 	img: "img/portfolio/temp.jpg",
	// 	tag: "design, vector",
	// },
].reverse();

export const portfolioSliderProps = {
	slidesPerView: 1,
	// loop: true,    // causes the images to not be on the right cards
	spaceBetween: 30,
	speed: 1000,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".next",
		prevEl: ".prev",
	},
	breakpoints: {
		480: {
			slidesPerView: 2,
		},
		1400: {
			slidesPerView: 3,
		},
	},
};
export const testimonialsSliderProps = {
	slidesPerView: 1,
	loop: true,
	spaceBetween: 30,
	speed: 1000,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".next",
		prevEl: ".prev",
	},
};
