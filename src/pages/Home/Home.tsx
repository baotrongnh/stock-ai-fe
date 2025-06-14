import { Header } from "../../components";
import Hero from "./components/Hero";


export default function Home() {
     return (
          <>
               {/*Header*/}
               <Header></Header>
               <div className="min-h-screen bg-gradient-to-b from-green-100 to-white flex flex-col w-full ">
                    <Hero></Hero>
               </div>
          </>
     );
}