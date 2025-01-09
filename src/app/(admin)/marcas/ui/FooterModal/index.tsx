'use client'

import { Confirm, Icon } from "@/components";
import { useUIStore } from "@/store";
import { Button } from "@nextui-org/react";
import { useEffect } from "react";
import { useMarcasStore } from "../../store";

export const FooterModal =  () => {
    const { openModalConfirmacion, mostrarAlerta } = useUIStore((state) => ({
        openModalConfirmacion: state.openModalConfirmacion,
        mostrarAlerta: state.mostrarAlerta,
      }));
      
      const { 
        selectedMarca,
        updateMarca,
        addMarca,
        esEdicion,  
        marcas 
        } = useMarcasStore((state) => ({
        selectedMarca: state.selectedMarca,
        updateMarca: state.updateMarca,
        addMarca: state.addMarca,
        esEdicion: state.esEdicion,
        marcas: state.marcas,
      }));

  
  

    useEffect(() => {
        if (selectedMarca) {
          updateMarca(selectedMarca.id);
        }
      }, [selectedMarca, updateMarca]);
    

        const submitMarca = () => { 
                if (esEdicion) {
                    updateMarca(selectedMarca.id);
                }else{
                    const maxId = marcas.reduce((max, item) => (item.id > max ? item.id : max), marcas[0].id);
                    addMarca({id:maxId +1,name: selectedMarca.name, activo: selectedMarca.activo});
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
                funcionConfrm={submitMarca} 
                titletext="Acción Necesaria" 
                mensaje="¿Estas seguro que deseas guardar cambios?"
                confirmText="Sí" 
                rejectText="No"  
            />
        </>
        
    );
};