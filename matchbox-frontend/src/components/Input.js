import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import "../styles/input.css"; // Import a stylesheet for the input

const Input = () => {
  const [fade, setFade] = useState(false);

  const style = {
    backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/374/240/31/ferrari-formula-1-race-cars-monaco-wallpaper-preview.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    size: 'lg',
  }

  const formStyle = {
    margin: 'auto',
    opacity: '0.9',
    width: '20%',
    padding: '10px',
    border: '1px solid black',
    borderRadius: '5px',
    backgroundImage: 'linear-gradient(to right, #e6f2ff, #ffffff)',
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
    marginTop: '10px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '10px',
  }

  const springProps = useSpring({
    from: {
      opacity: 0,
      transform: "scale(0.9)",
    },
    to: {
      opacity: fade ? 1 : 0,
      transform: fade ? "scale(1)" : "scale(0.9)",
    },
  });

  return (
    <div style={style}>
      <Form className="form-example" style = {formStyle}>
        <Form.Group controlId="formRaceId">
          <Form.Label>Race ID</Form.Label>
          <Form.Control type="text" placeholder="Enter race ID" />
        </Form.Group>
        <Form.Group controlId="formPlayerAddress">
          <Form.Label>Player Address</Form.Label>
          <Form.Control type="text" placeholder="Enter player address" />
        </Form.Group>
        <Form.Group controlId="formCoins">
          <Form.Label>Coins</Form.Label>
          <Form.Control type="number" placeholder="Enter number of coins" />
        </Form.Group>
        <Form.Group controlId="formDistance">
          <Form.Label>Distance</Form.Label>
          <Form.Control type="number" placeholder="Enter distance" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Input;

