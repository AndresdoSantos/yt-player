import { useCallback, useEffect, useState } from 'react'
import {
  ActivityIndicator,
  View,
  useWindowDimensions,
  Alert,
  TextInput,
} from 'react-native'
import YouTubeIFrame, { PLAYER_STATES } from 'react-native-youtube-iframe'
import * as ScreenOrientation from 'expo-screen-orientation'

import { styles, VIDEO_HEIGHT } from './styles'
import { StatusBar } from 'expo-status-bar'

export const Home = () => {
  const { width } = useWindowDimensions()

  const [videoReady, setVideoReady] = useState(false)
  const [search, setSearch] = useState('')

  const onFullScreenChange = useCallback((isFullScreen: boolean) => {
    if (isFullScreen) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
    } else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
    }
  }, [])

  const onChangeState = useCallback((state: string) => {
    if (state === PLAYER_STATES.ENDED) {
      Alert.alert('End!', 'The video has been ended!')
    }
  }, [])

  useEffect(() => {
    async function get() {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=photograph&key=AIzaSyDUJL9XvjstfeO81CKT9Iq9J6xBEa3qJ2g`,
      )

      const data = await response.json()

      console.log(data)
    }

    get()
  }, [])

  return (
    <View className="flex-1 bg-[#1a1d22]">
      <StatusBar style="light" />

      {/** <TextInput
        style={styles.searchInput}
        onChangeText={setSearch}
        value={search}
      /> */}

      <View style={styles.player}>
        {!videoReady && <ActivityIndicator color="red" />}

        <YouTubeIFrame
          videoId="FsfrsLxt0l8"
          height={videoReady ? VIDEO_HEIGHT : 0}
          width={width}
          onReady={() => setVideoReady(true)}
          onFullScreenChange={onFullScreenChange}
          onChangeState={onChangeState}
        />
      </View>
    </View>
  )
}
