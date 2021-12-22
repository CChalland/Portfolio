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
										“ If Cole has seen further than others, it is by standing upon the shoulders of giants. He
										can calculate the motion of heavenly bodies, but not the madness of people. ”
									</p>
									<h3 className="title">Isaac Newton Sr.</h3>
									<h3 className="subtitle">Mathematician</h3>
								</div>
							</SwiperSlide>
							<SwiperSlide className="item" key="2">
								<div className="title_holder">
									<p className="desc">
										{`“ If by chance I have omitted anything more or less proper or necessary, I beg forgiveness, since there is no one who is without fault and circumspect in all matters. ”`}
									</p>
									<h3 className="title">Leonardo Fibonacci</h3>
									<h3 className="subtitle">Mathematician</h3>
								</div>
							</SwiperSlide>
							<SwiperSlide className="item" key="3">
								<div className="title_holder">
									<p className="desc">
										“ In the twenty-first century, his vision of robots will take the place which slave labor
										occupied in ancient civilization. ”
									</p>
									<h3 className="title">Nikola Tesla</h3>
									<h3 className="subtitle">Inventor</h3>
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
