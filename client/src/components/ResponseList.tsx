import { ResponseListProps } from "../types/types"

export const ResponseList = ({ responses }: ResponseListProps) => {
  return (
    <div>
      <h2>Responses:</h2>
      <ul>
        {responses.map((response, index) => (
          <li key={ index }>{ response }</li>
        ))}
      </ul>
    </div>
  )
}
