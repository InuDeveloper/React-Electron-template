import { Button, Flex, Text } from "@radix-ui/themes"; // We made it! Integrating Radix UI >w<

// * The next test is integrating an UI library to help us in the process of the design in this case we have three options.
// * Radix UI, Panda UI and Kuma UI. We need to reach peak performance with this libraries

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('HEY, Answer')

  return (
    <>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes</Text>
        <Button onClick={ipcHandle} >IPC Handler</Button>
      </Flex>
    </>
  )
}

export default App
