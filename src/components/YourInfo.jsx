import { useState } from "react";

export default function YourInfo(props) {
  const [personalnfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
    console.log(personalnfo);
  };
  const handleSubmit = (e) => {
    e.prevent.default();
  };

  return (
    <section className="p-5 h-[500px] flex flex-col">
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
            value={personalnfo.name}
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
            value={personalnfo.email}
            placeholder="e.g. stephenking@lorem.com"
          />
        </label>
        <label htmlFor="phone"> Phone Number</label>
        <input
          onChange={handleChange}
          type="number"
          name="phone"
          id="phone"
          value={personalnfo.phone}
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
