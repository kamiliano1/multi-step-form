export default function Button(props) {
  const styles = {
    backgroundColor: props.selectedButton === props.buttonTab ? "red" : "",
  };

  const activeButtonClass =
    props.selectedButton === props.buttonTab
      ? "bg-PastelBlue border-none text-black"
      : "";
  return (
    <div className="inline-grid md:grid md:justify-items-center md:grid-cols-[min-content,_max-content] md:gap-10 md:grid-rows-1 ">
      <button
        onClick={() => props.setSelectedButton(props.buttonTab)}
        className={`${activeButtonClass}  
      text-xl font-bold inline-grid rounded-full text-white 
      aspect-square px-4 place-items-center 
      border-white border-[1.5px]`}
      >
        {props.number + 1}
      </button>
      <p className="hidden md:block uppercase text-start place-self-start text-lightGray">
        Step {props.number + 1}
        <span className="block font-bold text-white ">{props.buttonTab}</span>
      </p>
    </div>
  );
}
