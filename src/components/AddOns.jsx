import { useContext, useEffect, useState } from "react";
import { PageFormContext } from "../PageContext";
import AddOnItem from "./AddOnItem";
import { addOnsInformation } from "../Data/addOnsInformation";
export default function AddOns() {
  const { setCustomerInfo, customerInfo, setSelectedButton, buttonTabs } =
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
        isChecked={true}
        // isChecked={setCustomerInfo.addOns}
      />
    );
  });
  const nextStep = () => {
    setSelectedButton(buttonTabs[3]);
  };
  return (
    <section className="p-5 h-[550px] flex flex-col">
      <h1 className="text-2xl font-bold text-marineBlue">Pick add-ons</h1>
      <p className="text-sm text-coolGray my-4">
        Add-ons help enhance your gaming experience.
      </p>
      {addOnsItems}
      <div className="self-end mt-auto flex justify-between w-[100%]">
        <button
          onClick={() => setSelectedButton(buttonTabs[1])}
          type="submit"
          className="  text-coolGray px-2 py-2 text-sm"
        >
          Go Back
        </button>
        <button
          onClick={nextStep}
          type="submit"
          className=" bg-marineBlue text-white px-2 py-2 text-sm"
        >
          Next Step
        </button>
      </div>
    </section>
  );
}

// id: "customizableProfile",
// name: "Customizable Profile",
// details: "Custom theme on your profile",
// price: "+$2/mo",
// },
