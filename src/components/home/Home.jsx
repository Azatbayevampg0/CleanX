import React from 'react'
import Button from '../button/Button'
import Cleaner from '../../assets/images/Women.png'

import homeStyle from './Home.module.css' // ✅ Corrected import
import Info from '../info/Info'

export const Home = () => {
    return (
        <section className={homeStyle['home']}>
            <div className='container'>
                <div className={homeStyle['home__items']}>
                    <div className={homeStyle['home__items-left']}>
                        <h3  className={homeStyle['home__items-header']}>Quality cleaning for your home</h3>
                        <p className={homeStyle['home__items-text']}>
                            Condimentum mauris sit cursus amet id non neque pharetra nulla
                            ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
                            aliquet et nulla magna lacus penatibus.
                        </p>
                        <div className={homeStyle['home__items-info']}>
                         <div className={homeStyle['home__btn']}>
                            <Button />
                            </div>
                           <Info/>
                        </div>
                    </div>

                    <div className={homeStyle['home__items-right']}>
                        <img src={Cleaner} alt='Cleaner' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
