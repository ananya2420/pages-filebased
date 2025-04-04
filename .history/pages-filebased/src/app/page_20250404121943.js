import Image from "next/image";

import PortfolioPage from "./Portfolio";
import AboutPage from "./about";




export default function Home() {
  return (
    <div>
      <h1>The home page</h1>
    
    <PortfolioPage />
    <AboutPage
    </div>
  );
}
