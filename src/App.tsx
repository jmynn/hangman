
import { Provider } from 'react-redux'
import { setupStore } from './store/reducers/store'
import Game from './components/ui/Game/Game'

function App() {
  const store = setupStore()
  return (
    <>
     <Provider store={store}>
        <Game />
     </Provider>
    </>
  )
}

export default App
