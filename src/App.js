
export default function App(props) {
/*
    fetch('https://jshuler4swe432.herokuapp.com/assignment8')
    .then(response => response.text())
    .then(data => {
            document.write(res);
    });

    let numOfChar = 0;
    var container = document.getElementById("container");
    let setFocus = function()
    {
        document.form.characteristics.focus();
    }
    let enterNumbers = function()
    {
        numOfChar = document.getElementById("characteristics").value;
        var html = "";
        for(var i = 1; i<=numOfChar; i++) {
        html +=
        "<label for=\"characteristics" + i + "\"> Characteristic " + i + "'s number of blocks: (Please enter a valid number above 0):</label>" +
        "<input type=\"number\" id=\"characteristics" + i + "\" name=\"characteristics" + i + "\" min=01 required><br><br>";
    }
    document.getElementById("amountOfInputs").innerHTML = html;
    }
    let changeFontSizeSlider = function()
    {
        var slider = document.getElementById("slider");
        container.style.fontSize = slider.value;
    }
*/
    return (    
        <div>
            <h1> Hi </h1>
        </div>
  /*
        <html>
            <body onload="setFocus()">
                <h1 style="text-align:center; color:black;">SWE 432 Assignment 8</h1>
                <h2 style="text-align:center; color:black;">Creators: Jenna Shuler and Frank Costantino</h2>
                <div style = "text-align:center">
                    <a href="https://github.com/jennanicole77/jshuler4swe432/blob/main/src/main/java/servlet/Assignment8.java">Assignment 8 Github Link (Back end)</a>
                </div>
                <div style = "text-align:center">
                    <h3 style="text-align:center; color:black;">Use the slider below to change the font size of the information below!</h3>
                    <input type="range" min="15" max="40" id="slider" onChange="changeFontSizeSlider()" value="20"/>
                </div>
                <form method="post" action="https://jshuler4swe432.herokuapp.com/assignment8" name="form" id="formId">
                    <div style="font-size:20px;" id="container">
                        <label htmlFor="characteristics">Enter a number of characteristics to be created below (Please enter a valid number above 0):</label>
                        <input type="number" id="characteristics" name="characteristics" min="1" required onInput="enterNumbers()"/>
                        <br/><br/>
                        <div id="amountOfInputs"></div>
                        <center>
                            <input type="submit"  style="color:#37AEE2; font-size: 16px; padding: 1rem 1.75rem; justify-content: center;"/>
                        </center>
                    </div>
                </form>
            </body>
        </html> 
*/
    )
}
