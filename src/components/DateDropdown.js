import React, { useContext, useState } from "react";
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateDropdown = () => {
  const { date, setDate } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleApplyDate = () => {
    if (selectedDate) {
      setDate(selectedDate.toISOString().slice(0, 10));
    }
    setIsOpen(false);
  };

  const handleResetDate = () => {
    setSelectedDate(null);
    setDate("Available Date (any)");
    setIsOpen(false);
  };

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        className="dropdown-btn w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {date}
          </div>
          <div className="text-[13px]">Select Available Date</div>
        </div>

        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      {isOpen && (
        <div className="absolute z-10 mt-2">
          <DatePicker
            selected={selectedDate || null}
            onChange={handleDateChange}
            className="p-2 border rounded-lg bg-white text-black focus:outline-none focus:ring focus:border-blue-300"
            placeholderText="Select Available Date"
          />
          <button
            onClick={handleApplyDate}
            className="mt-2 mr-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Apply Date
          </button>
          <button
            onClick={handleResetDate}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
          >
            Reset
          </button>
        </div>
      )}
    </Menu>
  );
};

export default DateDropdown;
