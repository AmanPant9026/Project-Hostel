import React, { useState } from "react";
import Layout from "../Layouts/Layout";

const OwnerDashboard = () => {
  // State to track form and room details
  const [businessType, setBusinessType] = useState("");
  const [numRooms, setNumRooms] = useState(0);
  const [bedsPerRoom, setBedsPerRoom] = useState(0);
  const [paymentFrequency, setPaymentFrequency] = useState("monthly");
  const [rooms, setRooms] = useState([]);
  const [prices, setPrices] = useState({}); // Store prices for each room

  const handleBusinessTypeChange = (e) => {
    setBusinessType(e.target.value);
  };

  const handleRoomDetails = () => {
    const roomArray = [];
    for (let i = 0; i < numRooms; i++) {
      roomArray.push({ id: i + 1, beds: Array(bedsPerRoom).fill(0) });
    }
    setRooms(roomArray);
  };

  const handlePriceChange = (roomId, bedIndex, price) => {
    setPrices((prevPrices) => ({
      ...prevPrices,
      [`${roomId}-${bedIndex}`]: price
    }));
  };

  return (
    <Layout>
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-700">
        {/* Form for business type selection and hostel details */}
        {rooms.length === 0 && (
          <div className="flex items-center justify-center flex-grow w-full p-6 overflow-auto">
            <div className="w-full max-w-lg p-8 transition-all duration-500 ease-in-out transform bg-white rounded-lg shadow-xl animate__animated animate__fadeIn animate__delay-1s">
              <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
                Setup Your Hostel
              </h2>

              <div className="mb-6">
                <label className="block mb-2 text-lg font-semibold">
                  What kind of business are you looking for?
                </label>
                <select
                  value={businessType}
                  onChange={handleBusinessTypeChange}
                  className="w-full p-3 transition-all duration-300 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select Business Type</option>
                  <option value="hostel">Hostel</option>
                  <option value="shop-rental">Shop Rental</option>
                  <option value="mall">Mall</option>
                </select>
              </div>

              {businessType === "hostel" && (
                <>
                  <div className="mb-6">
                    <label className="block mb-2 text-lg font-semibold">
                      How many rooms do you have?
                    </label>
                    <input
                      type="number"
                      value={numRooms}
                      onChange={(e) => setNumRooms(e.target.value)}
                      className="w-full p-3 transition-all duration-300 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block mb-2 text-lg font-semibold">
                      How many beds per room?
                    </label>
                    <input
                      type="number"
                      value={bedsPerRoom}
                      onChange={(e) => setBedsPerRoom(e.target.value)}
                      className="w-full p-3 transition-all duration-300 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block mb-2 text-lg font-semibold">
                      How would you like to take payment?
                    </label>
                    <select
                      value={paymentFrequency}
                      onChange={(e) => setPaymentFrequency(e.target.value)}
                      className="w-full p-3 transition-all duration-300 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
                    >
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="yearly">Yearly</option>
                    </select>
                  </div>

                  <button
                    onClick={handleRoomDetails}
                    className="w-full p-3 text-white transition duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 hover:scale-105"
                  >
                    Submit Details
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {/* Room Visualization (after form submission) */}
        {rooms.length > 0 && (
          <div className="flex items-center justify-center flex-grow w-full p-6 overflow-auto">
            <div className="w-full max-w-6xl">
              <h3 className="mb-6 text-2xl font-semibold text-center text-gray-800">
                Room Visualization
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {rooms.map((room) => (
                  <div
                    key={room.id}
                    className="p-6 transition-all transform bg-white shadow-xl cursor-pointer rounded-xl hover:shadow-2xl hover:scale-105"
                  >
                    <h4 className="mb-4 text-lg font-bold text-center text-gray-700">
                      Room {room.id}
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {room.beds.map((_, index) => (
                        <div
                          key={index}
                          className="p-4 transition-all transform bg-gray-100 border-2 border-dashed rounded-lg hover:scale-105"
                        >
                          <label className="block text-sm text-center text-gray-600">
                            Bed {index + 1}
                          </label>
                          <input
                            type="number"
                            value={prices[`${room.id}-${index}`] || ""}
                            onChange={(e) =>
                              handlePriceChange(room.id, index, e.target.value)
                            }
                            placeholder="Set Price"
                            className="w-full p-2 mt-2 text-center transition-all duration-300 border rounded-md focus:ring-2 focus:ring-blue-400"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="p-4 text-center text-white bg-gray-800">
          <p>&copy; 2023 Hostel Stay. All Rights Reserved.</p>
        </footer>
      </div>
    </Layout>
  );
};

export default OwnerDashboard;
