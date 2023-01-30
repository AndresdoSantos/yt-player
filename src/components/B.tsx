import { TouchableOpacity } from 'react-native'
import type { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps

export const B = ({ children, className, ...props }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} className={className} {...props}>
      {children}
    </TouchableOpacity>
  )
}
