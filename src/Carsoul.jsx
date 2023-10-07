import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel className='carsoul'>
      <Carousel.Item interval={2000}>
      <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/3079600.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 style={{position:'relative',top:'-300px'}}>WelCome To CodeWave</h1>
          <h2 style={{position:'relative',top:'-300px'}}><b>Get your desire courses with best lectures. Hurry up guys!</b></h2>
        </Carousel.Caption>
      </Carousel.Item>
    
      <Carousel.Item interval={2000}>
      <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/1728960.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
       
          <h1 style={{position:'relative',top:'-300px'}}>What are you waiting for</h1>
          <h3 style={{position:'relative',top:'-300px'}}>Programming, Development, Artificial Intelligence and many more!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/1426870.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='heading3' style={{position:'relative',top:'-300px'}}>Get the placement level course with our teachers</h1>
          <h3 className='heading3' style={{position:'relative',top:'-300px'}}><b>
          Become expert in Technical Field</b>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;