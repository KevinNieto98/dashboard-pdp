import { Button } from "@nextui-org/react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  redirect('/ingresos');
  return (
    <>
      <h1>Hola Mundo</h1>
      <h1>Hola Mundo</h1>
      <h1>Hola Mundo</h1>
      <h1>Hola Mundo</h1>
      <h1>Hola Mundo</h1>ß
      <Button color="primary">
        Button
      </Button>
    </>
  );
}
