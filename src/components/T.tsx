import { Text } from 'react-native'
import type { TextProps } from 'react-native'

type Props = TextProps

export const T = ({ children, className, ...props }: Props) => {
  return (
    <Text className={className} {...props}>
      {children}
    </Text>
  )
}
