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
                    hidden={!student.edit}
                ></Form.Control>
            </Form.Group>
            <Form.Check
                id="student-checkbox"
                type="checkbox"
                label="student"
                checked={student.isStudent}
                onChange={() => {
                    setStudent({
                        ...student,
                        isStudent: !student.isStudent,
                    });
                }}
                hidden={!student.edit}
            ></Form.Check>
        </div>
    );
}
