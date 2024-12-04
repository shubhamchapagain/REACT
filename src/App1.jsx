import Button from "./Button";
import Image from "./Animal";
import Person from "./person";
import Player from "./Player";
import Bird from "./bird";
const App = () => {
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Person
        image="https://m.media-amazon.com/images/S/pv-target-images/81ef275effa427553a847bc220bebe1dc314b2e79d00333f94a6bcadd7cce851.jpg"
        name="Batman"
      ></Person>
      <Person
        image="https://tmssl.akamaized.net//images/foto/galerie/cristiano-ronaldo-al-nassr-2023-1692731063-114594.jpg?lm=1692731118"
        name="Cristiano Ronaldo"
      ></Person> */}
      <Bird
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ll5w5eBgtkdOIiDTf66l4i2-M8yEQsTZxA&s"
        name="Himalayan Monal"
      ></Bird>
      <Bird
        image="https://cdn.britannica.com/37/154237-050-A76A506D/blue-peafowl-tail-Indian-peacock-courtship-displays.jpg"
        name="Peacock"
      ></Bird>
      <Bird
        image="https://forthriverstrust.org/wp-content/uploads/2019/01/kingfisher.jpg"
        name="KingFisher"
      ></Bird>
    </section>
  );
};
export default App;
