import React,{Component} from 'react'
import './input.css'
class Input extends Component{
  state = {
    name: "Nermin",
    email: "Seyidehmedovnermin@gmail.com",
    password: "1234",
    ischecked:false
}
handleInput=(e)=>{
    this.setState({[e.target.name]:e.target.value});
}
 handleCheckboxChange=(e)=>{
  this.setState({ischecked:!this.state.ischecked});
 }


render() {
    return (
      
        <div className="input">
         
            <label htmlFor="">Name</label><br></br>
            <input value={this.state.name} type="text" id="name" name="name"onChange={this.handleInput} />
            <button onClick={() => this.setState({name:""})}>x</button><br></br>
            <label htmlFor="">Email</label><br></br>
            <input value={this.state.email} type="text" id="email" name="email" onChange={this.handleInput} />
            <button onClick={() => this.setState({email:""})}>x</button><br></br>
            <label htmlFor="">Password</label><br></br>
            <input value={this.state.password} type={this.state.ischecked?"text":"password"} id="password" name="password" onChange={this.handleInput}/>
            <button onClick={() => this.setState({password:""})}>x</button><br></br>
            <label>Show  password
            < input 
            type="checkbox" checked={this.state.ischecked} onChange={ this.handleCheckboxChange}
            />
            </label>
          

    
        </div>
        
    )
}
}


export default Input