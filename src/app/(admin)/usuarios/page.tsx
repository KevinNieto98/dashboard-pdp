import { Icon } from "@/components";
import { Text } from "@chakra-ui/react";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Usuarios',
    description: 'Listado de Usuarios de la tienda',
   };
   
export default function UsuariosPage() {
    return (
        <>
            <div className="flex gap-5 self-start items-center p-3 w-full dark:text-slate-100 shadow-sm bg-blue-200">
				<div className="p-3 bg-primary text-primary-foreground dark:bg-secondary dark:text-white rounded-md">
					<Icon name={"FaAmazon"} />
				</div>
				<div className="flex flex-col">
					<h1 className="text-5x">Digitación de Facturas</h1>
				</div>
			</div>
        </>
    );
}
