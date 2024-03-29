import React from "react";
import ticket from "../../public/assets/ticket.webp";
import Image from "next/image";

function Header() {
  return (
    <section className="max-w-[1280px] mx-auto px-5">
      <div className="mt-8 flex flex-col gap-4 md:flex-row items-center justify-center">
        <div className="md:w-1/2 md:pl-6">
          <div className="font-semibold text-3xl lg:text-6xl  ">
            <p className="leading-tight text-center md:text-left ">
              Create, Manage, And Sell Digital Event Ticket
            </p>
          </div>
          <p className=" max-w-xl my-5 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            nisi, quisquam veniam ab iure fugiat, alias expedita quasi,
            voluptatibus deleniti nulla explicabo qui adipisci veritatis! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Maiores nisi,
            quisquam veniam ab iure fugiat, alias expedita quasi, voluptatibus
            deleniti nulla explicabo qui adipisci veritatis!
          </p>
          <div className="mx-auto w-fit md:mx-0">
            <button className="  px-6 py-1.5  bg-green-600 rounded-md text-white">
              Create Event
            </button>
            <button className="ml-4 px-6 py-1.5  bg-green-600 rounded-md text-white">
              Buy Ticket
            </button>
          </div>
        </div>
        <div className="md:w-2/5 flex justify-center">
          <Image
            className="rounded-2xl w-4/5   bg-green-300 mt-8 md:mt-0"
            src={ticket}
            alt="header-image"
          ></Image>
        </div>
      </div>
    </section>
  );
}

export default Header;
