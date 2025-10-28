type CardChoiceCardProps = {
    // Define props here if needed in the future
    name: string;
    img: string;
    handleSelectCard: () => void;
}

export default function CardChoiceCard({ name, img, handleSelectCard }: CardChoiceCardProps){

    
    return(
        <div className="card-choice-card" onClick={handleSelectCard}>
            <img src={img} alt={name} />
        </div>
    )
}

