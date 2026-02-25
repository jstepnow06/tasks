import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    const [outType, setOutType] = useState<string>("Short Answer");

    function changeType(): void {
        if (type === "short_answer_question") {
            setType("multiple_choice_question");
            setOutType("Multiple Choice");
        } else {
            setType("short_answer_question");
            setOutType("Short Answer");
        }
    }

    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            <p>{outType}</p>
        </div>
    );
}
