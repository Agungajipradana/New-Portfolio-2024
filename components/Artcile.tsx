import { companies, article } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="py-20" id="article">
      <h1 className="heading text-white-100 mb-10">
      Discover insights and stories in
        <span className="text-purple"> my latest article</span>
      </h1>
      <div className="flex flex-col items-center text-white-100 max-lg:mt-10">
        <InfiniteMovingCards
          items={article}
          direction="right"
          speed="slow"
        />

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
          <Image src={img} alt={name} className="md:w-10 w-5" width={40} height={40} />
          {/* <Image src={nameImg} alt={name} className="md:w-24 w-20" width={96} height={96} /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
