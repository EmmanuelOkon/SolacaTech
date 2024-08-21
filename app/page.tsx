import AppShowcase from "@/components/AppShowcase";
import { Categories } from "@/components/Categories";
import MenClothing from "@/components/MenClothing";
import Hero from "@/components/Hero";
import TopDeals from "@/components/TopDeals";
import OnlineChat from "@/components/OnlineChat";
import Favourite from "@/components/Favourite";
import TopSports from "@/components/TopSports";

export default function Home() {
  return (
    <>
      <OnlineChat />
      <div className=" bg-[#FAF4FF] ">
        <Hero />
        <Categories />
        <MenClothing />
        <TopDeals />
        <AppShowcase />
        <Favourite />
        <TopSports />
      </div>
    </>
  );
}
