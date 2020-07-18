import m from "mithril";

const Nav: m.Component = {
  view: () =>
    m(
      "div",
      m(m.route.Link, { href: "/" }, "Home"),
      m("span", " | "),
      m(m.route.Link, { href: "/about" }, "About")
    )
};

var count = 0; // added a variable
export const Counter: m.Component = {
  view: () =>
    m(
      "div",
      m("div", [
        m("h1", { class: "title" }, "My First App"),
        m("button", { onclick: () => count++ }, `${count} clicks`)
      ])
    )
};

var publicAPI = function (xhr: any) {
  xhr.withCredentials = false;
};

var friends: any = [];

var users = [
  { id: 1, name: "John" },
  { id: 2, name: "Mary" }
];

const userList = (users: any) =>
  users.map((u: any) => m("li", { key: u.id }, u.name + u.age));

var increment = () => {
  m.request({
    method: "POST",
    url: "http://rest.learncode.academy/api/johnbob/friends",
    body: { name: "Superman", age: 36 },
    withCredentials: false
  }).then(function (data) {
    // console.log("data", data);

    // friends = data;
    getFriends();
  });
};

var getFriends = () => {
  m.request({
    method: "GET",
    url: "http://rest.learncode.academy/api/johnbob/friends",
    withCredentials: false
  }).then(function (data) {
    console.log("data", data);

    friends = data;
  });
};

export const Friends: m.Component = {
  view: () =>
    m("div", [
      m("button", { onclick: increment }, "POST"),
      m("pre", {}, JSON.stringify(friends)),
      m("ul", userList(friends))
    ])
};

// fetch("http://rest.learncode.academy/api/johnbob/friends", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({ name: "Superman", age: 36 })
// })
//   .then((response) => response.json()) // response.json() returns a promise
//   .then((response) => {
//     console.log("You saved this item", response); //returns the new item along with its ID
//   });

export default Nav;
