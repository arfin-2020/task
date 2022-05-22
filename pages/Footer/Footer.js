import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';
import FooterCol from './FooterCol';

const Footer = () => {
    
    const ourAddress = [
        { name: "🌐 New York - 101010 Hudson" },
       
        { name: "📧 Stroyka@gmail.com"},
        { name: "☎️ +8801542455"},
        { name: "🕞 Mon-Sat 10:00pm - 7:00"},

    ]
    const information = [
        { name: "About US"},
        { name: "Delivery Information"},
        { name: "Privacy Policy"},
        { name: "Brands"},
        { name: "Site Map"},
    ]
    const myAccount = [
        { name: "Store Location"},
        { name: "Older History" },
        { name: "Wish List"},
        { name: "News letter"},
        { name: "Specials"},
        { name: "Gift"},
        
    ]
    
    return (
        <footer className={styles.footerArea}>
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Contact Us"} menuItems={ourAddress} />
                    <FooterCol key={3} menuTitle="Information" menuItems={information} />
                    <FooterCol key={4} menuTitle="My Account" menuItems={myAccount}>
                        
                        <ul className={styles.socialMedia}>
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className={styles.activeIcon} icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;