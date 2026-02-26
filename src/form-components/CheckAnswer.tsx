import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState("");
    return (
        <div>
            <Form.Group>
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    value={answer}
                    onChange={(e) => {
                        setAnswer(e.target.value);
                    }}
                ></Form.Control>
            </Form.Group>
            <div>{answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
