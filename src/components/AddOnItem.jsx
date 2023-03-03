import { useContext, useEffect, useRef, createRef, useState } from "react";
import { PageFormContext } from "../PageContext";
import { customerInformation } from "../Data/customerInformation";
export default function AddOnItem(props) {
  const checkBoxRef = useRef(null);
  const { setCustomerInfo, customerInfo } = useContext(PageFormContext);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name) {
      setCustomerInfo((prev) => ({
        ...prev,
        addOns: { ...prev.addOns, [name]: checked },
      }));
      return;
    }
    const checkBoxId = checkBoxRef.current.id;
    setCustomerInfo((prev) => ({
      ...prev,
      addOns: { ...prev.addOns, [checkBoxId]: !checkBoxRef.current.checked },
    }));
  };
  console.log(customerInfo.addOns.onlineService);
  return (
    <div
      onClick={handleChange}
      className={`grid grid-cols-[25px_2fr_1fr] z-20 ${
        customerInfo.addOns[props.id] && "border-blue-900"
      } bg
      grid-rows-2 gap-x-4 cursor-pointer rounded-md border-2 p-3 mb-3 items-center`}
    >
      <div className="row-span-2 mt-3 row-start-1 col-start-1">
        <input
          type="checkbox"
          className="w-[20px] h-[20px] mr-3"
          checked={customerInfo.addOns[props.id]}
          onChange={handleChange}
          name={props.id}
          id={props.id}
          ref={checkBoxRef}
        />
      </div>
      <h3 className="font-bold text-marineBlue">{props.name}</h3>
      <p className="text-coolGray text-sm col-start-2">{props.details}</p>
      <p className=" text-sm row-span-2 row-start-1 col-start-3 text-end text-blue-900 text-md font-bold mr-1">
        +{props.price}
      </p>
    </div>
  );
}
