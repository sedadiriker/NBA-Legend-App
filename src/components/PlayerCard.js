import { useState } from "react";

const PlayerCard = ({ name, img, statistics }) => {
  const [points, rebounds, assists, allStar] = statistics;
  const [showDetails, setShowDetails] = useState(false)

  const change = () => {
    setShowDetails(!showDetails)
  }

  return (
    <div className="player-card">
      <div className="image" onClick={change}>
        {
          !showDetails ? (
            <img src={img} alt="" />
          ) : (
            <ul className="details" onClick={change}>
              <li>{points}</li>
              <li>{rebounds}</li>
              <li>{assists}</li>
              <li>{allStar}</li>
            </ul>
          )
        }
      </div>
      <div className="name">
        <p>{name}</p>
      </div>
    </div>
  )
}

export default PlayerCard
