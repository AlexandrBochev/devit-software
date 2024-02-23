import { ButtonProps } from "../types/types"

export const Button = ({ onClick, disabled }: ButtonProps) => {
  return (
    <button
      onClick={ onClick }
      disabled={ disabled }
      className={`
        w-full border rounded-md bg-blue-500 text-white py-1 mt-4
        ${ disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600' }
        transition duration-300 ease-in-out
      `}
    >
      Start
    </button>
  )
}
