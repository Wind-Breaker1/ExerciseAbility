import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

	state = {
		mouse: false
	}
	// 改变单个任务的选中条件
	handleChangeCheck = (id) => {
		return (event) => {
			this.props.updateTodo(id, event.target.checked);
		}
	}
	// 鼠标移入高亮
	mouseChange(flag) {
		return () => {
			this.setState({ mouse: flag })
		}
	}
	// 删除
	handleDelete(id) {
		return () => {
			this.props.deleteTodo(id);
		}
	}
	render() {
		const { id, name, done } = this.props;
		const { mouse } = this.state;
		return (
			<li style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseEnter={this.mouseChange(true)} onMouseLeave={this.mouseChange(false)}>
				<label>
					<input type="checkbox" checked={done} onChange={this.handleChangeCheck(id)}/>
					<span>{name}</span>
				</label>
				<button className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }} onClick={this.handleDelete(id)}>删除</button>
			</li>
		)
	}
}