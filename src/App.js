import React, {useMemo, useState, useCallback} from 'react';

//import Box from '@material-ui/core/Box';
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
//import Tabs from '@material-ui/core/Tabs';
//import Tab from '@material-ui/core/Tab';
//import IconButton from '@material-ui/core/IconButton';
//import GitHubIcon from '@material-ui/icons/GitHub';

//import Fetcher from './components/Fetcher';
//import Hooks, {aFunc} from './components/Hooks';
//import ToggleButtons from './components/ToggleButtons';
//import PopcornSales from './components/PopcornSales';

/*export const useLinkOpener = () => {
  const windowObjectReferences = useMemo(() => ({}), []);
  const openRequestedSinglePopup = useCallback(
    (url, target, windowFeatures = "resizable,scrollbars,status") => {
      if (window !== window.top) {
        window.open(
          url,
          target,
          windowFeatures ? `${windowFeatures},noreferrer` : "noreferrer"
        );
        return true;
      }

      const windowObjectReference = windowObjectReferences[url];
      if (!windowObjectReference || windowObjectReference.closed) {
        windowObjectReferences[url] = window.open(url, target, windowFeatures);
        return true;
      }

      windowObjectReference.focus();
      return false;
    },
    [windowObjectReferences]
  );

  return [windowObjectReferences, openRequestedSinglePopup];
};*/

export default function App(props) {
  const [currentTab, setCurrentTab] = useState(0);
  const handleChangeCurrentTab = useCallback(
    (event, newValue) => {
      setCurrentTab(newValue);
    },
    []
  );

  const {rootSX, tabsSX} = useMemo(
    ()=>({
      rootSX:{ flexGrow: 1 },
      tabsSX: { borderBottom: 1, borderColor: 'divider' }
    }),
    []
  );
  
  const [, openLink] = useLinkOpener();
  const handleChangeOpenGitHubLink = useCallback(() => {
    openLink(
      "https://github.com/luminaxster/swe432-heroku-react",
      "https://github.com/luminaxster"
    );
  }, [openLink]);

  return (
  /*  <Box sx={rootSX}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" noWrap >
              SWE 432 React examples
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
              edge="end"
              color="inherit"
              onClick={handleChangeOpenGitHubLink}
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={tabsSX}>
        <Tabs value={currentTab} onChange={handleChangeCurrentTab}>
          <Tab label="Popcorn Sales" />
          <Tab label="Fetcher" />
          <Tab label="Hooks" />
          <Tab label="Toggle Buttons" />
        </Tabs>
      </Box>
      <TabPanel value={currentTab} index={0}>
        <PopcornSales />
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <Fetcher />
      </TabPanel>
      <TabPanel value={currentTab} index={2}>
        {careful Icarus}
        <Hooks name={aFunc().name} />
      </TabPanel>
      <TabPanel value={currentTab} index={3}>
        <ToggleButtons />
      </TabPanel>
    </Box>*/

<html>
<body onload="setFocus()">
<h1 style="text-align:center; color:black;">SWE 432 Assignment 8</h1>
<h2 style="text-align:center; color:black;">Creators: Jenna Shuler and Frank Costantino</h2>
<div style = "text-align:center">
<a href="https://github.com/jennanicole77/jshuler4swe432/blob/main/src/main/java/servlet/Assignment8.java">Assignment 8 Github Link (Back end)</a>
</div>
<div style = "text-align:center">
<h3 style="text-align:center; color:black;">Use the slider below to change the font size of the information below!</h3>
<input type="range" min="15" max="40" id="slider" onchange="changeFontSizeSlider()" value="20"/>
</div>
<form method="post" action="https://jshuler4swe432.herokuapp.com/assignment8" name="form" id="formId">
<div style="font-size:20px;" id="container">
<label for="characteristics">Enter a number of characteristics to be created below (Please enter a valid number above 0):</label>
<input type="number" id="characteristics" name="characteristics" min="1" required onInput="enterNumbers()">
<br><br>
<div id="amountOfInputs"></div>
<center>
<input type="submit"  style="color:#37AEE2; font-size: 16px; padding: 1rem 1.75rem; justify-content: center;">
</center>
</form>
</div>
<script>
let numOfChar = 0;
function setFocus()
{
document.form.characteristics.focus();
}
function enterNumbers(arguements) {
numOfChar = document.getElementById("characteristics").value;
var html = "";
for(var i = 1; i<=numOfChar; i++) {
html +=
"<label for=\"characteristics" + i + "\"> Characteristic " + i + "'s number of blocks: (Please enter a valid number above 0):</label>" +
"<input type=\"number\" id=\"characteristics" + i + "\" name=\"characteristics" + i + "\" min=01 required><br><br>";
}
document.getElementById("amountOfInputs").innerHTML = html;
}
</script>
<script>
var container = document.getElementById("container");
function changeFontSizeSlider() {
var slider = document.getElementById("slider");
container.style.fontSize = slider.value;
}
</script>
</body>
</html>
  );
}

/*function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}*/
