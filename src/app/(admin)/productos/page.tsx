import { Title } from "@/components";
import { Text } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Productos',
    description: 'Listado de Productos de la tienda',
};


export default function ProductosPage() {
    return (
        <div className="">
            <Title
                iconName={"FaShoppingBag"}
                titulo="Productos"
            />
            <div className="px-12 my-6">

                <Text
                    className="pt-4"
                >
                    Pagina de Control de Productos
                </Text>
            </div>
        </div>
    );
}
