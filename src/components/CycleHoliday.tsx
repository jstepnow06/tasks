import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday] = useState<string[]>(["🎄", "🥚", "🦅", "🎆", "☘️"]);
    const [index, setIndex] = useState<number>(0);
    // holidays: Christmas, Easter, Independence Day, New Year's, St. Patrick's Day
    //months: 12, 4, 7, 1, 3

    function cycleAlph() {
        setIndex((index + 1) % holiday.length);
    }

    function cycleDate() {
        if (index === 0) {
            setIndex(3);
        } else if (index === 1) {
            setIndex(2);
        } else if (index === 2) {
            setIndex(0);
        } else if (index === 3) {
            setIndex(4);
        } else if (index === 4) {
            setIndex(1);
        }
    }

    return (
        <div>
            <p>Holiday: {holiday[index]}</p>
            <Button onClick={cycleAlph}>Alphabet</Button>
            <Button onClick={cycleDate}>Year</Button>
        </div>
    );
}
