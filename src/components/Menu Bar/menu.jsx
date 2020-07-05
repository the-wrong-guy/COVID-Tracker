import React from 'react';
import {AppBar,Zoom,Toolbar,Typography,CssBaseline,useScrollTrigger,Fab,makeStyles,Container } from '@material-ui/core'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import styles from './menu.module.css'
import App from '../../App'
import cx from 'classnames'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#333333',
    },
  },
typography: {
  h5: {
    fontSize: 20,
    fontWeight : 800,
  }
}
});

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

function ScrollTop(props) {
  const { children, window } = props;
  const clsses = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className= {clsses.root}>
        {children}
      </div>
    </Zoom>
  );
}

// ScrollTop.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func
// };

export default function BackToTop(props) {

  return (
    <div>
      <CssBaseline />
      <AppBar color="secondary" className={styles.AppBar}>
        <Toolbar>
          <Container className={styles.toolBarContainer}>
          <div>
          <Typography  className={styles.title} align="center" variant="h5">
              COVID-19 Información
          </Typography>
          </div>
          </Container>
        </Toolbar>
      </AppBar>
    
      <Toolbar id="back-to-top-anchor" />
      <Container>
       <App/>
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}