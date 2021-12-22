import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSliderProps } from "../sliderProps";
import Modalbox from "./Modalbox";

const data = [
	{
		name: "Blue Lemon",
		desc: [
			{
				p: "Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in.",
			},
		],
		github: "#",
		link: "#",
		img: "img/portfolio/1.jpg",
		tag: "design, vector",
	},
	{
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
		name: "Notes",
		desc: [{ p: "This project mimicking the Mac Notes app using ReactJS as my front-end." }],
		github: "https://github.com/CChalland/Notes-app-ReactJS",
		link: "https://cchalland-notes-react-app.herokuapp.com",
		img: "img/portfolio/notes-example.jpg",
		tag: "ReatJS",
	},
];

const Portfolio = () => {
	const [modal, setModal] = useState(false);
	const [modalValue, setModalValue] = useState(null);
	return (
		<section id="portfolio">
			{modal && <Modalbox close={setModal} value={modalValue} />}
			<div className="container">
				<div className="roww">
					{/* Main Title */}
					<div className="resumo_fn_main_title">
						<div className="my__nav">
							<a href="#" className="prev">
								<span />
							</a>
							<a href="#" className="next">
								<span />
							</a>
						</div>
						<h3 className="subtitle">Portfolio</h3>
						<h3 className="name">Featured Projects</h3>
					</div>
					{/* /Main Title */}
				</div>
			</div>
			<div className="container noright">
				<div className="roww">
					<Swiper {...portfolioSliderProps} className="owl-carousel modal_items" data-from="portfolio">
						{data.map((item, key) => {
							return (
								<SwiperSlide
									key={key}
									className="item modal_item"
									onClick={() => {
										setModal(true);
										setModalValue(key);
									}}
									data-index={key}
								>
									<div className="img_holder">
										<img src="img/thumb/square.jpg" alt="image" />
										<div className="abs_img" data-bg-img={item.img} />
									</div>
									<div className="title_holder">
										<p>{item.tag}</p>
										<h3>
											<a href="#">{item.name}</a>
										</h3>
									</div>
									<div className="fn__hidden">
										<p className="fn__cat">{item.tag}</p>
										<h3 className="fn__title">{item.name}</h3>
										<div className="img_holder">
											<img src="img/thumb/square.jpg" alt="image" />
											<div className="abs_img" data-bg-img={item.img} />
										</div>
										<p className="fn__desc">{item.desc[0].p}</p>
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
