'use client'

import { AlertRegion, Confirm, Icon } from "@/components";
import { useUIStore } from "@/store";
import { Button } from "@nextui-org/react";
import { useSubCategoriasStore } from "../../store";
import { useEffect } from "react";

export const FooterModal =  () => {
    const openModalConfirmacion = useUIStore((state) => state.openModalConfirmacion);
    const selectedSubCategoria = useSubCategoriasStore((state) => state.selectedSubCategoria);
    const updateSubCategoria = useSubCategoriasStore((state) => state.updateSubCategoria);

    useEffect(() => {
        if (selectedSubCategoria) {
          updateSubCategoria(selectedSubCategoria.id);
        }
      }, [selectedSubCategoria, updateSubCategoria]);
    

        const submitCategory = () => {      
            console.log('selectedSubCategoria: ', selectedSubCategoria);
            updateSubCategoria(selectedSubCategoria.id);
            
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
                funcionConfrm={submitCategory} 
                titletext="Acción Necesaria" 
                mensaje="¿Estas seguro que deseas guardar cambios?"
                confirmText="Sí" 
                rejectText="No"  
            />

            <AlertRegion/> 
        </>
        
    );
};