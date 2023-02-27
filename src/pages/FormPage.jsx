import { useState } from "react";
import Button from "../components/Button";
import { customerInformation } from "../Data/CustomerInformation";
import YourInfo from "../components/YourInfo";
import SelectPlan from "../components/SelectPlan";
import AddOns from "../components/AddOns";
import Summary from "../components/Summary";
export default function FormPage() {
  const buttonTabs = ["Your Info", "Select Plan", "Add-Ons", "Summary"];
  const [customerInfo, setCustomerInfo] = useState(customerInformation);
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
    <div className="flex w-[100%] bg-black flex-col md:flex-row md:gap-20 justify-center">
      <div
        className="bg-gray-800 bg-cover bg-mobile bg-no-repeat
        object-bottom h-40 space-x-5 gap-5 pt-10 text-center
        md:w-[30%] md:max-w-[250px] md:bg-desktop md:min-h-[500px]"
      >
        {buttons}
      </div>
      <section className="bg-white md:max-w-[800px] relative -top-12 w-[80%] rounded-lg mx-auto">
        {selectedButton === "Your Info" && (
          <YourInfo customerInfo={customerInfo} />
        )}
        {selectedButton === "Select Plan" && (
          <SelectPlan customerInfo={customerInfo} />
        )}
        {selectedButton === "Add-Ons" && <AddOns customerInfo={customerInfo} />}
        {selectedButton === "Summary" && (
          <Summary customerInfo={customerInfo} />
        )}
      </section>
    </div>
  );
}
