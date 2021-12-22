import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Testimonials from "../src/components/Testimonials";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Portfolio from "../src/components/Portfolio";
import Layout from "../src/layouts/Layout";

export default function Index({ botPoison }) {
	return (
		<Layout>
			<Home />
			<About />
			<Portfolio />
			<Testimonials />
			{/* <News /> */}
			<Contact botPoison={botPoison} />
		</Layout>
	);
}

export async function getStaticProps() {
	// Using the variables below in the browser will return `undefined`. Next.js doesn't
	// expose environment variables unless they start with `NEXT_PUBLIC_`
	// console.log("[Node.js only] BOT_POISON:", process.env.BOT_POISON);
	// console.log("[Node.js only] LOCAL_BOT_POISON:", process.env.LOCAL_BOT_POISON);

	return { props: { botPoison: process.env.LOCAL_BOT_POISON } };
}
