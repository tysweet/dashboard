import React from 'react';

class TodoList extends React.Component {

  removeItem(item, i) {
    this.props.handleDelete(item, i);
  }

  render() {
    return (
      <ul>
        { this.props.toDoList.map((todo, i) => {
          return <li onClick={() => { this.removeItem(todo, i)}} key={i}>{ todo }</li>
        })}
      </ul>
    );
  }
}

export default TodoList;