import React, { useState, useMemo } from "react";
import { Button, SearchTextInput } from "../../src";
import "./ComponentList.css"

interface ComponentItem {
  id: string;
  name: string;
  category: string;
  path: string;
  icon: string;
  description: string;
}

export default function ComponentList() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const components: ComponentItem[] = [
        {
            id: "button",
            name: "Button",
            category: "buttons",
            path: "/button",
            icon: "🔘",
            description: "Botones con diferentes estilos y tamaños"
        },
        {
            id: "middle-button",
            name: "Middle Button",
            category: "buttons",
            path: "/button/middle",
            icon: "🎯",
            description: "Botón con estilo intermedio para acciones importantes"
        },
        {
            id: "compact-button",
            name: "Compact Button",
            category: "buttons",
            path: "/button",
            icon: "⚡",
            description: "Botón compacto para espacios reducidos"
        },
        {
            id: "checkbox",
            name: "Checkbox",
            category: "forms",
            path: "/checkbox",
            icon: "☑️",
            description: "Componente de selección con estilo moderno"
        },
        {
            id: "text-input",
            name: "Text Input",
            category: "forms",
            path: "/input/standard",
            icon: "📝",
            description: "Campo de texto estándar con validación"
        },
        {
            id: "password-input",
            name: "Password Input",
            category: "forms",
            path: "/input/password",
            icon: "🔒",
            description: "Campo de contraseña con toggle visibilidad"
        },
        {
            id: "search-input",
            name: "Search Input",
            category: "forms",
            path: "/input/search",
            icon: "🔍",
            description: "Campo de búsqueda con historial y sugerencias"
        },
        {
            id: "text-area",
            name: "Text Area",
            category: "forms",
            path: "/input/area",
            icon: "📄",
            description: "Área de texto multilínea para grandes contenidos"
        },
        {
            id: "select",
            name: "Select",
            category: "selectors",
            path: "/select/standard",
            icon: "📋",
            description: "Selector desplegable con animaciones suaves"
        },
        {
            id: "filter-select",
            name: "Filter Select",
            category: "selectors",
            path: "/select/filter",
            icon: "🔽",
            description: "Selector avanzado con filtrado integrado"
        },
        {
            id: "alert-dialog",
            name: "Alert Dialog",
            category: "dialogs",
            path: "/alertdialog",
            icon: "⚠️",
            description: "Diálogo de alerta con botones de acción"
        },
        {
            id: "header",
            name: "Header",
            category: "layout",
            path: "/header",
            icon: "📑",
            description: "Componente de navegación con responsive design"
        },
        {
            id: "logo",
            name: "Logo",
            category: "layout",
            path: "/logo",
            icon: "🎨",
            description: "Componente visual de marca con animaciones"
        },
        {
            id: "error-screen",
            name: "Error Screen",
            category: "layout",
            path: "/error",
            icon: "❌",
            description: "Pantalla de error con opciones de reintento"
        }
    ];

    const categories = [
        { id: "all", name: "Todos", icon: "📋" },
        { id: "buttons", name: "Botones", icon: "🔘" },
        { id: "forms", name: "Formularios", icon: "📝" },
        { id: "selectors", name: "Selectores", icon: "📋" },
        { id: "dialogs", name: "Diálogos", icon: "💬" },
        { id: "layout", name: "Layout", icon: "🎨" }
    ];

    const filteredComponents = useMemo(() => {
        return components.filter((component) => {
            const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           component.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === "all" || component.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory]);

    const handleNavigate = (path: string) => {
        window.location.href = path;
    };

    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
    };

    return (
        <div className="Component_List">
            <div className="Component_List_Header">
                <div className="Component_List_Header_Content">
                    <h1 className="Component_List_Title">Jopit Web Components</h1>
                    <p className="Component_List_Subtitle">
                        {filteredComponents.length} componentes disponibles
                    </p>
                </div>
            </div>

            <div className="Component_List_Search">
                <SearchTextInput
                    placeholder="Buscar componentes..."
                    value={searchTerm}
                    onTextChange={handleSearchChange}
                />
            </div>

            <div className="Component_List_Filters">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={`Component_List_Filter_Button ${
                            selectedCategory === category.id ? "active" : ""
                        }`}
                        onClick={() => setSelectedCategory(category.id)}
                    >
                        <span className="Component_List_Filter_Icon">{category.icon}</span>
                        <span className="Component_List_Filter_Name">{category.name}</span>
                    </button>
                ))}
            </div>

            <div className="Component_List_Grid">
                {filteredComponents.map((component) => (
                    <div
                        key={component.id}
                        className="Component_List_Card"
                        onClick={() => handleNavigate(component.path)}
                    >
                        <div className="Component_List_Card_Header">
                            <div className="Component_List_Card_Icon">{component.icon}</div>
                            <div className="Component_List_Card_Info">
                                <h3 className="Component_List_Card_Title">{component.name}</h3>
                                <p className="Component_List_Card_Category">{component.category}</p>
                            </div>
                        </div>
                        <div className="Component_List_Card_Description">
                            {component.description}
                        </div>
                        <div className="Component_List_Card_Action">
                            <Button text="Ver componente" onClick={() => handleNavigate(component.path)} />
                        </div>
                    </div>
                ))}
            </div>

            {filteredComponents.length === 0 && (
                <div className="Component_List_Empty">
                    <div className="Component_List_Empty_Icon">🔍</div>
                    <h3>No se encontraron componentes</h3>
                    <p>Intenta con una búsqueda diferente o cambia el filtro</p>
                </div>
            )}
        </div>
    );
}
