import React, {Component} from 'react';

const randomLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"]




class Robot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      returnedRobot: '',
      returnedQuote: ''
    };
  }

componentDidMount(){
  fetch("https://talaikis.com/api/quotes/random/")
     .then(res => res.json())
     .then(
       (result) => {
         this.setState({
           isLoaded: true,
           returnedQuote: result.quote
         });
       },
       // Note: it's important to handle errors here
       // instead of a catch() block so that we don't swallow
       // exceptions from actual bugs in components.
       (error) => {
         this.setState({
           isLoaded: true,
           error
         });
       }
     )
 this.getRandomText();

}

getRandomText=()=>{
const randomText = randomLetter[Math.floor((Math.random() * randomLetter.length-1))]
this.getNewRobot(randomText);
 this.getQuote;
}

  getNewRobot=(name)=>{
    this.setState({
      returnedRobot: `https://robohash.org/${name}.png`,
    });
  }

  getQuote=()=> {
  return this.state.returnedQuote

  }


  render() {
    return (
      <div className = 'robot-wrapper'>
        <div className="robot">
          <img src={this.state.returnedRobot} style= {{width: '300px', heigth: '300px'}} alt="robot" />
            <p> {this.getQuote()}</p>
          <button onClick = {()=>{this.getRandomText(); this.getQuote()}} style={{fontSize:'18px', width: "256px"}}>Get new robot</button>
        </div>

      </div>);
  }
}

export default Robot;