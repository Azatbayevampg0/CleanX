import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Button from '../button/Button'
import logo from '../../assets/images/logo.svg'
import headerStyle from './Header.module.css'


export const Header = () => {
	const [isToggleOpen, setIsToggleOpen] = useState(false)
	const handleToggleOpen = () => {
		setIsToggleOpen(!isToggleOpen)
	}

	return (
		<header>
			<div className='container'>
				<div className={headerStyle['header__items']}>
					<div className={headerStyle['header__logo']}>
						<img src={logo} alt='logo' />
					</div>
					<ul
						className={`${headerStyle['header__children']} ${
							isToggleOpen ? headerStyle['open'] : ''
						}`}
					>
						<li className={headerStyle['header__item']}>
							<a href='#home'>Home</a>
						</li>
						<li className={headerStyle['header__item']}>
							<a href='#about'>About</a>
						</li>
						<li className={headerStyle['header__item']}>
							<a href='#service'>Services</a>
						</li>
						<li className={headerStyle['header__item']}>
							<a href='#article'>Articles</a>
						</li>
						<li className={headerStyle['header__item']}>
							<a href='#contact'>Contact</a>
						</li>
					</ul>
					<div
						className={`${headerStyle['header__buttons']} ${
							isToggleOpen ? headerStyle['open'] : ''
						}`}
					>
						<p className={headerStyle['header__cart']}>Cart(0) </p>
						<Button />
					</div>
         <div>
					<FaBars
						className={headerStyle['menuToggleBtn']}
						onClick={handleToggleOpen}
					/>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
