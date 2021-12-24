import { useEffect, useState } from "react";
import { dataImage } from "../utilits";
import { data } from "../sliderProps";

export default function Modalbox({ close, value }) {
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
							(item, key) =>
								item.id == index && (
									<div key={item.id}>
										<p className="fn__cat">{item.tag}</p>
										<h3 className="fn__title">{item.name}</h3>
										<div className="img_holder">
											<img src="/img/thumb/square.jpg" alt="" />
											<div className="abs_img" data-bg-img={item.img} />
										</div>
										{item.desc.map((des, key) => (
											<p key={key} className="fn__desc">
												{des.p}
											</p>
										))}
										<div className="resumo_fn_about_info about_left">
											<table>
												<tbody>
													<tr>
														<th>GitHub</th>
														<th>
															<a href={item.github} target="_blank">
																Link
															</a>
														</th>
													</tr>
													<tr>
														<th>Project</th>
														<th>
															<a href={item.link} target="_blank">
																Link
															</a>
														</th>
													</tr>
												</tbody>
											</table>
										</div>
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
}
