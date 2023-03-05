export default function PlanTypeItem(props) {
  const activeButtonClass =
    props.selectedPlan === props.name ? "border-PurplishBlue" : "";

  return (
    <div
      onClick={() => props.setSelectedPlan(props.name)}
      className={`${activeButtonClass} grid grid-cols-[35px_1fr] grid-rows-2 
      gap-x-4 cursor-pointer rounded-md border-[1px] p-3 
      mb-3 hover:border-PurplishBlue md:flex md:flex-col w-[100%]`}
    >
      <img
        src={props.icon}
        className="row-span-2 self-center md:self-start md:pb-10"
        alt={`${props.name} icon`}
      />
      <h3 className="font-bold text-marineBlue">{props.name}</h3>
      <p className="text-coolGray text-sm">
        $
        {props.typeOfSubs === "Monthly"
          ? props.priceMonthly
          : props.priceYearly}
      </p>
      {props.typeOfSubs === "Yearly" && (
        <p className="text-marineBlue col-start-2 text-sm">2 months free</p>
      )}
    </div>
  );
}
