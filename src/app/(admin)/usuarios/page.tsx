import { Title } from "@/components";

import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Usuarios',
    description: 'Listado de Usuarios de la tienda',
   };
   
export default function UsuariosPage() {
    return (
        <>
            <Title
                iconName={"FaUser"}
                titulo="Usuarios"
            />
        </>
    );
}
