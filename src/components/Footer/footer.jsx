import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub'
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import styles from './footer.module.css'
function Footer(){
    return(
        <>
            <div>
                <span className={styles.tagline}>Made with &nbsp; <FavoriteTwoToneIcon className={styles.heart}/></span>
                <div className={styles.icons}>
                    <InstagramIcon/>&nbsp;&nbsp;
                    <GitHubIcon/>
                </div>
            </div>
          
        </>
    );
}

export default Footer