import { Carousel } from "antd";
import Card1 from "../Card";
import "./Carousel.css";
const contentStyle = {
  height: "1000px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CaraouselCard = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel className="carousel" afterChange={onChange} autoplay>
      <div className="coursel__item">
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
      <div className="coursel__item">
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
      <div className="coursel__item">
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
     
    </Carousel>
  );
};

export default CaraouselCard;
