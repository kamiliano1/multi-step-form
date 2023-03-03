import { createContext, useState, useEffect } from "react";
const PageFormContext = createContext();
import { customerInformation } from "./Data/customerInformation";
function PageFormContextProvider({ children }) {
  const buttonTabs = ["Your Info", "Select Plan", "Add-Ons", "Summary"];
  const [selectedButton, setSelectedButton] = useState(buttonTabs[0]);
  const [customerInfo, setCustomerInfo] = useState(customerInformation);
  const [activeAddons, setActiveAddons] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setActiveAddons(
      Object.keys(customerInfo.addOns).filter(
        (key) => customerInfo.addOns[key] === true
      )
    );
  }, [customerInfo]);
  return (
    <PageFormContext.Provider
      value={{
        buttonTabs,
        selectedButton,
        setSelectedButton,
        customerInfo,
        setCustomerInfo,
        activeAddons,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </PageFormContext.Provider>
  );
}

export { PageFormContext, PageFormContextProvider };
