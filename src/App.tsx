import React from "react";
import "./App.css";
import { Button, Col, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript, Joseph Stepnowski
            </header>
            <header role="heading" className="Body-header">
                Hello World
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <img
                src="src/assets/funny-expressive-dog-corgi-genthecorgi-1-61-5f0ea78f0656a__700.webp"
                alt="A silly corgi"
            />
            <ul>
                <li>Corgis</li>
                <li>are</li>
                <li>awesome</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <div
                style={{
                    width: "40px",
                    height: "20px",
                    backgroundColor: "red",
                }}
            >
                <Row>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </div>
        </div>
    );
}

export default App;
