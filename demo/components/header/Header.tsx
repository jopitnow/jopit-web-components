import React, { useState } from "react";
import './Header.css';
import Header from "../../../src/header/Header";

export default function HeaderShowcaseScreen() {
    const [clickedHeader, setClickedHeader] = useState<string>("");

    const handleBackClick = (type: string) => {
        setClickedHeader(`Volver - ${type}`);
    };

    return (
        <div className="Header_Showcase-container">
            <div className="Header_Showcase-header">
                <h1 className="Header_Showcase-main-title">🧭 Header Component Showcase</h1>
                <p className="Header_Showcase-subtitle">Explorea las diferentes configuraciones del componente Header</p>
            </div>

            <div className="Header_Showcase-content">
                <div className="Header_Showcase-section">
                    <h2 className="Header_Showcase-title">Header Simple</h2>
                    <p className="Header_Showcase-description">Header sin navegación hacia atrás</p>
                    <div className="Header_Showcase-demo-full">
                        <div className="Header_Showcase-demo-label">Solo título y descripción</div>
                        <Header 
                            title="Página Principal" 
                            description="Gestiona tu configuración y preferencias"
                            isBackEnabled={false}
                        />
                    </div>
                </div>

                <div className="Header_Showcase-section">
                    <h2 className="Header_Showcase-title">Header con Navegación</h2>
                    <p className="Header_Showcase-description">Header con botón para volver atrás</p>
                    <div className="Header_Showcase-demo-full">
                        <div className="Header_Showcase-demo-label">Con botón de navegación</div>
                        <Header 
                            title="Editar Perfil" 
                            description="Modifica tus datos personales"
                            isBackEnabled={true}
                            onBack={() => handleBackClick("Edición")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}