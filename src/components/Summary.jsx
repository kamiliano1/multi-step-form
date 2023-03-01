import { useState, useContext } from "react";
import { addOnsInformation } from "../Data/addOnsInformation";
import { plansInformation } from "../Data/plansInformation";
import { PageFormContext } from "../PageContext";
export default function Summary() {
  const { customerInfo, setSelectedButton, buttonTabs } =
    useContext(PageFormContext);
  console.log(customerInfo);
  return (
    <section className="p-5 h-[550px] flex flex-col text-coolGray">
      <h1 className="text-2xl font-bold text-marineBlue">Finishing up</h1>
      <p className="text-sm text-coolGray my-4">
        Double-check everything looks OK before confirming.
      </p>

      <div className="grid">
        <p className="text-marineBlue text-lg font-bold">{`${customerInfo.plan.typeOfPlan} (${customerInfo.plan.typeOfSubscription})`}</p>
        <p
          className="underline"
          onClick={() => setSelectedButton(buttonTabs[1])}
        >
          Change
        </p>
        <p className=""></p>
      </div>
      <div className="self-end mt-auto flex justify-between w-[100%]">
        {/* <button
          // onClick={() => setSelectedButton(buttonTabs[1])}
          type="submit"
          className="  text-coolGray px-2 py-2 text-sm"
        >
          Go Back
        </button>
        <button
          // onClick={nextStep}
          type="submit"
          className=" bg-marineBlue text-white px-2 py-2 text-sm"
        >
          Next Step
        </button> */}
      </div>
    </section>
  );
}
