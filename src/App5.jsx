import React from "react";
import Score from "./Score";
const playerData = [
  {
    id: 1,
    name: "Kushal Bhurtel",
    run: 30,
    city: "Butwal",
  },
  {
    id: 2,
    name: "Sandeep Lamichhane",
    run: 34,
    city: "Chitwan",
  },
  {
    id: 3,
    name: "Virat Kohli",
    run: 130,
    city: "Delhi",
  },
  {
    id: 4,
    name: "Rohit Sharma",
    run: 300,
    city: "Mumbai",
  },
];
const App = () => {
  return (
    <div>
      {playerData.map((item, index, array) => {
        return (
          <Score
            key={item.id}
            name={item.name}
            runs={item.run}
            city={item.city}
          />
        );
      })}
    </div>
  );
};

export default App;
