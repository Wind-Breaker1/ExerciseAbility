import React, { Component } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import './App.css';

export default class App extends Component {
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '打代码', done: false },
      { id: '004', name: '逛街', done: false }
    ]
  }
  // 增加任务
  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos });
  }
  // 更新任务选中状态
  updateTodo = (id, checked) => {
    const { todos } = this.state;
    const newTodos = todos.map(item => {
      if (item.id === id) {
        item.done = checked;
      }
      return item;
    })
    this.setState({ todos: newTodos });
  }
  // 删除任务
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter(item => {
      return item.id !== id
    })
    this.setState({ todos: newTodos});
  }
  // 清除全部已选
  deleteDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter(item => {
      return item.done !== true;
    })
    this.setState({ todos: newTodos });
  }
  // 全选
  ChooseDone = (done) =>  {
    const { todos } = this.state;
    const newTodos = todos.map(item => {
      return { ...item, done};
    })
    this.setState({ todos: newTodos });
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} ChooseDone={ this.ChooseDone } deleteDone={ this.deleteDone }/>
        </div>
      </div>
    );
  }
}


