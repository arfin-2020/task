import React from 'react';
import Carousel from './Carousel';
import SideBarMenu from './SideBarMenu';
import styles from './SideBarCarousel.module.css'
const SideBarCarousel = () =>{
    return (
        <div className={styles.backgroundWidth}>
           <div className='d-flex container align-items-center'>
           <SideBarMenu/>
           <Carousel/>
           </div>
        </div>
    )
} 
export default SideBarCarousel;