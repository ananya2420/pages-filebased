// app/page.js

'use client';

import Image from "next/image";
import AboutPage from "./about";
import PortfolioPage from "./Portfolio";
import PortfolioProjectPage from "./Portfolio/[projectid]/page";
import ListPage from "./Portfolio/List/list";
import ClientsPage from "./Clients";
import ClientsProjectsPage from "./Clients/[id]";
import SelectedClientProjectPage from "./Clients/[id]/(clientprojectid)"; // Ensure this path is correct
import BlogPostPage from "./blog/[...slug]";

export default function Home() {
  return (
    <div>
      <h1>The home page</h1>
      <PortfolioPage />
      <AboutPage />
      <ListPage />
      <PortfolioProjectPage />
      <ClientsPage />
      {/* Remove these lines if you don't need to show individual pages */}
      <ClientsProjectsPage />
      <SelectedClientProjectPage />
     
    </div>
  );
}
