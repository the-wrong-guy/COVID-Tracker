import React from 'react';
import {IconButton} from "@material-ui/core"
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub'
import styles from './footer.module.css'
function Footer(){
    return(
        <>
            <div>
                <span className={styles.tagline}>Made with  &#10094; &#10095;</span>
                <div className={styles.icons}>
                <IconButton aria-label="" href="https://github.com/the-wrong-guy" target="blank">
                  <GitHubIcon/>
                </IconButton>
                <IconButton aria-label="" href="https://www.instagram.com/________the_wrong_guy_________/" target="blank">
                <InstagramIcon/>
                </IconButton>  
                </div>
            </div>
          
        </>
    );
}

export default Footer