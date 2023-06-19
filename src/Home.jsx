// import { Button } from "@chakra-ui/react";
import Carousel from 'react-bootstrap/Carousel';
import first from './static/first.jpg'
import second from './static/second.jpg'
import third from './static/third.jpg'
import ProjectsSection from './components/ProjectsSection';

export default function Home() {
  const style = {
    height: '320px'
  };
  return (
    <div className='home'>
      <Carousel style={style}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={first}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={second}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={third}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <ProjectsSection></ProjectsSection>
    </div>

  );
}