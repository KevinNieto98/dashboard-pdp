'use client'
import { Text } from "@chakra-ui/react";
import { Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, User } from "@nextui-org/react";
import { useCallback } from "react";
import { FaEye, FaRegTrashCan } from "react-icons/fa6";
import { TbEdit } from "react-icons/tb";

type StatusColorMap = {
  active: "success" | "default"; // Adjust types as needed for your Chip component
  paused: "danger";
  vacation: "warning";
};



const columns = [
  { name: "NAME", uid: "name" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",

    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  }
];

const statusColorMap: StatusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

export const PersonasContent = () => {
  const renderCell = useCallback((user: any, columnKey: any) => {
    const cellValue = user[columnKey];

    switch (columnKey) {

      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user.status as "active" | "paused" | "vacation" || "default"]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <FaEye />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <TbEdit />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <FaRegTrashCan />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);



  return (
    <div className="p-4">
      <Text
        as='b'
        fontSize='2xl'
      >
        Mantenimiento de Personas
      </Text>

      <Text
        className="pt-4"
      >
        Pagina para administrar los miembros vigentes de la Iglesia.
      </Text>


      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          <TableColumn align={"center"}>NOMBRE</TableColumn>
          <TableColumn align={"center"}>ESTADO</TableColumn>
          <TableColumn align={"end"}>ACCIONES</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <div>
                <p>Prueba</p>
              </div>
            </TableCell>
            <TableCell>
              <div>
                <Chip className="capitalize" color={"success"} size="sm" variant="flat">
                  Active
                </Chip>
              </div>
            </TableCell>
            <TableCell>
              <div className="relative flex items-center gap-2">
          
                <Tooltip content="Edit user">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <TbEdit />
                  </span>
                </Tooltip>
            
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
