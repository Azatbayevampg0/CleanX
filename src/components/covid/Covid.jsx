import React from 'react'
import covidStyle from './Covid.module.css'
import covidImage from '../../assets/images/person.png'
import Info from '../info/Info'
import Button from '../button/Button'
export const Covid = () => {
	return (
		<div className='container'>
			<div className={covidStyle['covid__part']}>
				<div className={covidStyle['covid__left']}>
					<img src={covidImage} alt='women' />
				</div>
				<div className={covidStyle['covid__right']}>
					<p className={covidStyle['covid__paragraph']}>
						Covid-19 sanitization
					</p>
					<h3 className={covidStyle['covid__header']}>
						We follow guidelines to keep you safe from the COVID-19 virus
					</h3>
					<p className={covidStyle['covid__desription']}>
						Lobortis mattis odio leo eget mauris met aliquet semper molestie
						sollicitudin congue massa mauris lectus.
					</p>
					<div className={covidStyle['covid__info']}>
						<Button />
						<Info />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Covid
