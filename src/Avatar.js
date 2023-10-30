import useImage from "./utils/useImage";

const Avatar = (props) => {
  console.log(props.image);
  const { image } = useImage(props.image);
  return <div className="card-avatar">
    <div className="card-img-container">
    <img
        src={image}
        alt={props.name}
      />
    </div>
    <h3>{props.name}</h3>
    </div>
}

export default Avatar;