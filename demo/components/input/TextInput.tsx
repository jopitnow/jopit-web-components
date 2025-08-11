import React, { useState } from "react";
import './TextInput.css';
import { TextInput, TextArea, SearchTextInput, PasswordTextInput } from "../../../src";

export default function StandardTextInputScreen() {
    const [standardValues, setStandardValues] = useState({
        basic: "",
        withTitle: "",
        readOnly: "Solo lectura",
        disabled: ""
    });

    const [passwordValues, setPasswordValues] = useState({
        basic: "",
        withTitle: ""
    });

    const [searchValues, setSearchValues] = useState({
        basic: "",
        withIcon: ""
    });

    const [textareaValues, setTextareaValues] = useState({
        basic: "",
        withTitle: "",
        withRows: "",
        longText: ""
    });

    const [formValues, setFormValues] = useState({
        username: "",
        email: "",
        password: "",
        search: "",
        message: ""
    });

    const handleStandardChange = (field: string) => (e) => {
        setStandardValues(prev => ({ ...prev, [field]: e.target.value }));
    };

    const handlePasswordChange = (field: string) => (e) => {
        setPasswordValues(prev => ({ ...prev, [field]: e.target.value }));
    };

    const handleSearchChange = (field: string) => (e) => {
        setSearchValues(prev => ({ ...prev, [field]: e.target.value }));
    };

    const handleTextareaChange = (field: string) => (e) => {
        setTextareaValues(prev => ({ ...prev, [field]: e.target.value }));
    };

    const handleFormChange = (field: string) => (e) => {
        setFormValues(prev => ({ ...prev, [field]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const BasicInputs = () => (
        <div className="Input_Showcase-section">
            <h2 className="Input_Showcase-title">Inputs Básicos</h2>
            <p className="Input_Showcase-description">Inputs estándar con diferentes configuraciones básicas</p>
            
            <div className="Input_Showcase-grid">
                <div className="Input_Showcase-demo-item">
                    <div className="Input_Showcase-demo-label">Basic Input</div>
                    <TextInput
                        placeholder="Ingrese texto..."
                        value={standardValues.basic}
                        onTextChange={handleStandardChange("basic")}
                    />
                </div>
                
                <div className="Input_Showcase-demo-item">
                    <div className="Input_Showcase-demo-label">Input with Title</div>
                    <TextInput
                        title="Nombre"
                        placeholder="Ingrese su nombre"
                        value={standardValues.withTitle}
                        onTextChange={handleStandardChange("withTitle")}
                    />
                </div>
                
                <div className="Input_Showcase-demo-item">
                    <div className="Input_Showcase-demo-label">Read Only</div>
                    <TextInput
                        placeholder="Campo solo lectura"
                        value={standardValues.readOnly}
                        onTextChange={() => {
                            // no-op
                        }}
                    />
                </div>
                
                <div className="Input_Showcase-demo-item">
                    <div className="Input_Showcase-demo-label">Disabled</div>
                    <TextInput
                        placeholder="Campo deshabilitado"
                        value={standardValues.disabled}
                        onTextChange={() => {
                            // no-op
                        }}
                    />
                </div>
            </div>
        </div>
    );

    const PasswordInputs = () => (
        <div className="Input_Showcase-section">
            <h2 className="Input_Showcase-title">Password Inputs</h2>
            <p className="Input_Showcase-description">Campos de contraseña con funcionalidad de visibilidad</p>
            
            <div className="Input_Showcase-grid">
                <div className="Input_Showcase-demo-item">
                    <div className="Input_Showcase-demo-label">Basic Password</div>
                    <PasswordTextInput
                        placeholder="Ingrese contraseña"
                        value={passwordValues.basic}
                        onTextChange={handlePasswordChange("basic")}
                    />
                </div>
                
                <div className="Input_Showcase-demo-item">
                    <div className="Input_Showcase-demo-label">Password with Title</div>
                    <PasswordTextInput
                        title="Contraseña"
                        placeholder="Ingrese su contraseña"
                        value={passwordValues.withTitle}
                        onTextChange={handlePasswordChange("withTitle")}
                    />
                </div>
            </div>
        </div>
    );

    const SearchInputs = () => (
        <div className="Input_Showcase-section">
            <h2 className="Input_Showcase-title">Search Inputs</h2>
            <p className="Input_Showcase-description">Campos de búsqueda con icono integrado</p>
            
            <div className="Input_Showcase-grid">
                <div className="Input_Showcase-demo-item">
                    <div className="Input_Showcase-demo-label">Basic Search</div>
                    <SearchTextInput
                        placeholder="Buscar..."
                        value={searchValues.basic}
                        onTextChange={handleSearchChange("basic")}
                    />
                </div>
                
                <div className="Input_Showcase-demo-item">
                    <div className="Input_Showcase-demo-label">Search with Custom Value</div>
                    <SearchTextInput
                        placeholder="Buscar componentes..."
                        value={searchValues.withIcon}
                        onTextChange={handleSearchChange("withIcon")}
                    />
                </div>
            </div>
        </div>
    );

    const TextareaInputs = () => (
        <div className="Input_Showcase-section">
            <h2 className="Input_Showcase-title">Text Area Inputs</h2>
            <p className="Input_Showcase-description">Áreas de texto para múltiples líneas</p>
            
            <div className="Input_Showcase-grid">
                <div className="Input_Showcase-demo-item">
                    <div className="Input_Showcase-demo-label">Basic Textarea</div>
                    <TextArea
                        placeholder="Escriba su mensaje aquí..."
                        value={textareaValues.basic}
                        onTextChange={handleTextareaChange("basic")}
                        rows={3}
                    />
                </div>
                
                <div className="Input_Showcase-demo-item">
                    <div className="Input_Showcase-demo-label">Textarea with Title</div>
                    <TextArea
                        title="Descripción"
                        placeholder="Describa el problema en detalle..."
                        value={textareaValues.withTitle}
                        onTextChange={handleTextareaChange("withTitle")}
                        rows={4}
                    />
                </div>
                
                <div className="Input_Showcase-demo-item">
                    <div className="Input_Showcase-demo-label">Textarea with Rows</div>
                    <TextArea
                        placeholder="Personalizado con filas"
                        value={textareaValues.withRows}
                        onTextChange={handleTextareaChange("withRows")}
                        rows={2}
                        maxLength={100}
                    />
                </div>
                
                <div className="Input_Showcase-demo-item">
                    <div className="Input_Showcase-demo-label">Long Text Area</div>
                    <TextArea
                        title="Mensaje completo"
                        placeholder="Escriba su mensaje largo aquí..."
                        value={textareaValues.longText}
                        onTextChange={handleTextareaChange("longText")}
                        rows={6}
                    />
                </div>
            </div>
        </div>
    );

    const FormExample = () => (
        <div className="Input_Showcase-section">
            <h2 className="Input_Showcase-title">Form Example</h2>
            <p className="Input_Showcase-description">Ejemplo completo de formulario con todos los tipos de input</p>
            
            <div className="Input_Showcase-demo-item" style={{gridColumn: "1 / -1"}}>
                <form onSubmit={handleSubmit} className="Input_Showcase-form">
                    <div className="Input_Showcase-form-grid">
                        <div className="Input_Showcase-form-group">
                            <TextInput
                                title="Usuario"
                                placeholder="Nombre de usuario"
                                value={formValues.username}
                                onTextChange={handleFormChange("username")}
                            />
                        </div>
                        
                        <div className="Input_Showcase-form-group">
                            <TextInput
                                title="Email"
                                placeholder="Correo electrónico"
                                value={formValues.email}
                                onTextChange={handleFormChange("email")}
                                type="email"
                            />
                        </div>
                        
                        <div className="Input_Showcase-form-group">
                            <PasswordTextInput
                                title="Contraseña"
                                placeholder="Contraseña segura"
                                value={formValues.password}
                                onTextChange={handleFormChange("password")}
                            />
                        </div>
                        
                        <div className="Input_Showcase-form-group">
                            <SearchTextInput
                                placeholder="Buscar en la web..."
                                value={formValues.search}
                                onTextChange={handleFormChange("search")}
                            />
                        </div>
                        
                        <div className="Input_Showcase-form-group-full">
                            <TextArea
                                title="Mensaje"
                                placeholder="Escriba su mensaje aquí..."
                                value={formValues.message}
                                onTextChange={handleFormChange("message")}
                                rows={4}
                            />
                        </div>
                    </div>
                    
                    <button type="submit" className="Button_Showcase-submit">
                        Enviar Formulario
                    </button>
                </form>
            </div>
        </div>
    );

    return (
        <div className="Input_Showcase-container">
            <div className="Input_Showcase-header">
                <h1 className="Input_Showcase-main-title">📝 Input Components Showcase</h1>
                <p className="Input_Showcase-subtitle">Explora todas las variantes y configuraciones de los componentes de input</p>
            </div>

            <div className="Input_Showcase-content">
                <BasicInputs />
                <PasswordInputs />
                <SearchInputs />
                <TextareaInputs />
                <FormExample />
            </div>
        </div>
    );
}
