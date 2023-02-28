import AddOnItem from "./AddOnItem";
export default function AddOns() {
  return (
    <section className="p-5 h-[550px] flex flex-col">
      <h1 className="text-2xl font-bold text-marineBlue">Pick add-ons</h1>
      <p className="text-sm text-coolGray my-4">
        Add-ons help enhance your gaming experience.
      </p>
      <AddOnItem />
      <AddOnItem />
    </section>
  );
}
