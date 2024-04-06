// Write your code here
import {Component} from 'react'
import {format} from 'date-fns'
import {v4 as uuidV4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {name: '', date: '', listOfItems: [], isStared: false}

  formSubmitted = event => {
    event.preventDefault()
    const {name, date} = this.state
    const newItem = {
      id: uuidV4(),
      name,
      date: format(new Date(date), 'dd MMMM yyyy, EEEE'),
      isLiked: false,
    }
    this.setState(pervState => ({
      listOfItems: [...pervState.listOfItems, newItem],
      name: '',
      date: '',
    }))
  }

  titleChanged = event => {
    this.setState({name: event.target.value})
  }

  likedChanged = id => {
    const {listOfItems} = this.state
    const modifyList = listOfItems.map(eachOne => {
      if (eachOne.id === id) {
        return {...eachOne, isLiked: !eachOne.isLiked}
      }
      return eachOne
    })
    this.setState({listOfItems: modifyList})
  }

  dateChanged = event => {
    this.setState({date: event.target.value})
  }

  staredButtonClicked = () => {
    this.setState(pervState => ({isStared: !pervState.isStared}))
  }

  getNewFilteredList = () => {
    const {listOfItems, isStared} = this.state

    if (isStared) {
      return listOfItems.filter(eachOne => eachOne.isLiked === true)
    }
    return listOfItems
  }

  render() {
    const {name, date, isStared} = this.state
    const backGroundColor = isStared ? 'blue-added' : ''
    const getFilteredItems = this.getNewFilteredList()
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
            <button
              type="button"
              className={`stared-button ${backGroundColor}`}
              onClick={this.staredButtonClicked}
            >
              Starred
            </button>
          </div>
          <ul className="unOrdered-list">
            {getFilteredItems.map(eachOne => (
              <AppointmentItem
                itemDetails={eachOne}
                key={eachOne.id}
                likedChanged={this.likedChanged}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
