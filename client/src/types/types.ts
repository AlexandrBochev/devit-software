import { MouseEvent } from "react"

export interface FormProps {
  onStart: (concurrency: number, requestsPerSecond: number) => void
}

export interface InputProps {
  label: string
  value: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface ButtonProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  disabled: boolean
}

export interface ResponseListProps {
  responses: number[]
}