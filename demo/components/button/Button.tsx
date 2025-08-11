import React, { useState } from "react";
import './Button.css';
import { Button, MiddleButton } from "../../../src";

export default function StandardButtonScreen() {
    const [clickedButtons, setClickedButtons] = useState<Set<string>>(new Set());
    
    const handleButtonClick = (type: string) => {
        setClickedButtons(prev => new Set(prev).add(type));
    };

    const BasicButtons = () => (
        <div className="Button_Showcase-section">
            <h2 className="Button_Showcase-title">Botones Básicos</h2>
            <p className="Button_Showcase-description">Botones estándar con diferentes estados básicos</p>
            
            <div className="Button_Showcase-grid">
                <button
                    className="Button_Showcase-demo-item"
                    onClick={() => handleButtonClick("primary-normal")}>
                    <div className="Button_Showcase-demo-label">Primary Normal</div>
                    <Button text="Primary Button" onClick={handleButtonClick} />
                </button>
                
                <button
                    className="Button_Showcase-demo-item"
                    onClick={() => handleButtonClick("primary-disabled")}>
                    <div className="Button_Showcase-demo-label">Primary Disabled</div>
                    <Button text="Primary Button" onClick={handleButtonClick} isDisabled={true} />
                </button>
                
                <button
                    className="Button_Showcase-demo-item"
                    onClick={() => handleButtonClick("primary-loading")}>
                    <div className="Button_Showcase-demo-label">Primary Loading</div>
                    <Button text="Loading..." onClick={handleButtonClick} isLoading={true} />
                </button>
            </div>
        </div>
    );

    const VariantButtons = () => (
        <div className="Button_Showcase-section">
            <h2 className="Button_Showcase-title">Botones Medianos</h2>
            <p className="Button_Showcase-description">Versión middle con diseño intermedio</p>
            
            <div className="Button_Showcase-grid">
                <button
                    className="Button_Showcase-demo-item"
                    onClick={() => handleButtonClick("middle-normal")}>
                    <div className="Button_Showcase-demo-label">Middle Normal</div>
                    <MiddleButton text="Middle Button" onClick={handleButtonClick} />
                </button>
                
                <button
                    className="Button_Showcase-demo-item"
                    onClick={() => handleButtonClick("middle-hover")}>
                    <div className="Button_Showcase-demo-label">Middle Hover</div>
                    <MiddleButton text="Middle Button" onClick={handleButtonClick} isDisabled={true}/>
                </button>
                
                <button
                    className="Button_Showcase-demo-item"
                    onClick={() => handleButtonClick("middle-disabled")}>
                    <div className="Button_Showcase-demo-label">Middle Disabled</div>
                    <MiddleButton text="Middle Button" onClick={handleButtonClick} isLoading={true} />
                </button>
            </div>
        </div>
    );

    const CustomButtons = () => (
        <div className="Button_Showcase-section">
            <h2 className="Button_Showcase-title">Botones Personalizados</h2>
            <p className="Button_Showcase-description">Botones con colores custom y diferentes tamaños</p>
            
            <div className="Button_Showcase-grid">
                <button
                    className="Button_Showcase-demo-item"
                    onClick={() => handleButtonClick("custom-success")}>
                    <div className="Button_Showcase-demo-label">Custom Success</div>
                    <Button text="Success" onClick={handleButtonClick} background="demo/components/button/Button#25B45A" />
                </button>
                
                <button
                    className="Button_Showcase-demo-item"
                    onClick={() => handleButtonClick("custom-warning")}>
                    <div className="Button_Showcase-demo-label">Custom Warning</div>
                    <Button text="Warning" onClick={handleButtonClick} background="demo/components/button/Button#FFB800" />
                </button>
                
                <button
                    className="Button_Showcase-demo-item"
                    onClick={() => handleButtonClick("custom-info")}>
                    <div className="Button_Showcase-demo-label">Custom Info</div>
                    <Button text="Info" onClick={handleButtonClick} background="demo/components/button/Button#3498DB" />
                </button>
                
                <button
                    className="Button_Showcase-demo-item"
                    onClick={() => handleButtonClick("custom-danger")}>
                    <div className="Button_Showcase-demo-label">Custom Danger</div>
                    <Button text="Danger" onClick={handleButtonClick} background="demo/components/button/Button#FF5656" />
                </button>
            </div>
        </div>
    );

    const TextCombinations = () => (
        <div className="Button_Showcase-section">
            <h2 className="Button_Showcase-title">Combinaciones de Texto</h2>
            <p className="Button_Showcase-description">Diferentes textos para ver cómo se adaptan los botones</p>
            
            <div className="Button_Showcase-grid">
                <button
                    className="Button_Showcase-demo-item"
                    onClick={() => handleButtonClick("text-short")}>
                    <div className="Button_Showcase-demo-label">Short Text</div>
                    <Button text="OK" onClick={handleButtonClick} />
                </button>
                
                <button
                    className="Button_Showcase-demo-item"
                    onClick={() => handleButtonClick("text-medium")}>
                    <div className="Button_Showcase-demo-label">Medium Text</div>
                    <Button text="Submit Form" onClick={handleButtonClick} />
                </button>
                
                <button
                    className="Button_Showcase-demo-item"
                    onClick={() => handleButtonClick("text-long")}>
                    <div className="Button_Showcase-demo-label">Long Text</div>
                    <Button text="Click to Save Changes" onClick={handleButtonClick} />
                </button>
                
                <button
                    className="Button_Showcase-demo-item"
                    onClick={() => handleButtonClick("text-uppercase")}>
                    <div className="Button_Showcase-demo-label">Uppercase Text</div>
                    <Button text="SUBMIT NOW" onClick={handleButtonClick} />
                </button>
            </div>
        </div>
    );

    return (
        <div className="Button_Showcase-container">
            <div className="Button_Showcase-header">
                <h1 className="Button_Showcase-main-title">🔘 Button Component Showcase</h1>
                <p className="Button_Showcase-subtitle">Explora todas las variantes y configuraciones del componente Button</p>
            </div>

            <div className="Button_Showcase-content">
                <BasicButtons />
                <VariantButtons />
                <CustomButtons />
                <TextCombinations />
            </div>

            <div className="Button_Showcase-footer">
                <div className="Button_Showcase-activity">
                    <h3>Actividad Reciente</h3>
                    <div className="Button_Showcase-clicked">
                        {clickedButtons.size === 0 ? (
                            <p>No se han hecho clics aún</p>
                        ) : (
                            <p>Botones clickeados: {Array.from(clickedButtons).join(", ")}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
