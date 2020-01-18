import React from "react";


class TextArea extends React.Component {

render(){
return(
    <>
        <textarea
            name="commentText"
            id="commentText"
            valueText={this.props.value}
            onChange={ev => {
                this.props.valueText(ev.target.value);
                
            }
            }
            cols="30"
            rows="10"
            placeholder='Введите текст комментария'
        />
    </>
    )
}

    

};

export default TextArea;