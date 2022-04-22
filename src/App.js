import React from 'react';

export default class App extends React.Component {
 constructor(props) {
  	super(props)
        this.refs = React.createRef();
        this.state = {size:20, innerHtml:""};
        this.enterNumbers = this.enterNumbers.bind(this);
        this.changeFontSizeSlider = this.changeFontSizeSlider.bind(this);
        this.submit = this.submit.bind(this);
       
    }

    submit(event) {
        event.preventDefault();
        let N = this.refs.characteristics.value;
        let html = "";
        html += "<html>";
        html += "<body onload=\"setFocus()\">";
        html += "<h1 style=\"text-align:center; color:black;\">SWE 432 Assignment 8</h1>";
        html += "<h2 style=\"text-align:center; color:black;\">Creators: Jenna Shuler and Frank Costantino</h2>";
        html += "<div style = \"text-align:center\">";
        html += "<a href=\"https://github.com/jennanicole77/jshuler4swe432react/blob/master/src/App.js\">Assignment 8 Github Link</a>";
        html += "</div>";
        html += "<label style=\"font-size:20px;\">Number of characteristics:" + N +".</label><br>";
        html += "<div style=\"font-size:20px;\" id=\"conatiner\">";
        for(let i =1; i<=N; i++) {
            let numBlocks = parseInt(event.target[i].value); 
            html += "<label> Characteristic " + i + ": ";
            for(let j =1; j<=numBlocks; j++) {
                html+= "Block" + j;
                if(j<numBlocks)
                    html+=", ";
            }
            html += ".</label><br></br>";
        }
        html += "</div></body></html>";
        this.refs.submission.innerHTML = html;
    }

    componentDidMount() {
        this.refs.characteristics.focus();
    }

    enterNumbers() {
        let numOfChar = this.refs.characteristics.value;
        let html = "";
        for(let i = 1; i<=numOfChar; i++) {
            html +=
            "<label for=\"characteristics" + i + "\"> Characteristic " + i + "'s number of blocks: (Please enter a valid number above 0):</label>" +
            "<input type=\"number\" ref=\"characteristics" + i + "\" id=\"characteristics" + i + "\" name=\"characteristics" + i + "\" min=01 required><br><br>";
        }
        this.refs.amountOfInputs.innerHTML = html;
    }

    changeFontSizeSlider() {
        let slider = this.refs.slider;
        this.setState({size: slider.value, innerHtml:""});  
    }

    render() { 

        return (
            <div ref="submission">
                <h1 style={{textAlign: 'center', color: 'black'}}>SWE 432 Assignment 8</h1>
                <h2 style={{textAlign: 'center', color: 'black'}}>Creators: Jenna Shuler and Frank Costantino</h2>
                <div style={{textAlign: 'center'}}>
                    <a href="https://github.com/jennanicole77/jshuler4swe432react/blob/master/src/App.js">Assignment 8 Github Link </a>
                </div>
                <div style={{textAlign: 'center'}}>
                    <h3 style={{textAlign: 'center', color: 'black'}}>Use the slider below to change the font size of the information below!</h3>
                    <input type="range" min={15} max={40} id="slider" onChange={this.changeFontSizeSlider} defaultValue={20} ref="slider"/>
                </div>
                <form onSubmit={this.submit}>
                    <div style={{fontSize: this.state.size+'px'}} id="container" ref="container">
                        <label htmlFor="characteristics">Enter a number of characteristics to be created below (Please enter a valid number above 0):</label>
                        <input type="number" id="characteristics" ref="characteristics" name="characteristics" min={1} required onInput={this.enterNumbers} />
                        <br /><br />
                        <div id="amountOfInputs" ref="amountOfInputs" />
                        <center>
                            <input type="submit" style={{color: '#37AEE2', fontSize: '16px', padding: '1rem 1.75rem', justifyContent: 'center'}} />
                        </center>
                    </div>
                </form>
            </div>
        )
    }}
