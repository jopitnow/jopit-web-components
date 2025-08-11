import React, { useState } from "react";
import './Select.css';
import {FilterSelect, Select, SelectOption} from "../../../src";

export default function SelectShowcaseScreen() {
    const [selectedValues, setSelectedValues] = useState<Set<string>>(new Set());
    
    const handleSelectChange = (type: string, value: string) => {
        if (value) {
            //setSelectedValues(prev => new Set(prev).add(`${type}: ${value}`));
        }
    };

    const BasicSelects = () => {
        const fruitOptions: SelectOption[] = [
            { value: "apple", label: "Apple" },
            { value: "banana", label: "Banana" },
            { value: "orange", label: "Orange" },
            { value: "grape", label: "Grape" }
        ];

        return (
            <div className="Select_Showcase-section">
                <h2 className="Select_Showcase-title">Selects Básicos</h2>
                <p className="Select_Showcase-description">Selects estándar con diferentes estados</p>
                
                <div className="Select_Showcase-grid">
                    <button
                        className="Select_Showcase-demo-item"
                        onClick={() => handleSelectChange("basic-normal", "demo")}>
                        <div className="Select_Showcase-demo-label">Normal</div>
                        <Select 
                            placeholder="Seleccionar una fruta" 
                            options={fruitOptions}
                            onChange={(e) => handleSelectChange("basic-normal", e.target.value)}
                        />
                    </button>
                    
                    <button
                        className="Select_Showcase-demo-item"
                        onClick={() => handleSelectChange("basic-disabled", "demo")}>
                        <div className="Select_Showcase-demo-label">Deshabilitado</div>
                        <Select 
                            placeholder="Seleccionar una fruta" 
                            options={fruitOptions}
                            isDisabled={true}
                            onChange={() => {}}
                        />
                    </button>
                    
                    <button
                        className="Select_Showcase-demo-item"
                        onClick={() => handleSelectChange("basic-loading", "demo")}>
                        <div className="Select_Showcase-demo-label">Loading</div>
                        <Select 
                            placeholder="Seleccionar una fruta" 
                            options={fruitOptions}
                            isLoading={true}
                            onChange={() => {}}
                        />
                    </button>

                    <button
                        className="Select_Showcase-demo-item"
                        onClick={() => handleSelectChange("basic-with-title", "demo")}>
                        <div className="Select_Showcase-demo-label">Con Título</div>
                        <Select 
                            title="Fruta Favorita"
                            placeholder="Seleccionar una fruta" 
                            options={fruitOptions}
                            onChange={(e) => handleSelectChange("basic-with-title", e.target.value)}
                        />
                    </button>
                </div>
            </div>
        );
    };

    const FilterSelects = () => {
        const categoryOptions: SelectOption[] = [
            { value: "electronics", label: "Electrónicos" },
            { value: "clothing", label: "Ropa" },
            { value: "books", label: "Libros" },
            { value: "home", label: "Hogar" },
            { value: "sports", label: "Deportes" }
        ];

        return (
            <div className="Select_Showcase-section">
                <h2 className="Select_Showcase-title">Filter Selects</h2>
                <p className="Select_Showcase-description">Selects de filtro con diseño específico</p>
                
                <div className="Select_Showcase-grid">
                    <button
                        className="Select_Showcase-demo-item"
                        onClick={() => handleSelectChange("filter-normal", "demo")}>
                        <div className="Select_Showcase-demo-label">Normal</div>
                        <FilterSelect 
                            placeholder="Filtrar por categoría" 
                            options={categoryOptions}
                            onChange={(e) => handleSelectChange("filter-normal", e.target.value)}/>
                    </button>
                    
                    <button
                        className="Select_Showcase-demo-item"
                        onClick={() => handleSelectChange("filter-disabled", "demo")}>
                        <div className="Select_Showcase-demo-label">Deshabilitado</div>
                        <FilterSelect 
                            placeholder="Filtrar por categoría" 
                            options={categoryOptions}
                            isDisabled={true}
                            onChange={() => {}}
                        />
                    </button>
                    
                    <button
                        className="Select_Showcase-demo-item"
                        onClick={() => handleSelectChange("filter-loading", "demo")}>
                        <div className="Select_Showcase-demo-label">Loading</div>
                        <FilterSelect 
                            placeholder="Filtrar por categoría" 
                            options={categoryOptions}
                            isLoading={true}
                            onChange={() => {}}
                        />
                    </button>
                </div>
            </div>
        );
    };

    const LargeDataSets = () => {
        const numbers: SelectOption[] = Array.from({ length: 50 }, (_, i) => ({
            value: (i + 1).toString(),
            label: `Opción ${i + 1}`
        }));

        const countries: SelectOption[] = [
            { value: "ar", label: "Argentina" },
            { value: "bo", label: "Bolivia" },
            { value: "br", label: "Brasil" },
            { value: "cl", label: "Chile" },
            { value: "co", label: "Colombia" },
            { value: "cr", label: "Costa Rica" },
            { value: "cu", label: "Cuba" },
            { value: "do", label: "República Dominicana" },
            { value: "ec", label: "Ecuador" },
            { value: "sv", label: "El Salvador" },
            { value: "gt", label: "Guatemala" },
            { value: "hn", label: "Honduras" },
            { value: "mx", label: "México" },
            { value: "ni", label: "Nicaragua" },
            { value: "pa", label: "Panamá" },
            { value: "py", label: "Paraguay" },
            { value: "pe", label: "Perú" },
            { value: "pr", label: "Puerto Rico" },
            { value: "us", label: "Estados Unidos" },
            { value: "uy", label: "Uruguay" },
            { value: "ve", label: "Venezuela" }
        ];

        return (
            <div className="Select_Showcase-section">
                <h2 className="Select_Showcase-title">Grandes Conjuntos de Datos</h2>
                <p className="Select_Showcase-description">Selects con muchas opciones para probar rendimiento</p>
                
                <div className="Select_Showcase-grid">
                    <button
                        className="Select_Showcase-demo-item"
                        onClick={() => handleSelectChange("large-numbers", "demo")}>
                        <div className="Select_Showcase-demo-label">50 Números</div>
                        <Select 
                            placeholder="Seleccionar un número" 
                            options={numbers}
                            onChange={(e) => handleSelectChange("large-numbers", e.target.value)}
                        />
                    </button>
                    
                    <button
                        className="Select_Showcase-demo-item"
                        onClick={() => handleSelectChange("large-countries", "demo")}>
                        <div className="Select_Showcase-demo-label">21 Países</div>
                        <FilterSelect 
                            placeholder="Seleccionar un país"
                            options={countries}
                            onChange={(e) => handleSelectChange("large-countries", e.target.value)}
                        />
                    </button>
                </div>
            </div>
        );
    };

    const PlaceholderVariations = () => {
        const sampleOptions: SelectOption[] = [
            { value: "option1", label: "Opción 1" },
            { value: "option2", label: "Opción 2" },
            { value: "option3", label: "Opción 3" }
        ];

        return (
            <div className="Select_Showcase-section">
                <h2 className="Select_Showcase-title">Diferentes Placeholders</h2>
                <p className="Select_Showcase-description">Selects con placeholders variados</p>
                
                <div className="Select_Showcase-grid">
                    <button
                        className="Select_Showcase-demo-item"
                        onClick={() => handleSelectChange("placeholder-crude", "demo")}>
                        <div className="Select_Showcase-demo-label">Placeholder Corto</div>
                        <Select 
                            placeholder="Elegir" 
                            options={sampleOptions}
                            onChange={(e) => handleSelectChange("placeholder-crude", e.target.value)}
                        />
                    </button>
                    
                    <button
                        className="Select_Showcase-demo-item"
                        onClick={() => handleSelectChange("placeholder-medium", "demo")}>
                        <div className="Select_Showcase-demo-label">Placeholder Medio</div>
                        <Select 
                            placeholder="Seleccionar una opción" 
                            options={sampleOptions}
                            onChange={(e) => handleSelectChange("placeholder-medium", e.target.value)}
                        />
                    </button>
                    
                    <button
                        className="Select_Showcase-demo-item"
                        onClick={() => handleSelectChange("placeholder-long", "demo")}>
                        <div className="Select_Showcase-demo-label">Placeholder Largo</div>
                        <Select 
                            placeholder="Por favor selecciona una opción del menú desplegable" 
                            options={sampleOptions}
                            onChange={(e) => handleSelectChange("placeholder-long", e.target.value)}
                        />
                    </button>

                    <button
                        className="Select_Showcase-demo-item"
                        onClick={() => handleSelectChange("placeholder-emoji", "demo")}>
                        <div className="Select_Showcase-demo-label">Placeholder con Emoji</div>
                        <Select 
                            placeholder="🎯 Elige tu destino" 
                            options={sampleOptions}
                            onChange={(e) => handleSelectChange("placeholder-emoji", e.target.value)}
                        />
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="Select_Showcase-container">
            <div className="Select_Showcase-header">
                <h1 className="Select_Showcase-main-title">📋 Select Component Showcase</h1>
                <p className="Select_Showcase-subtitle">Explora todas las variantes y configuraciones del componente Select</p>
            </div>

            <div className="Select_Showcase-content">
                <BasicSelects />
                <FilterSelects />
                <LargeDataSets />
                <PlaceholderVariations />
            </div>
        </div>
    );
}