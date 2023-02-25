import Button from "../components/Button";
import Forms from "../components/Forms";
export default function FormPage() {
  return (
    <div className="flex w-[100%] bg-black flex-col md:flex-row">
      <Button />
      <Forms />
    </div>
  );
}
