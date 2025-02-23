import React from 'react'
import home from "../../assets/images/home.png"
import office from "../../assets/images/building.png"
import industry from "../../assets/images/industrial.png"
import serviseStyle from './Service.module.css'
import Covid from '../covid/Covid'
export const Service = () => {
	return (
		<section className={serviseStyle['service']}>
			<div className='container'>
				<div className={serviseStyle['service__head']}>
					<h1 className={serviseStyle['service__header']}>Our Services</h1>
					<button className={serviseStyle['service__btn']}>
						Explore services
					</button>
				</div>
				<div className={serviseStyle['service__cards']}>
					<div className={serviseStyle['service__card']}>
						<img src={home} alt="home" />
						<h4 className={serviseStyle['service__des']}>House cleaning</h4>
						<p className={serviseStyle['service__paragraph']}>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
					</div>
					<div className={serviseStyle['service__card']}>
						<img src={office} alt="home" />
						<h4 className={serviseStyle['service__des']}>Office cleaning</h4>
						<p className={serviseStyle['service__paragraph']}>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
					</div>
					<div className={serviseStyle['service__card']}>
						<img src={industry} alt="home" />
						<h4 className={serviseStyle['service__des']}>Industrial cleaning</h4>
						<p className={serviseStyle['service__paragraph']}>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
					</div>
				</div>
			</div>
			<Covid/>
		</section>
	)
}

export default Service
