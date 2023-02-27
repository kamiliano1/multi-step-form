export default function Button(props) {
  const styles = {
    backgroundColor: props.selectedButton === props.buttonTab ? "red" : "",
  };

  const activeButtonClass =
    props.selectedButton === props.buttonTab
      ? "bg-PastelBlue border-none text-marineBlue"
      : "";
  return (
    <button
      onClick={() => props.setSelectedButton(props.buttonTab)}
      className={`${activeButtonClass} text-white text-xl font-bold inline-grid rounded-full text-slate-400 aspect-square px-4 place-items-center 
      border-white border-[1.5px] `}
    >
      {props.number + 1}
    </button>
  );
}
