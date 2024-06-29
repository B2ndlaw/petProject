import { theme } from "./Theme"

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    letterSpacing?: string
    Fmin?: number
    Fmax?: number
}


export const font = ({family, weight, color, lineHeight, letterSpacing, Fmin, Fmax}: FontPropsType) => `
font-family: ${family || "Poppins"};
font-weight: ${weight || 400};
color: ${color|| theme.colors.primaryFont};
line-height: ${lineHeight || 1.2};
letter-spacing: ${letterSpacing || "0.05em"};
font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`