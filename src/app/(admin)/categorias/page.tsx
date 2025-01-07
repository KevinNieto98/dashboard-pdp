
import { Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { CategoriasContent, SubCategoriasContent } from "./ui";
import { Metadata } from "next";
import { AlertRegion } from "@/components";

export const metadata: Metadata = {
    title: 'Categorias',
    description: 'Categorias de Productos',
   };
export default function mantenimientoPage() {
    return (

  <div className="p-4">
            <AlertRegion/> 
            <Text
                as='b'
                fontSize='2xl'
            >
                Categorias
            </Text>

            <Text
                className="pt-4 pb-4"
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
                        <CategoriasContent/>
                    </TabPanel>
                    <TabPanel>
                        <SubCategoriasContent/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>

    );
}
