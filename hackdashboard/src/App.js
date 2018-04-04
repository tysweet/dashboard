import React, { Component } from 'react';
import './App.css';
import Time from './components/Time';
import Robot from './components/Robot';
import Weather from './components/Weather';
import TodoList from './TodoList'

const api_key = "4c45241c2eea5ed3ae3b2fe6e1549305"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      toDoList: [],
      temp: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    this.getWeather();
   }
  
  getWeather = async () => {

    const city = "30.267153"
    const country = "-97.743061"
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city}&lon=${country}&appid=${api_key}&units=imperial`);
    const data = await api_call.json();

    console.log(data)

    if (city && country){
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }


  handleSubmit(event) {
    event.preventDefault();
    const newArr = this.state.toDoList;
    newArr.push(this.state.value);
    this.setState({toDoList: newArr});
  }

  handleDelete=(name, i)=>{
    const todos = this.state.toDoList.slice();
    todos.splice(i, 1);
    this.setState({toDoList: todos});
  }



  render() {
    return (
      <div>
        <Time />
        <Weather 
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
        /> 
        <Robot />
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            To Do List:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
          <TodoList toDoList={this.state.toDoList} handleDelete={this.handleDelete} />
        </form>
        </div>
            </div>
    );
  }
}

export default App;
