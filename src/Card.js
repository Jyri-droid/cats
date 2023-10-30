import Avatar from "./Avatar"
import Properties from "./Properties";

const Card = (props) => {
    return <div className="card-container">
        <Avatar image={props.item.image} name={props.item.name} />
        <Properties item={props.item}/>
    </div>
}

export default Card;