// root UI code


// We made it! Integrating Radix UI >w<
import { Button, Flex, Text } from "@radix-ui/themes"

// The next test is integrating an UI library to help us in the process of the design in this case we have three options.

// Radix UI, Panda UI and Kuma UI. We need to reach peak performance with this libraries

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      {/* <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
      </div>
      <Versions></Versions> */}


      {/* .... */}

      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes</Text>
        <Button onClick={ipcHandle} >Let's go</Button>
      </Flex>
    </>
  )
}

export default App
