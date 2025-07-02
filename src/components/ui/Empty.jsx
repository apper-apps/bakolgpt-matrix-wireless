import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const Empty = ({ 
  icon = "Laugh", 
  title = "Ready for Some Fun?", 
  description = "Let's get started with some comedy!", 
  actionText = "Get Random Bakwas",
  onAction
}) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[400px] text-center px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-6"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <ApperIcon name={icon} size={40} className="text-white" />
      </motion.div>
      
      <h3 className="text-3xl font-display text-gradient mb-3">{title}</h3>
      <p className="text-white/80 font-body text-lg mb-8 max-w-md">
        {description}
      </p>
      
      {onAction && (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={onAction}
            variant="primary"
            size="lg"
            icon="Zap"
            className="font-body"
          >
            {actionText}
          </Button>
        </motion.div>
      )}
      
      <motion.div
        className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white/60 font-body text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-2">
          <span>🔥</span>
          <span>Epic Roasts</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🎭</span>
          <span>Random Bakwas</span>
        </div>
        <div className="flex items-center gap-2">
          <span>💔</span>
          <span>Emotional Drama</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🎨</span>
          <span>Meme Creator</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Empty