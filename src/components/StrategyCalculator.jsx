import { useState } from 'preact/hooks'
import calculateStrategy from 'helpers/calculateStrategy'

export default function StrategyCalculator() {
  const [initialAmount, setInitialAmount] = useState(0)
  const [period, setPeriod] = useState(0)
  const [dayToStartSaving, setDayToStartSaving] = useState(0)
  const [percentToSave, setPercentToSave] = useState(0)
  const [crashAfter, setCrashAfter] = useState(0)
  const [logs, setLogs] = useState(false)
  const [result, setResult] = useState({})

  return (
    <>
      <h1 class="text-white">BNB Harvest Calculator Tool</h1>
      <div class="desc text-white">
        This tool will calculate your total harvest amount if you make interest
        compound. There is an option to set a certain amount that you will put
        aside from every harvest before you reinvest. Also you can imitate crash
        (test your strategy in case of contacrt balance going to 0 after X
        days). <br /> This is a BETA version. If you have a question - DM{' '}
        <a href="https://t.me/rise_agggainst" class="underline" target="_blank">
          @rise_agggainst
        </a>
      </div>
      <form
        class="calc"
        onSubmit={(e) => {
          e.preventDefault()
          setResult(
            calculateStrategy({
              initialAmount: parseFloat(initialAmount),
              period: parseInt(period),
              dayToStartSaving: parseInt(dayToStartSaving),
              percentToSave: parseInt(percentToSave),
              crashAfter: parseInt(crashAfter),
              logs: logs,
            })
          )
        }}
      >
        <div class="input-wrapper">
          <label for="initial-amount" class="text-white">
            Initial Amount
          </label>
          <input
            type="number"
            required
            id="initial-amount"
            min="0.05"
            step="any"
            onChange={(e) => setInitialAmount(e.target.value)}
          />
        </div>
        <div class="input-wrapper">
          <label for="preiod" class="text-white">
            Period
          </label>
          <input
            type="number"
            id="period"
            required
            onChange={(e) => setPeriod(e.target.value)}
          />
        </div>
        <div class="input-wrapper">
          <label for="day-to-start-saving" class="text-white">
            Day to start saiving
          </label>
          <input
            type="number"
            id="day-to-start-saving"
            onChange={(e) => setDayToStartSaving(e.target.value)}
          />
        </div>
        <div class="input-wrapper">
          <label for="percent-to-save" class="text-white">
            Percent to save
          </label>
          <input
            type="number"
            id="percent-to-save"
            onChange={(e) => setPercentToSave(e.target.value)}
          />
        </div>
        <div class="input-wrapper">
          <label for="crash-after" class="text-white">
            Test crash after
          </label>
          <input
            type="number"
            id="crash-after"
            onChange={(e) => setCrashAfter(e.target.value)}
          />
        </div>
        <div class="input-wrapper check-wrapper">
          <label for="logs" class="text-white">
            Show logs
          </label>
          <input
            type="checkbox"
            id="logs"
            onChange={(e) => setLogs(e.target.checked)}
          />
        </div>
        <button type="submit" id="calculate" class="text-white">
          Calculate!
        </button>
        <div id="result" class="mt-5 text-white">
          <span class="underline">Result:</span>
          <br />
          {result.result}
        </div>
        <div id="logs-data" class="text-white">
          <span class="underline">Logs:</span>
          <br />
          <div dangerouslySetInnerHTML={{ __html: result.logsData }} />
        </div>
      </form>
    </>
  )
}
