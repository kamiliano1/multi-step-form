import { useContext } from "react";
import AddOnItem from "../components/AddOnItem";
import { addOnsInformation } from "../Data/addOnsInformation";
import { PageFormContext } from "../PageContext";
export default function AddOns() {
  const { customerInfo, setSelectedButton, buttonTabs } =
    useContext(PageFormContext);
  const addOnsItems = addOnsInformation.map((item) => {
    const planPrice = addOnsInformation.find(
      (services) => services.name === item.name
    ).price[customerInfo.plan.typeOfSubscription.toLowerCase()];
    return (
      <AddOnItem
        key={item.id}
        id={item.id}
        name={item.name}
        details={item.details}
        price={planPrice}
      />
    );
  });
  const nextStep = () => {
    setSelectedButton(buttonTabs[3]);
  };
  return (
    <section className="p-5 pb-10 h-full flex flex-col min-h-[550px] ">
      <div className="shadow-xl">
        <h1 className="text-2xl font-bold text-marineBlue">Pick add-ons</h1>
        <p className="text-sm text-coolGray my-4">
          Add-ons help enhance your gaming experience.
        </p>
        {addOnsItems}
      </div>
      <div className="self-end mt-auto flex justify-between w-[100%]">
        <button
          onClick={() => setSelectedButton(buttonTabs[1])}
          type="submit"
          className="text-coolGray px-2 py-2 text-sm hover:text-black"
        >
          Go Back
        </button>
        <button
          onClick={nextStep}
          type="submit"
          className=" self-end bg-marineBlue text-lightBlue px-6 py-3 text-sm mt-auto rounded-[4px] hover:bg-blue-800"
        >
          Next Step
        </button>
      </div>
    </section>
  );
}
