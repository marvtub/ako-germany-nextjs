import Image from 'next/image'
import mcdonalds from "../public/mcdonalds.png"
import walmart from "../public/walmart.png"
import engie from "../public/engie.png"
import nestle from "../public/nestle.png"

function CustomerLogoSection() {
  const logos = [
    { href: engie, id: 1 },
    { href: mcdonalds, id: 2 },
    { href: walmart, id: 3 },
    { href: nestle, id: 4 },
  ];
  console.log(logos);
  return (
    <div className=" pt-10 pb-2 md:pb-5 bg-slate-0">
      <div className="flex flex-col justify-center mx-auto max-w-screen-2xl ">
        <div className="text-xl text-center text-gray-700 ">
          Mit über <span className="text-rose-700">300+</span> zufriedenen
          Kunden weltweit
        </div>
        <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
          {logos.map((e) => (
            <div className="pt-2 text-gray-400 dark:text-gray-400 md:w-1/12 w-2/12" key={e.id}>
              <Image src={e.href}  quality="30" alt={e.href} placeholder="blur" key={e.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerLogoSection;
