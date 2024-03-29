import { InputProps } from "../types/types"

export const Input = ({ label, value, onChange }: InputProps) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <label>{ label }</label>
      <input
        type="number"
        value={ value }
        min={ 0 }
        max={ 100 }
        onChange={ onChange }
        className="border rounded-md p-1 ml-2"
      />
    </div>
  )
}