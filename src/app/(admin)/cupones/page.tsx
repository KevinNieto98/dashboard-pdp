import { Text } from "@chakra-ui/react";
import { Metadata } from "next";
import { AlertRegion, Content, Title } from "@/components";
import { CuponesContent } from "./ui";

export const metadata: Metadata = {
    title: 'Cupones',
    description: 'Pagina de Mantenimiento de Cupones',
};

export default function CuponesPage() {
    return (
        <div className="">
            <AlertRegion />
            <Title
                iconName={"FaTicketAlt"}
                titulo="Cupones"
            />
            <Content>

                <Text
                    className="pt-4"
                >
                    Pagina de Mantenimiento de Cupones
                </Text>
                <CuponesContent />

            </Content>
        </div>
    );
}
