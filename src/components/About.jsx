import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoShieldOutline, IoFlash } from "react-icons/io5";

import { CiLock } from "react-icons/ci";
import scanning from "../../public/assets/scanning.webp";

import Image from "next/image";

function About() {
  return (
    <div className="container mx-auto px-6 md:px-12">
      <section className=" my-6 md:gap-6 lg:gap-12 grid md:grid-cols-3 grid-cols-1">
        <div className="p-4">
          <div className="m-4 w-16 h-16 rounded-full flex items-center justify-center bg-green-400">
            <div className="w-12 h-12 relative bg-black rounded-full flex items-center justify-center">
              <IoShieldOutline
                className=" text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                size={35}
              />
              <CiLock />
            </div>
          </div>
          <hr />
          <div className="mt-4">
            <h3 className="pb-3">Lorem, ipsum dolor.</h3>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio et
              culpa maiores assumenda delectus voluptatum.
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="m-4 w-16 h-16 rounded-full flex items-center justify-center bg-green-400">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <IoFlash className=" text-white" size={35} />
            </div>
          </div>
          <hr />
          <div className="mt-4">
            <h3 className="pb-3">Lorem, ipsum dolor.</h3>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio et
              culpa maiores assumenda delectus voluptatum.
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="m-4 w-16 h-16 rounded-full flex items-center justify-center bg-green-400">
            <div className="w-12 h-12 bg-black rounded-full"></div>
          </div>
          <hr />
          <div className="mt-4">
            <h3 className="pb-3">Lorem, ipsum dolor.</h3>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio et
              culpa maiores assumenda delectus voluptatum.
            </p>
          </div>
        </div>
      </section>
      <section className="flex md:flex-row flex-col items-center justify-center">
        <div className="md:w-2/5">
          <p className="py-6 px-4 text-3xl font-bold">
            The Future of NFT Ticketing
          </p>
          <hr />
          <div className="p-6">
            <div className="flex gap-4">
              <IoMdCheckmarkCircleOutline size={30} />

              <p className="text-xl font-bold text-green-400">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, sunt adipisci praesentium maiores quam corporis
              tempore minima sint amet numquam.
            </p>
          </div>
          <hr />
          <div className="p-6">
            <div className="flex gap-4">
              <IoMdCheckmarkCircleOutline size={30} />

              <p className="text-xl font-bold text-green-400">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, sunt adipisci praesentium maiores quam corporis
              tempore minima sint amet numquam.
            </p>
          </div>
          <hr />
          <div className="p-6">
            <div className="flex gap-4">
              <IoMdCheckmarkCircleOutline size={30} />

              <p className="text-xl font-bold text-green-400">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, sunt adipisci praesentium maiores quam corporis
              tempore minima sint amet numquam.
            </p>
          </div>
          <hr />
          <div className="p-6">
            <div className="flex gap-4">
              <IoMdCheckmarkCircleOutline size={30} />

              <p className="text-xl font-bold text-green-400 ">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, sunt adipisci praesentium maiores quam corporis
              tempore minima sint amet numquam.
            </p>
          </div>
          <hr />
        </div>
        <div className="md:w-3/5 flex justify-center">
          <Image
            alt="scanning-image"
            className="md:w-3/5 mt-8 md:mt-0"
            src={scanning}
          ></Image>
        </div>
      </section>
    </div>
  );
}

export default About;
