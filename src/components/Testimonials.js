import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsSliderProps } from "../sliderProps";

export default function Testimonials() {
	return (
		<section id="testimonials">
			<div className="container">
				<div className="roww">
					{/* Main Title */}
					<div className="resumo_fn_main_title">
						<h3 className="subtitle">Testimonials</h3>
					</div>
					{/* /Main Title */}
					{/* Testimonials */}
					<div className="resumo_fn_testimonials">
						<Swiper {...testimonialsSliderProps} className="owl-carousel">
							<SwiperSlide className="item" key="1">
								<div className="title_holder">
									<p className="desc">
										“ We've been trying to put together a functional CRM since I began my academy in March of
										2014. I am happy to say we finally hired Cole, and he worked closely with us throughout
										the process, staying on task, on target, and on budget. I also appreciate his quick and
										courteous responses. I highly recommend him! ”
									</p>
									<h3 className="title">Jay Wengrow</h3>
									<h3 className="subtitle">CEO of Actualize</h3>
								</div>
							</SwiperSlide>
							<SwiperSlide className="item" key="2">
								<div className="title_holder">
									<p className="desc">
										{`“ We thank Cole for the wonderful job in helping us develop our program. He was professional, excellent and hard working. Thanks to him, we were able to achieve our goal on time. ”`}
									</p>
									<h3 className="title">Faisal Abdullah</h3>
									<h3 className="subtitle">Sr. Director of Academy and Cybersecurity Consultant</h3>
								</div>
							</SwiperSlide>
							<SwiperSlide className="item" key="3">
								<div className="title_holder">
									<p className="desc">
										“ Under tight deadlines and with high expectations, Cole was a pleasure to partner with,
										on a high profile campaign website. Professional, conscientious and thoroughly competent -
										I wouldn't hesitate in recommending him to other agencies. ”
									</p>
									<h3 className="title">Ramandeep Singh</h3>
									<h3 className="subtitle">Senior Security Engineer and Team Lead</h3>
								</div>
							</SwiperSlide>
						</Swiper>
						<br />
						<div className="my__nav">
							<a href="#" className="prev">
								<span />
							</a>
							<a href="#" className="next">
								<span />
							</a>
						</div>
					</div>
					{/* /Testimonials */}
				</div>
			</div>
		</section>
	);
}
