import React, {useState} from "react";
import './Select.css';
import { Select, SelectOption } from "../../../../src";

export default function StandardSelectScreen() {
    const [selectedValue, setSelectedValue] = useState("");
    const options: SelectOption[] = [
        { value: "option1", label: "Opción 1" },
        { value: "option2", label: "Opción 2" },
        { value: "option3", label: "Opción 3" },
        { value: "option4", label: "Opción 4" },
    ];

    const onValueChange = (value: string) => {
        setSelectedValue(value);
        console.log("Selected value:", value);
    }

    return (
        <div>
            <Select
                placeholder="Selecciona una opción"
                options={options}
                value={selectedValue}
                onChange={onValueChange}
            />
        </div>
    )
}
