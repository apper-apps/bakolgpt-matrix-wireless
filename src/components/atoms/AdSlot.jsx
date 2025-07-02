import { motion } from 'framer-motion'

const AdSlot = ({ 
  type = 'banner', 
  className = '',
  ...props 
}) => {
  const adSizes = {
    banner: 'h-24 w-full',
    square: 'h-64 w-64',
    rectangle: 'h-32 w-full',
    sidebar: 'h-96 w-full'
  }
  
  return (
    <motion.div 
      className={`
        ${adSizes[type]} 
        bg-gradient-to-r from-surface/40 to-purple/40 
        backdrop-blur-sm rounded-2xl border border-white/20
        flex items-center justify-center
        ${className}
      `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      {...props}
    >
      <div className="text-center">
        <p className="text-white/60 text-sm font-body mb-2">Advertisement</p>
        <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
          <div className="text-white/40 text-xs">Ad</div>
        </div>
      </div>
    </motion.div>
  )
}

export default AdSlot