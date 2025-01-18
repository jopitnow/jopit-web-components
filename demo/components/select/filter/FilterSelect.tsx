import React, {useState} from "react";
import './FilterSelect.css';
import {Select} from "../../../../src";
import {SelectOption} from "../../../../src";

export default function FilterSelectScreen() {
    const [category, setCategory] = useState("")
    const options: SelectOption[] = [
        { value: 1, label: "Opción 1" },
        { value: 2, label: "Opción 2" },
        { value: 3, label: "Opción 3" },
    ];

    const onCategoryChange = (e) => {
        setCategory(e.target.value)
    }

    return (
        <div className="Filter_Select_Container">
            <Select
                title="Categoría"
                placeholder={"Selecciona tu categoria"}
                options={options}
                value={category}
                onChange={onCategoryChange}/>
        </div>
    )
}
