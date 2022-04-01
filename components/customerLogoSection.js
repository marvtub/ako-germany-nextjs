import Image from 'next/image'
import bonpreu from "../public/bonpreu-logo.png"
import apotheke from "../public/apotheke.png"
import seur from "../public/SEUR.png"
import lasirena from "../public/lasirena.png"

function CustomerLogoSection() {
  const logos = [
    { href: seur, id: 1 },
    { href: bonpreu, id: 2 },
    { href: apotheke, id: 3 },
    { href: lasirena, id: 4 },
  ];
  return (
    <div className=" pt-10 pb-2 md:pb-5 bg-slate-0">
      <div className="flex flex-col justify-center mx-auto max-w-screen-2xl ">
        <div className="text-xl text-center text-gray-700 ">
          Mit über <span className="text-rose-700">300+</span> zufriedenen
          Kunden weltweit
        </div>
        <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around items-center">
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
