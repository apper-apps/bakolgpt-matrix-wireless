import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Card from '@/components/atoms/Card'
import ApperIcon from '@/components/ApperIcon'
import Loading from '@/components/ui/Loading'

const TrendingSection = ({ responses, loading, onResponseClick }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
    loop: false
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'roast': return '🔥'
      case 'bakwas': return '🎭' 
      case 'emotional': return '💔'
      default: return '✨'
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'roast': return 'from-red-500/20 to-orange-500/20 border-red-500/30'
      case 'bakwas': return 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
      case 'emotional': return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
      default: return 'from-white/10 to-white/5 border-white/20'
    }
  }

  if (loading) {
    return (
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <ApperIcon name="TrendingUp" size={24} className="text-gradient" />
          <h3 className="text-2xl font-display text-gradient">Trending Now</h3>
        </div>
        <div className="h-48 flex items-center justify-center">
          <Loading />
        </div>
      </motion.div>
    )
  }

  if (!responses || responses.length === 0) {
    return null
  }

  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ApperIcon name="TrendingUp" size={24} className="text-gradient" />
          <h3 className="text-2xl font-display text-gradient">Trending Now</h3>
        </div>
        
        {/* Navigation Buttons */}
        <div className="hidden md:flex gap-2">
          <motion.button
            onClick={scrollPrev}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ApperIcon name="ChevronLeft" size={20} className="text-white" />
          </motion.button>
          <motion.button
            onClick={scrollNext}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ApperIcon name="ChevronRight" size={20} className="text-white" />
          </motion.button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla-container flex gap-4">
          {responses.map((response, index) => (
            <motion.div
              key={response.Id}
              className="embla-slide flex-none w-80 sm:w-96"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className={`h-full cursor-pointer hover:scale-105 transition-all duration-300 bg-gradient-to-br ${getCategoryColor(response.category)} backdrop-blur-sm`}
                onClick={() => onResponseClick(response)}
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{getCategoryIcon(response.category)}</span>
                    <span className="text-sm font-medium text-white/80 capitalize">
                      {response.category} • {response.language.toUpperCase()}
                    </span>
                    <div className="ml-auto flex items-center gap-1">
                      <ApperIcon name="Flame" size={14} className="text-orange-400" />
                      <span className="text-xs text-orange-400 font-medium">
                        {response.intensity}/10
                      </span>
                    </div>
                  </div>
                  
                  {/* Response Text */}
                  <p className="text-white font-body leading-relaxed line-clamp-4">
                    "{response.text}"
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {response.tags?.slice(0, 3).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/70"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Click Indicator */}
                  <div className="flex items-center justify-center pt-2 border-t border-white/10">
                    <span className="text-xs text-white/60 flex items-center gap-1">
                      <ApperIcon name="MousePointer" size={12} />
                      Click to use this {response.category}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Scroll Indicator */}
      <div className="md:hidden text-center">
        <span className="text-xs text-white/60 flex items-center justify-center gap-1">
          <ApperIcon name="ArrowLeft" size={12} />
          Swipe to explore trending content
          <ApperIcon name="ArrowRight" size={12} />
        </span>
      </div>
    </motion.div>
  )
}

export default TrendingSection