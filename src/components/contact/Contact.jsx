import React from 'react'
import contactStyle from './Contact.module.css'
import Info from '../info/Info.jsx'
export const Contact = () => {
	return (
		<section className={contactStyle['contact']}>
			<div className='container'>
				<div className={contactStyle['contact__items']}>
					<div className={contactStyle['contact__item-left']}>
						<h2 className={contactStyle['contact__item-header']}>Contact Us</h2>
						<p className={contactStyle['contact__item-paragraph']}>
							In dignissim euismod pretium amet enim a eu nam ut urna accumsan
							pellentesque lacus duis pharetra eutortor.
						</p>
						<Info />
						<div className={contactStyle['contact__item-line']}></div>
						<h3 className={contactStyle['contact__item-convince']}>
							Not convinced yet?
						</h3>
						<p className={contactStyle['contact__item-paragraph']}>
							Massa bibendum consectetur maurisid gravida purus, dolor dui amet
							morbi non nunc urna purus diam.
						</p>
						<button className={contactStyle['contact__item-btn']}>
							Browse our packages
						</button>
					</div>

					<div className={contactStyle['contact__item-right']}>
						<div className={contactStyle['contact__item-cover']}>
							<div className={contactStyle['contact__item-info']}>
								<div className={contactStyle['contact__item-fullname']}>
									<label>
										Full name
										<input />
									</label>
								</div>
								<div>
									<label>
										Address
										<input />
									</label>
								</div>
								<div>
									<label>
										Requested service
										<input />
									</label>
								</div>
							</div>
							<div className={contactStyle['contact__item-info']}>
								<div>
									<label>
										Phone number
										<input />
									</label>
								</div>
								<div>
									<label>
										Email
										<input />
									</label>
								</div>
								<div>
									<label>
										Day of service
										<input />
									</label>
								</div>
							</div>
						</div>
						<label>
							Add a note
							<div>
								<textarea></textarea>
							</div>
						</label>
						<button className={contactStyle['contact__item-btn']}>
						Submit message
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact   