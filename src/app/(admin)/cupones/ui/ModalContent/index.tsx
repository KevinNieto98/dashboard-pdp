'use client';

import { Header } from "@/components";
import { DatePicker, Input, Spinner, Switch, DateValue, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useCuponesStore } from "../../store";
import { parseDate } from "@internationalized/date";

export const tiposDeCupon = [
  { key: "porcentaje", label: "Porcentaje" },
  { key: "dinero", label: "Dinero" },
];

export const ContenidoModal = () => {
  const [loading, setLoading] = useState(true);

  const {
    selectedCupon,
    updateSelectedCupon,
    esEdicion
  } = useCuponesStore((state) => ({
    selectedCupon: state.selectedCupon,
    updateSelectedCupon: state.updateSelectedCupon,
    esEdicion: state.esEdicion
  }));

  const { id, name, activo, monto, tipo_cupon, codigo, fecha_caducidad } = selectedCupon;
  console.log(selectedCupon);

  const [localName, setLocalName] = useState('');
  const [localMonto, setLocalMonto] = useState('');
  const [localCodigo, setLocalCodigo] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [tipoDeCuponSeleccionado, setTipoDeCuponSeleccionado] = useState<string>('');
  const [date, setDate] = useState<DateValue | null>(null);

  useEffect(() => {
    if (esEdicion) {
      setLocalName(name);
      setIsSelected(activo);
      setLocalMonto(monto);
      setLocalCodigo(codigo);
      setTipoDeCuponSeleccionado(tipo_cupon);
      
      const parsedDate = new Date(fecha_caducidad);
      if (!isNaN(parsedDate.getTime())) {
        setDate(parseDate(parsedDate.toISOString().split('T')[0]));
      } else {
        console.error("Invalid ISO 8601 date string:", fecha_caducidad);
      }
      console.log('flag 2');
      console.log('tipoDeCuponSeleccionado', tipoDeCuponSeleccionado);
      setTimeout(() => setLoading(false), 4000);
      
    }
  }, [esEdicion, name, activo, tipo_cupon, monto, codigo, fecha_caducidad]);

  useEffect(() => {
    if (!esEdicion) {
      setLocalName('');
      setIsSelected(false);
      setLocalMonto('');
      setTipoDeCuponSeleccionado('');
      setLoading(false);
    }
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalName(e.target.value);
    updateSelectedCupon({ ...selectedCupon, name: e.target.value });
  };

  const handleCodigoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalCodigo(e.target.value);
    updateSelectedCupon({ ...selectedCupon, codigo: e.target.value });
  };

  const handleMontoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalMonto(e.target.value);
    updateSelectedCupon({ ...selectedCupon, monto: e.target.value });
  };

  const handleSwitchChange = (value: boolean) => {
    setIsSelected(value);
    updateSelectedCupon({ ...selectedCupon, activo: value });
  };

  const handleTipoCuponChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('flag 1');
    
    const value = e.target.value;
    setTipoDeCuponSeleccionado(value);
    updateSelectedCupon({ ...selectedCupon, tipo_Cupon: value });
  };

  const handleFechaCaducidadChange = (newDate: DateValue) => {
    setDate(newDate);
    const isoDateString = new Date(newDate.year, newDate.month - 1, newDate.day).toISOString();
    updateSelectedCupon({ ...selectedCupon, fecha_caducidad: isoDateString });
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="rounded-lg w-full md:w-full lg:w-full border border-gray-300 shadow-sm p-4 flex overflow-hidden flex-col justify-center py-12">
          <Header className="pt-2" iconName={'FaFile'} titulo={'Detalle de Cupon'} />
          <div className="flex flex-col space-y-4 pt-5 px-2">
            {esEdicion && (
              <div>
                <p>ID del Cupon: {id}</p>
              </div>
            )}
            <div className="flex space-x-4">
              <Input
                label="Nombre:"
                placeholder="Ingrese el nombre del Cupon"
                type="text"
                value={localName}
                onChange={handleNameChange}
              />
              <Input
                label="Codigo:"
                placeholder="Ingrese el codigo del Cupon"
                type="text"
                value={localCodigo}
                onChange={handleCodigoChange}
              />
            </div>
            <div className="flex items-center space-x-4">
                <Select
                  color={"primary"}
                  defaultSelectedKeys={[tipoDeCuponSeleccionado]}
                  value={tipoDeCuponSeleccionado}
                  onChange={handleTipoCuponChange}
                  label="Tipo de Ajuste:"
                  placeholder="Ingresa el tipo de Ajuste"
                >
                  {tiposDeCupon.map((tipoDeAjuste) => (
                    <SelectItem key={tipoDeAjuste.key}>{tipoDeAjuste.label}</SelectItem>
                  ))}
                </Select>
              <Input
                label="Monto:"
                placeholder="Ingrese el monto del Cupon"
                type="number"
                value={localMonto}
                onChange={handleMontoChange}
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-full max-w-xl flex flex-row gap-4">
                <DatePicker
                  value={date || undefined}
                  label="Event Date"
                  variant="bordered"
                  onChange={handleFechaCaducidadChange}
                />
              </div>
              <div className="flex-1 flex items-center">
                <Switch isSelected={isSelected} onValueChange={handleSwitchChange}>
                  Activa
                </Switch>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};