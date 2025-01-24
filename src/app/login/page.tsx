
import { Metadata } from "next";
import { LoginContent } from "./ui";

export const metadata: Metadata = {
  title: 'Inicio de Sesión',
  description: 'Inicia sesión en tu cuenta',
};
export default function Login() {



  return (
    <>
      <LoginContent />
    </>
  );
}
