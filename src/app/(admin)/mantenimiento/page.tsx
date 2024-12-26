
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { CategoriasContent } from "./ui";

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
