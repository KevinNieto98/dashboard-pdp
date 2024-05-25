
import { PersonasContent, TipoIngreso } from "@/components";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export default function mantenimientoPage() {
    return (
        <>
            <Tabs>
                <TabList>
                    <Tab>Personas</Tab>
                    <Tab>Tipo de Ingreso</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <PersonasContent/>
                    </TabPanel>
                    <TabPanel>
                        <TipoIngreso/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
}
