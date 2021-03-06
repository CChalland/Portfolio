import { useState } from "react";
import Botpoison from "@botpoison/browser";
import axios from "axios";

export default function Contact({ botPoison }) {
	const botpoison = new Botpoison({ publicKey: botPoison });
	const [form, setForm] = useState({ email: "", name: "", phone: "", msg: "" });
	const [active, setActive] = useState(null);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const onChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const { email, name, phone, msg } = form;
	const onSubmit = (e) => {
		e.preventDefault();
		if (email && name && phone && msg) {
			botpoison.challenge().then(({ solution }) => {
				axios
					.post("https://submit-form.com/wYoutZR2", {
						message: msg,
						_botpoison: solution,
						_email: {
							from: email,
							subject: `${name} - ${phone}`,
						},
					})
					.then(function (response) {
						console.log(response);
					})
					.catch(function (response) {
						console.error(response);
					});
			});
			setSuccess(true);
			setTimeout(() => {
				setForm({ email: "", name: "", phone: "", msg: "" });
				setSuccess(false);
			}, 2000);
		} else {
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 2000);
		}
	};

	return (
		<section id="contact">
			<div className="container">
				<div className="roww resumo_fn_contact">
					{/* Main Title */}
					<div className="resumo_fn_main_title">
						<h3 className="subtitle">Contact</h3>
						<h3 className="title">Get In Touch</h3>
						<p className="desc">
							{"My passion is hardware & coding, I'm always knocking on door for opportunities to integrate both my passions together. Being able to show my creativity by using my knowledge on building hardware that is compatible with running and executing dynamic code. I just finished a coding bootcamp at Actualize and is enrolled in their apprenticeship program. During my free time, I'm currently taking an online course on Machine Learning, by Stanford University through Coursera.org, to deepen my understanding of AI. I'm currently looking for a Software Engineer or Web Developer position preferably in company that supplies hardware with a integrable program face. If you have any questions, please fill out the form below and I will reply you shortly."}
						</p>
					</div>
					{/* /Main Title */}
					{/* Contact Form */}
					<form className="contact_form" onSubmit={(e) => onSubmit(e)}>
						<div
							className="success"
							data-success="Your message has been received, we will contact you soon."
							style={{ display: success ? "block" : "none" }}
						>
							<span className="contact_success">
								Your message has been received, we will contact you soon.
							</span>
						</div>
						<div className="empty_notice" style={{ display: error ? "block" : "none" }}>
							<span>Please Fill Required Fields!</span>
						</div>
						{/* */}
						<div className="items_wrap">
							<div className="items">
								<div className="item half">
									<div className={`input_wrapper ${active === "name" || name ? "active" : ""}`}>
										<input
											onFocus={() => setActive("name")}
											onBlur={() => setActive(null)}
											onChange={(e) => onChange(e)}
											value={name}
											name="name"
											id="name"
											type="text"
										/>
										<span className="moving_placeholder">Name *</span>
									</div>
								</div>
								<div className="item half">
									<div className={`input_wrapper ${active === "email" || email ? "active" : ""}`}>
										<input
											onFocus={() => setActive("email")}
											onBlur={() => setActive(null)}
											onChange={(e) => onChange(e)}
											value={email}
											name="email"
											id="email"
											type="email"
										/>
										<span className="moving_placeholder">Email *</span>
									</div>
								</div>
								<div className="item">
									<div className={`input_wrapper ${active === "phone" || phone ? "active" : ""}`}>
										<input
											onFocus={() => setActive("phone")}
											onBlur={() => setActive(null)}
											id="phone"
											onChange={(e) => onChange(e)}
											value={phone}
											name="phone"
											type="text"
										/>
										<span className="moving_placeholder">Phone</span>
									</div>
								</div>
								<div className="item">
									<div className={`input_wrapper ${active === "message" || msg ? "active" : ""}`}>
										<textarea
											onFocus={() => setActive("message")}
											onBlur={() => setActive(null)}
											name="msg"
											onChange={(e) => onChange(e)}
											value={msg}
											id="message"
										/>
										<span className="moving_placeholder">Message</span>
									</div>
								</div>
								<div className="item">
									{/* <a id="send_message" href="#">
                    Send Message
                  </a> */}
									<input className="a" type="submit" id="send_message" value="Send Message" />
								</div>
							</div>
						</div>
					</form>
					{/* /Contact Form */}
					{/* Contact Info */}
					<div className="resumo_fn_contact_info">
						<p>Address</p>
						<h3>Boca Raton, FL, USA</h3>
						<p>
							<a className="fn__link" href="mailto:cchalland@protonmail.com">
								cchalland@protonmail.com
							</a>
						</p>
					</div>
					{/* /Contact Info */}
				</div>
			</div>
		</section>
	);
}
