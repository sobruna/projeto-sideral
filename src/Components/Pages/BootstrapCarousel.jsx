import Carousel from "react-bootstrap/Carousel";

import ChamadaZoom from "../../Images/Carousel/chamada-zoom.jpg";
import EstudanteNotebook from "../../Images/Carousel/estudante-notebook.jpg";
import EstudanteTablet from "../../Images/Carousel/estudante-tablet.jpg";
import EstudanteNotebookMulher from "../../Images/Carousel/estudante-notebook-mulher.jpg";

function BootstrapCarousel() {
  return (
    <div className="col-10 col-md-10 col-sm-10 mt-4">
      <Carousel className="Carrossel">
        <Carousel.Item>
          <img className="d-block w-100" src={ChamadaZoom} alt="First slide" />
          <Carousel.Caption className="bg-black bg-opacity-50 rounded-4">
            <h3>Cursos de onde você estiver</h3>
            <h4>Instrutores disponíveis nos melhores horários para você!</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={EstudanteNotebook}
            alt="Second slide"
          />

          <Carousel.Caption className="bg-black bg-opacity-50 rounded-4">
            <h3>Escolha seu ritmo!</h3>
            <h4>
              Você escolhe em quanto tempo quer terminar o curso, e pode
              estender o prazo sempre que precisar!
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={EstudanteTablet}
            alt="Third slide"
          />

          <Carousel.Caption className="bg-black bg-opacity-50 rounded-4">
            <h3>Third slide label</h3>
            <h4>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={EstudanteNotebookMulher}
            alt="Third slide"
          />

          <Carousel.Caption className="bg-black bg-opacity-50 rounded-4">
            <h3>Third slide label</h3>
            <h4>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BootstrapCarousel;
