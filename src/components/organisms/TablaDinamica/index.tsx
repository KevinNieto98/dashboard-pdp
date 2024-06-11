'use client'

import { CeldaDinamica } from "@/components";
import { useUIStore } from "@/store";
import { Button, Input, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { useCallback, useMemo, useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";

interface MyObject {
    [key: number]: any;
}

interface TablaDinamica {
    data: any[],
    dinamica: boolean
}


export const TablaDinamica = ({ data, dinamica }: TablaDinamica) => {
    const openModal = useUIStore((state) => state.openModal);
    const [filterValue, setFilterValue] = useState("");
    const [page, setPage] = useState(1);

    const [statusFilter, setStatusFilter] = useState("all");
    const [rowsPerPage, setRowsPerPage] = useState(5);

    
    let headers: string[] = [];
    let newData: any[] = [];
    const hasSearchFilter = Boolean(filterValue);



    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }
    if (dinamica) {
        headers = [...Object.keys(data[0]).map(key => key.toUpperCase()), 'ACCIONES'];

        newData = data.map((obj: any) => {
            let newObj: MyObject = {};
            Object.keys(obj).forEach((key, index) => {
                newObj[index] = obj[key];
            });
            newObj[Object.keys(obj).length] = `#ACCION#[${obj.id}]`;
            return newObj;
        });
    } else {
        headers = [...Object.keys(data[0]).map(key => key.toUpperCase())];

        newData = data.map((obj: any) => {
            let newObj: MyObject = {};
            Object.keys(obj).forEach((key, index) => {
                newObj[index] = obj[key];
            });
            return newObj;
        });
    }
    //TODO: Cambiar por HEADERS
    const [visibleColumns, setVisibleColumns] = useState(new Set(headers));

    const onRowsPerPageChange = useCallback((e: any) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const onSearchChange = useCallback((value: any) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const onClear = useCallback(() => {
        setFilterValue("")
        setPage(1)
    }, [])

    const filteredItems = useMemo(() => {
        let filteredData = [...newData];
        
       
        
        if (hasSearchFilter) {
            filteredData = filteredData.filter((item) =>
                Object.values(item).some((value:any) =>
                    value.toString().toLowerCase().includes(filterValue.toLowerCase())
                )
            );
        }

    
        return filteredData;
      }, [newData, filterValue, statusFilter]);

    const topContent = useMemo(() => {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">
                    <Input
                        isClearable
                        className="w-full sm:max-w-[44%]"
                        placeholder="Search by name..."
                        startContent={<FaSearch />}
                        value={filterValue}
                        onClear={() => onClear()}
                        onValueChange={onSearchChange}
                    />
                    <div className="flex gap-3">
                        <Button 
                            color="primary" 
                            endContent={<FaPlus />}
                            onClick={openModal}
                        >
                            Nuevo
                        </Button>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">Total: {filteredItems.length} tipos</span>
                    <label className="flex items-center text-default-400 text-small">
                        Rows per page:
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
    }, [
        filterValue,
        statusFilter,
        visibleColumns,
        onRowsPerPageChange,
        onSearchChange,
    ]);



    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    return (
        <Table
            aria-label="Example table with custom cells"
            topContent={topContent}
            bottomContent={
                <div className="flex w-full justify-center">
                    <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="secondary"
                        page={page}
                        total={pages}
                        onChange={(page) => setPage(page)}
                    />
                </div>
            }
        >
            <TableHeader>
                {headers.map((header, index) => (
                    <TableColumn key={index} align="center">{header}</TableColumn>
                ))}
            </TableHeader>
            <TableBody>
                {items.map((item: any) => (
                    <TableRow key={item[0]}>
                        {Object.values(item).map((value, index) => (
                            <TableCell key={index}>
                                <CeldaDinamica value={value} />
                            </TableCell>
                        ))}
                    </TableRow>
                ))}

            </TableBody>
        </Table>
    );
}