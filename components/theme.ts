import { ComponentSingleStyleConfig, InputProps, ThemeConfig, extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#629A85',
    800: '#4A7464',
    700: '#EFF5F3',
  },
  white: {
    900: '#fff',
    300: '#ffffff33'
  },
  black: {
    900: '#252525',
    300: '#25252533'
  }
}


const config: ThemeConfig = {
  initialColorMode: "system"
}

const components = {
  Input: {
    variants: {
      "searchbar": {
        field: {
          borderRadius: "400px",
          _light: {
            bgColor: "brand.700"
          },
          _dark: {
            bgColor: "white.300"
          }
        }
      } as { [variant: string]: InputProps }
    },
    baseStyle: {
      fontStyle: "14px",
      px: 4,
      color: "dark.900",
      _dark: {
        color: "white.900"
      }
    }
  } as ComponentSingleStyleConfig
}

export const theme = extendTheme({ colors, config, components })