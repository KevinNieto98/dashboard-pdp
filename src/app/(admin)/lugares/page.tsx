
import { Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { Metadata } from "next";
import { AlertRegion, Content, Title } from "@/components";
import { CiudadesContent, ColoniasContent } from "./ui";

export const metadata: Metadata = {
    title: 'Lugares',
    description: 'Lugares de Entrega',
};
export default function LugaresPage() {
    return (

        <div className="">
            <AlertRegion />
            <Title
                iconName={"FaLocationArrow"}
                titulo="Lugares de Entrega" />
            <Content>
                <Text
                    className="pb-4"
                >
                    Pagina para administrar los lugares de entrega .
                </Text>
                <Tabs>
                    <TabList>

                        <Tab>Ciudades</Tab>
                        <Tab>Colonia</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <CiudadesContent />
                        </TabPanel>
                        <TabPanel>
                            <ColoniasContent />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Content>
        </div>


    );
}
