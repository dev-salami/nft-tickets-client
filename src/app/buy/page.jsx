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
  console.log(data);
  // console.log(data);

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
                {data.map((event) => (
                  <TicketCard
                    key={event[0]}
                    type="purchase"
                    contractAddress={event[0]}
                    eventImg={event[2]}
                    name={event[1]}
                  />
                ))}
              </section>
            )}
          </div>
        )}

        {/* <TicketCard type="purchase" />
        <TicketCard type="purchase" />
        <TicketCard type="purchase" /> <TicketCard type="purchase" />
        <TicketCard type="purchase" /> <TicketCard type="purchase" />
        <TicketCard type="purchase" /> */}
      </div>
      {/* <BuyTicket /> */}
    </section>
  );
}

export default Page;

//  <section className="container mx-auto px-6 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//    <EventCard />
//    <EventCard /> <EventCard /> <EventCard /> <EventCard /> <EventCard />
//  </section>;
