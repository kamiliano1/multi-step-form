import { useState } from "react";
import Button from "../components/Button";
import YourInfo from "../components/YourInfo";
import SelectPlan from "../components/SelectPlan";
import AddOns from "../components/AddOns";
import Summary from "../components/Summary";
import { useContext } from "react";
import { PageFormContext } from "../PageContext";
export default function FormPage() {
  const { buttonTabs, selectedButton, setSelectedButton } =
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
    <div className="flex w-[100%] flex-col md:flex-row md:gap-20 md:w-[1400px] bg-black">
      <div
        className="bg-gray-800 bg-cover bg-mobile bg-no-repeat 
         h-40 space-x-5 md:space-x-0 md:bg-bottom md:space-y-6 pt-10
         md:bg-desktop md:min-h-[500px] md:w-[300px] text-center"
      >
        {buttons}
      </div>
      <section className="bg-white md:max-w-[800px] relative -top-12 md:top-0 w-[80%] md:w-auto rounded-lg mx-auto">
        {selectedButton === "Your Info" && <YourInfo />}
        {selectedButton === "Select Plan" && <SelectPlan />}
        {selectedButton === "Add-Ons" && <AddOns />}
        {selectedButton === "Summary" && <Summary />}
      </section>
    </div>
  );
}
