/* eslint-disable camelcase */
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'

import { V } from './src/components/V'

import { Home } from './src/screens/Home'
import { Login } from './src/screens/Login'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter400: Inter_400Regular,
    Inter500: Inter_500Medium,
    Inter600: Inter_600SemiBold,
    Inter700: Inter_700Bold,
    Inter900: Inter_900Black,
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <V className="flex-1" onLayout={onLayoutRootView}>
      <Login />
    </V>
  )
}
