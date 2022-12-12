
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { animated, useSpring, config } from 'react-spring';

// helper function to scroll to a specific element on the page
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Home = () => {
  // create a reference to the target element for the smooth scroll animation
  const scrollRef = React.useRef(null);

  // useSpring hook to animate the title
  const fadeInTitle = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(0, 40px, 0)',
      color: '#00b8d4',
      fontSize: '3em',
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
      color: '#00b8d4',
      fontSize: '3em',
    },
    config: { duration: 1000 },
    reset: true, // this will make the animation loop indefinitely
  });

  // useSpring hook to animate the welcome message
  const fadeInMessage = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(0, 40px, 0)',
      color: 'rgba(255,255,255,0.75)',
      fontSize: '1.5em',
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
      color: 'rgba(255,255,255,0.75)',
      fontSize: '1.5em',
    },
    config: { duration: 1000 },
    reset: true, // this will make the animation loop indefinitely
  });

  // useSpring hook to animate the button
  const fadeInButton = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(0, 40px, 0)',
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
    },
    config: { duration: 1000 },
    reset: true, // this will make the animation loop indefinitely
  });

  return (
    <Container
      fluid
      className="bg-dark text-light text-center p-4"
      style={{
        height: '100vh',
        backgroundImage: 'url(./monaco-bg.jpg)',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Row>
        <Col>
          <animated.h1 style={fadeInTitle}>Monaco Game</animated.h1>
          <animated.p style={fadeInMessage}>
            Welcome to the ultimate gaming experience.
          </animated.p>
        </Col>
      </Row>
      <div ref={scrollRef} />
    </Container>
  )};

  export default Home;  

