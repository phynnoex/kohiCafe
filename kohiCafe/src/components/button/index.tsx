import "./styles.scss";

type PrimaryButton = {
  buttonType: "primary";
  text: string;
  onClick: () => void;
};

type SecondaryButton = {
  buttonType: "secondary";
  text: string;
  onClick: () => void;
};

type cardButton = {
  buttonType: "card";
  text: string;
  onClick: () => void;
};

export default function Button({
  buttonType,
  text,
  onClick,
}: PrimaryButton | SecondaryButton | cardButton) {
  return (
    <button
      onClick={onClick}
      className={`button ${
        buttonType == "card" ? "" : "hero-button"
      } ${buttonType}-button`}
    >
      {text}
    </button>
  );
}
