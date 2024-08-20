import { Categories } from "@/components/Categories";
import ProductCategory from "@/components/Clothings";
import Hero from "@/components/Hero";
import TopDeals from "@/components/TopDeals";

export default function Home() {
  return (
    <>
      <div className=" bg-[#FAF4FF] ">
        <Hero />
        <Categories />
        <ProductCategory />
        <TopDeals />
      </div>
    </>
  );
}
