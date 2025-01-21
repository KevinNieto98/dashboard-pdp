import { Text } from "@chakra-ui/react";
import { Metadata } from "next";
import { MarcasContent } from "./ui";
import { AlertRegion, Title } from "@/components";

export const metadata: Metadata = {
    title: 'Marcas',
    description: 'Marcas de Productos',
};

export default function MarcasPage() {
    return (
        <div className="">
            <AlertRegion />
            <Title
                iconName={"FaTag"}
                titulo="Marcas"
            />
            <div className="px-12 my-6">
                <Text
                    className=""
                >
                    Pagina de Control de Marcas
                </Text>
                <MarcasContent />
            </div>
        </div>
    );
}
