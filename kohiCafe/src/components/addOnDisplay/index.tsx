type AddOnDisplayProps = {
  title: string;
  name: string;
  addOnQuantity: number;
  onSelect: (qty: number) => void;
};


import InputCounter from "../InputCounter";
import "./styles.scss";


export default function AddOnDisplay({
  title,
  name,
  onSelect,
  addOnQuantity,
}: AddOnDisplayProps) {
  return (
    <div className="addOnInput">
      <div className="addOnInput__label">{title}</div>
      <div className="addOnInput__field">
        <div className="addOnInput_placeholder">{name}</div>
        <InputCounter addOnQuantity={addOnQuantity} onSelect={onSelect}/>
      </div>
    </div>
  );
}
