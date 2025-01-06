'use client';


import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button,} from "@nextui-org/react";
import { useUIStore } from "@/store";

type Inputs = {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
    titulo?: string,
    data?: any
    children?: React.ReactNode;
    footer?: React.ReactNode;
    esEjemplo?: boolean;

}



export const ModalEdit: React.FC<Inputs> = ({ size = "5xl" , titulo,  data, esEjemplo= true, children, footer  }) => {
    //const { isOpen, onOpen, onOpenChange } = useDisclosure();
    //const isOpen = isModalOpen
    const isOpen = useUIStore((state) => state.isModalOpen);
    const closeModal = useUIStore((state) => state.closeModal);
    const openModal = useUIStore((state) => state.openModal);

    //   // console.log(watch('nombre')) //note: esto me sirve para observar el comportamiennto de un input cada vez que se altera
    function publish(formData: any) {
        const content = formData.get("content");
        const button = formData.get("button");
        alert(`'${content}' was published with the '${button}' button`);
    };
    
    return (
        <>
            <Modal 
                size={size} 
                isOpen={isOpen} 
                onOpenChange={closeModal} 
                className="overflow-y-auto absolute"
                scrollBehavior="inside"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {esEjemplo? 'Mantenimiento de Usuarios':  titulo}
                            </ModalHeader>
                            <form action={publish}
                            >
                                {/*onSubmit={handleSubmit(onSubmit)}*/}
                                <ModalBody>
                                    {/* register your input into the hook by invoking the "register" function */}
                                    {
                                       children
                                    }
                                  

                                </ModalBody>
                                <ModalFooter 
                                    className="flex justify-end gap-2"
                                >
                                    {
                                        esEjemplo ? 
                                        <>
                                            <Button color="danger" variant="light" onPress={closeModal} size="sm">
                                                Cancelar
                                            </Button>
                                            <div className="flex items-center gap-2">
                                                <Button color="primary" onPress={closeModal} size="sm" variant="light">
                                                    Actualizar
                                                </Button>
                                                <Button name="buttton" value="submit" type="submit" color="primary" size="sm">
                                                    Crear
                                                </Button>
                                            </div>
                                        </>
                                        : footer
                                    }
                                </ModalFooter>
                            </form>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

