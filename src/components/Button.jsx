export default function Button(props) {
  const activeButtonClass =
    props.selectedButton === props.buttonTab
      ? "bg-PastelBlue border-none text-black"
      : "text-white";
  return (
    <div className="inline-grid md:grid md:justify-items-center md:grid-cols-[min-content,_max-content] md:gap-5 md:grid-rows-1 ">
      <span
        // onClick={() => props.setSelectedButton(props.buttonTab)}
        className={`${activeButtonClass}  
      text-md font-bold inline-grid rounded-full 
      aspect-square px-[.9rem]  place-items-center 
      border-white border-[1.5px]`}
      >
        {props.number + 1}
      </span>
      <p className="hidden md:block uppercase text-start place-self-start text-lightGray text-sm">
        Step {props.number + 1}
        <span className="block font-bold text-white text-sm tracking-wider">
          {props.buttonTab}
        </span>
      </p>
    </div>
  );
}
