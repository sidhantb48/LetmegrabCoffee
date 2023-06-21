import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./images.css";

const Image = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "80px",
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider className="slider" {...settings}>
      <div className="imageDisplay">
        <img className="img" src="/assets/Coffee1.jpg" alt="Image 1" />
      </div>
      <div>
        <img className="img" src="/assets/Coffee2.webp" alt="Image 2" />
      </div>
      <div>
        <img className="img" src="/assets/Coffee3.jpg" alt="Image 3" />
      </div>
      <div>
        <img className="img" src="/assets/Coffee4.webp" alt="Image 4" />
      </div>
      <div>
        <img className="img" src="/assets/Coffee5.jpg" alt="Image 5" />
      </div>
      <div>
        <img className="img" src="/assets/Coffee6.webp" alt="Image 6" />
      </div>
      <div>
        <img className="img" src="/assets/Coffee7.webp" alt="Image 7" />
      </div>
      <div>
        <img className="img" src="/assets/Coffee8.webp" alt="Image 8" />
      </div>
      <div>
        <img className="img" src="/assets/Coffee9.webp" alt="Image 9" />
      </div>
      <div>
        <img className="img" src="/assets/Coffee10.webp" alt="Image 10" />
      </div>
      <div>
        <img className="img" src="/assets/Coffee11.jpg" alt="Image 11" />
      </div>
      <div>
        <img className="img" src="/assets/Coffee12.png" alt="Image 12" />
      </div>
      <div>
        <img className="img" src="/assets/Coffee.webp" alt="Image 13" />
      </div>
    </Slider>
  );
};

export default Image;
