import React, { Component } from 'react';
import Cards from '../components/Cards';
import Header from '../components/Header';
import Add from '../components/Add';

class App extends Component {
  constructor() {
    super();
    this.state = {
      'staff': [],
      'routes': 'Home',
    }
  }

  onChangeRoute = (route) => {
    if(route === this.state.routes) return false;
    this.setState({routes: route})
  }

  componentDidMount() {
    fetch('http://localhost:3000/staff')
    .then(response => response.json())
    .then(data => this.setState({staff: data}));
  }

  render() {
    return (
      <div className='flex'>
        <Header onChangeRoute={this.onChangeRoute}/>
        {
            this.state.routes === 'Home' 
            ? <div className='list'> <Cards staff={this.state.staff} onChangeRoute={this.onChangeRoute}/> </div>
            : <Add onChangeRoute={this.onChangeRoute}/>
            
        }
      </div>
    );
  }
}

export default App;
