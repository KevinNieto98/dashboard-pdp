import { Text } from "@chakra-ui/react";

export const PersonasContent = () =>  {
    return (
        <div className="p-4">
            <Text
                as='b'
                fontSize='2xl'
            >
                Mantenimiento de Personas
            </Text>

            <Text
                className="pt-4"
            >
                Pagina para administrar los miembros vigentes de la Iglesia.
            </Text>
        </div>
    );
}
