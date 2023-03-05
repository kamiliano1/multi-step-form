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
    <section className="p-5 pb-10 h-full flex flex-col min-h-[541px]">
      <h1 className="text-2xl font-bold text-marineBlue mb-2">Personal info</h1>
      <p className="text-sm text-coolGray mb-6">
        Please provide your name, email address, and phone number.
      </p>
      <form className="shadow-xl md:shadow-none pb-5 ">
        <div className="flex items-center justify-between">
          <p className="mb-1">Name</p>
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
          <p className="mb-1">Email Address</p>
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
          <p className="mb-1">Phone Number</p>
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
