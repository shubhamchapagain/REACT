import Car from "./Car";
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
      <Car
        image="https://imgd.aeplcdn.com/664x374/n/cw/ec/136217/x7-exterior-right-front-three-quarter-8.jpeg?isig=0&q=80"
        name="BMW X7"
        price="25000000"
      ></Car>
      <Car
        image="https://cdn.motor1.com/images/mgl/02EE3/s1/toyota-fortuner-gr-sport-indonesia.webp"
        name="Toyota Fortuner"
        price="15000000"
      ></Car>
      <Car
        image="https://imgd.aeplcdn.com/664x374/n/cw/ec/174323/seltos-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
        name="KIA Seltos"
        price="5800000"
      ></Car>
      <Car
        image="https://images.carandbike.com/car-images/gallery/hyundai/creta/exterior/hyundai-creta.jpg"
        name="Hyundai Creta"
        price="6000000"
      ></Car>
      <Car
        image="https://di-uploads-pod7.dealerinspire.com/mercedesbenzofneworleans/uploads/2019/11/suv-img-glc.jpg"
        name="Mercedez Benz SUV"
        price="17000000"
      ></Car>
      <Car
        image="https://techlekh.com/wp-content/uploads/2024/07/BYD-Atto-3.png"
        name="BYD Atto 3"
        price="5800000"
      ></Car>
    </section>
  );
};
export default App;
