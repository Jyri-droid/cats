const Properties = (props) => {
    const entries = Object.entries(props.item);
    return <div>{entries.map(([key, value]) => <p>{key + " " + value}</p>)}</div>
}

export default Properties;