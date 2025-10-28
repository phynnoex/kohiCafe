
import CardChoiceCard from "./CardChoiceCard";
import "./styles.scss"

type CardChoiceType = {
    id: number;
    name: string;
    img: string;
}

type cardChoiceProps = {
    cardChoices: CardChoiceType[];
    handleSelectCard: (id: number) => void;
}


export default function CardChoice({cardChoices, handleSelectCard}: cardChoiceProps){

    const handleSelectCardClick = (id: number) => {
        handleSelectCard(id);
        console.log("Selected card ID:", id);
    }
    

    return(
        <div className="card-choice">
            {cardChoices.map(choice => (
                <CardChoiceCard key={choice.id} name={choice.name} img={choice.img} handleSelectCard={() => handleSelectCardClick(choice.id)} />
            ))}
        </div>
    )
}