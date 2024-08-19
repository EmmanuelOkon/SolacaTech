import { Categories } from "@/components/Categories";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <div className=" bg-[#FAF4FF] ">
        <Hero />
        <Categories />
      </div>
    </>
  );
}
