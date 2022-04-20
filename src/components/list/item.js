import './item.css';

function Item(props) {
    let days = props.data.getDate();
    let month = props.data.getMonth();
    let year = props.data.getFullYear();
    return (
        <li key={props.key} className="item">
            <span>
                {days < 10 ? '0' + days : days}.{month < 10 ? '0' + month : month}.{year}
            </span>
            <span>
                {props.text}
            </span>
        </li>
    )
}

export default Item;