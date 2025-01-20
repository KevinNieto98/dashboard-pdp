'use client'

import { Confirm, Icon } from "@/components";
import { useUIStore } from "@/store";
import { Button } from "@nextui-org/react";
import { useEffect } from "react";
import { useCuponesStore } from "../../store";

export const FooterModal =  () => {
    const { openModalConfirmacion, mostrarAlerta } = useUIStore((state) => ({
        openModalConfirmacion: state.openModalConfirmacion,
        mostrarAlerta: state.mostrarAlerta,
      }));
      
      const { 
        selectedCupon,
        updateCupon,
        addCupon,
        esEdicion,  
        cupones 
        } = useCuponesStore((state) => ({
        selectedCupon: state.selectedCupon,
        updateCupon: state.updateCupon,
        addCupon: state.addCupon,
        esEdicion: state.esEdicion,
        cupones: state.cupones,
      }));

  
  

    useEffect(() => {
        if (selectedCupon) {
          updateCupon(selectedCupon.id);
        }
      }, [selectedCupon, updateCupon]);
    

        const submitCupon = () => { 
                if (esEdicion) {
                    updateCupon(selectedCupon.id);
                }else{
                    const maxId = cupones.reduce((max, item) => (item.id > max ? item.id : max), cupones[0].id);
                    addCupon(
                        {id:maxId +1,
                        name: selectedCupon.name, 
                        activo: selectedCupon.activo,
                        monto: selectedCupon.monto, 
                        fecha_caducidad: selectedCupon.fecha_caducidad,
                        codigo: selectedCupon.codigo,
                        tipo_cupon: selectedCupon.tipo_cupon
                        });
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
                funcionConfrm={submitCupon} 
                titletext="Acción Necesaria" 
                mensaje="¿Estas seguro que deseas guardar cambios?"
                confirmText="Sí" 
                rejectText="No"  
            />
        </>
        
    );
};