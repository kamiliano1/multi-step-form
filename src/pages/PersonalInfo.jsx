import { useContext, useEffect } from "react";
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
    <section className="p-5 pb-10 h-full flex flex-col min-h-[550px]">
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
          className={`${
            errors.name && "border-red-500"
          } hover:border-PurplishBlue `}
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
          className={`${
            errors.email && "border-red-500"
          } hover:border-PurplishBlue `}
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
          className={`${
            errors.phone && "border-red-500"
          } hover:border-PurplishBlue `}
          placeholder="e.g. +1 234 567 890"
          {...register("phone", { required: true })}
        />
      </form>
      <button
        onClick={handleSubmit(onSubmit)}
        className="self-end bg-marineBlue text-lightBlue px-6 py-3 text-sm mt-auto rounded-[4px] hover:bg-blue-800 "
      >
        Next Step
      </button>
    </section>
  );
}
