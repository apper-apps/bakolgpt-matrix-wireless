import { motion } from 'framer-motion'
import LanguageSelector from '@/components/molecules/LanguageSelector'
import ApperIcon from '@/components/ApperIcon'

const Header = ({ selectedLanguage, onLanguageChange }) => {
  return (
    <motion.header 
      className="w-full bg-white/10 backdrop-blur-lg border-b border-white/20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <ApperIcon name="Laugh" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-display text-gradient">BaklolGPT 2.0</h1>
              <p className="text-xs text-white/60 font-body">Roast • Bakwas • Memes</p>
            </div>
          </motion.div>
          
          <div className="flex items-center gap-4">
            <LanguageSelector 
              selectedLanguage={selectedLanguage}
              onLanguageChange={onLanguageChange}
            />
            <motion.div
              className="hidden sm:flex items-center gap-2 text-white/80 font-body text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ApperIcon name="Zap" size={16} className="text-accent" />
              <span>No Login Required</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header