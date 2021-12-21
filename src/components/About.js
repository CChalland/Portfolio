import { useState } from "react";

const About = () => {
	const [toggleList, setToggleList] = useState("tab1");
	const activeList = (value) => (value === toggleList ? "active" : "");
	const birthDay = new Date(1993, 4, 19);
	const today = new Date();
	const age = today.getFullYear() - birthDay.getFullYear();
	const address = "Boca Raton, FL";
	const email = "cchalland@protonmail.com";

	return (
		<section id="about">
			<div className="container">
				<div className="roww">
					{/* Main Title */}
					<div className="resumo_fn_main_title">
						<h3 className="subtitle">About Me</h3>
						<h3 className="title">Biography</h3>
						<p className="desc">
							{`I've been fascinated with technology ever since I was able to remember. 
                I started building computers when I was 12 years old, which lead to my interest in programming. 
                I went to the University of Denver to study computer engineering. Then transfered to the University of Colorado for electrical engineering. 
                While I was school, I realized that programming was in high demand and would rather learn from my peers. 
                I'm a Full-Stack Developer with over 8 years of experience. I'm from Chicago. I like work with new people. 
                New people are new experiences.`}
						</p>
					</div>
					{/* /Main Title */}
					{/* About Information */}
					<div className="resumo_fn_about_info">
						<div className="about_left">
							<table>
								<tbody>
									<tr>
										<th>Name</th>
										<th>Cole Challand</th>
									</tr>
									<tr>
										<th>Birthday</th>
										<th>{"19th May 1993"}</th>
									</tr>
									<tr>
										<th>Age</th>
										<th>{age}</th>
									</tr>
									<tr>
										<th>Address</th>
										<th>{address}</th>
									</tr>
									<tr>
										<th>Email</th>
										<th>
											<a href={`mailto:${email}`}>{email}</a>
										</th>
									</tr>
									<tr>
										<th>LinkedIn</th>
										<th>
											<a href="https://www.linkedin.com/in/cole-challand/">cole-challand</a>
										</th>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="about_right">
							{/* Download CV Button */}
							<div className="resumo_fn_cv_btn">
								<a href="CChalland_Resume.docx" download>
									<span className="icon">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
											version="1.1"
											x="0px"
											y="0px"
											viewBox="0 0 449.306 449.306"
											style={{ enableBackground: "new 0 0 449.306 449.306" }}
											xmlSpace="preserve"
											className="fn__svg replaced-svg"
										>
											<path d="M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449     c0,5.771,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229     c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69     c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449     c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776     c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682     c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045     c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873     c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604     c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z" />
										</svg>

										<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
											version="1.1"
											x="0px"
											y="0px"
											viewBox="0 0 449.306 449.306"
											style={{ enableBackground: "new 0 0 449.306 449.306" }}
											xmlSpace="preserve"
											className="fn__svg arrow replaced-svg"
										>
											<path d="M217.339,252.865c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603l71.053-71.576   c3.462-4.617,2.527-11.166-2.09-14.629c-3.715-2.786-8.824-2.786-12.539,0l-53.29,53.29V21.42   c0-5.771-4.678-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v198.531l-53.29-53.29c-4.617-3.462-11.166-2.527-14.629,2.09   c-2.786,3.715-2.786,8.824,0,12.539L217.339,252.865z" />
										</svg>
									</span>
									<span>Download CV</span>
								</a>
							</div>
							{/* /Download CV Button */}
						</div>
					</div>
					{/* /About Information */}
					{/* Tabs Shortcode */}
					<div className="resumo_fn_tabs">
						{/* Tab: Header */}
						<div className="tab_header">
							<ul>
								<li className={activeList("tab1")}>
									<a href="#" onClick={() => setToggleList("tab1")}>
										Experience
									</a>
								</li>
								<li className={activeList("tab2")}>
									<a href="#" onClick={() => setToggleList("tab2")}>
										Education
									</a>
								</li>
								<li className={activeList("tab3")}>
									<a href="#" onClick={() => setToggleList("tab3")}>
										Skills
									</a>
								</li>
							</ul>
						</div>
						{/* /Tab: Header */}
						{/* Tab: Content */}
						<div className="tab_content">
							{/* #1 tab content */}
							<div id="tab1" className={`tab_item ${activeList("tab1")}`}>
								{/* Boxed List */}
								<div className="resumo_fn_boxed_list">
									<ul>
										<li>
											<div className="item">
												<div className="item_top">
													<h5>BetToken</h5>
													<span>( 2020 — 2021 )</span>
												</div>
												<h3>Software Engineer</h3>
												<p>Created the blockchain with Javascript to store transactions of sport bets. </p>
											</div>
										</li>
										<li>
											<div className="item">
												<div className="item_top">
													<h5>UCAN - Evolve Security</h5>
													<span>( 2018 — 2019 )</span>
												</div>
												<h3>Cybersecurity Consultant </h3>
												<p>
													Executed SQL injection to alter or expose Query vulnerabilities and access databases
													in a test safe environment (this allowed us to develop better security practices to
													protect against threats).{" "}
												</p>
											</div>
										</li>
										<li>
											<div className="item">
												<div className="item_top">
													<h5>Actualize</h5>
													<span>( 2017 — 2018 )</span>
												</div>
												<h3>Full-Stack Developer</h3>
												<p>
													Created a CRM (Customer Relation Manager) using full-stack Ruby on Rails that keeps
													track of conversations with potential customers.{" "}
												</p>
											</div>
										</li>
									</ul>
								</div>
								{/* /Boxed List */}
							</div>
							{/* /#1 tab content */}
							{/* #2 tab content */}
							<div id="tab2" className={`tab_item ${activeList("tab2")}`}>
								{/* Boxed List */}
								<div className="resumo_fn_boxed_list">
									<ul>
										<li>
											<div className="item">
												<div className="item_top">
													<h5>Evolve Security Academy</h5>
													<span>( 2018 )</span>
												</div>
												<h3>Cybersecurity</h3>
												<p>
													After understanding basic knowledge of malware and it's data structure, expanded my
													knowledge on how to detect them and prevention.{" "}
												</p>
											</div>
										</li>
										<li>
											<div className="item">
												<div className="item_top">
													<h5>University of Colorado, Boulder</h5>
													<span>( 2014 — 2016 )</span>
												</div>
												<h3>Electrical Engineering/Computer Science</h3>
												<p>Expanded on my knowledge of C and transitioned into C++ and coding Keyloggers. </p>
											</div>
										</li>
										<li>
											<div className="item">
												<div className="item_top">
													<h5>University of Denver</h5>
													<span>( 2011 — 2012 )</span>
												</div>
												<h3>Computer Engineering/Computer Science</h3>
												<p>
													This is where I started coding heavily, and created an RC car controlled by
													ultrasonic sensors in C.{" "}
												</p>
											</div>
										</li>
									</ul>
								</div>
								{/* /Boxed List */}
							</div>
							{/* /#2 tab content */}
							{/* #3 tab content */}
							<div id="tab3" className={`tab_item ${activeList("tab3")}`}>
								<div className="resumo_fn_boxed_list">
									<ul>
										<li>
											<div className="item">
												<h3>Languages</h3>
												<p>● Python</p>
												<p>● JavaScript</p>
												<p>● ReactJS</p>
												<p>● C++</p>
												<p>● Ruby on Rails</p>
												<p>● VueJS</p>
												<p>● HTML</p>
												<p>● CSS</p>
											</div>
										</li>
										<li>
											<div className="item">
												<h3>Hard Skills</h3>
												<p>● Coding</p>
												<p>● Debugging</p>
												<p>● Programming</p>
												<p>● Object oriented programming</p>
												<p>● CLI</p>
											</div>
										</li>
										<li>
											<div className="item">
												<h3>Soft Skills</h3>
												<p>● Collaboration</p>
												<p>● Positive attitude</p>
												<p>● Good communication skills</p>
												<p>● Problem solving skills</p>
												<p>● Critical thinking</p>
											</div>
										</li>
									</ul>
								</div>
								{/* Description */}
								{/* <div className="resumo_fn_desc">
									<p>
										A freelance creative designer with a love for minimal design, clean typography and
										well-written code, located in San Francisco. Provide high quality and cost effective
										offshore web and software development services. Wide range of web and software development
										services across the world.
									</p>
								</div> */}
							</div>
							{/* /#2 tab content */}
						</div>
						{/* /Tab: Content */}
					</div>
					{/* /Tabs Shortcode */}
				</div>
			</div>
		</section>
	);
};

export default About;
