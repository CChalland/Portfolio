import { useEffect, useState } from "react";
import { dataImage } from "../utilits";

const Modalbox = ({ close, value }) => {
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

	const [index, setIndex] = useState(value);
	useEffect(() => {
		dataImage();
	}, [index]);

	return (
		<div className="resumo_fn_modalbox opened">
			<a
				className="extra_closer"
				href="#"
				onClick={(e) => {
					e.preventDefault();
					close(false);
				}}
			/>
			<div className="box_inner">
				<a
					className="closer"
					href="#"
					onClick={(e) => {
						e.preventDefault();
						close(false);
					}}
				>
					<span />
				</a>
				<div className="modal_content">
					<div className="modal_in">
						{data.map(
							(d, i) =>
								i + 1 == index && (
									<div key={i}>
										<p className="fn__cat">{d.tag}</p>
										<h3 className="fn__title">{d.name}</h3>
										<div className="img_holder">
											<img src="/img/thumb/square.jpg" alt="" />
											<div className="abs_img" data-bg-img={d.img} />
										</div>
										{d.desc.map((des, i) => (
											<p key={i} className="fn__desc">
												{des.p}
											</p>
										))}
									</div>
								)
						)}
					</div>

					<div className="fn__nav" data-from="portfolio" data-index="1">
						<a
							href="#"
							className="prev"
							onClick={(e) => {
								e.preventDefault();
								setIndex(index == 1 ? 5 : index - 1);
							}}
						>
							<span className="text">Prev</span>
							<span className="arrow_wrapper">
								<span className="arrow"></span>
							</span>
						</a>
						<a
							href="#"
							className="next"
							onClick={(e) => {
								e.preventDefault();
								setIndex(index == 5 ? 1 : index + 1);
							}}
						>
							<span className="text">Next</span>
							<span className="arrow_wrapper">
								<span className="arrow"></span>
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modalbox;
