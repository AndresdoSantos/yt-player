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
      const response = await fetch()
      // `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=xE_rMj35BIM&key=${process.env.GOOGLE_API_KEY}`,

      const data = await response.json()

      console.log(data)
    }

    get()
  }, [])

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        onChangeText={setSearch}
        value={search}
      />

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
