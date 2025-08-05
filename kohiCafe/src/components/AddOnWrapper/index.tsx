import type { ReactNode } from "react"
import "./styles.scss"

type AddOnWrapperProps = {
    title: string
  children: ReactNode
}

export default function AddOnWrapper({title, children}:AddOnWrapperProps) {
    return (
        <div className="addOn-wrapper">
            <div className="addOn-wrapper__title-container">
                <p className="addOn-wrapper__title">{title}</p>
            </div>
            <div className="addOn-wrapper__content">
                {children}
            </div>
        </div>
    )
}