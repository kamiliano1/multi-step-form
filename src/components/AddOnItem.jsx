export default function AddOnItem(props) {
  const activeButtonClass =
    props.selectedPlan === props.name ? "border-PastelBlue" : "";
  return (
    // border PastelBlue
    <div
      // onClick={() => props.setSelectedPlan(props.name)}
      className={` grid grid-cols-[12px_2fr_1fr] 
      grid-rows-2 gap-x-4 cursor-pointer rounded-md border-2 p-3 mb-3 items-center`}
    >
      <div className="row-span-2 bg-black row-start-1 col-start-1 test">
        <input type="checkbox" className="" />
      </div>

      <h3 className="font-bold text-marineBlue">Online service</h3>
      <p className="text-coolGray text-sm col-start-2">
        Access to multiplayer games
      </p>
      <p className="text-coolGray text-sm row-span-2 row-start-1 col-start-3  ">
        +$1/mo
      </p>
    </div>
  );
}

// Online service
// Access to multiplayer games
// +$1/mo

// Larger storage
// Extra 1TB of cloud save
// +$2/mo

// Customizable Profile
// Custom theme on your profile
// +$2/mo
