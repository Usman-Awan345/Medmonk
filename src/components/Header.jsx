import React from "react";
import Button from "./Button";

function Header() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-4 
                    w-full px-4 sm:px-6 lg:px-12 py-4">

      {/* ===== Left Content ===== */}
      <div className="flex flex-col">
        <p className="text-lg sm:text-xl font-bold">
          Create new program
        </p>
        <p className="text-sm sm:text-base text-gray-600">
          Start a new copay system program
        </p>
      </div>

      {/* ===== Right Buttons ===== */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 
                      sm:justify-end sm:items-center">

        <Button
          label="Cancel"
          className="bg-white border border-red-500 rounded-full
                     h-[37px] w-full sm:w-[114px]
                     flex justify-center items-center"
        />

        <Button
          label="Save & Activate"
          variant="primary"
          className="text-blue-50 rounded-full
                     h-[37px] w-full sm:w-[181px]
                     flex justify-center items-center"
        />
      </div>
    </div>
  );
}

export default Header;
