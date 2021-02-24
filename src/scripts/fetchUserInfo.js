import { store } from "../Redux/stores";

export async function FetchUserInfo(setFetchIsDone, id) {
  try {
    let bufer = await fetch(`https://jsonplaceholder.typicode.com/users`);
    let usersInfo = await bufer.json();
    let userInfo = usersInfo[id];
    store.dispatch({
      type: "change",
      value: userInfo,
      object: "userInfo",
    });
    store.dispatch({
      type: "change",
      value: usersInfo,
      object: "users",
    });

    bufer = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let userPosts = await bufer.json();
    store.dispatch({
      type: "change",
      value: userPosts,
      object: "userPosts",
    });

    bufer = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    let postComments = await bufer.json();

    store.dispatch({
      type: "change",
      value: postComments,
      object: "postComments",
    });

    console.log(store.getState());
    setFetchIsDone(true);
  } catch (e) {
    setTimeout(() => {
      FetchUserInfo(setFetchIsDone, id);
    }, 5000);
    console.log("Pizda :D " + e);
  }
}
