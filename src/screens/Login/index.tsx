/* eslint-disable jsx-a11y/alt-text */
import { Image } from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { useEffect } from 'react'

import { B } from '../../components/B'
import { T } from '../../components/T'
import { V } from '../../components/V'

import googleImg from '../../assets/google-logo.png'
import ytImg from '../../assets/youtube-logo.png'

WebBrowser.maybeCompleteAuthSession()

export const Login = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  })

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response

      console.log(authentication)
    }
  }, [response])

  return (
    <V className="flex-1 items-center justify-center bg-zinc-900 px-4">
      <Image source={ytImg} className="mb-20" />

      <V className="mb-20">
        <T className="text-3xl font-700 text-white">Millions of videos.</T>
        <T className="text-3xl font-700 text-white">Free on YouTube.</T>
      </V>

      <B
        disabled={!request}
        onPress={() => {
          promptAsync()
        }}
        className="p-4 w-full rounded-lg bg-zinc-800/50 flex-row items-center justify-start"
      >
        <Image source={googleImg} resizeMode="contain" />

        <T className="text-[13px] font-400 text-white ml-5">
          Continue with Google
        </T>
      </B>

      {/** <V className="mb-5">
        <T className="text-lg font-900 text-white">SIGN UP FOR FREE</T>
        <T className="text-xs font-400 text-zinc-500">
          Register an account and use the app.
        </T>
      </V>

      <B className="h-10 w-full bg-white border border-zinc-200 rounded flex-row items-center justify-start px-4">
        <GoogleLogo color="#c71610" size={14} weight="bold" />

        <V className="h-5 w-[1px] bg-zinc-300 mx-4" />

        <T className="text-zinc-800 font-400 text-xs">
          Sign up with your Google account
        </T>
      </B> */}

      {/** <V className="absolute bottom-0 right-0 left-0 bg-white items-center justify-center rounded-t-xl p-10">
        <T className="font-900 text-lg mb-5">One Step Login</T>

        <T className="font-400 mb-10 text-zinc-500 text-sm text-center">
          You have One Step Login activated. Tap below to sign in faster with
          Samsung.
        </T>

        <V className="flex-row items-center">
          <T className="font-400 mb-10 text-zinc-500 text-sm">Logged in as </T>
          <T className="font-900 mb-10 text-zinc-500 text-sm">
            Andres doSantos.
          </T>
        </V>

        <B className="bg-[#FF0000] rounded-full p-4 items-center justify-center">
          <T className="font-500 text-white text-sm">Log in with Google</T>
        </B>

        <B className="mt-5">
          <T className="font-500 text-zinc-800 text-sm">Dismiss</T>
        </B>
      </V> */}

      {/** <B className="h-10 w-full bg-zinc-800/30 rounded my-2"></B>
      <B className="h-10 w-full bg-zinc-800/30 rounded"></B> */}
    </V>
  )
}
