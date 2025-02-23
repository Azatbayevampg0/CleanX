import React, { Fragment } from 'react'
import Header from '../components/header/Header'
import Home from '../components/home/Home'
import About from '../components/about/About'
import Service from '../components/service/Service'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

export const HomePage = () => {
	return (
		<Fragment>
			<Header />
			<Home />
			<About />
			<Service />
			<Contact />
			<Footer />
		</Fragment>
	)
}

export default HomePage
