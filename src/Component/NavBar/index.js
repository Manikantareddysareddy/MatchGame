import './index.css'

const NavBar = props => {
  const {score, timer} = props
  return (
    <ul className="Nav-bg-container">
      <li className="list-container1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="image"
        />
      </li>
      <div>
        <li className="list-container2">
          <p className="new-para">
            Score: <span className="spanEl">{score}</span>
          </p>
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-image"
            />
            <p className="spanEl">{timer} sec</p>
          </div>
        </li>
      </div>
    </ul>
  )
}
export default NavBar
