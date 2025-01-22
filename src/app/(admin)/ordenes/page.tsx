import { Content, Title } from "@/components";
import { Text } from "@chakra-ui/react";

export default function OrdenesPage() {
    return (
        <div className="">
            <Title
                iconName={"FaChartArea"}
                titulo="Ordenes"
            />
            <Content>
                

                <Text
                    className="pt-4"
                    >
                    Pagina de Control de Ordenes
                </Text>
            
            </Content>
        </div>
    );
}