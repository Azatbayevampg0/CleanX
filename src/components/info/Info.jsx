import React from 'react'
import phoneImg from '../../assets/images/phone-icon.svg'
import infoStyle from "./Info.module.css"
export const Info = () => {
	return (
		<div className={infoStyle['home__items-call']}>
		<img src={phoneImg} alt='phone' />
		<div className={infoStyle['info__texts']}>
				<p className={infoStyle['info__text']}>Call us now</p>
				<p className={infoStyle['info__nubers']}>(414) 567 - 2109</p>
		</div>
</div>
	)
}

export default Info
