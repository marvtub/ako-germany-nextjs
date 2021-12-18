
import HeaderNav from "../components/header";
import Footer from "../components/footer";

function RechtlichesPage(props) {
    return (
        <div>
            <div className="pb-5 bg-slate-100  ">
        <HeaderNav />
      </div>
      <main className="container mx-auto lg:px-4">
        <div className="px-6   max-w-7xl  pt-10 pb-40">
          <div className=" lg:text-left max-w-7xl sm:pb-16 md:pb-20 lg:max-w-5xl lg:w-full lg:pb-28 xl:pb-32">
            <div className=" my-10 ">
              <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                {props.title}
              </h1>
            </div>
            <p className="text-gray-600">
              {props.content}
            </p>
          </div>
        </div>
      </main>
      <Footer />

        </div>
    )
}

export


default RechtlichesPage
