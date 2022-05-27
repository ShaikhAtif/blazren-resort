// import React from "react";
// import "../../styles/Dining.scss";
// const addRoom = () => {
//   return (
    
//     <div className="Checkout">
//       <header
//         className="header-main"
//         style={{
//           background: `no-repeat center/cover url("/img/booking/checkout_header.jpg")`,
//         }}
//       >
//         <div className="header-content">
//           <h2 className="alt-font">Finish Your Reservation</h2>
//         </div>
//       </header>
//       <section className="desc">
//         <h1 className="alt-font">YOUR DETAILS</h1>
//       </section>
//       <section className="room-info">
//         {room && (
//           <>
//             <h1>BOOKING SUMMARY</h1>
//             <div>
//               <h4>Room:</h4> <span>{room.title}</span>
//             </div>
//             <div>
//               <h4>Dates:</h4>{" "}
//               <span>{`${guestDetails.booking.dates[0].toLocaleString("en-US", {
//                 year: "numeric",
//                 month: "2-digit",
//                 day: "2-digit",
//               })} - ${guestDetails.booking.dates[1].toLocaleString("en-US", {
//                 year: "numeric",
//                 month: "2-digit",
//                 day: "2-digit",
//               })}`}</span>
//             </div>
//             <div>
//               <h4>Number of Nights:</h4>
//               <span>{room.totalNights}</span>
//             </div>
//             <div>
//               <h4>Guests</h4>
//               <span>
//                 {guestDetails.booking.adults} Adults{" "}
//                 {guestDetails.booking.children > 0 &&
//                   `${guestDetails.booking.children} Children`}
//               </span>
//             </div>
//             <div>
//               <h4>Total</h4>
//               <span style={{ fontWeight: "bold" }}>${room.totalPrice}</span>
//             </div>
//           </>
//         )}
//       </section>
//       <section className="details">
//         <h1 className="alt-font">Enter Your Information</h1>
//         {error && <span className="error-msg">{msg}</span>}
//         <form className={classes.root} autoComplete="off">
//           <TextField
//             onChange={handleChange}
//             required
//             className="outlined-basic"
//             name="firstName"
//             label="First Name"
//             variant="outlined"
//           />
//           <TextField
//             onChange={handleChange}
//             required
//             className="outlined-basic"
//             name="lastName"
//             label="Last Name"
//             variant="outlined"
//           />
//           <TextField
//             onChange={handleChange}
//             required
//             className="outlined-basic"
//             name="email"
//             label="Email"
//             variant="outlined"
//           />
//           <TextField
//             onChange={handleChange}
//             required
//             className="outlined-basic"
//             name="confirmEmail"
//             label="Confirm Email"
//             variant="outlined"
//           />
//           <TextField
//             onChange={handleChange}
//             required
//             className="outlined-basic"
//             name="phone"
//             label="Phone Number"
//             variant="outlined"
//             inputProps={{
//               inputMode: "numeric",
//               pattern: "[0-9]*",
//             }}
//           />
//           <div className="btn-container">
//             <Button onClick={handleSubmit} variant="outlined">
//               Submit
//             </Button>
//           </div>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default addRoom;
