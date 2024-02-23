import { MouseEvent, useEffect, useState } from "react"
import { Input } from "./Input"
import { Button } from "./Button"
import { FormProps } from "../types/types"

export const Form = ({ onStart  }: FormProps) => {
  const [concurrency, setConcurrency] = useState(1)
  const [requestsPerSecond, setRequestsPerSecond] = useState(1)
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    setIsDisabled(concurrency < 1 || requestsPerSecond < 1)
  }, [concurrency, requestsPerSecond])

  const handleStart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsDisabled(true)
    onStart(concurrency, requestsPerSecond)
  }

  return (
    <form className="border rounded-md bg-gray-50 shadow-sm p-4 mb-8">
      <Input
        label="Concurrency"
        value={ concurrency }
        onChange={ e => setConcurrency(Number(e.target.value)) }
      />

      <Input
        label="Requests Per Second"
        value={ requestsPerSecond }
        onChange={ e => setRequestsPerSecond(Number(e.target.value)) }
      />

      <hr />

      <Button disabled={ isDisabled } onClick={ handleStart } />
    </form>
  )
}