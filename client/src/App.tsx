import { useState } from 'react'
import { Form } from './components/Form'
import { ResponseList } from './components/ResponseList'

export const App = () => {
  const [responses, setResponses] = useState<number[]>([])

  const handleStart = (concurrency: number, requestsPerSecond: number) => {
    setResponses([])
    sendRequests(concurrency, requestsPerSecond)
  }

  const sendRequests = async (concurrency: number, requestsPerSecond: number) => {
    const totalRequests = 1000
    const delayBetweenRequests = 1000 / requestsPerSecond

    for (let i = 1; i <= totalRequests; i++) {
      if (i % concurrency === 0) {
        await sleep(delayBetweenRequests)
      }

      sendRequest(i)
    }
  }

  const sendRequest = async (index: number) => {
    try {
      const response = await fetch('https://devit-software-server.vercel.app/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ index })
      })
      const responseData  = await response.text()
      if (responseData) {
        const data = JSON.parse(responseData)
        setResponses(prevResponses => [...prevResponses, data.index])
      }
    } catch (error) {
      console.error('Error sending request:', error)
    }
  }

  const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  return (
    <div className="container sm:max-w-sm mx-auto py-20 px-4">
      <h1 className="text-xl text-center font-semibold mb-4">
        Client-server Data Fetch
      </h1>

      <Form onStart={ handleStart } />
      <ResponseList responses={ responses } />
    </div>
  )
}
