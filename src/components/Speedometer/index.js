// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onSpeed = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onBreak = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="middle-container">
          <h1 className="main-head">SPEEDOMETER</h1>
          <img
            className="image1"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h1 className="main-head">Speed is {count}mph</h1>
          <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
          <button onClick={this.onSpeed} className="btn" type="button">
            Accelerate
          </button>
          <button onClick={this.onBreak} className="btn2" type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
