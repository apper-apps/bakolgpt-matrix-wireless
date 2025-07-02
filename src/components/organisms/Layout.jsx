import { useState } from 'react'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'

const Layout = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
      />
      <main className="flex-1">
        {/* Pass selectedLanguage to children */}
        {typeof children === 'function' ? children({ selectedLanguage }) : 
         children?.type?.name === 'HomePage' ? 
         { ...children, props: { ...children.props, selectedLanguage } } : 
         children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout