'use client'

import { AlertRegion, Confirm, Icon } from "@/components";
import { Button } from "@nextui-org/react";

export const FooterModal =  () => {

    return (
        <>
            <Button
                color="success"
                className="text-white"
                startContent={
                    <Icon
                        name="FaPlus"
                    />
                }
            >
                Agregar
            </Button>
            <div className="flex items-center gap-2">
                <Button
                    color="success"
                    className="text-white"
                    startContent={
                        <Icon
                            name="FaPlus"
                        />
                    }
                >
                Agregar
            </Button>
            </div>
            <Confirm 
                funcionConfrm={()=>console.log('Confirmado')} 
                titletext="Acción Necesaria" 
                confirmText="Sí" 
                rejectText="No"  
            />

            <AlertRegion/> 
        </>
        
    );
};