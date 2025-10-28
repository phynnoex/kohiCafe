import receiptIcon from "../../../assets/receipt-icon-illustration.svg"

type PaymentReceiptProps = {
    subTotalPrice: number;
    deliveryCostPrice: number;
};

export default function PaymentReceipt({ subTotalPrice, deliveryCostPrice }: PaymentReceiptProps) {
    return (
        <div className="payment-receipt-container">
            <div className="payment-receipt-container__payment-totals">
              <div className="payment-receipt-container__payment-subtotal sub__flex">
                <span className="left-price">Sub Total</span>
                <span className="right-price">${subTotalPrice.toFixed(2)}</span>
              </div>
              <div className="payment-receipt-container__payment-tax sub__flex">
                <span className="left-price">Tax</span>
                <span className="right-price">${(subTotalPrice * 0.05).toFixed(2)}</span>
              </div>
              <div className="payment-receipt-container__payment-total sub__flex">
                <span className="left-price">Total</span>
                <span className="right-price">${(subTotalPrice + subTotalPrice * 0.05 + deliveryCostPrice).toFixed(2)}</span>
              </div>
            </div>
            <div className="payment-receipt-container__dashed-border"></div>
            <div className="payment-receipt-container__payment-final-total">
              <div>
                You have to pay <br /> <span className="total-figure">${(subTotalPrice + subTotalPrice * 0.05 + deliveryCostPrice).toFixed(2)}</span>
              </div>
              <div className="payment-receipt-container__receipt-icon">
                <img src={receiptIcon} alt="" />
              </div>
            </div>
          </div>
    )
}