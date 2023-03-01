import { useState, useContext } from "react";
import { PageFormContext } from "../PageContext";
import PlanTypeItem from "./PlanTypeItem";
import { plansInformation } from "../Data/plansInformation";
import { BsToggleOn } from "react-icons/bs";
export default function SelectPlan() {
  const { setCustomerInfo, customerInfo, setSelectedButton, buttonTabs } =
    useContext(PageFormContext);
  const [selectedPlan, setSelectedPlan] = useState(
    customerInfo.plan.typeOfPlan
  );
  const [typeOfSubscription, setTypeOfSubscription] = useState(
    customerInfo.plan.typeOfSubscription
  );
  const switchSubscription = () => {
    typeOfSubscription === "Monthly"
      ? setTypeOfSubscription("Yearly")
      : setTypeOfSubscription("Monthly");
  };
  const planButtons = plansInformation.map(({ icon, name, price }) => (
    <PlanTypeItem
      key={name}
      name={name}
      icon={icon}
      priceMonthly={price.monthly}
      priceYearly={price.yearly}
      typeOfSubs={typeOfSubscription}
      setSelectedPlan={setSelectedPlan}
      selectedPlan={selectedPlan}
    />
  ));
  const nextStep = () => {
    setSelectedButton(buttonTabs[2]);
    setCustomerInfo((prev) => ({
      ...prev,
      plan: {
        typeOfPlan: selectedPlan,
        typeOfSubscription: typeOfSubscription,
      },
    }));
  };
  return (
    <section className="p-5 h-[550px] flex flex-col">
      <h1 className="text-2xl font-bold text-marineBlue">Select your plan</h1>
      <p className="text-sm text-coolGray my-4">
        You have the option of monthly or yearly billing.
      </p>
      <form action="" className="shadow-md pb-5">
        {planButtons}
        <div>
          <button>
            <img src="/images/icon-checkmark.svg" alt="" />
          </button>
        </div>
      </form>
      <div className="self-end mt-auto flex justify-between w-[100%]">
        <button
          onClick={() => setSelectedButton(buttonTabs[0])}
          type="submit"
          className="text-coolGray px-2 py-2 text-sm"
        >
          Go Back
        </button>
        <div className="flex items-center space-x-3">
          <p>Monthly</p>
          <div
            className={typeOfSubscription !== "Yearly" ? "iconTransform" : ""}
            onClick={switchSubscription}
          >
            <BsToggleOn />
          </div>
          <p>Yearly</p>
        </div>
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
