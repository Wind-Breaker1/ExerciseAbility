import React from "react";
import './index.css'
// style={{display:mouse ? 'block': 'none'}}
export default class Footer extends React.Component{
  // 清除全部已完成
  handleDelDone = () => {
    this.props.deleteDone();
  }
  // 全选
  handleChooseDone = (event) => {
    this.props.ChooseDone(event.target.checked);
  }
  render() {
    const { todos } = this.props;
    const doneNum = todos.reduce((pre, cur) => pre + (cur.done ? 1 : 0), 0)
    const total = todos.length;

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleChooseDone} checked={doneNum === total && total ? true : false}/>
        </label>
        <span>
          <span>已完成{ doneNum }</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleDelDone} >清除已完成任务</button>
      </div>
    )
  }
}