import Image from "next/image";
import AboutPage from "./About/about";
import PortfolioPage from "./Portfolio";




export default function Home() {
  return (
    <div>
      <h1>The home page</h1>
    <AboutPage />
    <PortfolioPage
    </div>
  );
}
