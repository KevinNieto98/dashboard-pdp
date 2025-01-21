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
    <div className="bg-white rounded ">
      {children}

    </div>
  </>
  );
}