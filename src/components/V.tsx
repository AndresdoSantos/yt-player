import { View } from 'react-native'
import type { ViewProps } from 'react-native'

type Props = ViewProps

export const V = ({ children, className, ...props }: Props) => {
  return (
    <View className={className} {...props}>
      {children}
    </View>
  )
}
