import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [reveal, setReveal] = useState<number>();
    function flipReveal(): void {
        if (reveal) {
            setReveal(undefined);
        } else {
            setReveal(42);
        }
    }

    return (
        <div>
            <Button onClick={flipReveal}>Reveal Answer</Button>
            <p>{reveal}</p>
        </div>
    );
}
