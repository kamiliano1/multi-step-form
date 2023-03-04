import { useState, useContext, useEffect } from "react";
import { addOnsInformation } from "../Data/addOnsInformation";
import { plansInformation } from "../Data/plansInformation";
import { PageFormContext } from "../PageContext";
import SummaryAddOnItem from "../components/SummaryAddOnItem";

export default function Summary() {
  const [addonPrice, setAddonPrice] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const {
    customerInfo,
    setSelectedButton,
    buttonTabs,
    activeAddons,
    totalPrice,
    setTotalPrice,
  } = useContext(PageFormContext);
  useEffect(() => {
    setAddonPrice(0);
    activeAddons.map((item) => {
      const addonPrice = addOnsInformation.find((addOn) => {
        return addOn.id === item;
      }).price[typeOfSubs];
      setAddonPrice((prev) => prev + parseInt(addonPrice.split("/")[0]));
    });
  }, []);

  useEffect(() => {
    setTotalPrice(
      parseInt(
        plansInformation
          .find((item) => item.name === customerInfo.plan.typeOfPlan)
          .price[customerInfo.plan.typeOfSubscription.toLowerCase()].split(
            "/"
          )[0]
      ) + addonPrice
    );
  }, [addonPrice]);
  const typeOfSubs = customerInfo.plan.typeOfSubscription.toLowerCase();

  const addonsItems = activeAddons.map((item) => {
    const addonName = addOnsInformation.find((addOn) => addOn.id === item).name;
    const addonPrice = addOnsInformation.find((addOn) => {
      return addOn.id === item;
    }).price[typeOfSubs];
    return (
      <SummaryAddOnItem key={addonName} name={addonName} price={addonPrice} />
    );
  });
  return (
    <section
      className={`p-5 pb-10 h-full flex flex-col text-coolGray ${
        !isConfirmed && "min-h-[550px]"
      }`}
    >
      {!isConfirmed === true ? (
        <>
          <h1 className="text-2xl font-bold text-marineBlue">Finishing up</h1>
          <p className="text-sm text-coolGray my-4">
            Double-check everything looks OK before confirming.
          </p>
          <div className="grid grid-cols-2 grid-rows-2 my-5 px-3">
            <p className="text-marineBlue md:text-lg font-bold col-start-1  ">{`${customerInfo.plan.typeOfPlan} (${customerInfo.plan.typeOfSubscription})`}</p>
            <p
              className="underline row-start-2"
              onClick={() => setSelectedButton(buttonTabs[1])}
            >
              Change
            </p>
            <p className="text-marineBlue font-bold col-start-2 row-span-2 self-center text-right">
              ${customerInfo.plan.price}
            </p>
          </div>
          {addonsItems}
          <div className="flex justify-between my-5 px-3  shadow-xl pb-3">
            <p className="">
              Total{" "}
              {customerInfo.plan.typeOfSubscription === "Monthly"
                ? "(per Month)"
                : "(per Year)"}
            </p>
            <p className=" text-PurplishBlue font-bold text-md">
              +${totalPrice}{" "}
              {customerInfo.plan.typeOfSubscription === "Monthly"
                ? "/mo"
                : "/yr"}
            </p>
          </div>

          <div className="self-end mt-auto flex justify-between w-[100%]">
            <button
              onClick={() => setSelectedButton(buttonTabs[2])}
              type="submit"
              className="  text-coolGray px-2 py-2 text-sm"
            >
              Go Back
            </button>
            <button
              onClick={() => setIsConfirmed(true)}
              type="submit"
              className=" bg-PurplishBlue text-white px-4 py-2 text-sm rounded-md"
            >
              Confirm
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col text-center items-center space-y-4 my-auto shadow-xl md:shadow-none py-10">
          <img
            src="/images/icon-thank-you.svg"
            className="w-[50px] mb-5"
            alt=""
          />
          <h2 className="font-bold text-marineBlue text-2xl">Thank you!</h2>
          <p className="text-sm max-w-[300px]">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      )}
    </section>
  );
}
