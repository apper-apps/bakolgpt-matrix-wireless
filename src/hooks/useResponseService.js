import { useState, useCallback } from 'react'
import { getResponse } from '@/services/api/responseService'

export const useResponseService = () => {
  const [responses, setResponses] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const fetchResponse = useCallback(async (category, language = 'en', userInput = '') => {
    setLoading(true)
    setError(null)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 800)) // Simulate loading
      const response = await getResponse(category, language, userInput)
      setResponses(prev => [response, ...prev])
      setLoading(false)
      return response
    } catch (err) {
      setError(err.message || 'Failed to generate response')
      setLoading(false)
      return null
    }
  }, [])
  
  const retry = useCallback(() => {
    setError(null)
  }, [])
  
  return {
    responses,
    loading,
    error,
    fetchResponse,
    retry
  }
}