export default async (id) => {
  let json = [];
  if (id == "posts") {
    let resp = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    json = await resp.json();
    return json;
  } else if (id == "comments") {
    let resp = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    json = await resp.json();
    // console.log(json);

    return json;
  } else {
    let resp = await fetch(`https://jsonplaceholder.typicode.com/users`);
    json = await resp.json();
    if (id) {
      return json[id];
    } else {
      return json;
    }
  }
};
