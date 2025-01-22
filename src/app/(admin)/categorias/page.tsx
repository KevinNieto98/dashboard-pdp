
import { Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { CategoriasContent, SubCategoriasContent } from "./ui";
import { Metadata } from "next";
import { AlertRegion, Content, Title } from "@/components";

export const metadata: Metadata = {
    title: 'Categorias',
    description: 'Categorias de Productos',
};
export default function categoriasPage() {
    return (

        <div className="">
            <AlertRegion />
            <Title
                iconName={"FaClipboardList"}
                titulo="Categorias"
            />
        <Content>
                <Text
                    className=" pb-4"
                    >
                    Pagina para administrar las categorias de los productos.
                </Text>
                <Tabs>
                    <TabList>
                        <Tab>Categorias</Tab>
                        <Tab>Sub-Categorias</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <CategoriasContent />
                        </TabPanel>
                        <TabPanel>
                            <SubCategoriasContent />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
        </Content>
        </div>


    );
}
