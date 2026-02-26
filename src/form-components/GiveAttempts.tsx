import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState(3);
    const [attRequested, setAttRequested] = useState(0);

    return (
        <div>
            <h3>Attempts left: {attempts}</h3>
            <Form.Group>
                <Form.Label>Request attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attRequested}
                    onChange={(e) => {
                        setAttRequested(Number(e.target.value));
                    }}
                ></Form.Control>
            </Form.Group>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts <= 0}
            >
                Use
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + attRequested);
                }}
            >
                Gain
            </Button>
        </div>
    );
}
