import React from "react";
import InputField from "../InputField";
import Button from "../Button";

function Step1() {
  return (
    <div className="flex flex-col w-full">

      {/* ===== Section 1 ===== */}
      <div className="flex flex-col lg:flex-row py-8 px-4 lg:px-8 gap-8 lg:gap-20">

        {/* Left Content */}
        <div className="flex flex-col">
          <p className="font-bold text-2xl">Basic Info & Product Setup</p>

          <div className="py-6">
            <p className="text-[#3F3D56] text-2xl font-bold">
              Basic Information
            </p>
            <p className="mt-3">
              Core Detail and life cycle settings of the program.
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="flex flex-col gap-5 w-full max-w-[515px]">

          <InputField
            label="Program Name"
            type="text"
            placeholder="Enter program name"
            className="w-full h-[42px]"
            style={{ backgroundColor: "#F6F6F6" }}
          />

          <InputField
            label="Manufacturer"
            type="text"
            placeholder="Select manufacture"
            className="w-full h-[42px]"
            style={{ backgroundColor: "#F6F6F6" }}
          />

          {/* Dates */}
          <div className="flex flex-col sm:flex-row gap-4">
            <InputField
              label="Start Date"
              type="date"
              name="startDate"
              className="w-full sm:w-[253px] h-[42px]"
              style={{ backgroundColor: "#F6F6F6" }}
            />
            <InputField
              label="End Date"
              type="date"
              name="endDate"
              className="w-full sm:w-[253px] h-[42px]"
              style={{ backgroundColor: "#F6F6F6" }}
            />
          </div>

          <InputField
            label="Description/Notes"
            type="textarea"
            placeholder="Enter notes here..."
            className="w-full h-[80px]"
            style={{ backgroundColor: "#F6F6F6" }}
          />
        </div>
      </div>

      {/* ===== Divider ===== */}
      <div className="h-[2px] bg-gray-300 w-full my-6"></div>

      {/* ===== Section 2 ===== */}
      <div className="flex flex-col lg:flex-row py-8 px-4 lg:px-8 gap-8 lg:gap-20">

        {/* Left Content */}
        <div className="flex flex-col">
          <p className="text-[#3F3D56] text-2xl font-bold">
            Product (NDC) Configuration
          </p>
          <p>NDC codes associated with the program.</p>
        </div>

        {/* Right Form */}
        <div className="flex flex-col gap-4 w-full max-w-[515px]">

          <InputField
            label="NDC Code"
            placeholder="Enter NDC Code"
            className="w-full h-[42px]"
          />

          <Button
            label="Upload NDC list"
            className="bg-white border border-red rounded-full h-[37px] w-[151px] flex justify-center items-center"
          />

          {/* Continue Button */}
          <div className="flex justify-end w-full mt-6">
            <Button
              label="Continue"
              className="text-white w-full sm:w-[181px] h-[37px] rounded-full flex justify-center items-center"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Step1;
