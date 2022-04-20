import './list.css';
import Item from './item';

export const List = props => {
    let items = props.items;
    return (
        <ul className='list'>
            {items.map((elem, index) => {
                return (
                    <Item key={index} text={elem.text} data={elem.data} />
                )
            })}
        </ul>
    )
}