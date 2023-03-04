import { useContext, useState } from "react";
import { BsToggleOn } from "react-icons/bs";
import PlanTypeItem from "../components/SelectPlanItem";
import { plansInformation } from "../Data/plansInformation";
import { PageFormContext } from "../PageContext";
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
    <section className="p-5 pb-10 h-full flex flex-col ">
      <h1 className="text-2xl font-bold text-marineBlue">Select your plan</h1>
      <p className="text-sm text-coolGray my-4">
        You have the option of monthly or yearly billing.
      </p>
      <form action="" className="">
        <div className="pb-5 h-[350px] md:h-[230px] flex flex-col md:flex-row shadow-xl md:shadow-none md:gap-4">
          {planButtons}
        </div>

        <div className="flex items-center justify-center space-x-3 mt-auto md:row-start-2 font-bold pt-5">
          <p
            onClick={() => setTypeOfSubscription("Monthly")}
            className={`cursor-pointer ${
              typeOfSubscription === "Monthly"
                ? "text-marineBlue"
                : "text-coolGray"
            }
            `}
          >
            Monthly
          </p>
          <div
            className={typeOfSubscription !== "Yearly" ? "iconTransform" : ""}
            onClick={switchSubscription}
          >
            <BsToggleOn className="text-2xl cursor-pointer" />
          </div>
          <p
            onClick={() => setTypeOfSubscription("Yearly")}
            className={`cursor-pointer ${
              typeOfSubscription === "Yearly"
                ? "text-marineBlue"
                : "text-coolGray"
            }
            `}
          >
            Yearly
          </p>
        </div>
      </form>
      <div className="flex justify-between w-[100%] mt-6 md:mt-auto">
        <button
          onClick={() => setSelectedButton(buttonTabs[0])}
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
