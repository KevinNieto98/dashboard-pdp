'use client';
import React, { Key, useCallback, useMemo, useState, ChangeEvent, ReactNode } from "react";
import {
    Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Input, Button, DropdownTrigger, Dropdown, DropdownMenu,
    DropdownItem, Pagination, Selection, SortDescriptor,
    Spinner,
    getKeyValue,
    Tooltip,
    Switch
} from "@nextui-org/react";

import { IoChevronDownCircleOutline, IoSearch } from "react-icons/io5";
import { RiFileExcel2Fill } from "react-icons/ri";
import { useUITableStore } from "@/store";
import { Icon, ModalEdit } from "@/components";
import { capitalize, ExportCSV } from "@/utils";

export interface PropsColumns {
    columns: string[];
}

interface UiTableProps {
    data: any[];
    needTopContent?: boolean;
    needBottonContent?: boolean;
    needOpenModal?: boolean;
    esSeleccion?: boolean;
    tieneFuncion?: boolean;
    funcionBoton?: (key: number) => void;
    aditionalButton?: ReactNode; // Nueva propiedad para el botón personalizado
}

export const TablaDinamica: React.FC<UiTableProps> = (
    { data, 
      needTopContent = true, 
      needBottonContent = true, 
      needOpenModal = false,
      esSeleccion = false,
      tieneFuncion = false,
      funcionBoton,
      aditionalButton
    }
) => {

    const columnas = useMemo(() => {
        if (data.length > 0) {
            const dynamicColumns = Object.keys(data[0]).map((valor) => ({
                uid: `${valor}`,
                key: `${valor}`,
                label: `${valor}`
            }));
            return needOpenModal
                ? [{ uid: 'accion', key: 'accion', label: 'ACCION' }, ...dynamicColumns]
                : dynamicColumns;
        }
        return needOpenModal
            ? [{ uid: 'accion', key: 'accion', label: 'ACCION' }]
            : [];
    }, [data, needOpenModal]);

    // Agregar las keys
    data = data.map((item: any, index: any) => ({
        ...item,
        key: index
    }));

    const columnFilter = "name";
    const rows = data;

    type Rows = typeof rows[0];

    const [filterValue, setFilterValue] = useState("");
    const [visibleColumns, setVisibleColumns] = useState<Selection>(new Set([]));
    const [rowsPerPage, setRowsPerPage] = useState(7);
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: columnFilter,
        direction: "ascending",
    });
    const [page, setPage] = useState(1);
    const pages = Math.ceil(rows?.length / rowsPerPage);
    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = useMemo(() => {
        if (visibleColumns === "all") return columnas;
        return data?.filter((column: { uid: string | number | undefined; name: any; }) => column.uid && Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns, columnas, data]);

    const filteredItems = useMemo(() => {
        let filteredRows = data ? [...data] : [];
        
        if (hasSearchFilter) {
            filteredRows = filteredRows.filter((data) =>
              data.name && filterValue
                ? data.name.toLowerCase().includes(filterValue.toLowerCase())
                : false
            );
          }
          return filteredRows;
    }, [data, filterValue, hasSearchFilter]);

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = useMemo(() => {
        return [...items].sort((a: Rows, b: Rows) => {
            const first = a[sortDescriptor.column as keyof Rows];
            const second = b[sortDescriptor.column as keyof Rows];
            const firstStr = first?.toString() || '';
            const secondStr = second?.toString() || '';
            let cmp: number;
            if (!isNaN(Number(first)) && !isNaN(Number(second))) {
                cmp = Number(first) - Number(second);
            } else {
                cmp = firstStr.localeCompare(secondStr, undefined, { numeric: true, sensitivity: 'base' });
            }
            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const renderCell = useCallback((rows: Rows, columnKey: Key) => {
        const cellValue = rows[columnKey as keyof Rows];
        if (typeof cellValue === 'boolean') {
            return (
                <Switch isSelected={cellValue} isDisabled>
                    {/* {cellValue ? 'Activo' : 'Inactivo'} */}
                </Switch>
            );
        }
        switch (columnKey) {
            case "accion":
                return (
                    <div className="relative flex gap-2">
                        <Tooltip content="Revisar Factura">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <Button
                                    onClick={() => tieneFuncion && funcionBoton ? funcionBoton(rows.key) : console.log('edit')}
                                >
                                    <Icon
                                        key={"FaSearch"}
                                        name="FaSearch"
                                    />
                                </Button>
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    }, [tieneFuncion, funcionBoton]);

    const onRowsPerPageChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const onSearchChange = useCallback((value?: string) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const topContent = useMemo(() => {
        if (!needTopContent) {
            return null;
        }
    
        return (
            <div className="flex flex-col gap-4 mt-1">
                <div className="flex justify-between gap-3 items-end">
                    <Input
                        labelPlacement="outside"
                        isClearable
                        classNames={{
                            base: "w-full sm:max-w-[44%]",
                            inputWrapper: "border-1",
                        }}
                        placeholder="Buscar en primera columna"
                        size="sm"
                        startContent={<IoSearch className=" text-cyan-600 text-xl" />}
                        value={filterValue}
                        variant="bordered"
                        onClear={() => setFilterValue("")}
                        onValueChange={onSearchChange}
                    />
                    <div className="flex gap-3">
                        <Button onClick={() => { ExportCSV(data, 'MatenimientoUsuarios') }}  color="primary"  endContent={<RiFileExcel2Fill />} className="p-2 text-white">Exportar CSV</Button>
                        {aditionalButton}
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">Total {data?.length} rows</span>
                    <label className="flex items-center text-default-400 text-small">
                        Filar por página:
                        <select
                            className="bg-transparent outline-none text-default-400 text-small"
                            onChange={onRowsPerPageChange}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </label>
                </div>
            </div>
        );
    }, [needTopContent, filterValue, onSearchChange, visibleColumns, columnas, data, onRowsPerPageChange]);

    const bottomContent = useMemo(() => {
        if (!needBottonContent) {
            return null;
        }
        return (
            <div className="py-2 px-2 flex justify-between items-center">
                <Pagination
                    showControls
                    classNames={{
                        cursor: "bg-foreground text-background",
                    }}
                    color="default"
                    isDisabled={hasSearchFilter}
                    page={page}
                    total={pages}
                    variant="light"
                    onChange={setPage}
                />
            </div>
        );
    }, [page, pages, hasSearchFilter]);

    const classNames = useMemo(
        () => ({
            wrapper: ["max-h-full", "max-w-full"],
            table: ["w-full", "max-w-full", "overflow-x-auto", "bg-white"],
            th: ["bg-gray", "text-default-500", "border-b", "border-divider"],
            td: [
                "group-data-[first=true]:first:before:rounded-none",
                "group-data-[first=true]:last:before:rounded-none",
                "group-data-[middle=true]:before:rounded-none",
                "group-data-[last=true]:first:before:rounded-none",
                "group-data-[last=true]:last:before:rounded-none",
            ],
        }),
        [],
    );

    const itemsSelected = useUITableStore((state) => state.itemsSelected);
    const selectionItem = useUITableStore((state) => state.selectionItem);

    return (
        <Table
            isCompact
            aria-label="Reporte Administración usuarios"
            bottomContent={bottomContent}
            bottomContentPlacement="outside"
            classNames={classNames}
            sortDescriptor={sortDescriptor}
            topContent={topContent}
            topContentPlacement="outside"
            onSortChange={setSortDescriptor}
            selectedKeys={itemsSelected}
            onSelectionChange={selectionItem}
            {...(esSeleccion && { selectionMode: "multiple" })}
        >
            <TableHeader columns={columnas}>
                {(column: any) => (
                    <TableColumn key={column.key}>{column.label.toUpperCase()}</TableColumn>
                )}
            </TableHeader>
            <TableBody
                items={items ?? []}
                loadingContent={<Spinner />}
            >
                {(item: any) => (
                    <TableRow key={item.key}>
                        {columnas.map((column) => (
                            <TableCell key={column.key}>
                                {renderCell(item, column.key)}
                            </TableCell>
                        ))}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}