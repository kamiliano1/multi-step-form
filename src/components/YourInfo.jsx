import { useState, useContext } from "react";
import { PageFormContext } from "../PageContext";
export default function YourInfo() {
  const { setCustomerInfo, customerInfo, setSelectedButton, buttonTabs } =
    useContext(PageFormContext);
  const [personalInfo, setPersonalInfo] = useState({
    name: customerInfo.personalInfo.name ? customerInfo.personalInfo.name : "",
    email: customerInfo.personalInfo.email
      ? customerInfo.personalInfo.email
      : "",
    phone: customerInfo.personalInfo.phone
      ? customerInfo.personalInfo.phone
      : "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    setCustomerInfo((prev) => ({ ...prev, personalInfo: personalInfo }));
    setSelectedButton(buttonTabs[1]);
  };

  return (
    <section className="p-5 h-[550px] flex flex-col">
      <h1 className="text-2xl font-bold text-marineBlue">Personal info</h1>
      <p className="text-sm text-coolGray my-4">
        Please provide your name, email address, and phone number.
      </p>
      <form action="" className="shadow-md pb-5">
        <label htmlFor="name">
          Name
          <input
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            value={personalInfo.name}
            placeholder="e.g. Stephen King"
          />
        </label>
        <label htmlFor="email">
          {" "}
          Email Address
          <input
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            value={personalInfo.email}
            placeholder="e.g. stephenking@lorem.com"
          />
        </label>
        <label htmlFor="phone"> Phone Number</label>
        <input
          onChange={handleChange}
          type="number"
          name="phone"
          id="phone"
          value={personalInfo.phone}
          placeholder="e.g. +1 234 567 890"
        />
      </form>
      <button
        onClick={handleSubmit}
        type="submit"
        className="self-end mt-auto bg-marineBlue text-white px-2 py-2 text-sm"
      >
        Next Step
      </button>
    </section>
  );
}
