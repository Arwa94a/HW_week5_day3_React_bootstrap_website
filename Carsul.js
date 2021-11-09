import { Carousel } from "react-bootstrap";
function Carsul() {
    return ( <Carousel margin-5px>
        <Carousel.Item>
          <img  style={{ width: '300px', height:'550px'}}
            className="d-block w-100"
            src="https://www.emaratalyoum.com/polopoly_fs/1.820932.1462442338!/image/image.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Fishing trips</h3>
            <p>We can organize a fishing trip for you..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img  style={{ width: '300px', height:'550px'}}
            className="d-block w-100"
            src="https://www.hasatoday.com/wp-content/uploads/2019/10/%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D8%B5%D9%82%D9%88%D8%B1-750x430.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>How to take care of falcons </h3>
            <p>we let you know How to take care of falcons.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img  style={{ width: '300px', height:'550px'}}
            className="d-block w-100"
            src="https://www.turaif1.com/wp-content/uploads/2020/02/IMG-20200218-WA0155-768x525.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Training</h3>
            <p>How raining falcons.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> );
}

export default Carsul;