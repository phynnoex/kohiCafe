type InputCounterProps = {
  addOnQuantity: number;
  onSelect: (qty: number) => void;
};

import { FaMinus, FaPlus } from "react-icons/fa";

export default function InputCounter({addOnQuantity, onSelect}:InputCounterProps) {
  return (
    <div className="addOnInput__Counter">
      <button
        className="addOnInput__Button"
        disabled={addOnQuantity < 1}
        type="button"
        onClick={(e) => {
          e.preventDefault;
          onSelect(addOnQuantity - 1);
        }}
      >
        <FaMinus />
      </button>
      <div className="addOnInput__Increment-field">{addOnQuantity}</div>
      <button
        className="addOnInput__Button"
        disabled={addOnQuantity > 9}
        type="button"
        onClick={() => {
          onSelect(addOnQuantity + 1);
        }}
      >
        <FaPlus />
      </button>
    </div>
  );
}
