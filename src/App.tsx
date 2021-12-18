import LanguageButtons from 'components/LanguageButtons'
import LocalizationProvider from 'localization/LocalizationProvider'
import Root from 'components/Root'
import StrategyCalculator from 'components/StrategyCalculator'

const App = () => {
  return (
    <Root>
      <LocalizationProvider>
        <StrategyCalculator />
      </LocalizationProvider>
    </Root>
  )
}

export default App
