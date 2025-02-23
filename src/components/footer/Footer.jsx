import React from 'react'
import footerStyle from './Footer.module.css'
import footerImg from "../../assets/images/footer.png"
export const Footer = () => {
	return (
		<footer>
			<div className='container'>
				<div className={footerStyle['footer__items']}>
					<div className={footerStyle['footer__item']}>
						<h4 className={footerStyle['footer__item-description']}>
							Quality cleaning for your home
						</h4>
						<p className={footerStyle['footer__item-paragraph']}>
							Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
							eiusmo.
						</p>
						<div className={footerStyle['footer__item-sq']}>
							<div className={footerStyle['footer__item-stars']}></div>
							<div className={footerStyle['footer__item-stars']}></div>
							<div className={footerStyle['footer__item-stars']}></div>
							<div className={footerStyle['footer__item-stars']}></div>
						</div>
					</div>
					<div className={footerStyle['footer__item']}>
						<h4 className={footerStyle['footer__item-description']}>
							Quality cleaning for your home
						</h4>
						<p className={footerStyle['footer__item-paragraph']}>
							1827 Nickel Road, Los Angeles, CA, 90017, United States
						</p>
						<p className={footerStyle['footer__item-paragraph']}>
							(414) 567 - 2109
						</p>
						<p className={footerStyle['footer__item-paragraph']}>
							contact@cleaning.com
						</p>
					</div>

					<div className={footerStyle['footer__item']}>
						<h4 className={footerStyle['footer__item-description']}>Hours</h4>
						<h3 className={footerStyle['footer__item-week']}>
							Monday to Friday
						</h3>
						<p className={footerStyle['footer__item-paragraph']}>
							6:00 AM - 9:00 PM
						</p>
						<h3 className={footerStyle['footer__item-week']}>
							Saturday & Sunday
						</h3>
						<p className={footerStyle['footer__item-paragraph']}>
							8:00 AM - 8:00 PM
						</p>
						<p className={footerStyle['footer__item-paragraph']}>
							contact@cleaning.com
						</p>
					</div>

					<div className={footerStyle['footer__item']}>
						<h3 className={footerStyle['footer__item-description']}>
							Get a free estimate
						</h3>
						<p className={footerStyle['footer__num']}>(414) 567 - 2109</p>
						<p className={footerStyle['footer__item-paragraph']}>
							Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
							eiusmod.
						</p>
						<button className={footerStyle['footer__item-btn']}>
							Request a free quote
						</button>
					</div>
				</div>

				<div className={footerStyle['footer__last']}>
					<img src={footerImg} alt='logo' />
					<p className={footerStyle['footer__last-item']}>
						Copyright © Cleaning X | Designed by <span>BRIX Templates</span>-
						Powered by
						<span>Webflow Licenses</span>
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
