import { StyleSheet } from 'react-native'

export const VIDEO_HEIGHT = 250

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 24,
  },
  player: {
    width: '100%',
    height: VIDEO_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 48,
  },
  search: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#FFF',
  },
  searchInput: {
    color: '#FFF',
    paddingHorizontal: 12,
  },
})
