import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { data, portfolioSliderProps } from "../sliderProps";
import Modalbox from "./Modalbox";

export default function Portfolio() {
	const [modal, setModal] = useState(false);
	const [modalValue, setModalValue] = useState(0);

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
						{data.map((item) => {
							return (
								<SwiperSlide
									key={item.id}
									className="item modal_item"
									onClick={() => {
										setModal(true);
										setModalValue(item.id);
									}}
									data-index={item.id}
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
}
