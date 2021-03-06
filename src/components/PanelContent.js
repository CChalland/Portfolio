import { useEffect } from "react";

export default function PanelContent() {
	useEffect(() => {
		const Typed = require("typed.js");
		new Typed(".animated_title", {
			strings: [
				"Cole Challand",
				"Software Engingeer",
				"Full-Stack Developer",
				"DevOps",
				"Cybersecurity Consultant",
			],
			loop: true,
			smartBackspace: false,
			typeSpeed: 40,
			startDelay: 700,
			backDelay: 3e3,
		});
	}, []);
	return (
		<div className="right_in">
			<div className="right_top">
				<div className="border1" />
				<div className="border2" />
				<div className="img_holder">
					<img src="img/thumb/square.jpg" alt="image" />
					<div className="abs_img" data-bg-img="img/me.png" />
				</div>
				<div className="title_holder">
					<h5>Hi There! I am</h5>
					<p className="h3">
						<span className="animated_title" />
					</p>
				</div>
			</div>
			<div className="right_bottom">
				<a href="#contact">
					<span className="circle" />
					<span className="text">Currently looking for new position. Hire me</span>
				</a>
			</div>
		</div>
	);
}
