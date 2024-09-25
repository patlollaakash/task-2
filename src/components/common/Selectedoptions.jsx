import React, { useState } from "react";

function Selectedoptions() {
  const [selectedName, setselectedName] = useState("akash");
  const data = [
    {
      name: "Binance",
      price: "$260.31",
      change: 8.11,
      marketCap: "$2600.40",
      shortname: "BNB",
      percentage: "4.35% APY",
    },
    {
      name: "Solana",
      price: "$100.15",
      change: 1.8,
      marketCap: "$210.60",
      shortname: "SOL",
      percentage: "-3.50% APY",
    },
    // Add more data as needed
  ];

  // Extract unique names for the dropdown
  const uniqueNames = data.map((item) => item.name);

  return (
    <div>
      <form className="d-flex align-items-center me-3">
        <label htmlFor="sel1" className="slected-name form-label me-2"></label>
        <div className="d-flex align-items-center">
          <select
            className="form-select me-2 border-dark bg-dark text-white"
            id="sel1"
            value={selectedName}
            onChange={(e) => setselectedName(e.target.value)}
          >
            <option value="">Watchlist</option>
            {uniqueNames.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}

export default Selectedoptions;
