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
    <div className="my-6 mx-15 bg-white rounded p-5">
      {children}

    </div>
  </>
  );
}