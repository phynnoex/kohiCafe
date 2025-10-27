import { useState } from "react";

type PaymentFormProps = {
  cardHolderName: string;
  setCardHolderName: React.Dispatch<React.SetStateAction<string>>;
  cardNumber: string;
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  expiryDate: string;
  setExpiryDate: React.Dispatch<React.SetStateAction<string>>;
  cvv: string;
  setCvv: React.Dispatch<React.SetStateAction<string>>;
};

type ErrorMessageProp = {
  cardHolderName: string[];
  cardNumber: string[];
  expiryDate: string[];
  cvv: string[];
};

export default function PaymentForm({
  cardHolderName,
  setCardHolderName,
  cardNumber,
  setCardNumber,
  expiryDate,
  setExpiryDate,
  cvv,
  setCvv,
}: PaymentFormProps) {
  const [errorMessage, setErrorMessage] = useState<ErrorMessageProp>({
    cardHolderName: [],
    cardNumber: [],
    expiryDate: [],
    cvv: [],
  });

  const handleInputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "cardHolderName":
        setCardHolderName(value);
        break;
      case "cardNumber":
        handleCardNumberChange(value);
        break;
      case "expiryDate":
        handleExpiryDateChange(value);
        break;
      case "cvv":
        handleCVVChange(value);
        break;
      default:
        break;
    }
  };



  const handleCVVChange = (value: string) => {
    // Remove non-digit characters
    const digitsOnly = value.replace(/\D/g, "");
    setCvv(digitsOnly);
  }

  const handleCardNumberChange = (value: string) => {
    let valuee = value.replace(/\D/g, "");

    // Add a dash after every 4 digits
    valuee = valuee.match(/.{1,4}/g)?.join(" - ") || "";
    setCardNumber(valuee);
  };

  const handleExpiryDateChange = (value: string) => {
    // Remove non-digit characters
    const digitsOnly = value.replace(/\D/g, "");

    const formattedDate = digitsOnly.match(/.{1,2}/g)?.join("/") || "";
    setExpiryDate(formattedDate);
  }

  const validateForm = () => {
    let errors: ErrorMessageProp = {
      cardHolderName: [],
      cardNumber: [],
      expiryDate: [],
      cvv: [],
    };

    if (!cardHolderName) {
      errors.cardHolderName.push("Card holder name is required.");
    }
    if (/\d/.test(cardHolderName)) {
      errors.cardHolderName.push("Card holder name cannot contain numbers.");
    }

    if (!cardNumber || !/^[\d\s-]+$/.test(cardNumber)) {
      errors.cardNumber.push("Invalid card number.");
    }

    if (!expiryDate || !/^\d{2}\/\d{2}$/.test(expiryDate)) {
      errors.expiryDate.push("Invalid expiry date.");
    }

    if (!cvv || !/^\d{3,4}$/.test(cvv)) {
      errors.cvv.push("Invalid CVV.");
    }

    setErrorMessage(errors);
    return Object.values(errors).every((errorList) => errorList.length === 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is valid. Submitting...");
    } else {
      console.log("Form has errors. Please fix them before submitting.");
    }
  };

  return (
    <form className="cards_Form" onSubmit={handleSubmit}>
      <div className="cards_Form__card_type_container"></div>
      <label htmlFor="card-holder-name">
        <b>Card Holder Name</b>
        <br />
        <input
          id="card-holder-name"
          type="text"
          name="cardHolderName"
          value={cardHolderName}
          onChange={handleInputchange}
        />
        {errorMessage.cardHolderName.length > 0 && (
          <div className="error-messages">
            {errorMessage.cardHolderName.map((msg, index) => (
              <p key={index} className="error-text">
                {msg}
              </p>
            ))}
          </div>
        )}
      </label>

      <label htmlFor="card-number">
        <b>Card Number</b>
        <br />
        Enter the 16-digit number of your card
        <br />
        <input
          id="card-number"
          maxLength={25}
          type="text"
          name="cardNumber"
          value={cardNumber}
          onChange={handleInputchange}
        />
        {errorMessage.cardNumber.length > 0 && (
          <div className="error-messages">
            {errorMessage.cardNumber.map((msg, index) => (
              <p key={index} className="error-text">
                {msg}
              </p>
            ))}
          </div>
        )}
      </label>

      <div className="cards_Form__card-expiry-cvv">
        <label htmlFor="card-cvv">
          <b>CVV</b>
          <br />
          <input
            id="card-cvv"
            type="text"
            maxLength={3}
            name="cvv"
            value={cvv}
            onChange={handleInputchange}
          />
          {errorMessage.cvv.length > 0 && (
            <div className="error-messages">
              {errorMessage.cvv.map((msg, index) => (
                <p key={index} className="error-text">
                  {msg}
                </p>
              ))}
            </div>
          )}
        </label>

        <label htmlFor="card-expiry">
          <b>Expiry Date</b>
          <br />
          <input
            id="card-expiry"
            maxLength={5}
            type="text"
            name="expiryDate"
            value={expiryDate}
            onChange={handleInputchange}
          />
          {errorMessage.expiryDate.length > 0 && (
            <div className="error-messages">
              {errorMessage.expiryDate.map((msg, index) => (
                <p key={index} className="error-text">
                  {msg}
                </p>
              ))}
            </div>
          )}
        </label>
      </div>
      <button className="cards_Form__submit-button" type="submit">
        Pay Now
      </button>
      
    </form>
  );
}
