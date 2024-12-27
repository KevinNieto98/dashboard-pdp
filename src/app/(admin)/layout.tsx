import { DrawerComponent, ModalEdit, NavbarComponent } from "@/components";

export default function AdminLayot({
 children
}: {
 children: React.ReactNode;
}) {
  return (
  <>
    <NavbarComponent/>
    <DrawerComponent/>
    {/* <ModalEdit/> */}
    <div className="my-6  bg-white rounded p-5 px-16">
      {children}

    </div>
  </>
  );
}