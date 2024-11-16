import "@radix-ui/themes/styles.css"
import './assets/global.css'

import { Theme } from "@radix-ui/themes"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'

// The root id is now linked to the body html tag
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* To customize the theme,
    the documentation are in the followed link: https://www.radix-ui.com/themes/docs/overview/getting-started#basic-configuration */}

    {/* Also I'm going to customise the theme in in the test to check if this work */}
    <Theme accentColor="gray" grayColor="olive" radius="large" scaling="95%">
      <App />
    </Theme>
  </React.StrictMode>
)
