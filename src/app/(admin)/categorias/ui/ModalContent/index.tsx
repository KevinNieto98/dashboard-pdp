'use client'

import { Header } from "@/components";
import { useCategoriasStore, useSubCategoriasStore } from "../../store";
import {  Chip, Input, Select, SelectItem, Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { SubCategoria } from "../../interfaces";


export const ContenidoModal = () => {


  const { 
    selectedSubCategoria, 
    updateSelectedSubCategoria, 
    esEdicion ,
    subCategorias
  } = useSubCategoriasStore((state) => ({
    selectedSubCategoria: state.selectedSubCategoria,
    updateSelectedSubCategoria: state.updateSelectedSubCategoria,
    esEdicion: state.esEdicion,
    subCategorias: state.subCategorias,


  }));

  const {
    selectedCategoria,
    tipo,
    values, 
    setValues,
    updateSelectedCategoria
  } = useCategoriasStore((state) => ({
    selectedCategoria: state.selectedCategoria,
    tipo: state.tipo,
    values: state.values,
    setValues: state.setValues,
    setValuesEnEdicion: state.setValuesEnEdicion,
    updateSelectedCategoria: state.updateSelectedCategoria,

  }));

  let elementos = [];
  if (tipo == 'categoria') {
    elementos = selectedCategoria;

  //   useEffect(() => {
  //     if (selectedCategoria && selectedCategoria.subCategorias) {

  //       const subCategoriaIds = selectedCategoria.subCategorias
  //       .filter((subCategoria: SubCategoria) => 
  //         subCategorias.some(sc => sc.id === subCategoria.id && sc.activo) // Filtrar subcategorías activas
  //       )
  //       .map((subCategoria: SubCategoria) => subCategoria.id.toString());
      
  //       setValues(subCategoriaIds);
  //     }
  //   }, [selectedCategoria, setValues]);  
  // } else {
  //   elementos = selectedSubCategoria;


  useEffect(() => {
    if (selectedCategoria && Array.isArray(selectedCategoria.subCategorias)) {
      const subCategoriaIds = selectedCategoria.subCategorias
        .filter((subCategoria: SubCategoria) => 
          subCategorias.some(sc => sc.id === subCategoria.id && sc.activo) // Filtrar subcategorías activas
        )
        .map((subCategoria: SubCategoria) => subCategoria.id.toString());
      
      setValues(new Set(subCategoriaIds)); // Actualizar el estado con un Set de IDs
    }
  }, [selectedCategoria, subCategorias, setValues]);
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
    if (tipo == 'categoria') {
      setLocalName(e.target.value);
      updateSelectedCategoria({ ...selectedCategoria, name: e.target.value });

    }else{
      setLocalName(e.target.value);
      updateSelectedSubCategoria({ ...selectedSubCategoria, name: e.target.value });

    }
  };

  const handleSwitchChange = (value: boolean) => {
    if (tipo == 'categoria') {
      setIsSelected(value);
      updateSelectedCategoria({ ...selectedCategoria, activo: value });

    }else{
      setIsSelected(value);
      updateSelectedSubCategoria({ ...selectedSubCategoria, activo: value });

    }
  };

  


  const activeSubCategorias = subCategorias.filter((subCategoria: SubCategoria) => subCategoria.activo);


  return (
    <div className="rounded-lg w-full md:w-full lg:w-full border border-gray-300 shadow-sm p-4 flex overflow-hidden flex-col justify-center py-12">
      <Header className="pt-2" iconName={'FaFile'} titulo={'Detalle de Categoria'} />
      <div className="flex flex-col space-y-4 pt-5 px-2">
        {esEdicion && (
          <div>
            <p>ID de la Categoria: {id}</p>
          </div>
        )}

        <Input
          label="Nombre:"
          placeholder="Ingrese el nombre de la subcategoria"
          type="text"
          value={localName}
          onChange={handleNameChange}
        />
        <Switch isSelected={isSelected} onValueChange={handleSwitchChange}>
          Activa
        </Switch>
        
        {tipo == 'categoria' && (
          <>
            <Select
              classNames={{
                trigger: "min-h-12 py-2",
              }}
              isMultiline={true}
              items={activeSubCategorias}
              label="Subcategorias:"
             // labelPlacement="outside"
              placeholder="Selecciona las subcategorias"
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
              {(subcategoria) => (
                <SelectItem key={subcategoria.id} textValue={subcategoria.name}>
                  <div className="flex gap-2 items-center">
                    <div className="flex flex-col">
                      <span className="text-small">{subcategoria.name}</span>
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