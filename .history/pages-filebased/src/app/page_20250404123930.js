import Image from "next/image";


import AboutPage from "./about";
import PortfolioPage from "./Portfolio";
//import ListPage from "./Portfolio/list/list";
import PortfolioProjectPage from "./Portfolio/[projectid]/[projectid]";





export default function Home() {
  return (
    <div>
      <h1>The home page</h1>
    
    <PortfolioPage />
    <AboutPage />
    <ListPage />
    <PortfolioProjectPage />
    
    
    </div>
  );
}
