import MainContent from '@/components/organisms/MainContent'

const HomePage = ({ selectedLanguage = 'en' }) => {
  return <MainContent selectedLanguage={selectedLanguage} />
}

export default HomePage