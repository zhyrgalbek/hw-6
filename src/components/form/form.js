import './form.css';
import {useState} from 'react';

function Form(props) {
    let [text, setText] = useState('');
    let data = new Date();

    function Vvod(event){
        setText(event.target.value);
    }

    function Submit(e){
        e.preventDefault();
        if(text != '' && data != ''){
            props.func(text, data);
        }
    }
    

    return (

        <form onSubmit={Submit}>
            <input type="text" id="vvod" value={text} onChange={Vvod}/>
            <input type="submit" value="добавить" />
        </form>
    )
}

export default Form;