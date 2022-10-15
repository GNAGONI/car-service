import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../../../redux/store'

const store = configureStore()
export const connectTestComponentToRedux = component => <Provider store={store}>{component}</Provider>
