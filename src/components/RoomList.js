import React from "react";
import Room from "./Room";

export default function RoomList({ sortedRooms }) {
  if (sortedRooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  } else {
    return (
      <section className="roomslist">
        <div className="roomslist-center">
          {sortedRooms.map(room => (
            <Room key={room.id} room={room} />
          ))}
        </div>
      </section>
    );
  }
}
