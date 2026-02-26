import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black",
    ];
    const [color, setColor] = useState(colors[0]);
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group>
                {colors.map((c: string) => (
                    <Form.Check
                        type="radio"
                        name="color"
                        label={c}
                        value={c}
                        key={c}
                        checked={color === c}
                        onChange={() => {
                            setColor(c);
                        }}
                        style={{ backgroundColor: c }}
                        inline
                    ></Form.Check>
                ))}
            </Form.Group>
            <line>
                <line>You have chosen </line>
                <line
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </line>
            </line>
        </div>
    );
}
