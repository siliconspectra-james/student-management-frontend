import React, {Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom';


import StudentTitle from './Components/StudentTitle'
import AddStudents from './Components/AddStudents'
import StudentList from './Components/StudentList'

 class App extends Component {

     // 定义状态，用于管理信息


     // 定义一个方法用于处理 studentList 状态
     addList = (student, cb) => {
         this.setState({
             studentList: [ ...this.state.studentList, student ]
         }, () => {
             cb()
         })
     }

     // 定义一个删除方法
     removeStudent = (number) => {
         // 核心：1. 利用 number 找到 studentList 需要被删除的项
         //       2. 将该项从原数据中删除
         //       3. 最后将处理的数据 setState ，从而渲染页面

         // 1. 深拷贝原数据
         const studentList = JSON.parse(JSON.stringify(this.state.studentList))
         // 2. 找到 number 对应项
         const index = studentList.findIndex(student => student.number === number)
         // 3. 利用 index 删除
         studentList.splice(index, 1)
         // 4. 数据更新
         this.setState({
             studentList
         }, () => {
             console.log(this.state.studentList)
         })
     }

     render() {
         return (
             <BrowserRouter>
                 <div className="container">
                     <StudentTitle/>
                     <Route path='/' exact component={StudentList}></Route>
                     <Route path='/add' exact component={AddStudents} addList={ this.addList } ></Route>
                 </div>
             </BrowserRouter>
         )
     }
 }

 export default App