import { IType } from "../../../../../@types/types"

interface TypeProps {
    type: IType
}

export default function PokemonType({type}:TypeProps) {
    const btnColor = `#${type.color}`;
    return(
        <button className="button type-button" style={{ backgroundColor: btnColor }}>
            {type.name}
        </button>
    )
}