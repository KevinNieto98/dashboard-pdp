'use client'

import { Confirm, Icon } from "@/components";
import { useUIStore } from "@/store";
import { Button } from "@nextui-org/react";
import { useCategoriasStore, useSubCategoriasStore } from "../../store";
import { useEffect } from "react";

export const FooterModal =  () => {
    const { openModalConfirmacion, mostrarAlerta } = useUIStore((state) => ({
        openModalConfirmacion: state.openModalConfirmacion,
        mostrarAlerta: state.mostrarAlerta,
      }));
      
      const { 
        selectedSubCategoria,
        updateSubCategoria,
        addSubCategoria,
        esEdicion,  
        subCategorias 
        } = useSubCategoriasStore((state) => ({
        selectedSubCategoria: state.selectedSubCategoria,
        updateSubCategoria: state.updateSubCategoria,
        addSubCategoria: state.addSubCategoria,
        esEdicion: state.esEdicion,
        subCategorias: state.subCategorias,
      }));

      const { 
        tipo 
        } = useCategoriasStore((state) => ({
            tipo: state.tipo,

      }));
  
  

    useEffect(() => {
        if (selectedSubCategoria) {
          updateSubCategoria(selectedSubCategoria.id);
        }
      }, [selectedSubCategoria, updateSubCategoria]);
    

        const submitCategory = () => { 
            if (tipo === 'categoria') {
                //todo: addCategoria and updateCategoria
                return;
            } else{
                if (esEdicion) {
                    updateSubCategoria(selectedSubCategoria.id);
                }else{
                    const maxId = subCategorias.reduce((max, item) => (item.id > max ? item.id : max), subCategorias[0].id);
                    addSubCategoria({id:maxId +1,name: selectedSubCategoria.name, activo: selectedSubCategoria.activo});
                }
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