import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Input = ({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  icon,
  error,
  className = '',
  ...props 
}) => {
  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {label && (
        <label className="block text-sm font-medium text-white mb-2 font-body">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <ApperIcon name={icon} size={20} className="text-gray-400" />
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`
            w-full px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-lg border-2 border-white/20
            text-white placeholder-white/60 font-body
            focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none
            transition-all duration-200
            ${icon ? 'pl-12' : ''}
            ${error ? 'border-error focus:border-error focus:ring-error/20' : ''}
          `}
          {...props}
        />
      </div>
      {error && (
        <motion.p 
          className="mt-2 text-sm text-error font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  )
}

export default Input