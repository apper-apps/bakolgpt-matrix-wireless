import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'

const ActionButtons = ({ onRoastMe, onRandomBakwas, onEmotionalDrama, loading }) => {
  const buttons = [
    {
      text: "Roast Me! 🔥",
      onClick: onRoastMe,
      variant: "primary",
      icon: "Flame"
    },
    {
      text: "Random Bakwas 🎭",
      onClick: onRandomBakwas,
      variant: "secondary",
      icon: "Shuffle"
    },
    {
      text: "Emotional Drama 💔",
      onClick: onEmotionalDrama,
      variant: "accent",
      icon: "Heart"
    }
  ]
  
  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-3 gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {buttons.map((button, index) => (
        <motion.div
          key={button.text}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          <Button
            onClick={button.onClick}
            variant={button.variant}
            size="lg"
            icon={button.icon}
            loading={loading}
            className="w-full font-display text-sm sm:text-base"
          >
            {button.text}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ActionButtons