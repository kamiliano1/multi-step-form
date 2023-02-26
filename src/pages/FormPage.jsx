import { useState } from "react";
import Button from "../components/Button";
import YourInfo from "../components/YourInfo";
import SelectPlan from "../components/SelectPlan";
import AddOns from "../components/AddOns";
import Summary from "../components/Summary";
export default function FormPage() {
  const buttonTabs = ["Your Info", "Select Plan", "Add-Ons", "Summary"];
  const [selectedButton, setSelectedButton] = useState(buttonTabs[0]);
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
    <div className="flex w-[100%] bg-black flex-col md:flex-row">
      <div className="bg-gray-800 bg-mobile md:bg-desktop bg-cover h-32">
        {buttons}
      </div>
      {selectedButton === "Your Info" && <YourInfo />}
      {selectedButton === "Select Plan" && <SelectPlan />}
      {selectedButton === "Add-Ons" && <AddOns />}
      {selectedButton === "Summary" && <Summary />}
    </div>
  );
}
