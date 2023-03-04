export default function SummaryAddOnItem(props) {
  return (
    <div className="flex justify-between mb-3 px-3">
      <p>{props.name}</p>
      <p className="font-bold text-marineBlue">+${props.price}</p>
    </div>
  );
}
