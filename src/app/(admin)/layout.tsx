import { DrawerComponent, NavbarComponent } from "@/components";

export default function AdminLayot({
 children
}: {
 children: React.ReactNode;
}) {
  return (
  <>
    <NavbarComponent/>
    <DrawerComponent/>
    <div className="my-6 mx-15 bg-white rounded p-5">
      {children}

    </div>
  </>
  );
}