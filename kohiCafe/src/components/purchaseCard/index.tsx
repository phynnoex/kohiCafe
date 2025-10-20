import "./styles.scss"

type PurchaseCardProps = {
    name: string;
    cardType: string;
    date: string;
    lastFour: string;
}

export default function PurchaseCard({ name, cardType, date, lastFour }: PurchaseCardProps) {
    return(
        <div className="purchase-card">
            <div className="purchase-card__metal-chip"></div>
            <div className="purchase-card__name-number-container">
                <div className="name">{name}</div>
                <div className="number"> **** {lastFour}</div>
            </div>
            <div className="purchase-card__date-cardType-container">
                <div className="date">{date}</div>
                <div className="card-type">{cardType}</div>
            </div>
        </div>
    )
}