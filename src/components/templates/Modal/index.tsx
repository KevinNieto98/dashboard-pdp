'use client'

import { useUIStore } from "@/store";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Switch, Textarea } from "@nextui-org/react";
import clsx from "clsx";
import React from "react";

export const ModalComponent = () => {
  const isModalOpen = useUIStore((state) => state.isModalOpen);
  const closeModal = useUIStore((state) => state.closeModal);



  return (
    <>
      <Modal
        size={'5xl'}
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Detalle de Tipo de Ingreso</ModalHeader>
              <ModalBody>
                <Input type="name" label="Nombre del Tipo de Evento" placeholder="Ingresa el nombre del tipo de evento" />
                <Textarea
                  minRows={8}
                  label="Descripcion"
                  placeholder="Ingresa el nombre del tipo de evento"
                  className="max-w-full"
                />
                <Switch defaultSelected size="lg">
                  Activo
                </Switch>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={onClose}>
                  Guardar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
