import Link from "next/link";

function MainCta(props) {
  return (
    <div className="cursor-pointer">
      <Link href={props.href}>
        <div className="shadow w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-700 hover:bg-rose-700 md:py-4 md:text-lg md:px-10">
          {props.cta}
        </div>
      </Link>
    </div>
  );
}

export default MainCta;
