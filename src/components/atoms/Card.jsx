import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '', 
  animate = true, 
  hover = true,
  gradient = false,
  ...props 
}) => {
  const baseClasses = `
    rounded-2xl p-6 backdrop-blur-lg
    ${gradient 
      ? 'bg-gradient-to-br from-surface/80 to-purple/80 border border-white/20' 
      : 'bg-white/10 border border-white/20'
    }
  `
  
  const Component = animate ? motion.div : 'div'
  
  const motionProps = animate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    ...(hover && {
      whileHover: { scale: 1.02, rotate: 0.5 },
      whileTap: { scale: 0.98 }
    })
  } : {}
  
  return (
    <Component
      className={`${baseClasses} ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Card