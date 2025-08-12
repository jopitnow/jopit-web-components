import React, { useState, useEffect } from "react";
import '../dialog/AlertDialog.css';
import AlertDialog, {DialogType} from "../../../src/dialog/alert/AlertDialog";

export default function AlertDialogShowcaseScreen() {
    const [activeDialog, setActiveDialog] = useState<DialogType | null>(null);
    const [dialogTitle, setDialogTitle] = useState("");
    const [dialogDescription, setDialogDescription] = useState("");
    const [disagreeText, setDisagreeText] = useState("");
    const [agreeText, setAgreeText] = useState("");

    const handleDialogClick = (type: DialogType) => {
        setActiveDialog(type);
    };

    const handleAgreeClick = () => {
        setActiveDialog(null);
    };

    const handleDisagreeClick = () => {
        setActiveDialog(null);
    };

    const BasicTypes = () => (
        <div className="AlertDialog_Showcase-section">
            <h2 className="AlertDialog_Showcase-title">Tipos Básicos</h2>
            <p className="AlertDialog_Showcase-description">Alert dialogs con los 4 tipos principales</p>
            
            <div className="AlertDialog_Showcase-grid">
                <button
                    className="AlertDialog_Showcase-demo-item"
                    onClick={() => handleDialogClick(DialogType.Success)}>
                    <div className="AlertDialog_Showcase-demo-label">Success</div>
                    <div className="AlertDialog_Showcase-preview">
                        <div className="AlertDialog_Type-Preview Success"></div>
                    </div>
                </button>
                
                <button
                    className="AlertDialog_Showcase-demo-item"
                    onClick={() => handleDialogClick(DialogType.Info)}>
                    <div className="AlertDialog_Showcase-demo-label">Info</div>
                    <div className="AlertDialog_Showcase-preview">
                        <div className="AlertDialog_Type-Preview Info"></div>
                    </div>
                </button>
                
                <button
                    className="AlertDialog_Showcase-demo-item"
                    onClick={() => handleDialogClick(DialogType.Warning)}>
                    <div className="AlertDialog_Showcase-demo-label">Warning</div>
                    <div className="AlertDialog_Showcase-preview">
                        <div className="AlertDialog_Type-Preview Warning"></div>
                    </div>
                </button>
                
                <button
                    className="AlertDialog_Showcase-demo-item"
                    onClick={() => handleDialogClick(DialogType.Error)}>
                    <div className="AlertDialog_Showcase-demo-label">Error</div>
                    <div className="AlertDialog_Showcase-preview">
                        <div className="AlertDialog_Type-Preview Error"></div>
                    </div>
                </button>
            </div>
        </div>
    );

    const ContentVariations = () => (
        <div className="AlertDialog_Showcase-section">
            <h2 className="AlertDialog_Showcase-title">Diferentes Contenidos</h2>
            <p className="AlertDialog_Showcase-description">Variaciones de textos y mensajes</p>
            
            <div className="AlertDialog_Showcase-grid">
                <button
                    className="AlertDialog_Showcase-demo-item"
                    onClick={() => {
                        setDialogTitle("Operación Exitosa");
                        setDialogDescription("Los datos se han guardado correctamente en el sistema.");
                        setDisagreeText("Cerrar");
                        setAgreeText("Continuar");
                        handleDialogClick(DialogType.Success);
                    }}>
                    <div className="AlertDialog_Showcase-demo-label">Corto y Directo</div>
                    <div className="AlertDialog_Text-Preview">⚡ Operación completada</div>
                </button>
                
                <button
                    className="AlertDialog_Showcase-demo-item"
                    onClick={() => {
                        setDialogTitle("Confirmación Requerida");
                        setDialogDescription("¿Estás seguro de que deseas eliminar permanentemente este elemento? Esta acción no se puede deshacer.");
                        setDisagreeText("No, cancelar");
                        setAgreeText("Sí, eliminar");
                        handleDialogClick(DialogType.Warning);
                    }}>
                    <div className="AlertDialog_Showcase-demo-label">Largo y Detallado</div>
                    <div className="AlertDialog_Text-Preview">⚠️ Mensaje largo con explicación detallada</div>
                </button>
                
                <button
                    className="AlertDialog_Showcase-demo-item"
                    onClick={() => {
                        setDialogTitle("Información Importante");
                        setDialogDescription("Tu sesión está por expirar. Por favor, guarda tu trabajo para evitar perder cambios.");
                        setDisagreeText("Más tarde");
                        setAgreeText("Actualizar ahora");
                        handleDialogClick(DialogType.Info);
                    }}>
                    <div className="AlertDialog_Showcase-demo-label">Notificación</div>
                    <div className="AlertDialog_Text-Preview">ℹ️ Notificación informativa</div>
                </button>
                
                <button
                    className="AlertDialog_Showcase-demo-item"
                    onClick={() => {
                        setDialogTitle("Error del Sistema");
                        setDialogDescription("No se pudo conectar al servidor. Por favor, verifica tu conexión e intenta nuevamente.");
                        setDisagreeText("Reintentar");
                        setAgreeText("OK");
                        handleDialogClick(DialogType.Error);
                    }}>
                    <div className="AlertDialog_Showcase-demo-label">Técnicodescripción</div>
                    <div className="AlertDialog_Text-Preview">❌ Error técnico</div>
                </button>
            </div>
        </div>
    );

    const ButtonTexts = () => {
        const customTexts = [
            { disagree: "No", agree: "Sí" },
            { disagree: "Rechazar", agree: "Aceptar" },
            { disagree: "Volver", agree: "Siguiente" },
            { disagree: "Descartar", agree: "Guardar" }
        ];

        return (
            <div className="AlertDialog_Showcase-section">
                <h2 className="AlertDialog_Showcase-title">Textos de Botones Personalizados</h2>
                <p className="AlertDialog_Showcase-description">Diferentes combinaciones de textos para los botones</p>
                
                <div className="AlertDialog_Showcase-grid">
                    {customTexts.map((texts, index) => (
                        <button
                            key={index}
                            className="AlertDialog_Showcase-demo-item"
                            onClick={() => {
                                setDialogTitle("Confirmación");
                                setDialogDescription("¿Estás seguro de realizar esta acción?");
                                setDisagreeText(texts.disagree);
                                setAgreeText(texts.agree);
                                handleDialogClick(DialogType.Info);
                            }}>
                            <div className="AlertDialog_Showcase-demo-texts">
                                <div className="AlertDialog_Showcase-demo-label">{texts.disagree} / {texts.agree}</div>
                                <div className="AlertDialog_Button-Preview">
                                    <span className="btn-disagree">{texts.disagree}</span>
                                    <span className="btn-agree">{texts.agree}</span>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    const UseCases = () => (
        <div className="AlertDialog_Showcase-section">
            <h2 className="AlertDialog_Showcase-title">Casos de Uso</h2>
            <p className="AlertDialog_Showcase-description">Ejemplos realistas de diferentes escenarios</p>
            
            <div className="AlertDialog_Showcase-grid">
                <button
                    className="AlertDialog_Showcase-demo-item"
                    onClick={() => {
                        setDialogTitle("¿Guardar Cambios?");
                        setDialogDescription("Tienes cambios sin guardar. ¿Quieres guardarlos antes de salir?");
                        setDisagreeText("No guardar");
                        setAgreeText("Guardar");
                        handleDialogClick(DialogType.Warning);
                    }}>
                    <div className="AlertDialog_Showcase-demo-label">Salvar Cambios</div>
                    <div className="AlertDialog_UseCase-Preview">📁 Formulario con cambios</div>
                </button>
                
                <button
                    className="AlertDialog_Showcase-demo-item"
                    onClick={() => {
                        setDialogTitle("Cuenta Eliminada");
                        setDialogDescription("Tu cuenta ha sido eliminada exitosamente. Todos tus datos han sido removidos.");
                        setDisagreeText("Contactar soporte");
                        setAgreeText("Entendido");
                        handleDialogClick(DialogType.Success);
                    }}>
                    <div className="AlertDialog_Showcase-demo-label">Eliminación</div>
                    <div className="AlertDialog_UseCase-Preview">🗑️ Eliminación finalizada</div>
                </button>
                
                <button
                    className="AlertDialog_Showcase-demo-item"
                    onClick={() => {
                        setDialogTitle("Error de Autenticación");
                        setDialogDescription("No pudimos verificar tus credenciales. Por favor, verifica tu email y contraseña.");
                        setDisagreeText("Recordar");
                        setAgreeText("Intentar de nuevo");
                        handleDialogClick(DialogType.Error);
                    }}>
                    <div className="AlertDialog_Showcase-demo-label">Login</div>
                    <div className="AlertDialog_UseCase-Preview">🔑 Credenciales inválidas</div>
                </button>
                
                <button
                    className="AlertDialog_Showcase-demo-item"
                    onClick={() => {
                        setDialogTitle("Actualización Disponible");
                        setDialogDescription("Una nueva versión está disponible. ¿Quieres actualizar ahora?");
                        setDisagreeText("Recordar");
                        setAgreeText("Actualizar");
                        handleDialogClick(DialogType.Info);
                    }}>
                    <div className="AlertDialog_Showcase-demo-label">Actualización</div>
                    <div className="AlertDialog_UseCase-Preview">🔄 Nueva versión</div>
                </button>
            </div>
        </div>
    );

    useEffect(() => {
        if (activeDialog !== null) {
            const typeConfigs = {
                [DialogType.Success]: {
                    title: "Operación Exitosa",
                    description: "La operación se ha completado satisfactoriamente."
                },
                [DialogType.Info]: {
                    title: "Información Importante",
                    description: "Esta es una información que necesitas conocer."
                },
                [DialogType.Warning]: {
                    title: "Advertencia",
                    description: "Por favor, ten cuidado antes de continuar."
                },
                [DialogType.Error]: {
                    title: "Error del Sistema",
                    description: "Ha ocurrido un error. Por favor, intenta de nuevo."
                }
            };
            
            if (!dialogTitle && !dialogDescription) {
                setDialogTitle(typeConfigs[activeDialog].title);
                setDialogDescription(typeConfigs[activeDialog].description);
            }
        }
    }, [activeDialog, dialogTitle, dialogDescription]);

    return (
        <div className="AlertDialog_Showcase-container">
            <div className="AlertDialog_Showcase-header">
                <h1 className="AlertDialog_Showcase-main-title">⚠️ AlertDialog Component Showcase</h1>
                <p className="AlertDialog_Showcase-subtitle">Explora todas las variantes y configuraciones del componente AlertDialog</p>
            </div>

            <div className="AlertDialog_Showcase-content">
                <BasicTypes />
                <ContentVariations />
                <ButtonTexts />
                <UseCases />
            </div>

            {activeDialog !== null && (
                <div className="AlertDialog_Showcase-overlay" onClick={handleDisagreeClick}>
                    <AlertDialog
                        type={activeDialog}
                        title={dialogTitle}
                        description={dialogDescription}
                        disagreeText={disagreeText ? disagreeText : "Cancelar"}
                        onDisagreeClick={handleDisagreeClick}
                        agreeText={agreeText ? agreeText : "Aceptar"}
                        onAgreeClick={handleAgreeClick}/>
                </div>
            )}
        </div>
    );
}