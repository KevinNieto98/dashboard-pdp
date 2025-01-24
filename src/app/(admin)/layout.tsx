import { DrawerComponent, Footer, NavbarComponent } from "@/components";

export default function AdminLayot({
 children
}: {
 children: React.ReactNode;
}) {
  return (
  <div className="flex flex-col min-h-screen">
    <NavbarComponent/>
    <DrawerComponent/>
    <div className="flex-grow bg-white rounded ">
      {children}

    </div>
    <Footer/>
  </div>
  );
}