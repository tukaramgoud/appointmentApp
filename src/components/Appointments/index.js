// Write your code here
import {Component} from 'react'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {name: '', date: ''}

  formSubmitted = event => {
    event.preventDefault()
    const {name, date} = this.state
    console.log(name, date)
  }

  titleChanged = event => {
    this.setState({name: event.target.value})
  }

  dateChanged = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {name, date} = this.state

    return (
      <div className="main-container">
        <div className="display-container">
          <div className="user-input-image-container">
            <form className="form-container" onSubmit={this.formSubmitted}>
              <h1 className="second-heading">Add Appointment</h1>
              <label htmlFor="userInput" className="title-label">
                Title
              </label>
              <input
                id="userInput"
                className="input-styling"
                onChange={this.titleChanged}
                value={name}
                placeholder="Title"
              />

              <label htmlFor="userDate" className="title-label">
                Date
              </label>
              <input
                type="date"
                id="userDate"
                className="input-styling"
                onChange={this.dateChanged}
                value={date}
              />
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="filter-container">
            <h1 className="second-heading">Appointments</h1>
            <button type="button" className="stared-button">
              Starred
            </button>
          </div>
          <AppointmentItem />
        </div>
      </div>
    )
  }
}

export default Appointments
