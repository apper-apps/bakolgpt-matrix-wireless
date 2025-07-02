import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import { toast } from 'react-toastify'

const MemeCanvas = ({ userText, responseText, isVisible }) => {
  const canvasRef = useRef(null)
  const [isGenerating, setIsGenerating] = useState(false)
  
  const memeTemplates = [
    { bg: '#FF006E', pattern: 'radial-gradient(circle, #FF006E, #8338EC)' },
    { bg: '#FB5607', pattern: 'linear-gradient(135deg, #FB5607, #FFBE0B)' },
    { bg: '#8338EC', pattern: 'radial-gradient(ellipse, #8338EC, #3A0CA3)' },
    { bg: '#3A0CA3', pattern: 'linear-gradient(45deg, #3A0CA3, #FF006E)' },
    { bg: '#FFBE0B', pattern: 'radial-gradient(circle, #FFBE0B, #FB5607)' }
  ]
  
  const generateMeme = async () => {
    if (!userText || !responseText) return
    
    setIsGenerating(true)
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Set canvas size
    canvas.width = 800
    canvas.height = 600
    
    // Random template
    const template = memeTemplates[Math.floor(Math.random() * memeTemplates.length)]
    
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, template.bg)
    gradient.addColorStop(1, '#000000')
    
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    // Add some pattern/noise
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const size = Math.random() * 3
      ctx.fillRect(x, y, size, size)
    }
    
    // Text styling
    ctx.textAlign = 'center'
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 4
    
    // User text (top)
    if (userText.length > 0) {
      const fontSize = Math.min(48, 800 / userText.length * 2)
      ctx.font = `bold ${fontSize}px Arial Black, sans-serif`
      
      const words = userText.toUpperCase().split(' ')
      const lines = []
      let currentLine = ''
      
      words.forEach(word => {
        const testLine = currentLine + word + ' '
        const metrics = ctx.measureText(testLine)
        if (metrics.width > canvas.width - 100 && currentLine !== '') {
          lines.push(currentLine.trim())
          currentLine = word + ' '
        } else {
          currentLine = testLine
        }
      })
      lines.push(currentLine.trim())
      
      lines.forEach((line, index) => {
        const y = 80 + (index * (fontSize + 10))
        ctx.strokeText(line, canvas.width / 2, y)
        ctx.fillText(line, canvas.width / 2, y)
      })
    }
    
    // Response text (bottom)
    if (responseText.length > 0) {
      const fontSize = Math.min(42, 700 / responseText.length * 2)
      ctx.font = `bold ${fontSize}px Arial Black, sans-serif`
      
      const words = responseText.toUpperCase().split(' ')
      const lines = []
      let currentLine = ''
      
      words.forEach(word => {
        const testLine = currentLine + word + ' '
        const metrics = ctx.measureText(testLine)
        if (metrics.width > canvas.width - 100 && currentLine !== '') {
          lines.push(currentLine.trim())
          currentLine = word + ' '
        } else {
          currentLine = testLine
        }
      })
      lines.push(currentLine.trim())
      
      const startY = canvas.height - (lines.length * (fontSize + 10)) - 40
      lines.forEach((line, index) => {
        const y = startY + (index * (fontSize + 10))
        ctx.strokeText(line, canvas.width / 2, y)
        ctx.fillText(line, canvas.width / 2, y)
      })
    }
    
    setIsGenerating(false)
    toast.success('Meme generated! 🎨')
  }
  
  const downloadMeme = () => {
    const canvas = canvasRef.current
    const link = document.createElement('a')
    link.download = 'bakolgpt-meme.png'
    link.href = canvas.toDataURL()
    link.click()
    toast.success('Meme downloaded! 📥')
  }
  
  useEffect(() => {
    if (isVisible && userText && responseText) {
      generateMeme()
    }
  }, [isVisible, userText, responseText])
  
  if (!isVisible) return null
  
  return (
    <motion.div
      className="w-full max-w-4xl mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <div className="text-center mb-4">
          <h3 className="text-2xl font-display text-gradient mb-2">Your Meme is Ready! 🎨</h3>
          <p className="text-white/80 font-body">Right-click to save or use the download button</p>
        </div>
        
        <div className="flex justify-center mb-4">
          <canvas
            ref={canvasRef}
            className="meme-canvas max-w-full h-auto border-2 border-white/20"
            style={{ maxHeight: '400px' }}
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={generateMeme}
            variant="secondary"
            icon="RefreshCw"
            loading={isGenerating}
            className="font-body"
          >
            Generate New Style
          </Button>
          <Button
            onClick={downloadMeme}
            variant="accent"
            icon="Download"
            className="font-body"
          >
            Download Meme
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default MemeCanvas