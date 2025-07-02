import responseData from '@/services/mockData/responses.json'

// Get random response based on category and language
export const getResponse = async (category, language = 'en', userInput = '') => {
  try {
    // Add realistic delay
    await new Promise(resolve => setTimeout(resolve, 300))
    
    const categoryData = responseData[category]
    if (!categoryData) {
      throw new Error(`Category ${category} not found`)
    }
    
    const languageData = categoryData[language] || categoryData['en']
    if (!languageData || languageData.length === 0) {
      throw new Error(`No responses found for ${category} in ${language}`)
    }
    
    // Get random response
    const randomIndex = Math.floor(Math.random() * languageData.length)
    const response = languageData[randomIndex]
    
    // Personalize roast responses with user input
    let personalizedText = response.text
    if (category === 'roast' && userInput) {
      personalizedText = personalizedText.replace(/\{input\}/g, userInput)
    }
    
    return {
      Id: response.Id,
      category: response.category,
      language: response.language,
      text: personalizedText,
      intensity: response.intensity,
      tags: response.tags
    }
  } catch (error) {
    console.error('Error fetching response:', error)
    throw error
  }
}

// Get all responses for a category and language
export const getAllResponses = async (category, language = 'en') => {
  try {
    await new Promise(resolve => setTimeout(resolve, 200))
    
    const categoryData = responseData[category]
    if (!categoryData) {
      throw new Error(`Category ${category} not found`)
    }
    
    const languageData = categoryData[language] || categoryData['en']
    return languageData || []
  } catch (error) {
    console.error('Error fetching all responses:', error)
    throw error
  }
}

// Get response by ID
export const getResponseById = async (id) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 200))
    
    for (const category of Object.keys(responseData)) {
      for (const language of Object.keys(responseData[category])) {
        const response = responseData[category][language].find(r => r.Id === id)
        if (response) {
          return response
        }
      }
    }
    
    throw new Error(`Response with ID ${id} not found`)
} catch (error) {
    console.error('Error fetching response by ID:', error)
    throw error
  }
}

// Get trending responses across all categories and languages
export const getTrendingResponses = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 300))
    
    const trendingResponses = []
    
    // Collect high-intensity responses from all categories and languages
    for (const category of Object.keys(responseData)) {
      for (const language of Object.keys(responseData[category])) {
        const responses = responseData[category][language]
        // Filter responses with intensity >= 7 for trending
        const highIntensityResponses = responses.filter(r => r.intensity >= 7)
        trendingResponses.push(...highIntensityResponses)
      }
    }
    
    // Shuffle and limit to 8 trending items
    const shuffled = trendingResponses.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 8)
    
  } catch (error) {
    console.error('Error fetching trending responses:', error)
    throw error
  }
}