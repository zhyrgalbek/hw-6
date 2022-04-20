import Form from "../form/form";
import './block.css';
import { List } from "../list/list";

function Block(props) {
    function Hello(text, data){
        let obj = {
            text: text,
            data: data
        }
        props.func(obj);
    }
    return (
        <div className='block'>
           <Form func={Hello} />
           <List items={props.items} />
        </div>
    )
}

export default Block;