import { Button } from "@/components/ui/button";
import { Outlet } from "react-router";

export default function Home() {
     return (
          <>
               <div>Home</div>
               <Button>Click me</Button>
               <Outlet />
          </>
     )
}
