'use client'

import { AlertRegion, Confirm, Icon } from "@/components";
import { useUIStore } from "@/store";
import { Button } from "@nextui-org/react";
import { useSubCategoriasStore } from "../../store";
import { useEffect } from "react";

export const FooterModal =  () => {
    const openModalConfirmacion = useUIStore((state) => state.openModalConfirmacion);
    const mostrarAlerta = useUIStore((state) => state.mostrarAlerta);
    const selectedSubCategoria = useSubCategoriasStore((state) => state.selectedSubCategoria);
    const updateSubCategoria = useSubCategoriasStore((state) => state.updateSubCategoria);
    const addSubCategoria = useSubCategoriasStore((state) => state.addSubCategoria);
    const esEdicion = useSubCategoriasStore((state) => state.esEdicion);
    const subCategorias = useSubCategoriasStore((state) => state.subCategorias);

  

    useEffect(() => {
        if (selectedSubCategoria) {
          updateSubCategoria(selectedSubCategoria.id);
        }
      }, [selectedSubCategoria, updateSubCategoria]);
    

        const submitCategory = () => {      
            if (esEdicion) {
                updateSubCategoria(selectedSubCategoria.id);
            }else{
                const maxId = subCategorias.reduce((max, item) => (item.id > max ? item.id : max), subCategorias[0].id);
                addSubCategoria({id:maxId +1,name: selectedSubCategoria.name, activo: selectedSubCategoria.activo});
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
                funcionConfrm={submitCategory} 
                titletext="Acción Necesaria" 
                mensaje="¿Estas seguro que deseas guardar cambios?"
                confirmText="Sí" 
                rejectText="No"  
            />
        </>
        
    );
};