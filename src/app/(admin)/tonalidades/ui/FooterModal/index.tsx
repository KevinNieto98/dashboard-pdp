'use client'

import { Confirm, Icon } from "@/components";
import { useUIStore } from "@/store";
import { Button } from "@nextui-org/react";
import { useEffect } from "react";
import { useTonalidadesStore } from "../../store";

export const FooterModal =  () => {
    const { openModalConfirmacion, mostrarAlerta } = useUIStore((state) => ({
        openModalConfirmacion: state.openModalConfirmacion,
        mostrarAlerta: state.mostrarAlerta,
      }));
      
      const { 
        selectedTonalidad,
        updateTonalidad,
        addTonalidad,
        esEdicion,  
        tonalidades 
        } = useTonalidadesStore((state) => ({
        selectedTonalidad: state.selectedTonalidad,
        updateTonalidad: state.updateTonalidad,
        addTonalidad: state.addTonalidad,
        esEdicion: state.esEdicion,
        tonalidades: state.tonalidades,
      }));

  
  

    useEffect(() => {
        if (selectedTonalidad) {
          updateTonalidad(selectedTonalidad.id);
        }
      }, [selectedTonalidad, updateTonalidad]);
    

        const submitTonalidad = () => { 
                if (esEdicion) {
                    updateTonalidad(selectedTonalidad.id);
                }else{
                    const maxId = tonalidades.reduce((max, item) => (item.id > max ? item.id : max), tonalidades[0].id);
                    addTonalidad({id:maxId +1,name: selectedTonalidad.name, activo: selectedTonalidad.activo});
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
                funcionConfrm={submitTonalidad} 
                titletext="Acción Necesaria" 
                mensaje="¿Estas seguro que deseas guardar cambios?"
                confirmText="Sí" 
                rejectText="No"  
            />
        </>
        
    );
};