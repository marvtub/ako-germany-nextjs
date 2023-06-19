import { useState } from "react";
import ModalSignUp from "../components/modalSignUp";
import {useEffect} from "react"
import Image from "next/image"

function CustomForm({ api_key }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false)

  useEffect(() => {
  }, [success])

  const registerLead = async (event) => {
    setLoading(true);
    event.preventDefault();

    const newLead = await fetch("/api/pipedrivePostLead", 
    { body: JSON.stringify({
              name: event.target.name.value,
              email: event.target.email.value,
              phone: event.target.phone.value,
              company: event.target.company.value
            }),
            headers: {
                      "Content-Type": "application/json",
                    },
                    method: "POST",
                  }
    )
    setLoading(false);
    setSuccess(true)
    event.target.reset();
  };

  return (
    <form onSubmit={registerLead }>
    {success ? <ModalSignUp show={success} /> : null}
      <div className="form-group flex flex-col bg-slate-50 p-8 rounded-lg">
        <label htmlFor="name" className="py-2">
          Ansprechpartner
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="focus:ring-rose-700 focus:border-rose-700 shadow-md py-2 px-3 items-center rounded-lg border-gray-300"
        />
        <label htmlFor="email" className="py-2">
          E-Mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="focus:ring-rose-700 focus:border-rose-700 shadow-md py-2 px-3 items-center rounded-lg border-gray-300"
        />
        <label htmlFor="phone" className="py-2">
          Telefonnummer
        </label>
        <input
          id="phone"
          name="phone"
          type="phone"
          autoComplete="phone"
          required
          className="focus:ring-rose-700 focus:border-rose-700 shadow-md py-2 px-3 items-center rounded-lg border-gray-300"
        />
        <label htmlFor="company" className="py-2">
          Unternehmen
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="focus:ring-rose-700 focus:border-rose-700 shadow-md py-2 px-3 items-center rounded-lg border-gray-300"
        />
      <button
        type="submit"
        className="mt-8 shadow w-full flex items-center  justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-700 hover:bg-rose-700 hover:rounded-lg  transition-all duration-300 md:py-4 md:text-lg md:px-10"
      >
        {loading ? (
          <svg className="w-10 h-10 px-2"
            version="1.1"
            id="L4"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 0 0"
          >
            <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
              <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.1"
              />
            </circle>
            <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
              <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.2"
              />
            </circle>
            <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
              <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.3"
              />
            </circle>
          </svg>
        ) : (
          ""
        )}
        Abschicken
      </button>
      </div>
      {/* <div className="calendlyLink justify-center text-center flex flex-col text-rose-800 underline lg:mt-4 mt-8">
      
          <a href="https://calendly.com/michael-bruck-ako" target="_blank" rel="noopener noreferrer">
          <img src="/Calendly-Logo.png" className="calendly w-14 inline" alt="calendly_logo"/>
          <span>
             Direkt einen Termin vereinbaren
             </span>
          </a>
      </div> */}
    </form>
  );
}

export default CustomForm;
