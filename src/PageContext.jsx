import { createContext, useState } from "react";
import { customerInformation } from "./Data/CustomerInformation";
const PageFormContext = createContext();

function PageFormContextProvider({ children }) {
  const buttonTabs = ["Your Info", "Select Plan", "Add-Ons", "Summary"];
  const [selectedButton, setSelectedButton] = useState(buttonTabs[0]);
  const [customerInfo, setCustomerInfo] = useState(customerInformation);
  return (
    <PageFormContext.Provider
      value={{
        buttonTabs,
        selectedButton,
        setSelectedButton,
        customerInfo,
        setCustomerInfo,
      }}
    >
      {children}
    </PageFormContext.Provider>
  );
}

export { PageFormContext, PageFormContextProvider };
