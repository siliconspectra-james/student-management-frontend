import React, { Component } from 'react'
 class StudentList extends Component {
     constructor(props) {
         super(props);
         this.state =  {
         studentList: [
             {
                 number: '1',
                 name: 'Links',
                 age: '22',
                 sex: '男',
                 college: '大前端',
                 hobbies: ['篮球']
             },
             {
                 number: '2',
                 name: 'ReoNa',
                 age: '22',
                 sex: '女',
                 college: 'python',
                 hobbies: ['网球']
             },
             {
                 number: '3',
                 name: 'Aimyon',
                 age: '25',
                 sex: '女',
                 college: 'Java',
                 hobbies: ['网球']
             }
         ]
     }
     }
     rmStudent = (e, number) => {
         e.preventDefault()
         if (window.confirm('是否确定删除当前项')) {
             this.props.removeStudent(number)
         }
     }
     render() {
         let studentList = this.state.studentList
         // 存放年纪和
         let totalAge = 0
         // 平均年龄
         let avgAge = 0
         studentList.forEach(student => totalAge += Number(student.age))
         avgAge = Math.floor(totalAge / studentList.length )
         return (
             <div className="col-md-6 col-md-offset-1">
                 <table className="table table-striped table-hover">
                     <thead>
                     <tr>
                         <th>学号</th>
                         <th>姓名</th>
                         <th>性别</th>
                         <th>年龄</th>
                         <th>入学时间</th>
                         <th>爱好</th>
                         <th>所属学院</th>
                         <th>操作</th>
                     </tr>
                     </thead>
                     <tbody>
                     {
                         studentList.map(student => {
                             return (
                                 <tr key={ student.number }>
                                     <td>{ student.number }</td>
                                     <td>{ student.name }</td>
                                     <td>{ student.sex }</td>
                                     <td>{ student.age }</td>
                                     <td>2020-08-02</td>
                                     <td>
                                         { student.hobbies.map((hobby, index) => (<span key={ index }>{ hobby }</span>)) }
                                     </td>
                                     <td>{ student.college }</td>
                                     <td>
                       <span
                           onClick={ (e) => this.rmStudent(e, student.number) }
                       >删除</span>
                                     </td>
                                 </tr>
                             )
                         })
                     }
                     </tbody>
                 </table>
                 { studentList.length === 0 ?
                     <p className="text-center">无学生信息</p> :
                     '' }
                 <p>总共有 { studentList.length } 个学生</p>
                 <p>学生的平均年龄是 { avgAge }</p>
                 <button type="submit" className="btn btn-default">添加</button>
             </div>
         )
     }
 }
 export default StudentList