import React from 'react';

function formatDate(date) {
    return date.toLocaleDateString();
}
function Comment(props) {
    return (
        <div className="Comment">
          <div className="UserInfo">
            <img className="Avatar"
                 src={props.author.avatarUrl}
                 alt={props.author.name}
            />
            <div className="UserInfo-name">
                {props.author.name}
            </div>
          </div>
          <div className="Comment-text">
              {props.text}
          </div>
          <div className="Comment-date">
              {formatDate(props.date)}
          </div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'Chao ngay moi',
    author: {
        name: 'Hello word',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

export default class App extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
              <Comment
                  date={comment.date}
                  text={comment.text}
                  author={comment.author} />
            </div>);
    }
}