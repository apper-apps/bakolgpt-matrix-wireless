import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Main spinner */}
        <div className="w-16 h-16 border-4 border-white/20 border-t-primary rounded-full animate-spin"></div>
        
        {/* Inner icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <ApperIcon name="Laugh" size={24} className="text-primary" />
        </motion.div>
      </motion.div>
      
      <motion.div
        className="mt-6 space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-xl font-display text-white">Generating Comedy Gold...</h3>
        <p className="text-white/70 font-body">
          Our AI is cooking up something hilarious for you! 🔥
        </p>
      </motion.div>
      
      {/* Animated dots */}
      <div className="flex gap-2 mt-4">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-primary rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Loading