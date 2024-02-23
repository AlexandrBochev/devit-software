import { ResponseListProps } from "../types/types"

export const ResponseList = ({ responses }: ResponseListProps) => {
  return (
    <div>
      <h2>Responses:</h2>
      <ul>
        {responses.map(response => (
          <li key={ response }>{ response }</li>
        ))}
      </ul>
    </div>
  )
}
