import PlayerCard from "./PlayerCard"

const CardContainer = ({data}) => {
  return (
    <div className="card-container">
      {
        data.map((player,index) => (
          <PlayerCard key={index} {...player}/>
        ))
      }
    </div>
  )
}

export default CardContainer
