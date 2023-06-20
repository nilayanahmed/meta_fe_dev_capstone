import Carousel from 'react-bootstrap/Carousel';
import first from '../static/first.jpg'
import second from '../static/second.jpg'
import third from '../static/third.jpg'

export default function CarouselSection() {
    const style = {
        height: '320px'
    };
    return (
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
    );
}