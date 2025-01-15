import React from "react";
import { Select, SelectItem, Selection } from "@nextui-org/react";

export interface ItemSelect {
	label?: string;
	className?: string;
	classNameItem?: string;
	description?: string;
	placeholder?: string;
	size?: 'sm' | 'md' | 'lg';
	color?:
		| 'default'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'warning'
		| 'danger';
	variant?: 'faded' | 'bordered' | 'underlined' | 'flat';
	radius?: 'sm' | 'md' | 'lg' | 'full' | 'none';
	selectionMode?: 'multiple';
	isDisabled?: boolean;
	isRequired?: boolean;
	value?: string;
	// defaultSelected?: string;
	// isIndeterminate?: boolean;
	// showDivider?: boolean;
	showChange?: boolean;
	startContent?: any[];
	defaultSelectedKeys?: any;
	// Icon?: any[];
	data: Record<string, any>[];
	// onChange?: any[];
	onChange?: (selection: Selection) => void;
	children?: React.ReactNode;
	name?: string;
}

interface Props {
  property: ItemSelect;
}


export const Selector = ({ property }: Props): React.ReactElement => {
  // datos del item default
  const defaultSelec: ItemSelect =
  {
    label: "Favorite Animal", className: "max-w-xs", classNameItem: "text-black", data: [<></>]
  };

  const [isOpen, setIsOpen] = React.useState(false);

  const [values, setValues] = React.useState<Selection>(
    // se agrega para recibir un valor por defecto
    property.defaultSelectedKeys ? new Set(property.defaultSelectedKeys) : new Set()
  );

// Se valida que el handle change reciba varios tipos de items.
  const handleSelectionChange = (e: "all" | React.ChangeEvent<HTMLSelectElement> | Selection) => {

    let newValue: Selection;
    if (e === "all") {
      newValue = new Set("all");
    } else if (e instanceof Set) {
      newValue = e;
    } else {
      newValue = new Set([e.target.value]);
    }

    setValues(newValue);

    if (property.onChange) {
      property.onChange(newValue);
    }
  };

  let datos = property.data;

  return (

    <div className="flex w-full flex-col gap-5">
      <Select
        label={property.label || defaultSelec.label}
        className={property.className && property.className}
        description={property.description && property.description}
        placeholder={property.placeholder && property.placeholder}
        size={property.size && property.size}
        color={property.color && property.color}
        variant={property.variant && property.variant}
        radius={property.radius && property.radius}
        selectionMode={property.selectionMode && property.selectionMode}
        isDisabled={property.isDisabled && property.isDisabled}
        isRequired={property.isRequired && property.isRequired}
        defaultSelectedKeys={[property.defaultSelectedKeys || []]}
        selectedKeys={values}
        onChange={handleSelectionChange}
        name={property.name}
        // onChange={property.onChange ? property.onChange : handleSelectionChange}
        onOpenChange={setIsOpen}
        startContent={property.startContent && property.startContent}
      >
        {datos.map((item) => (
          <SelectItem key={item.value} value={item.value} className={property.className || defaultSelec.className}>
            {item.label}
          </SelectItem>
        ))}
        {/* {property.children} */}
      </Select>
      {(property.showChange) ? (<p className="text-default-500 text-small">Selected: {Array.from(values).join(", ")}</p>) : undefined}
    </div>

  );
}


export default Selector;