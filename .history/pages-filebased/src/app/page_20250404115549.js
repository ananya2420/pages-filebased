import Image from "next/image";
import AboutPage from "./About/about";

export default function Home() {
  return (
    <div>
      <h1>The Home page</h1>
      <AboutPage />
    </div>
  );
}
