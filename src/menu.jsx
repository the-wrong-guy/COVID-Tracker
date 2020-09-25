import React,{useState,useEffect} from 'react';
import {AppBar,Zoom,Toolbar,Typography,CssBaseline,useScrollTrigger,Fab,makeStyles,Container, IconButton,Tooltip} from '@material-ui/core'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import { useHistory,withRouter,Link,Router } from 'react-router-dom';
import history from './history';
import {
  Drawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import styles from './menu.module.css'
import App from './App'
import { Brightness2, Brightness7 } from "@material-ui/icons";
import {ArrowBackIos as ArrowBackIosIcon,Menu as MenuIcon, Public as PublicIcon,LocalHospital as LocalHospitalIcon,HelpOutline as HelpOutlineIcon,Home as HomeIcon} from "@material-ui/icons"
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import CoronaPic from './Main Components/Home/images/icons8-coronavirus-48.png'

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

 function BackToTop(props) {
  const [toggle, setToggle] = useState(false);
  const [themeMode, SetThemeMode] = useState(getMode);
  const theme = createMuiTheme({
    palette: {
      type: themeMode,
      primary: {
        main: themeMode === "light" ? "#fff" : "#333333"
      }
    }
  });

  useEffect(() => {
    localStorage.setItem("Tmode", JSON.stringify(themeMode));
  }, [themeMode]);

  function getMode() {
    const savedmode = JSON.parse(localStorage.getItem("Tmode"));
    return savedmode || "dark" ;
  }

  const itemsList = [
    {
      text: "Home",
      icon: <HomeIcon className={styles.homeIcon}/>,
      onClick: () =>{ history.push("/");  setToggle(!toggle); window.scrollTo({ top: 0 });}
    },
    {
      text: "Global anlytics",
      icon: <PublicIcon  className={styles.globalIcon}/>,
      onClick: () =>{ history.push("/global-statistics");  setToggle(!toggle); window.scrollTo({ top: 0 });}
    },
    {
      text: "What is COVID-19?",
      icon: <HelpOutlineIcon  className={styles.whatIcon}/>,
      onClick: () =>{ history.push("/what-is-covid");  setToggle(!toggle); window.scrollTo({ top: 0 });}
    },
    {
      text: "Prevention",
      icon: <LocalHospitalIcon  className={styles.preventionIcon}/>,
      onClick: () =>{ history.push("/prevention");  setToggle(!toggle); window.scrollTo({ top: 0 });}
    }
  ];




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
          <div style={{ display: "flex",alignItems:"center" }}>
          <img style={{marginRight:"5"}} src={CoronaPic} alt="coronaLogo"/>
          <Typography style={{fontWeight:"700"}}  align="center" variant="h5">
            COVID <span style={{color:"red"}}>Tracker</span>
          </Typography>
          </div>
          <div>
          {themeMode === "light" ? (
            <Tooltip title="Dark Mode">
            <IconButton style={{ color: "#000" }} onClick={handleDarkMode}>
              <Brightness2 />
            </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Light Mode">
            <IconButton style={{ color: "yellow" }} onClick={handleLightMode}>
              <Brightness7 />
            </IconButton>
            </Tooltip>
          )}
          <IconButton onClick={() => {
            setToggle(!toggle);
          }} >
            <MenuIcon/>
          </IconButton>
          </div>
          </Container>
          <Drawer style={{width:"300px"}} open={toggle}>
              <List style={{display:"flex",justifyContent:"flex-end",marginRight:"5px"}}>
                <IconButton
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  
                >
                  <ArrowBackIosIcon/>
                </IconButton>
            </List>
            <List>
            {itemsList.map((item, index) => {
              const { text, icon, onClick } = item;
              return (
                <ListItem button key={text} onClick={onClick}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItem>
              );
            })}
          </List>
          </Drawer>
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

export default BackToTop