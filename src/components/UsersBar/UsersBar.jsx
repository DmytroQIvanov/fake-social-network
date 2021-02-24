import { React } from 'react';
import "./UsersBar.sass";

export let UsersBar =(props)=>{
    let users =props.users
    
    return(<div className="UsersBar">
      <div>{users.map((elem)=>(
        <div className="UsersBar__list">
        <div className="UsersBar__name" onClick={()=>alert(elem.name)}>{elem.name}</div>
        <div>{elem.email}</div>
        <div>{elem.phone}</div>    
        </div>
    ))}</div></div>)
}