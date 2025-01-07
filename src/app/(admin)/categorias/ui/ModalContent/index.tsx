'use client'

import { Header } from "@/components";
import { useCategoriasStore, useSubCategoriasStore } from "../../store";
import { Button, Chip, Input, Select, SelectItem, Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface SubCategoria {
  id: number;
  name: string;
  activo: boolean;
}
export const ContenidoModal = () => {
  const [values, setValues] = useState<Set<string>>(new Set([]));

  const { selectedSubCategoria, updateSelectedSubCategoria, esEdicion } = useSubCategoriasStore((state) => ({
    selectedSubCategoria: state.selectedSubCategoria,
    updateSelectedSubCategoria: state.updateSelectedSubCategoria,
    esEdicion: state.esEdicion,
  }));

  const {
    selectedCategoria,
    tipo
  } = useCategoriasStore((state) => ({
    selectedCategoria: state.selectedCategoria,
    tipo: state.tipo
  }));

  let elementos = [];
  let subCategorias: SubCategoria[] = [];
  if (tipo == 'categoria') {
    elementos = selectedCategoria;
    subCategorias = selectedCategoria.subCategorias;
  } else {
    elementos = selectedSubCategoria;
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
    setLocalName(e.target.value);
    updateSelectedSubCategoria({ ...selectedSubCategoria, name: e.target.value });
  };

  const handleSwitchChange = (value: boolean) => {
    setIsSelected(value);
    updateSelectedSubCategoria({ ...selectedSubCategoria, activo: value });
  };

  const validador = () => {
    console.log('values', values);
  };


  

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
              items={subCategorias}
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
            <Button
              onPress={validador}
            />
          </>
        )}
      </div>
    </div>
  );
};