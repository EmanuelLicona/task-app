import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store/store'

import { TaskApp } from './TaskApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>

      <BrowserRouter>
        <TaskApp />
      </BrowserRouter>

    </Provider>
  </React.StrictMode>,
)
