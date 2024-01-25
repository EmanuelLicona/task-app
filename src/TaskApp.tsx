import { Provider } from 'react-redux'
import { AppRouter } from './router/AppRouter'
import { store } from './store/store'
import { axiosInterceptor } from './api/taskApi'

export const TaskApp = () => {
  axiosInterceptor(store)
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
