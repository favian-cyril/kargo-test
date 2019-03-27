import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Dropdown from './components/Dropdown';
import data from './data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobList: [],
      options: [
          {
              text: 'Price high-low',
              sortType: 'price',
              isAsc: false
          },
          {
              text: 'Price low-high',
              sortType: 'price',
              isAsc: true
          },
          {
              text: 'Date ascending',
              sortType: 'date',
              isAsc: true,
          },
          {
              text: 'Date descending',
              sortType: 'date',
              isAsc: false
          }
      ]
    }
  }
  componentDidMount() {
    var newJobList = data.data
    this.setState({
      jobList: newJobList
    });
  }
  onChangeHandler = (evt) => {
    let option = this.state.options[evt.target.value];
    let sortType = option.sortType;
    let isAsc = option.isAsc;
    let newJobList = this.state.jobList.sort((a,b) => {
        var returnVal = 0;
        if (a[sortType] < b[sortType]) {
            returnVal = -1;
        }
        if (b[sortType] < a[sortType]) {
            returnVal = 1;
        }
        if (isAsc) {
            return returnVal;
        } else {
            return -(returnVal);
        }
    })
    this.setState({
      jobList: newJobList
    })
  }
  render() {
    return (
      <div className="App">
        <Dropdown onChangeHandler={this.onChangeHandler} options={this.state.options}/>
        {
          this.state.jobList.map((item, index) => {
            return (
              <Card key={index} to={item.to} from={item.from} price={item.price} date={item.date}/>
            )
          })
        }
      </div>
    );
  }
}
export default App
