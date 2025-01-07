
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { CategoriasContent } from "./ui";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Categorias',
    description: 'Categorias de Productos',
   };
export default function mantenimientoPage() {
    return (
        <>
            <Tabs>
                <TabList>
                    <Tab>Categorias</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <CategoriasContent />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
}
