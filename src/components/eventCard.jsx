import React from "react";

function EventCard() {
  return (
    <div className="w-fit">
      <div className="w-80 h-40 bg-green-400">EventCard</div>
      <div>
        <p> Davido's Concert Abuja</p>
        <p>10 USD</p>
        <p>10:00 PM</p>
      </div>
      <button className="w-full bg-green-600 rounded-md">Buy Ticket</button>
    </div>
  );
}

export default EventCard;
