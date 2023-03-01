import { useContext, useEffect, useRef, createRef, useState } from "react";
import { PageFormContext } from "../PageContext";
export default function AddOnItem(props) {
  const checkBoxRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const { setCustomerInfo, customerInfo } = useContext(PageFormContext);
  const borderClass =
    props.selectedPlan === props.name ? "border-PastelBlue" : "";
  const handleChange = (e) => {
    const { name, checked } = e.target;

    setCustomerInfo((prev) => ({
      ...prev,
      addOns: { ...prev.addOns, [name]: checked },
    }));
    // checkBoxRef.current.checked === true
    //   ? (checkBoxRef.current.checked = false)
    //   : (checkBoxRef.current.checked = true);
  };
  useEffect(() => {
    // console.log(customerInfo);
    // console.log(customerInfo);
  }, [customerInfo]);
  return (
    // border PastelBlue
    <div
      className={`grid grid-cols-[12px_2fr_1fr] -z-1 
      grid-rows-2 gap-x-4 cursor-pointer rounded-md border-2 p-3 mb-3 items-center`}
    >
      <div className="row-span-2 mt-3 row-start-1 col-start-1 test">
        <input
          type="checkbox"
          className="checked:bg-black"
          checked={customerInfo.addOns[props.id]}
          onChange={handleChange}
          name={props.id}
          id={props.id}
          ref={checkBoxRef}
        />
      </div>
      <h3 className="font-bold text-marineBlue">{props.name}</h3>
      <p className="text-coolGray text-sm col-start-2">{props.details}</p>
      <p className="text-coolGray text-sm row-span-2 row-start-1 col-start-3  ">
        {props.price}
      </p>
    </div>
  );
}
