import { React, useMemo, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";
import { SideBar } from "./components/SideBar/SideBar";
import { UserBar } from "./components/UserBar/UserBar";
import { UsersBar } from "./components/UsersBar/UsersBar";
import fetchUserInfo from "./scripts/fetchUserInfo";
import "./App.sass";

function App() {
  let [userInfo, serUserInfo] = useState();
  let [userPosts, setUserPosts] = useState();
  let [users, setUsers] = useState();

  let [userId, setUserID] = useState(1);
  let [postComments, setPostComments] = useState();

  useMemo(() => {
    //USER--INFO
    fetchUserInfo(userId).then((resp) => {
      serUserInfo(resp);
    });

    //USERS--POSTS
    fetchUserInfo("posts").then((resp) => {
      setUserPosts(resp);
      console.log(resp);
    });

    //USERS--
    fetchUserInfo().then((resp) => {
      setUsers(resp);
    });

    //POST--COMMENTS
    fetchUserInfo("comments").then((resp) => {
      setPostComments(resp);
    });
  }, userInfo != null);

  return (
    <BrowserRouter>
      <div className="App">
        <SideBar />

        <Switch>
          {/* MY-PAGE */}

          <Route path="/MyPage">
            {userInfo && users ? (
              <UserBar
                userInfo={userInfo}
                userPosts={userPosts}
                userId={userId}
                postComments={postComments}
              />
            ) : (
              <Loader />
            )}
          </Route>

          {/* USERS */}

          <Route path="/Users">
            {users ? <UsersBar users={users} /> : <Loader />}
          </Route>

          {/* MY MESSAGES */}

          <Route path="/MyMessages">DDDDDd</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
