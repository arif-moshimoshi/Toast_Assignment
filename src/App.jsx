import './App.css'
import Toast from './component/Toasts'

function App() {

  return (
    <>
      <Toast
        type="Default"
        text="Message here."
        actionText="Button"
        onClose={() => { }}
        onAction={() => { }}
      />
    </>
  )
}

export default App
