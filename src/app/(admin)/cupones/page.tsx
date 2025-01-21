import { Text } from "@chakra-ui/react";
import { Metadata } from "next";
import { AlertRegion, Title } from "@/components";
import { CuponesContent } from "./ui";

export const metadata: Metadata = {
    title: 'Cupones',
    description: 'Pagina de Mantenimiento de Cupones',
   };

export default function CuponesPage() {
    return (
        <div className="">
            <AlertRegion/> 
            <Title
                        iconName={"FaTicketAlt"}
                        titulo="Cupones" 
            />
            <div className="px-12 my-6">

            <Text
                className="pt-4"
                >
                Pagina de Mantenimiento de Cupones
            </Text>
            <CuponesContent/>
            </div>
        </div>
    );
}
