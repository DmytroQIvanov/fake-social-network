import { React } from 'react';
import { Link, Route } from "react-router-dom";
import "./SideBar.sass";
import myPage from "./img/myPage.svg";
import settings from "./img/settings.svg";
import myMessages from "./img/myMessages.svg";
import users from "./img/users.svg";

export let SideBar =()=>{

    return(<div className="SideBar">
        <Link className="SideBar__My-Page link" to="./MyPage"><img src={myPage}/><div>My page</div></Link>
        <Link  className="SideBar__My-Messages link" to="./MyMessages"><img src={myMessages}/>My Messages</Link>
        <Link className="SideBar__Users link" to="./Users"><img src={users}/>Users</Link>
        <Link className="SideBar__Settings link" to="./Settings"><img src={settings}/>Settings</Link>
    </div>)
}
