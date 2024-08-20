import AppShowcase from "@/components/AppShowcase";
import { Categories } from "@/components/Categories";
import MenClothing from "@/components/MenClothing";
import Hero from "@/components/Hero";
import TopDeals from "@/components/TopDeals";

export default function Home() {
  return (
    <>
      <div className=" bg-[#FAF4FF] ">
        <Hero />
        <Categories />
        <MenClothing />
        <TopDeals />
        <AppShowcase />
      </div>
    </>
  );
}
