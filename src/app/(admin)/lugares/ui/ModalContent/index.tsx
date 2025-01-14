'use client'

import { Header } from "@/components";
import {  Chip, Input, Select, SelectItem, Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useCiudadesStore, useColoniasStore } from "../../store";
import { Colonia } from "../../interfaces";



export const ContenidoModal = () => {


  const { 
    selectedColonia, 
    updateSelectedColonia, 
    esEdicion ,
    colonias
  } = useColoniasStore((state) => ({
    selectedColonia: state.selectedColonia,
    updateSelectedColonia: state.updateSelectedColonia,
    esEdicion: state.esEdicion,
    colonias: state.colonias,


  }));

  const {
    selectedCiudad,
    tipo,
    values, 
    setValues,
    updateSelectedCiudad
  } = useCiudadesStore((state) => ({
    selectedCiudad: state.selectedCiudad,
    tipo: state.tipo,
    values: state.values,
    setValues: state.setValues,
    setValuesEnEdicion: state.setValuesEnEdicion,
    updateSelectedCiudad: state.updateSelectedCiudad,

  }));

  let elementos = [];
  if (tipo == 'ciudad') {
    elementos = selectedCiudad;


  useEffect(() => {
    if (selectedCiudad && Array.isArray(selectedCiudad.colonias)) {
      const ColoniaIds = selectedCiudad.colonias
        .filter((Colonia: Colonia) => 
          colonias.some(sc => sc.id === Colonia.id && sc.activo) // Filtrar subcategorías activas
        )
        .map((Colonia: Colonia) => Colonia.id.toString());
      
      setValues(new Set(ColoniaIds)); // Actualizar el estado con un Set de IDs
    }
  }, [selectedCiudad, colonias, setValues]);
  }else {
    elementos = selectedColonia; 
  }

  const { id, name, activo } = elementos;

  const [localName, setLocalName] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (esEdicion) {
      setLocalName(name);
      setIsSelected(activo);
    }
  }, [esEdicion, name, activo]);

  useEffect(() => {
    if (!esEdicion) {
      setLocalName('');
      setIsSelected(false);
    }
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (tipo == 'ciudad') {
      setLocalName(e.target.value);
      updateSelectedCiudad({ ...selectedCiudad, name: e.target.value });

    }else{
      setLocalName(e.target.value);
      updateSelectedColonia({ ...selectedColonia, name: e.target.value });

    }
  };

  const handleSwitchChange = (value: boolean) => {
    if (tipo == 'ciudad') {
      setIsSelected(value);
      updateSelectedCiudad({ ...selectedCiudad, activo: value });

    }else{
      setIsSelected(value);
      updateSelectedColonia({ ...selectedColonia, activo: value });

    }
  };

  


  const activecolonias = colonias.filter((Colonia: Colonia) => Colonia.activo);


  return (
    <div className="rounded-lg w-full md:w-full lg:w-full border border-gray-300 shadow-sm p-4 flex overflow-hidden flex-col justify-center py-12">
      <Header
        className="pt-2"
        iconName={'FaFile'}
        titulo={tipo == 'colonia' ? 'Detalle de Colonia' : 'Detalle de Ciudad'}
      />
      <div className="flex flex-col space-y-4 pt-5 px-2">
        {esEdicion && (
          <div>
            <p>ID de la Ciudad: {id}</p>
          </div>
        )}

        <Input
          label="Nombre:"
          placeholder="Ingrese el nombre de la Colonia"
          type="text"
          value={localName}
          onChange={handleNameChange}
        />
        <Switch isSelected={isSelected} onValueChange={handleSwitchChange}>
          Activa
        </Switch>
        
        {tipo == 'ciudad' && (
          <>
            <Select
              classNames={{
                trigger: "min-h-12 py-2",
              }}
              isMultiline={true}
              items={activecolonias}
              label="Colonias:"
             // labelPlacement="outside"
              placeholder="Selecciona las colonias"
              renderValue={(items) => {
                return (
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Chip key={item.key}>{item.textValue}</Chip>
                    ))}
                  </div>
                );
              }}
              selectedKeys={values}
              onSelectionChange={(keys) => setValues(new Set(Array.from(keys, String)))}
              selectionMode="multiple"
              variant="bordered"
            >
              {(Colonia) => (
                <SelectItem key={Colonia.id} textValue={Colonia.name}>
                  <div className="flex gap-2 items-center">
                    <div className="flex flex-col">
                      <span className="text-small">{Colonia.name}</span>
                    </div>
                  </div>
                </SelectItem>
              )}
            </Select>
          </>
        )}
      </div>
    </div>
  );
};