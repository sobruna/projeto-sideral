import Carousel from "react-bootstrap/Carousel";

import ChamadaZoom from "../../Images/Carousel/chamada-zoom.jpg";
import EstudanteNotebook from "../../Images/Carousel/estudante-notebook.jpg";
import EstudanteTablet from "../../Images/Carousel/estudante-tablet.jpg";
import EstudanteNotebookMulher from "../../Images/Carousel/estudante-notebook-mulher.jpg";

function BootstrapCarousel() {
  return (
    <div className="col-10 col-md-10 col-sm-10">
      <Carousel className="Carrossel">
        <Carousel.Item>
          <img className="d-block w-100" src={ChamadaZoom} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={EstudanteNotebook}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={EstudanteTablet}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={EstudanteNotebookMulher}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BootstrapCarousel;
