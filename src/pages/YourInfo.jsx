import { useState, useContext, useEffect } from "react";
import { PageFormContext } from "../PageContext";
import { useForm } from "react-hook-form";
export default function YourInfo() {
  const { setCustomerInfo, customerInfo, setSelectedButton, buttonTabs } =
    useContext(PageFormContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = (data) => {
    setCustomerInfo((prev) => ({
      ...prev,
      personalInfo: {
        name: data.name,
        email: data.email,
        phone: data.phone,
      },
    }));
    setSelectedButton(buttonTabs[1]);
  };
  useEffect(() => {
    setValue("name", customerInfo.personalInfo.name);
    setValue("email", customerInfo.personalInfo.email);
    setValue("phone", customerInfo.personalInfo.phone);
  }, []);

  return (
    <section className="p-5 pb-10  min-h-[550px] flex flex-col">
      <h1 className="text-2xl font-bold text-marineBlue">Personal info</h1>
      <p className="text-sm text-coolGray my-4">
        Please provide your name, email address, and phone number.
      </p>
      <form action="" className="shadow-xl pb-5 ">
        <div className="flex items-center justify-between">
          <p className="">Name</p>
          {errors.name && (
            <p className="text-red-600 font-bold text-xs text-right ">
              This field is required
            </p>
          )}
        </div>
        <input
          type="text"
          name="name"
          id="name"
          className={errors.name && "border-red-500"}
          placeholder="e.g. Stephen King"
          {...register("name", { required: true })}
        />{" "}
        <div className="flex items-center justify-between">
          <p className="">Email Address</p>
          {errors.email && (
            <p className="text-red-600 font-bold text-xs text-right ">
              This field is required
            </p>
          )}
        </div>
        <input
          type="email"
          name="email"
          id="email"
          className={errors.email && "border-red-500"}
          placeholder="e.g. stephenking@lorem.com"
          {...register("email", { required: true })}
        />
        <div className="flex items-center justify-between">
          <p className="">Phone Number</p>
          {errors.phone && (
            <p className="text-red-600 font-bold text-xs text-right ">
              This field is required
            </p>
          )}
        </div>
        <input
          type="number"
          name="phone"
          id="phone"
          className={errors.phone && "border-red-500"}
          placeholder="e.g. +1 234 567 890"
          {...register("phone", { required: true })}
        />
      </form>
      <button
        onClick={handleSubmit(onSubmit)}
        className="self-end md:mt-auto bg-marineBlue text-white px-2 py-2 text-sm mt-auto"
      >
        Next Step
      </button>
    </section>
  );
}
