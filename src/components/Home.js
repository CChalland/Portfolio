import Image from "next/image";

export default function Home() {
	return (
		<section id="home">
			<div className="container">
				<div className="roww">
					{/* Main Title */}
					<div className="resumo_fn_main_title">
						<h3 className="subtitle">Introduction</h3>
						<h3 className="title">Software Engingeer</h3>
						<p className="desc">
							{
								"My objective is to secure a position within a company where I can utilize my 9 years of software engineering experience and expertise in Javascript, Python, C++, and Ruby."
							}
						</p>
						<img src="img/signature.png" alt="image" />
					</div>
					{/* /Main Title */}
				</div>
			</div>
		</section>
	);
}
