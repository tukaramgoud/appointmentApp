// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {itemDetails, likedChanged} = props
  const {name, date, isLiked, id} = itemDetails

  const likedButtonClicked = () => {
    likedChanged(id)
  }

  const imageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="AppointmentItem-container">
      <div className="stared-isTrue">
        <p className="mini-para">{name}</p>
        <button
          type="button"
          className="button-liked"
          onClick={likedButtonClicked}
          data-testid="star"
        >
          <img src={imageUrl} alt="star" />
        </button>
      </div>
      <p className="mini-para-2">{date}</p>
    </li>
  )
}

export default AppointmentItem
