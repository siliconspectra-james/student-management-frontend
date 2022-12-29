import React, { Component } from 'react'

 class AddStudents extends Component {

     constructor(props) {
         super()
         this.handler = this.handler.bind(this)
     }

     // 1. 定义组件中的状态
     state = {
         number: '',
         name: '',
         sex: '女',
         age: '',
         college: '大前端',
         hobbies: [
             {
                 id: 1,
                 title: '篮球',
                 isChecked: false
             },
             {
                 id: 2,
                 title: '足球',
                 isChecked: false
             },
             {
                 id: 3,
                 title: '网球',
                 isChecked: false
             }
         ]
     }
     // 浅拷贝，对象会有问题
     // origin = { ...this.state }
     // 深拷贝
     origin = JSON.parse(JSON.stringify(this.state))

     // 2. 设置更新的控制
     handler = (e) => {
         // 获取当前输入的值，然后调用 setState 更新在具体属性上
         const value = e.target.value
         const prop = e.target.name
         this.setState({
             [prop]: value
         })
     }

     // hobbyHandler
     hobbyHandler = (e, index) => {
         const isChecked = e.target.checked
         const hobbies = [...this.state.hobbies]
         hobbies[index].isChecked = isChecked
         this.setState({
             hobbies
         })
     }

     // 提交添加
     submit = (e) => {
         e.preventDefault()
         // 提交时需要将表单的有用信息整合
         // 1. 筛选当前选中的爱好
         const hobbies = this.state.hobbies
             .filter(item => item.isChecked)
             .map(item => item.title)
         // 2. 将上述处理好的数据和其他数据整合
         const formVal = {
             ...this.state, hobbies
         }
         // 3. 将当前数据利用回调方式，上传给上层组件
         this.props.addList(formVal, () => {
             // 4. 提交完成后，重置表单
             this.setState(this.origin)
         })
     }

     render() {
         return (
             <div className="col-md-5">
                 <form onSubmit={ this.submit }>
                     <div className="form-group">
                         <label>学号</label>
                         <input
                             name="number"
                             value={this.state.number}
                             onChange={this.handler}
                             type="number"
                             className="form-control"
                             placeholder="请输入学号" />
                     </div>
                     <div className="form-group">
                         <label>姓名</label>
                         <input
                             name="name"
                             value={this.state.name}
                             onChange={this.handler}
                             type="text"
                             className="form-control"
                             placeholder="请输入姓名"
                         />
                     </div>
                     <div className="form-group">
                         <label>性别&nbsp;&nbsp;</label>
                         <label className="checkbox-inline">
                             <input
                                 name="sex"
                                 checked={this.state.sex === '男'}
                                 onChange={this.handler}
                                 type="radio" value="男" /> 男
                         </label>
                         <label className="checkbox-inline">
                             <input
                                 name="sex"
                                 checked={this.state.sex === '女'}
                                 onChange={this.handler}
                                 type="radio"
                                 value="女" /> 女
                         </label>
                     </div>
                     <div className="form-group">
                         <label>年龄</label>
                         <input
                             name="age"
                             value={this.state.age}
                             onChange={this.handler}
                             type="text"
                             className="form-control"
                             placeholder="请输入年龄"
                         />
                     </div>
                     <div className="form-group">
                         <label>爱好</label>
                         {
                             this.state.hobbies.map((item, index) => {
                                 return (
                                     <div
                                         className="checkbox"
                                         key={ item.id }
                                     >
                                         <label>
                                             <input
                                                 type="checkbox"
                                                 value={ item.title }
                                                 checked={ item.isChecked }
                                                 onChange={ (e) => { this.hobbyHandler(e, index) } }
                                             />
                                             { item.title }
                                         </label>
                                     </div>
                                 )
                             })
                         }

                     </div>
                     <div className="form-group">
                         <label>所属学院</label>
                         <select
                             name="college"
                             value={this.state.college}
                             onChange={this.handler}
                             className="form-control"
                         >
                             <option value="大前端">大前端</option>
                             <option value="Java">Java</option>
                             <option value="python">python</option>
                         </select>
                     </div>
                 </form>
             </div>
         )
     }
 }

 export default AddStudents
