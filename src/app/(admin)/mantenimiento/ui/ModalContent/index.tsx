'use client'

import { Header } from "@/components";



export const ContenidoModal = () => {


    return (
        <div className="rounded-lg w-full md:w-full lg:w-full border border-gray-300 shadow-sm p-4 flex overflow-hidden flex-col  justify-center py-12">
            <Header iconName={'FaFile'} titulo={'Resumen de Factura'} />
            <div className="flex justify-between space-x-4 pt-5">
                <div >
                    <p>Nombre de la Categoria</p>
                </div>
            </div>

  


            <div className="pt-5">

                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 pt-3 bg-red max-w-full w-full">
          
                </div>
            </div>
        </div>
    );
};