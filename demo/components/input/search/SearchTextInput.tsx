import React from "react";
import './SearchTextInput.css';
import { SearchTextInput } from "../../../../src";

export default function SearchTextInputScreen() {
    const onSearchChange = () => {
        console.log("Search input changed")
    }

    return (
        <div>
            <SearchTextInput
                placeholder="Buscar..."
                value=""
                onTextChange={onSearchChange}
            />
        </div>
    )
}

