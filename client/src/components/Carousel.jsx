// import React from 'react';

// export default function Carousel() {
//   return (
//     <div>
//       <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img src="https://source.unsplash.com/random/300x300/?chicken" className="d-block w-100" alt="chicken" />
//           </div>
//           <div className="carousel-item">
//             <img src="https://source.unsplash.com/random/300x300/?momos" className="d-block w-100" alt="momos" />
//           </div>
//           <div className="carousel-item">
//             <img src="https://source.unsplash.com/random/300x300/?pizza" className="d-block w-100" alt="pizza" />
//           </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// }
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/300x300/?chicken"
          alt="chicken"
        />
        <Carousel.Caption>
          <h3>Chicken</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/300x300/?momos"
          alt="momos"
        />
        <Carousel.Caption>
          <h3>Momos</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/300x300/?pizza"
          alt="pizza"
        />
        <Carousel.Caption>
          <h3>Pizza</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
