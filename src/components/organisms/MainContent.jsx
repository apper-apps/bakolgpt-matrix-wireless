import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Input from '@/components/atoms/Input'
import Card from '@/components/atoms/Card'
import ActionButtons from '@/components/molecules/ActionButtons'
import ShareButtons from '@/components/molecules/ShareButtons'
import MemeCanvas from '@/components/molecules/MemeCanvas'
import AdSlot from '@/components/atoms/AdSlot'
import { useResponseService } from '@/hooks/useResponseService'
import { toast } from 'react-toastify'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'

const MainContent = ({ selectedLanguage }) => {
  const [userInput, setUserInput] = useState('')
  const [currentResponse, setCurrentResponse] = useState('')
  const [showMeme, setShowMeme] = useState(false)
  const [responseType, setResponseType] = useState('')
  
  const { responses, loading, error, fetchResponse, retry } = useResponseService()
  
  const handleRoastMe = async () => {
    if (!userInput.trim()) {
      toast.warning('Please enter something to roast! 🔥')
      return
    }
    
    const response = await fetchResponse('roast', selectedLanguage, userInput)
    if (response) {
      setCurrentResponse(response.text)
      setResponseType('roast')
      setShowMeme(true)
      toast.success('You got roasted! 🔥')
    }
  }
  
  const handleRandomBakwas = async () => {
    const response = await fetchResponse('bakwas', selectedLanguage)
    if (response) {
      setCurrentResponse(response.text)
      setResponseType('bakwas')
      setShowMeme(true)
      toast.success('Random bakwas generated! 🎭')
    }
  }
  
  const handleEmotionalDrama = async () => {
    const response = await fetchResponse('emotional', selectedLanguage, userInput)
    if (response) {
      setCurrentResponse(response.text)
      setResponseType('emotional')
      setShowMeme(true)
      toast.success('Drama mode activated! 💔')
    }
  }
  
  const handleNewResponse = () => {
    setCurrentResponse('')
    setUserInput('')
    setShowMeme(false)
    setResponseType('')
  }
  
  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={retry} />
  
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner Ad */}
      <AdSlot type="banner" className="mx-auto" />
      
      {/* Hero Section */}
      <motion.div 
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-display text-gradient leading-tight">
          Get Ready to be
          <br />
          <span className="text-white">ROASTED! 🔥</span>
        </h2>
        <p className="text-xl text-white/80 font-body max-w-2xl mx-auto">
          Enter your text or click a button to get hilarious roasts, random bakwas, 
          or emotional drama. Then create a meme to share with friends!
        </p>
      </motion.div>
      
      {/* Input Section */}
      {!currentResponse && (
        <Card className="max-w-2xl mx-auto" gradient>
          <div className="space-y-6">
            <Input
              label="What's on your mind? (Optional for roasts)"
              placeholder="Type something to get roasted, or just click the buttons below..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              icon="MessageSquare"
              className="text-lg"
            />
            
            <ActionButtons
              onRoastMe={handleRoastMe}
              onRandomBakwas={handleRandomBakwas}
              onEmotionalDrama={handleEmotionalDrama}
              loading={loading}
            />
          </div>
        </Card>
      )}
      
      {/* Response Section */}
      {currentResponse && (
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-4xl mx-auto text-center" gradient>
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-2xl">
                  {responseType === 'roast' && '🔥'}
                  {responseType === 'bakwas' && '🎭'}
                  {responseType === 'emotional' && '💔'}
                </span>
                <h3 className="text-2xl font-display text-gradient">
                  {responseType === 'roast' && 'You Got Roasted!'}
                  {responseType === 'bakwas' && 'Random Bakwas'}
                  {responseType === 'emotional' && 'Emotional Drama'}
                </h3>
              </div>
              
              <motion.div
                className="bg-white/10 rounded-2xl p-6 border border-white/20"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed font-body">
                  "{currentResponse}"
                </p>
              </motion.div>
              
              <ShareButtons text={currentResponse} />
              
              <motion.button
                onClick={handleNewResponse}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white font-body font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try Again 🔄
              </motion.button>
            </div>
          </Card>
          
          {/* Mid Content Ad */}
          <AdSlot type="rectangle" className="max-w-2xl mx-auto" />
          
          {/* Meme Generator */}
          <MemeCanvas
            userText={userInput}
            responseText={currentResponse}
            isVisible={showMeme}
          />
        </motion.div>
      )}
      
      {/* Empty State */}
      {!currentResponse && !loading && (
        <Empty
          icon="Laugh"
          title="Ready for Some Fun?"
          description="Type something in the box above or click one of the action buttons to get started!"
          actionText="Get Random Bakwas"
          onAction={handleRandomBakwas}
        />
      )}
      
      {/* Footer Ad */}
      <AdSlot type="banner" className="mx-auto" />
    </div>
  )
}

export default MainContent