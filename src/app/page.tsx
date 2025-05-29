"use client"

import Navigation from "./components/navigation";
import { useEffect, useState } from "react";
import Hero from "./components/hero";
import Services from "./components/services";
import Team from "./components/team";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "./components/footer";


export default function Home() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setIsScrolled(scrollPosition > 50);

			// Show sticky appointment button after scrolling past hero section
			// Removed sticky appointment functionality
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="min-h-screen bg-background">
			<Navigation isScrolled={isScrolled} />
			<main>
				<Hero />
				<Services />
				<Team />
				<Testimonials />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
