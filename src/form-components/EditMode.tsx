import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface student {
    name: string;
    isStudent: boolean;
    edit: boolean;
}

export function EditMode(): React.JSX.Element {
    const [student, setStudent] = useState<student>({
        name: "Your Name",
        isStudent: true,
        edit: false,
    });
    return (
        <div>
            <h3>
                {student.name} is {student.isStudent ? "" : "not"} a student
            </h3>
            <Form.Check
                type="switch"
                checked={student.edit}
                onChange={() => {
                    setStudent({ ...student, edit: !student.edit });
                }}
            ></Form.Check>
            <Form.Group>
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    value={student.name}
                    onChange={(e) => {
                        setStudent({ ...student, name: e.target.value });
                    }}
                    disabled={!student.edit}
                ></Form.Control>
            </Form.Group>
            <Form.Check
                type="checkbox"
                label="Student"
                checked={student.isStudent}
                onChange={() => {
                    setStudent({ ...student, isStudent: !student.isStudent });
                }}
                disabled={!student.edit}
            ></Form.Check>
        </div>
    );
}
