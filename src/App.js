import React from 'react'
import { Button } from 'antd'
import './App.less'
// import logo from './logo.svg';
/**
 * JSX语法可以些人表达式eg : {1+2}
 * 但是不能写入js语句 : {if(a===0){}}报错
 * 可以用函数声明组件，但是函数声明的话必须是纯函数（不能修改值的函数为纯函数
 *     纯函数： fun=(a,b)=>a+b不改变ab的值
 *     非纯函数：fun2=(a,b)=>a=a+b不是纯函数，改变了a的值）
 * **/
// function App() {
//   return <div className="App">hello World</div>
// }
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>{1 + 2}</h1>
        <div>hello world</div>
        <Button type="primary">Button</Button>
      </div>
    )
  }
}

export default App
