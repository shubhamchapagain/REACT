import React from "react";
//? conditinal rendering
// const App = () => {
//   let num = 30;
//   let remainder = num % 2;
//   if (remainder === 0) {
//     return <p>{num} Even number</p>;
//   }
//   return <p>{num}Odd number</p>;
// };

// export default App;

const App = () => {
  let isLoggedIn = true;
  if (isLoggedIn) {
    return <p>You are logged in!</p>;
  }
  return <p>You are logged out!</p>;
};

export default App;
