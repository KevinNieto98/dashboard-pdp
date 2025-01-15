'use client'

import { Header } from "@/components";
import { Input,  Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useAjustesStore } from "../../store";

interface Ajuste {
  id: number;
  name: string;
  activo: boolean;
  monto: number;
  tipoAjuste: string;
}


export const ContenidoModal = () => {


  const {
    selectedAjuste,
    updateSelectedAjuste,
    esEdicion,
    ajustes
  } = useAjustesStore((state) => ({
    selectedAjuste: state.selectedAjuste,
    updateSelectedAjuste: state.updateSelectedAjuste,
    esEdicion: state.esEdicion,
    ajustes: state.ajustes,


  }));


  const { id, name, activo, monto, tipoAjuste} = selectedAjuste;

  const [localName, setLocalName] = useState('');
  const [localMonto, setLocalMonto] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [tipoDeAjusteSeleccionado, setTipoDeAjusteSeleccionado] = useState<string>('');


  useEffect(() => {
    if (esEdicion) {
      setLocalName(name);
      setIsSelected(activo);
      setLocalMonto(monto);
      setTipoDeAjusteSeleccionado('1');
    }
  }, [esEdicion, name, activo, tipoAjuste, monto]);
  console.log('tipoDeAjusteSeleccionado', tipoDeAjusteSeleccionado);  
  
  useEffect(() => {
    if (!esEdicion) {
      setLocalName('');
      setIsSelected(tipoAjuste);
    }
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalName(e.target.value);
    updateSelectedAjuste({ ...selectedAjuste, name: e.target.value });
  };

  const handleMontoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalMonto(e.target.value);
    updateSelectedAjuste({ ...selectedAjuste, monto: e.target.value });
  };

  const handleSwitchChange = (value: boolean) => {
    setIsSelected(value);
    updateSelectedAjuste({ ...selectedAjuste, activo: value });
  };



  const handleTipoAjusteChange = async (values: any) => {
      const valor: any = Array.from(values)[0];
      console.log('valor', valor);
      
      setTipoDeAjusteSeleccionado(valor);
  };


  return (
    <div className="rounded-lg w-full md:w-full lg:w-full border border-gray-300 shadow-sm p-4 flex overflow-hidden flex-col justify-center py-12">
      <Header className="pt-2" iconName={'FaFile'} titulo={'Detalle de Categoria'} />
      <div className="flex flex-col space-y-4 pt-5 px-2">
        {esEdicion && (
          <div>
            <p>ID del Ajuste: {id}</p>
          </div>
        )}

        <Input
          label="Nombre:"
          placeholder="Ingrese el nombre de la Ajuste"
          type="text"
          value={localName}
          onChange={handleNameChange}
        />
        <div className="flex items-center space-x-4">
        {/* <Selector
            property={{
              label: 'Accion en Factura',
              className: 'w-full max-w-full', // Sobrescribe max-w-xs
              data: tiposDeAjuste,
              defaultSelectedKeys: [tipoDeAjusteSeleccionado],
              onChange: handleTipoAjusteChange,
            }}
          /> */}
          
          
          <p className="text-small text-default-500">Selected: {tipoDeAjusteSeleccionado}</p>

          <Input
            label="Monto:"
            placeholder="Ingrese el monto del Ajuste"
            type="number"
            value={localMonto}
            onChange={handleMontoChange}
          />
        </div>

        <Switch isSelected={isSelected} onValueChange={handleSwitchChange}>
          Activa
        </Switch>
      </div>
    </div>
  );
};