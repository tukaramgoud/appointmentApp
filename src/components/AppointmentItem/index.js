// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {itemDetails} = props
  return (
    <div className="AppointmentItem-container">
      <div className="stared-isTrue">
        <p className="mini-para">Dentist</p>
        <button type="button" className="button-liked">
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
            alt="like"
          />
        </button>
      </div>
      <p className="mini-para-2">Date : 20 july, 2024, Saturday</p>
    </div>
  )
}

export default AppointmentItem
