import React from "react";
import { BiCartAlt } from "react-icons/bi";
import { Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar({ count }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-around p-5 bg-black">
      <div>
        <h1 className="text-white">SK TECHNOLOGY</h1>
      </div>
      <div>
        <input
          className="w-80 pl-5 p-1 rounded-2xl"
          type="text"
          name="text"
          placeholder="SEARCH"
        />
      </div>
      <div>
        <ul className="flex justify-center gap-5 text-white cursor-pointer">
          <li onClick={() => navigate("/")}>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li className="text-3xl" onClick={() => navigate("/added")}>
            <Badge badgeContent={count} color="primary">
              <BiCartAlt />
            </Badge>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
