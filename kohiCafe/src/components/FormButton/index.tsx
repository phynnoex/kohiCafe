import "./styles.scss"

type formButtonProps = {
    name: string;
    onClick: () => void;
}

export default function FormButton({name, onClick}:formButtonProps) {
    return(
        <button className="form-button" onClick={onClick}>{name}</button>
    )
}