import NavBar from '../NavBar'

import './index.css'

const ScoreCard = props => {
  const {score, timer, restartingGame} = props

  const restartGame = () => {
    restartingGame()
  }

  return (
    <div>
      <NavBar score={score} timer={timer} />
      <div className="score-container">
        <li className="list-container3">
          <div className="score-details">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
              alt="trophy"
              className="trophy-image"
            />
            <p className="heading">YOUR SCORE</p>
            <p className="para"> {score}</p>
            <button
              type="button"
              className="palyAgain-btn "
              onClick={restartGame}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                alt="reset"
              />
              PLAY AGAIN
            </button>
          </div>
        </li>
      </div>
    </div>
  )
}
export default ScoreCard
