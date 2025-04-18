// app/page.js

'use client';

import Image from "next/image";
import AboutPage from "./about";
import PortfolioPage from "./Portfolio/page";
import PortfolioProjectPage from "./Portfolio/[projectid]/page";
import ListPage from "./Portfolio/List/list";
import ClientsPage from "./Clients/[id]/page";
import ClientsProjectsPage from "./Clients/[id]/page1";
import SelectedClientProjectPage from "./Clients/[id]/(clientprojectid)"; // Ensure this path is correct
//import BlogPostPage from "./blog/[...slug]";
import Link from "next/link";
import BlogPostPage from "./[...slug]";

export default function Home() {
  return (
    <div>
      <h1>The home page</h1>
      <ul>
        <li>
          <Link href="/Portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/Cl">Client</Link>
        </li>
      </ul>
      <PortfolioPage />
      <AboutPage />
      <ListPage />
      <PortfolioProjectPage />
      <ClientsPage />
      {/* Remove these lines if you don't need to show individual pages */}
      <ClientsProjectsPage />
      <SelectedClientProjectPage />
      <BlogPostPage />
     
    </div>
  );
}
