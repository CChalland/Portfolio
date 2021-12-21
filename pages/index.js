import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Testimonials from "../src/components/Testimonials";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Portfolio from "../src/components/Portfolio";
import Layout from "../src/layouts/Layout";

const Index = () => {
	return (
		<Layout>
			<Home />
			<About />
			<Portfolio />
			<Testimonials />
			{/* <News /> */}
			<Contact />
		</Layout>
	);
};

export default Index;
