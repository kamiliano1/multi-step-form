import { useContext } from "react";
import Button from "../components/Button";
import { PageFormContext } from "../PageContext";
import AddOns from "../pages/AddOns";
import SelectPlan from "../pages/SelectPlan";
import Summary from "../pages/Summary";
import YourInfo from "./PersonalInfo";
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
    <div
      className="flex w-[100%] flex-col md:flex-row md:w-[90%] md:max-w-[900px] md:gap-[clamp(1rem,5vw,5rem)]
     md:h-[600px] justify-center p-2 md:shadow-xl"
    >
      <div
        className=" md:flex-grow mb-2 rounded-xl
      bg-gray-800 bg-cover bg-mobile bg-no-repeat pt-10 text-center
      h-40 space-x-5 md:space-x-0 md:bg-bottom md:space-y-6 
      md:bg-desktop md:h-full md:pl-10 md:max-w-[300px] md:px-5
      "
      >
        {buttons}
      </div>
      <div className=" md:flex-grow-[2] relative -top-12 md:top-0 bg-white w-[90%] mx-auto rounded-md max-w-[500px] ">
        <section className="md:top-0 rounded-lg mx-auto md:mx-0 md:w-[100%] md:h-[600px] ">
          {selectedButton === "Your Info" && <YourInfo />}
          {selectedButton === "Select Plan" && <SelectPlan />}
          {selectedButton === "Add-Ons" && <AddOns />}
          {selectedButton === "Summary" && <Summary />}
        </section>
      </div>
    </div>
  );
}
