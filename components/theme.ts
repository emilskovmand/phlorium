import { ComponentSingleStyleConfig, InputProps, ThemeConfig, extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#629A85',
    800: '#4A7464',
    700: '#EFF5F3',
  },
  white: {
    900: '#fff',
    600: '#ffffff80',
    300: '#ffffff33'
  },
  black: {
    900: '#252525',
    600: '#25252580',
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
  },
  Text: {
    variants: {
      note: {
        fontSize: "12px",
        fontWeight: "medium"
      }
    },
    baseStyle: {
      fontSize: "14px",
      color: "black.600",
      _dark: {
        color: "white.600"
      }
    }
  },
  Button: {
    variants: {
      anchor: {
        fontWeight: "semibold",
        _active: {
          _light: {
            bgColor: "brand.700"
          },
          _dark: {
            bgColor: "white.300"
          }
        }
      }
    },
    baseStyle: {
      w: "full",
      userSelect: "auto",
      justifyContent: "flex-start",
      px: "2",
      py: "2",
      paddingInline: "2",
      color: "black.900",
      _dark: {
        color: "white.900"
      }
    }
  }
} as { [comp: string]: ComponentSingleStyleConfig }

export const theme = extendTheme({ colors, config, components })