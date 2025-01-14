'use client'

import { Confirm, Icon } from "@/components";
import { useUIStore } from "@/store";
import { Button } from "@nextui-org/react";

import { useEffect } from "react";
import { useCiudadesStore, useColoniasStore } from "../../store";

export const FooterModal =  () => {
    const { openModalConfirmacion, mostrarAlerta } = useUIStore((state) => ({
        openModalConfirmacion: state.openModalConfirmacion,
        mostrarAlerta: state.mostrarAlerta,
      }));
      
      const { 
        selectedColonia,
        updateColonia,
        addColonia,
        esEdicion,  
        colonias 
        } = useColoniasStore((state) => ({
        selectedColonia: state.selectedColonia,
        updateColonia: state.updateColonia,
        addColonia: state.addColonia,
        esEdicion: state.esEdicion,
        colonias: state.colonias,
      }));

      const { 
        tipo,
        values,
        selectedCiudad,
        updateCiudad
        } = useCiudadesStore((state) => ({
            tipo: state.tipo,
            values: state.values,
            selectedCiudad: state.selectedCiudad,
            updateCiudad: state.updateCiudad,

      }));
  
  

    useEffect(() => {
        if (selectedColonia) {
          updateColonia(selectedColonia.id);
        }
      }, [selectedColonia, updateColonia]);
    

        const submitCiudad = () => { 
            if (tipo === 'ciudad') {
                if (esEdicion) {
                    const selectedcolonias = colonias.filter(Colonia =>
                        values.has(Colonia.id.toString()) // Usar el método `has` si `values` es un `Set`
                      );
                      const {id, name, activo} = selectedCiudad;
                      const ciudadActualizada = {
                        id:id, 
                        name: name, 
                        activo: activo, 
                        colonias: selectedcolonias};
                        //console.log('selectedcolonias', categoriaActualizada);
                        updateCiudad(id, ciudadActualizada);
                    //updateColonia(selectedColonia.id);
                }else{
                   //TODO: Agregar categoria              
                }
            } else{
                if (esEdicion) {
                    updateColonia(selectedColonia.id);
                }else{
                    const maxId = colonias.reduce((max, item) => (item.id > max ? item.id : max), colonias[0].id);
                    addColonia({id:maxId +1,name: selectedColonia.name, activo: selectedColonia.activo});
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
                funcionConfrm={submitCiudad} 
                titletext="Acción Necesaria" 
                mensaje="¿Estas seguro que deseas guardar cambios?"
                confirmText="Sí" 
                rejectText="No"  
            />
        </>
        
    );
};