'use client'

import { Confirm, Icon } from "@/components";
import { useUIStore } from "@/store";
import { Button } from "@nextui-org/react";
import { useEffect } from "react";
import { useMetodosStore } from "../../store";

export const FooterModal =  () => {
    const { openModalConfirmacion, mostrarAlerta } = useUIStore((state) => ({
        openModalConfirmacion: state.openModalConfirmacion,
        mostrarAlerta: state.mostrarAlerta,
      }));
      
      const { 
        selectedMetodo,
        updateMetodo,
        addMetodo,
        esEdicion,  
        metodos 
        } = useMetodosStore((state) => ({
        selectedMetodo: state.selectedMetodo,
        updateMetodo: state.updateMetodo,
        addMetodo: state.addMetodo,
        esEdicion: state.esEdicion,
        metodos: state.metodos,
      }));

  
  

    useEffect(() => {
        if (selectedMetodo) {
          updateMetodo(selectedMetodo.id);
        }
      }, [selectedMetodo, updateMetodo]);
    

        const submitMetodo = () => { 
                if (esEdicion) {
                    updateMetodo(selectedMetodo.id);
                }else{
                    const maxId = metodos.reduce((max, item) => (item.id > max ? item.id : max), metodos[0].id);
                    addMetodo({id:maxId +1,name: selectedMetodo.name, activo: selectedMetodo.activo});
                }
            
            mostrarAlerta("Guardado", "Cambios guardados correctamente", "success");
           
            
          };

    return (
        <>
            <div className="flex items-center gap-2  justify-end">
                <Button
                    color="success"
                    className="text-white"
                    onPress={openModalConfirmacion}
                    startContent={
                        <Icon
                            name="FaSave"
                        />
                    }
                >
                Guardar
            </Button>
            </div>
            <Confirm 
                funcionConfrm={submitMetodo} 
                titletext="Acción Necesaria" 
                mensaje="¿Estas seguro que deseas guardar cambios?"
                confirmText="Sí" 
                rejectText="No"  
            />
        </>
        
    );
};