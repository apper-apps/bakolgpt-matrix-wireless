import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const Error = ({ message, onRetry }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[400px] text-center px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-20 h-20 bg-gradient-to-br from-error to-primary rounded-full flex items-center justify-center mb-6"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ApperIcon name="AlertTriangle" size={32} className="text-white" />
      </motion.div>
      
      <h3 className="text-2xl font-display text-white mb-3">Oops! Something went wrong</h3>
      <p className="text-white/80 font-body text-lg mb-2">
        {message || "We couldn't generate your comedy content right now."}
      </p>
      <p className="text-white/60 font-body mb-8">
        Don't worry, even our AI has off days! Let's try again. 😅
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={onRetry}
          variant="primary"
          size="lg"
          icon="RefreshCw"
          className="font-body"
        >
          Try Again
        </Button>
        <Button
          onClick={() => window.location.reload()}
          variant="outline"
          size="lg"
          icon="Home"
          className="font-body"
        >
          Start Over
        </Button>
      </div>
      
      <motion.div
        className="mt-8 text-white/50 font-body text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        If the problem persists, try refreshing the page or come back later.
      </motion.div>
    </motion.div>
  )
}

export default Error