import React, {useState} from "react";


const Input = () => {
    const [value, setValue] = useState('');


    return(
        <>
        <input
            type="text"
            className='userName'
            valueInput={value}
            onChange={ev => {
                setValue(ev.target.value);
            }
            }
            placeholder='Введите Ваше имя'/>
            </>
    )

};

export default Input;