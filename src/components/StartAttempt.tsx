import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function attempt(arg: boolean) {
        if (!arg) {
            setInProgress(false);
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        } else if (arg && !inProgress && attempts > 0) {
            setInProgress(true);
            setAttempts(attempts - 1);
        }
    }
    function mulligan() {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <Button
                onClick={() => {
                    attempt(true);
                }}
                disabled={inProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    attempt(false);
                }}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
            <p>Attempts: {attempts}</p>
        </div>
    );
}
