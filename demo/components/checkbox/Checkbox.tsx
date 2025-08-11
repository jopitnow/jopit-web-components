import React, { useState } from "react";
import './Checkbox.css';
import Checkbox from "../../../src/checkbox/Checkbox";

export default function CheckboxShowcaseScreen() {

    const handleCheckboxChange = (id: string, checked: boolean) => {
        // no-op
    };

    const BasicStates = () => (
        <div className="Checkbox_Showcase-section">
            <h2 className="Checkbox_Showcase-title">Estados Básicos</h2>
            <p className="Checkbox_Showcase-description">Checkbox con checked y unchecked</p>
            
            <div className="Checkbox_Showcase-grid">
                <button
                    className="Checkbox_Showcase-demo-item"
                    onClick={() => handleCheckboxChange("basic-checked", true)}>
                    <div className="Checkbox_Showcase-demo-label">Checked</div>
                    <div className="Checkbox_Showcase-checkbox-group">
                        <Checkbox checked={true} onChange={() => {
                            // no-op
                        }} />
                    </div>
                </button>
                
                <button
                    className="Checkbox_Showcase-demo-item"
                    onClick={() => handleCheckboxChange("basic-unchecked", false)}>
                    <div className="Checkbox_Showcase-demo-label">Unchecked</div>
                    <div className="Checkbox_Showcase-checkbox-group">
                        <Checkbox checked={false} onChange={() => {
                            // no-op
                        }} />
                    </div>
                </button>
            </div>
        </div>
    );

    const WithLabels = () => (
        <div className="Checkbox_Showcase-section">
            <h2 className="Checkbox_Showcase-title">Con Labels</h2>
            <p className="Checkbox_Showcase-description">Checkbox con diferentes etiquetas</p>
            
            <div className="Checkbox_Showcase-grid">
                <div className="Checkbox_Showcase-demo-item">
                    <div className="Checkbox_Showcase-demo-label">Corto</div>
                    <div className="Checkbox_Showcase-checkbox-group">
                        <Checkbox 
                            checked={false} 
                            onChange={(e) => handleCheckboxChange("label-short", e.target.checked)} 
                        />
                        <span>Aceptar</span>
                    </div>
                </div>
                
                <div className="Checkbox_Showcase-demo-item">
                    <div className="Checkbox_Showcase-demo-label">Medio</div>
                    <div className="Checkbox_Showcase-checkbox-group">
                        <Checkbox 
                            checked={true} 
                            onChange={(e) => handleCheckboxChange("label-medium", e.target.checked)} 
                        />
                        <span>Recordar sesión</span>
                    </div>
                </div>
                
                <div className="Checkbox_Showcase-demo-item">
                    <div className="Checkbox_Showcase-demo-label">Largo</div>
                    <div className="Checkbox_Showcase-checkbox-group">
                        <Checkbox 
                            checked={false} 
                            onChange={(e) => handleCheckboxChange("label-long", e.target.checked)} 
                        />
                        <span>He leído y acepto los términos y condiciones</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const MultipleCheckboxes = () => {
        const options = [
            { id: "option1", label: "Opción 1" },
            { id: "option2", label: "Opción 2" },
            { id: "option3", label: "Opción 3" },
            { id: "option4", label: "Opción 4" }
        ];

        const [selections, setSelections] = useState<{[key: string]: boolean}>({
            option1: false,
            option2: true,
            option3: false,
            option4: false
        });

        return (
            <div className="Checkbox_Showcase-section">
                <h2 className="Checkbox_Showcase-title">Múltiples Selectores</h2>
                <p className="Checkbox_Showcase-description">Selección múltiple con diferentes combinaciones</p>
                
                <div className="Checkbox_Showcase-demo-item">
                    <div className="Checkbox_Showcase-demo-label">4 opciones</div>
                    <div className="Checkbox_Showcase-multiple">
                        {options.map((option) => (
                            <div key={option.id} className="Checkbox_Showcase-item">
                                <Checkbox 
                                    checked={selections[option.id]} 
                                    onChange={(e) => {
                                        const newSelections = { ...selections, [option.id]: e.target.checked };
                                        setSelections(newSelections);
                                        
                                        Object.keys(newSelections).forEach(key => {
                                            if (newSelections[key]) {
                                                handleCheckboxChange(`multiple-${key}`, true);
                                            }
                                        });
                                    }} 
                                />
                                <span>{option.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="Checkbox_Showcase-container">
            <div className="Checkbox_Showcase-header">
                <h1 className="Checkbox_Showcase-main-title">☑️ Checkbox Component Showcase</h1>
                <p className="Checkbox_Showcase-subtitle">Explora las diferentes configuraciones del componente Checkbox</p>
            </div>

            <div className="Checkbox_Showcase-content">
                <BasicStates />
                <WithLabels />
                <MultipleCheckboxes />
            </div>
        </div>
    );
}