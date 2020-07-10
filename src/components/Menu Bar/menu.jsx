import React,{useState,useEffect} from 'react';
import {AppBar,Zoom,Toolbar,Typography,CssBaseline,useScrollTrigger,Fab,makeStyles,Container, IconButton} from '@material-ui/core'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import styles from './menu.module.css'
import App from '../../App'
import cx from 'classnames'
import { Brightness2, Brightness7 } from "@material-ui/icons";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import CoronaPic from '../../images/icons8-coronavirus-48.png';


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

export default function BackToTop(props) {
  const [themeMode, SetThemeMode] = useState("light");
  const theme = createMuiTheme({
    palette: {
      type: themeMode,
      primary: {
        main: themeMode === "light" ? "#fff" : "#333333"
      }
    }
  });

  const handleLightMode = () => {
    document.querySelector("body").style.backgroundColor = "#fff";
    SetThemeMode("light");
  };

  const handleDarkMode = () => {
    document.querySelector("body").style.backgroundColor = "#333333";
    SetThemeMode("dark");
  };
  return (
    <ThemeProvider theme={theme}>
    <div>
      <CssBaseline />
      <AppBar color="primary">
        <Toolbar>
          <Container className={styles.toolBarContainer}>
          <div style={{ display: "flex", justifyContent: "center",alignItems:"center" }}>
          <img style={{marginRight:"5"}} src={CoronaPic} alt="coronaLogo"/>
          <Typography style={{fontWeight:"700"}}  align="center" variant="h5">
            COVID <span style={{color:"red"}}>Tracker</span>
          </Typography>
          </div>
          <div style={{marginRight:"0"}}>
          {themeMode === "light" ? (
            <IconButton style={{ color: "#000" }} onClick={handleDarkMode}>
              <Brightness2 />
            </IconButton>
          ) : (
            <IconButton style={{ color: "yellow" }} onClick={handleLightMode}>
              <Brightness7 />
            </IconButton>
          )}
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
    </ThemeProvider>
  );
}