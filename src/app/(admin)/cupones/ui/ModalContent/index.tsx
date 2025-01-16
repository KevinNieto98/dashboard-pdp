'use client'

import { Header } from "@/components";
import { Calendar, DatePicker, Input, Select, SelectItem, Spinner, Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useCuponesStore } from "../../store";
import { getLocalTimeZone, now, today } from "@internationalized/date";


export const tiposDeCupon = [
  { key: "porcentaje", label: "Porcentaje" },
  { key: "dinero", label: "Dinero" },
];

export const ContenidoModal = () => {
  let defaultDate = today(getLocalTimeZone());
  let [focusedDate, setFocusedDate] = useState(defaultDate);



  const {
    selectedCupon,
    updateSelectedCupon,
    esEdicion
  } = useCuponesStore((state) => ({
    selectedCupon: state.selectedCupon,
    updateSelectedCupon: state.updateSelectedCupon,
    esEdicion: state.esEdicion

  }));


  const { id, name, activo, monto, tipo_Cupon } = selectedCupon;
  const [loading, setLoading] = useState(true);
  const [localName, setLocalName] = useState('');
  const [localMonto, setLocalMonto] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [tipoDeCuponSeleccionado, setTipoDeCuponSeleccionado] = useState<string>('');


  useEffect(() => {
    if (esEdicion) {
      setLocalName(name);
      setIsSelected(activo);
      setLocalMonto(monto);
      setTipoDeCuponSeleccionado(tipo_Cupon);
      setLoading(false);
    }
  }, [esEdicion, name, activo, tipo_Cupon, monto]);
  console.log('tipoDeCuponSeleccionado', tipoDeCuponSeleccionado);



  useEffect(() => {
    if (!esEdicion) {
      setLocalName('');
      setIsSelected(tipo_Cupon);
      setLoading(false);
    }
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalName(e.target.value);
    updateSelectedCupon({ ...selectedCupon, name: e.target.value });
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
    const value = e.target.value;
    setTipoDeCuponSeleccionado(value);
    updateSelectedCupon({ ...selectedCupon, tipo_Cupon: value });
  };



  return (
    <>
      {loading ?
        <Spinner />
        :
        <div className="rounded-lg w-full md:w-full lg:w-full border border-gray-300 shadow-sm p-4 flex overflow-hidden flex-col justify-center py-12">
          <Header className="pt-2" iconName={'FaFile'} titulo={'Detalle de Categoria'} />
          <div className="flex flex-col space-y-4 pt-5 px-2">
            {esEdicion && (
              <div>
                <p>ID del Cupon: {id}</p>
              </div>
            )}
            <div className="flex space-x-4">

              <Input
                label="Nombre:"
                placeholder="Ingrese el nombre de la Cupon"
                type="text"
                value={localName}
                onChange={handleNameChange}
              />
              <Input
                label="Codigo:"
                placeholder="Ingrese el codigo de la Cupon"
                type="text"
                value={localName}
                onChange={handleNameChange}
              />
            </div>
            <div className="flex items-center space-x-4">
              <Select
                className="max-w-xs"
                color={"primary"}
                defaultSelectedKeys={[tipoDeCuponSeleccionado]}
                value={tipoDeCuponSeleccionado}
                onChange={handleTipoCuponChange}
                label="Tipo de Cupon:"
                placeholder="Ingresa el tipo de Cupon"
              >
                {tiposDeCupon.map((tipoDeCupon) => (
                  <SelectItem key={tipoDeCupon.key}>{tipoDeCupon.label}</SelectItem>
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
                  hideTimeZone
                  showMonthAndYearPickers
                  defaultValue={now(getLocalTimeZone())}
                  label="Event Date"
                  variant="bordered"
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
      }
    </>
  );
};