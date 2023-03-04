import { useState, useContext, useEffect } from "react";
import { PageFormContext } from "../PageContext";
import PlanTypeItem from "../components/SelectPlanItem";
import { plansInformation } from "../Data/plansInformation";
import { BsToggleOn } from "react-icons/bs";
export default function SelectPlan() {
  const {
    setCustomerInfo,
    customerInfo,
    setSelectedButton,
    buttonTabs,
    setTotalPrice,
  } = useContext(PageFormContext);

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
  // useEffect(() => {
  //   setTotalPrice(
  //     parseInt(
  //       plansInformation
  //         .find((item) => item.name === selectedPlan)
  //         .price[typeOfSubscription.toLowerCase()].split("/")[0]
  //     )
  //   );
  // }, [selectedPlan]);
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
    setCustomerInfo((prev) => {
      const planPrice = plansInformation.find(
        (item) => item.name === selectedPlan
      ).price[typeOfSubscription.toLowerCase()];
      return {
        ...prev,
        plan: {
          typeOfPlan: selectedPlan,
          typeOfSubscription: typeOfSubscription,
          price: planPrice,
        },
      };
    });
  };
  return (
    <section className="p-5 pb-10 h-full flex flex-col min-h-[550px]">
      <h1 className="text-2xl font-bold text-marineBlue">Select your plan</h1>
      <p className="text-sm text-coolGray my-4">
        You have the option of monthly or yearly billing.
      </p>
      <form action="" className=" pb-5 h-[400px] flex flex-col shadow-xl">
        {planButtons}
        <div>
          <button>
            <img src="/images/icon-checkmark.svg" alt="" />
          </button>
        </div>
        <div className="flex items-center justify-center space-x-3 mt-auto">
          <p>Monthly</p>
          <div
            className={typeOfSubscription !== "Yearly" ? "iconTransform" : ""}
            onClick={switchSubscription}
          >
            <BsToggleOn className="text-2xl" />
          </div>
          <p>Yearly</p>
        </div>
      </form>
      <div className="flex justify-between w-[100%] mt-6">
        <button
          onClick={() => setSelectedButton(buttonTabs[0])}
          type="submit"
          className="text-coolGray px-2 py-2 text-sm"
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
