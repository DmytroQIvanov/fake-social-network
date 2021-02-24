import { React, useMemo, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";
import { SideBar } from "./components/SideBar/SideBar";
import { UserBar } from "./components/UserBar/UserBar";
import { UsersBar } from "./components/UsersBar/UsersBar";
import { FetchUserInfo } from "./scripts/fetchUserInfo";
import { connect } from "react-redux";
import { store } from "./Redux/stores";

import "./App.sass";

function App(props) {
  let { user } = props;
  let [fetchIsDone, setFetchIsDone] = useState(false);
  useMemo(() => FetchUserInfo(setFetchIsDone, user.userId), fetchIsDone);

  return (
    <BrowserRouter>
      <div className="App">
        <SideBar />
        <Switch>
          {/* MY-PAGE */}

          <Route path="/MyPage">
            {fetchIsDone ? (
              <UserBar
                userInfo={user.userInfo}
                userPosts={user.userPosts}
                userId={user.userId}
                postComments={user.postComments}
              />
            ) : (
              <Loader />
            )}
          </Route>

          {/* USERS */}

          <Route path="/Users">
            {fetchIsDone ? <UsersBar users={user.users} /> : <Loader />}
          </Route>

          {/* MY MESSAGES */}

          <Route path="/MyMessages">DDDDDd</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

export default connect(mapStateToProps)(App);
