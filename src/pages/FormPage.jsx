import { useState } from "react";
import Button from "../components/Button";
import YourInfo from "../pages/YourInfo";
import SelectPlan from "../pages/SelectPlan";
import AddOns from "../pages/AddOns";
import Summary from "../pages/Summary";
import { useContext } from "react";
import { PageFormContext } from "../PageContext";
export default function FormPage() {
  const { buttonTabs, selectedButton, setSelectedButton, customerInfo } =
    useContext(PageFormContext);
  const buttons = buttonTabs.map((item, number) => (
    <Button
      key={item}
      number={number}
      buttonTab={item}
      setSelectedButton={setSelectedButton}
      selectedButton={selectedButton}
    />
  ));
  return (
    <div className="flex w-[100%] flex-col md:flex-row md:gap-20 md:w-[1000px]  ">
      <div
        className="bg-gray-800 bg-cover bg-mobile bg-no-repeat pt-10 text-center
         h-40 space-x-5 md:space-x-0 md:bg-bottom md:space-y-6 
         md:bg-desktop md:h-[600px] md:px-10"
      >
        {buttons}
      </div>
      <section className="bg-white relative -top-12 md:top-0 w-[80%]  rounded-lg mx-auto md:mx-0 md:w-[500px] md:h-[600px]">
        {selectedButton === "Your Info" && <YourInfo />}
        {selectedButton === "Select Plan" && <SelectPlan />}
        {selectedButton === "Add-Ons" && <AddOns />}
        {selectedButton === "Summary" && <Summary />}
      </section>
    </div>
  );
}
