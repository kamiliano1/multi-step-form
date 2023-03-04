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
  return (
    <div
      onClick={handleChange}
      className={`grid grid-cols-[min-content_1fr_min-content] z-20 ${
        customerInfo.addOns[props.id] && "border-blue-900"
      } bg
      grid-rows-2 cursor-pointer rounded-md border-2 p-3 mb-3 items-center`}
    >
      <div className="row-span-2 mt-3 row-start-1 col-start-1 mr-2">
        <input
          type="checkbox"
          className="w-[20px] h-[20px]"
          checked={customerInfo.addOns[props.id]}
          onChange={handleChange}
          name={props.id}
          id={props.id}
          ref={checkBoxRef}
        />
      </div>
      <h3 className="font-bold text-marineBlue text-xs">{props.name}</h3>
      <p className="text-coolGray text-xs col-start-2">{props.details}</p>
      <p className="text-xs md:text-sm row-span-2 row-start-1 col-start-3 text-end text-blue-900 text-md font-bold mr-1">
        +{props.price}
      </p>
    </div>
  );
}
