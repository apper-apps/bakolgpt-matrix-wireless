import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Footer = () => {
  const socialLinks = [
    { name: 'WhatsApp', icon: 'MessageCircle', href: '#' },
    { name: 'Instagram', icon: 'Instagram', href: '#' },
    { name: 'Facebook', icon: 'Facebook', href: '#' },
    { name: 'Twitter', icon: 'Twitter', href: '#' }
  ]
  
  const quickLinks = [
    { name: 'How it Works', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Contact Us', href: '#' }
  ]
  
  return (
    <motion.footer 
      className="bg-surface/50 backdrop-blur-lg border-t border-white/20 mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <ApperIcon name="Laugh" size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-display text-gradient">BaklolGPT 2.0</h3>
                <p className="text-white/60 font-body text-sm">Ultimate Comedy Generator</p>
              </div>
            </div>
            <p className="text-white/80 font-body mb-6 max-w-md">
              Get roasted, enjoy bakwas, and create hilarious memes with our AI-powered comedy generator. 
              No login required, instant fun guaranteed!
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ApperIcon name={link.icon} size={20} className="text-white" />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-white font-body transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Features */}
          <div>
            <h4 className="text-lg font-display text-white mb-4">Features</h4>
            <ul className="space-y-2 text-white/70 font-body">
              <li>🔥 AI-Powered Roasts</li>
              <li>🎭 Random Bakwas</li>
              <li>💔 Emotional Drama</li>
              <li>🎨 Meme Generator</li>
              <li>🌍 Multi-Language</li>
              <li>📱 Mobile Optimized</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/60 font-body text-sm mb-4 sm:mb-0">
            © 2024 BaklolGPT 2.0. All rights reserved. Made with ❤️ for comedy lovers.
          </p>
          <div className="flex items-center gap-4 text-white/60 font-body text-sm">
            <span>🚀 No Login Required</span>
            <span>•</span>
            <span>🎉 Instant Fun</span>
            <span>•</span>
            <span>📱 Mobile Ready</span>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer