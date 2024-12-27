import React from 'react';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
} from '@nextui-org/react';
import { useUIStore } from '@/store';

interface Props {
	funcionConfrm: () => void;
	titletext?: string;
	mensaje?: string;
	confirmText?: string;
	rejectText?: string;
}
export function Confirm({ 
	funcionConfrm,
	mensaje,
	titletext,
	confirmText, 
	rejectText
}: Props) {


	const isModalConfirmacion = useUIStore((state) => state.isModalConfirmacion);
	const closeModalConfirmacion = useUIStore((state) => state.closeModalConfirmacion);
	const startConfirmacion = useUIStore((state) => state.startConfirmacion);
	const { isOpen, onOpen, onOpenChange }: any = useDisclosure();

	const handleConfirm = () => {
        console.log('LLEGO AQUI 4');
		funcionConfrm();
		console.log('LLEGO AQUI 5'); // Ejecutar la función pasada por props
		startConfirmacion();
		console.log('LLEGO AQUI 6');
		closeModalConfirmacion(); 
		console.log('LLEGO AQUI 7');// Cerrar el modal después de confirmar
	};

	return (
		<>
			<Modal
				isOpen={isModalConfirmacion}
				onOpenChange={closeModalConfirmacion}
				placement="top-center"
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								{titletext|| 'Confirmación'}
							</ModalHeader>
							<ModalBody>{mensaje||'¿Estas seguro que deseas confirmar?'}</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="flat" onPress={closeModalConfirmacion}>
									{rejectText || 'No'}
								</Button>
								<Button type="submit" color="primary" onPress={handleConfirm}>
									{confirmText || 'Sí'}
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
