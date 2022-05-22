import React from 'react';
import styles from './SideBarCarousel.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const SideBarMenu = () => {
    return (
        <div className={styles.sideBarMenu}>
            <div className='d-flex align-items-center' style={{cursor: 'pointer',color:'grey'}}>
                <p className='m-2'>🍎</p>
                <p className='m-2'>Fruits & Vegetable</p>
                <KeyboardArrowDownIcon className='mx-2'/>
            </div>
            <div className='d-flex align-items-center' style={{cursor: 'pointer',color:'grey'}}>
                <p className='m-2'>🍖</p>
                <p className='m-2'>Meat & Fish</p>
                <KeyboardArrowDownIcon />
            </div>
            <div className='d-flex align-items-center' style={{cursor: 'pointer',color:'grey'}}>
                <p className='m-2'>☕</p>
                <p className='m-2'>Snacks</p>
                <KeyboardArrowDownIcon />
            </div>
            <div className='d-flex align-items-center' style={{cursor: 'pointer',color:'grey'}}>
                <p className='m-2'>🏥</p>
                <p className='m-2'>Pet Care</p>
                <KeyboardArrowDownIcon className='mx-7'/>
            </div>
            <div className='d-flex align-items-center' style={{cursor: 'pointer',color:'grey'}}>
                <p className='m-2'>🏠</p>
                <p className='m-2'>Home & Cleaning</p>
                <KeyboardArrowDownIcon />
            </div>
            <div className='d-flex align-items-center' style={{cursor: 'pointer',color:'grey'}}>
                <p className='m-2'>🥛</p>
                <p className='m-2'>Dairy</p>
                <KeyboardArrowDownIcon />
            </div>
            <div className='d-flex align-items-center' style={{cursor: 'pointer',color:'grey'}}>
                <p className='m-2'>🍳</p>
                <p className='m-2'>Cooking</p>
                <KeyboardArrowDownIcon />
            </div>
            <div className='d-flex align-items-center' style={{cursor: 'pointer',color:'grey'}}>
                <p className='m-2'>🥐</p>
                <p className='m-2'>Breakfast</p>
                <KeyboardArrowDownIcon />
            </div>
            <div className='d-flex align-items-center' style={{cursor: 'pointer',color:'grey'}}>
                <p className='m-2'>🍷</p>
                <p className='m-2'>Beverage</p>
                <KeyboardArrowDownIcon/>
            </div>
            <div className='d-flex align-items-center' style={{cursor: 'pointer',color:'grey'}}>
                <p className='m-2'>🏵️</p>
                <p className='m-2'>Health & Beauty</p>
                <KeyboardArrowDownIcon />
            </div>
        </div>

    )
}
export default SideBarMenu;