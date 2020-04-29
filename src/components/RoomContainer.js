import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  } else {
    return (
      <React.Fragment>
        <RoomFilter rooms={rooms} />
        <RoomList sortedRooms={sortedRooms} />
      </React.Fragment>
    );
  }
}

export default withRoomConsumer(RoomContainer);

// import React from "react";
// import RoomFilter from "./RoomFilter";
// import RoomList from "./RoomList";
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";

// function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         } else {
//           return (
//             <div>
//               Hello from Rooms Container
//               <RoomFilter rooms={rooms} />
//               <RoomList sortedRooms={sortedRooms} />
//             </div>
//           );
//         }
//       }}
//     </RoomConsumer>
//   );
// }

// export default RoomContainer;
