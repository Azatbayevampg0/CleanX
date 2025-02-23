import React from 'react'
import calendar from '../../assets/images/calendar.png'
import card from '../../assets/images/card.png'
import cleanApp from '../../assets/images/houseCleaned.png'
import aboutStyle from './About.module.css'
export const About = () => {
	return (
		<section className={aboutStyle['about']}>
			<div className='container'>
				<h1 className={aboutStyle['about__header']}>About Us</h1>
				<p className={aboutStyle['about__paragraph']}>
					Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque
					nisi felis non ultrices massa id egestas quam velit pretium nu.
				</p>
				<div className={aboutStyle['about__cards']}>
					<div className={aboutStyle['about__card']}>
						<img src={calendar} alt='calendar' />
						<h3 className={aboutStyle['about__card-head']}>
							1. Schedule online
						</h3>
						<p className={aboutStyle['about__card-paragraph']}>
							Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
							sed n.
						</p>
					</div>
					<div className={aboutStyle['about__card']}>
						<img src={card} alt='card' />
						<h3 className={aboutStyle['about__card-head']}>
							2. Pay online easily
						</h3>
						<p className={aboutStyle['about__card-paragraph']}>
							Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet
							at nunc.
						</p>
					</div>
					<div className={aboutStyle['about__card']}>
						<img src={cleanApp} alt='claan' />
						<h3 className={aboutStyle['about__card-head']}>
							3. Get your house cleaned
						</h3>
						<p className={aboutStyle['about__card-paragraph']}>
							Nunc maecenas sollicitudin metus tellus mattis sed porttitor
							cursus eleifend.
						</p>
					</div>
				</div>

				<div className={aboutStyle['about-btns']}>
					<button className={aboutStyle['about-btn']}>Get a free quote</button>
					<button className={aboutStyle['about-btn']}>Explore services</button>
				</div>
			</div>
		</section>
	)
}

export default About
