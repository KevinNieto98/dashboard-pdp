import { DrawerComponent, NavbarComponent } from "@/components";
import { ModalComponent } from "@/components/templates/Modal";

export default function AdminLayot({
 children
}: {
 children: React.ReactNode;
}) {
  return (
  <>
    <NavbarComponent/>
    <DrawerComponent/>
    <ModalComponent/>
    <div className="my-6  bg-white rounded p-5 px-16">
      {children}

    </div>
  </>
  );
}