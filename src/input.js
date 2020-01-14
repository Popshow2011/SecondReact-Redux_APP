import React, {useState} from "react";


const Input = () => {
    const [value, setValue] = useState('');
    let xxx = value;


    return(
        <>
        <input
            type="text"
            className='userName'
            value={value}
            onChange={ev => {
                setValue(ev.target.value);
                console.log(xxx);
            }
            }
            placeholder='Введите Ваше имя'/>
            </>
    )

};

export default Input;