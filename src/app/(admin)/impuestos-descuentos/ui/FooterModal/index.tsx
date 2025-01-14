'use client'

import { Confirm, Icon } from "@/components";
import { useUIStore } from "@/store";
import { Button } from "@nextui-org/react";
import { useEffect } from "react";
import { useAjustesStore } from "../../store";

export const FooterModal =  () => {
    const { openModalConfirmacion, mostrarAlerta } = useUIStore((state) => ({
        openModalConfirmacion: state.openModalConfirmacion,
        mostrarAlerta: state.mostrarAlerta,
      }));
      
      const { 
        selectedAjuste,
        updateAjuste,
        addAjuste,
        esEdicion,  
        ajustes 
        } = useAjustesStore((state) => ({
        selectedAjuste: state.selectedAjuste,
        updateAjuste: state.updateAjuste,
        addAjuste: state.addAjuste,
        esEdicion: state.esEdicion,
        ajustes: state.ajustes,
      }));

  
  

    useEffect(() => {
        if (selectedAjuste) {
          updateAjuste(selectedAjuste.id);
        }
      }, [selectedAjuste, updateAjuste]);
    

        const submitAjuste = () => { 
                if (esEdicion) {
                    updateAjuste(selectedAjuste.id);
                }else{
                    const maxId = ajustes.reduce((max, item) => (item.id > max ? item.id : max), ajustes[0].id);
                    addAjuste({id:maxId +1,name: selectedAjuste.name, activo: selectedAjuste.activo});
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
                funcionConfrm={submitAjuste} 
                titletext="Acción Necesaria" 
                mensaje="¿Estas seguro que deseas guardar cambios?"
                confirmText="Sí" 
                rejectText="No"  
            />
        </>
        
    );
};