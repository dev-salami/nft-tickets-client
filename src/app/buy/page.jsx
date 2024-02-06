"use client";
import Loader from "@/components/Loader";
import TicketCard from "@/components/TicketCard";
import BuyTicket from "@/components/buyTicket";
import Form from "@/components/createEvent";
import EventCard from "@/components/eventCard";
import { useContract, useContractRead } from "@thirdweb-dev/react";
// import { buyTicket } fro@/helperFunctionsperFunctions";
import React from "react";

function Page() {
  const eventAddress = "0xf05b19725474315D8c588b64e72C9A008A8EfAC0";
  const { contract } = useContract(
    "0x22c57a199e26230BC53f40C1c3E7C80ffAB21609"
  );
  const { data, isLoading } = useContractRead(contract, "getEvents");

  return (
    <section>
      <div className="  container mx-auto my-6   ">
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            {data.length === 0 ? (
              <p>There are currently no available event</p>
            ) : (
              <section className="grid gap-6    grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {data.map((ticket) => (
                  <TicketCard
                    key={ticket[0]}
                    type="purchase"
                    contractAddress={ticket[0]}
                    eventImg={ticket[2]}
                    name={ticket[1]}
                  />
                ))}
              </section>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Page;
