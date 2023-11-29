import { ThemeConfig, extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#629A85',
    800: '#4A7464',
    700: '#EFF5F3',
  },
  white: {
    900: '#fff'
  },
  black: {
    900: '#252525',
    300: '#25252533'
  }
}

const config: ThemeConfig = {
  initialColorMode: "system"
}

export const theme = extendTheme({ colors, config })