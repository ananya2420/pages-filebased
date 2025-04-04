import Image from "next/image";


import AboutPage from "./about";
import PortfolioPage from "./Portfolio";
import PortfolioProjectPage from "./Portfolio/[projectid]/page";
import ListPage from "./Portfolio/List/list";
import SelectedClientrojectPage from "./Clients/[id]/[clientprojectid]";





export default function Home() {
  return (
    <div>
      <h1>The home page</h1>
    
    <PortfolioPage />
    <AboutPage />
    <ListPage />
    <PortfolioProjectPage />
    <SelectedClientrojectPage />
    <Clie
    
    
    
    </div>
  );
}
