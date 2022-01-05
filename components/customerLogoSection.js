function CustomerLogoSection() {
  const logos = [
    { href: "/1200px-Engie_logo.svg.png", id: 1 },
    { href: "/McDonalds-logo-1968.png", id: 2 },
    { href: "/Walmart-Logo.png", id: 3 },
    { href: "/nestle-logo-black-and-white.png", id: 4 },
  ];
  console.log(logos);
  return (
    <div className=" pt-10 pb-5 bg-slate-0">
      <div className="flex flex-col justify-center mx-auto max-w-screen-2xl ">
        <div className="text-xl text-center text-gray-700 ">
          Mit über <span className="text-rose-700">300+</span> zufriedenen
          Kunden weltweit
        </div>
        <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
          {logos.map((e) => (
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <img src={e.href} width={100} height={100} alt=""></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerLogoSection;
