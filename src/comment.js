import React, {useState} from "react";
import Input from "./input";
import './comment.css';


class Comment extends React.Component{
    constructor(props) {
        super(props);
        this.state = {



            comment: [

            ],
            userName: '',
            userText: '',
            isActive: true
        };
    };

    getValueInput = () => {
        
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    getLocalComment = () => {
        if (localStorage.getItem('comment') === null) {
            console.log('Пусто')
        } else {
            let local = localStorage.getItem('comment')
            let comment = JSON.parse(local);
            this.setState({comment});
        }

    };

    componentDidMount() {
        if (localStorage.getItem('comment') === []){
            console.log('Пустота...')
        } else {
            this.getLocalComment();
        }
    }

    getDate = () => {
        let date = new Date();
        date = date.toLocaleString();
        return date;
    };

    addComment = () => {
        const comment = this.state.comment;
        console.log(this.getValueInput());

        if(this.onChangeInput === '' || this.state.userText === ''){
            alert('Введите значения')
        } else {
            comment.push({
                name: this.state.userName,
                text: this.state.userText,
                data: this.getDate(),
                isActive: true
            });


            let localStore = JSON.stringify(comment);
            localStorage.setItem('comment', localStore);


            this.setState({
                comment,
                userName: '',
                userText: ''
            });
        }

    };



    removeComment = (e) => {
        const comment = this.state.comment;

        this.state.comment.map((userComment, i) => {
            if(i === e) {
                comment.splice(e,1);
                localStorage.removeItem('comment');
            }
            let localStore = JSON.stringify(comment);
            localStorage.setItem('comment', localStore);
            });

        this.setState({
            comment
        })


    };

    render(){
        return(
            <>
                {
                    this.state.comment.map((userComment, i) => {
                        if (userComment.isActive === true){
                            return (
                                <div key={i} className='containerComment'>
                                    <div className='userNameText'>
                                        <p>Имя: {userComment.name}</p>
                                        <p>Комментарий: {userComment.text}</p>
                                    </div>
                                    <div className='dateAndRemove'>
                                        <p>{userComment.data}</p>
                                        <div
                                            className='all_remove'
                                            onClick={() => this.removeComment(i)}

                                        >
                                            <div className='remove'> | </div>
                                            <div className='remove2'> | </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
                {
                    <div className='container'>

                        <div className='textAndName'>

                            
                            <Input useContex={} />


                            <textarea
                                name="commentText"
                                id="commentText"
                                value={this.state.userText}
                                cols="30"
                                rows="10"
                                placeholder='Введите текст комментария'
                                onChange={ev => {
                                    this.setState({userText: ev.target.value});
                                    console.log(ev.target.value)
                                }}
                            />
                        </div>
                        <div className='userBtnContainer'>
                            <button
                                className='userBtn'
                                onClick={this.addComment}
                            >Отправить коммент
                            </button>
                        </div>

                    </div>
                }
            </>
        );
    }
}



export default Comment;