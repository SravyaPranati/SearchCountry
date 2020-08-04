import React from 'react';
import axios from 'axios';
import Country from './components/Country'
import Example from './components/Example'
import './App.css';
class App extends React.Component {
  state = {
    countries: []
  }
  componentDidMount() {
    const url = `http://168.235.109.53:5000/countries`;
    axios.get(url).then(response => response.data)
      .then((data) => {
        this.setState({ countries: data })
        console.log(this.state.countries)
      })
  }
  render() {
    return (
      <div className="App">
        <Example />
      </div>
    );
  }
}

export default App;
