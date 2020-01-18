/* eslint-disable no-undef */
import React from "react";
import Input from "./input";
import TextArea from "./textarea";
import "./comment.css";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: [],
      userName: "",
      userText: "",
      isActive: true
    };
    this.getInputValue = this.getInputValue.bind(this);
    this.getTextAreaValue = this.getTextAreaValue.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  getInputValue(val) {
    this.setState({ userName: val });
  }
  getTextAreaValue(val) {
    this.setState({ userText: val });
  }

  getLocalComment = () => {
    if (localStorage.getItem("comment") === null) {
      console.log("Пусто");
    } else {
      let local = localStorage.getItem("comment");
      let comment = JSON.parse(local);
      this.setState({ comment });
    }
  };

  componentDidMount() {
    if (localStorage.getItem("comment") === []) {
      console.log("Пустота...");
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
    const { comment, userName, userText } = this.state;
    if (userText === "" || userName === "") {
      return alert("Введите значения");
    }
    document.querySelector('form').reset();
    const newComments = [
      ...comment,
      { name: userName, text: userText, data: this.getDate(), isActive: true }
    ];

    this.setState({ comment: newComments }, () => {
      localStorage.setItem("comment", JSON.stringify(newComments));
      this.setState({
        userName: "",
        userText: ""
      });
    });
  };

  removeComment = e => {
    const comment = this.state.comment;

    this.state.comment.map((userComment, i) => {
      if (i === e) {
        comment.splice(e, 1);
        localStorage.removeItem("comment");
      }
      let localStore = JSON.stringify(comment);
      localStorage.setItem("comment", localStore);
    });

    this.setState({
      comment
    });
  };

  render() {
    return (
      <>
        {this.state.comment.map((userComment, i) => {
          if (userComment.isActive === true) {
            return (
              <div key={i} className="containerComment">
                <div className="userNameText">
                  <p>Имя: {userComment.name}</p>
                  <p>Комментарий: {userComment.text}</p>
                </div>
                <div className="dateAndRemove">
                  <p>{userComment.data}</p>
                  <div
                    className="all_remove"
                    onClick={() => this.removeComment(i)}
                  >
                    <div className="remove"> | </div>
                    <div className="remove2"> | </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
        {
          <div className="container">
            <form className="textAndName">
              <Input inputValue={this.getInputValue} />

              <TextArea valueText={this.getTextAreaValue} />
            </form>
            <div className="userBtnContainer">
              <button className="userBtn" onClick={this.addComment}>
                Отправить коммент
              </button>
            </div>
          </div>
        }
      </>
    );
  }
}

export default Comment;
