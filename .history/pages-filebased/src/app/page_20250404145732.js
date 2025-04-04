// app/page.js

'use client'; // Ensure this is at the very top to mark the component as client-side

import Image from "next/image";

import AboutPage from "./about";
import PortfolioPage from "./Portfolio";
import PortfolioProjectPage from "./Portfolio/[projectid]/page";
import ListPage from "./Portfolio/List/list";
import SelectedClientProjectPage from "./Clients/[id]/[clientprojectid]";
import ClientsProjectsPage from "./Clients/[id]";
//import SelectedClientrojectPage from "./Clients/[id]/[clientprojectid]";
//import ClientProjectPage from "./Clients/[id]";

export default function Home() {
  return (
    <div>
      <h1>The home page</h1>
      <PortfolioPage />
      <AboutPage />
      <ListPage />
      <PortfolioProjectPage />
      <ClientsProjectsPage />
      <SelectedClientProjectPage />

    </div>
  );
}
