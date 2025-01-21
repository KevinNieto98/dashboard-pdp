import { Title } from "@/components";
import { Text } from "@chakra-ui/react";

export default function OrdenesPage() {
    return (
        <div className="">
            <Title
                iconName={"FaChartArea"}
                titulo="Ordenes"
            />
            <div className="px-12 my-6">

                <Text
                    className="pt-4"
                >
                    Pagina de Control de Ordenes
                </Text>
            </div>
        </div>
    );
}