import { menuAnatomy } from "@chakra-ui/anatomy"
import { ComponentSingleStyleConfig, InputProps, ThemeConfig, createMultiStyleConfigHelpers, extendTheme } from '@chakra-ui/react'
import { Manrope } from "next/font/google"

const colors = {
  brand: {
    900: '#629A85',
    800: '#4A7464',
    700: '#EFF5F3',
  },
  white: {
    900: '#fff',
    600: '#ffffff80',
    300: '#ffffff33',
    200: '#E4E6E8',
  },
  black: {
    900: '#252525',
    600: '#919191',
    300: '#25252533',
    200: '#1b1917',
  },
  blue: {
    900: '#274CEE'
  }
}


const config: ThemeConfig = {
  initialColorMode: "system"
}

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400", "500", "600", "700", "800"]
})

const fonts = {
  manrope: manrope.style.fontFamily,
  body: manrope.style.fontFamily
}


const components = {
  Heading: {
    baseStyle: {
      fontFamily: "manrope"
    }
  },
  Menu: {
    baseStyle: createMultiStyleConfigHelpers(menuAnatomy.keys).definePartsStyle({
      groupTitle: {
        fontSize: "10px",
        textTransform: "uppercase",
        fontWeight: "semibold",
        mx: "3",
        color: "black.600",
        _dark: {
          color: "white.600"
        }
      },
      item: {
        bgColor: "white.900",
        fontSize: "14px",
        fontWeight: "medium",
        _hover: {
          bgColor: "black.300"
        },
        _dark: {
          bgColor: "black.900",
          _hover: {
            bgColor: "white.300"
          }
        }
      },
      list: {
        bg: "white.900",
        zIndex: 20000,
        transform: "none !important",
        rootProps: { top: "200px !important" },
        color: "black.900",
        _dark: {
          bg: "black.900",
          color: "white.900"
        }
      }
    })
  },
  Link: {
    baseStyle: {
      fontWeight: "bold",
      fontSize: "12px",
      textDecorationLine: "underline",
      _light: {
        color: "blue.900"
      },
      _dark: {
        color: "blue.900"
      }
    }
  },
  Modal: {
    baseStyle: {
      dialog: {
        bgColor: "white.900",
        alignSelf: "center",
        borderRadius: "24px",
        p: 16,
        _dark: {
          bgColor: "black.900"
        }
      },
      footer: {
        justifyContent: "flex-start",
        flexDir: "column",
        alignItems: "stretch",
        px: 0,
        py: 0
      },
      body: {
        mb: 5,
        px: 0,
      },
      header: {
        px: 0,
        pt: 0,
        pb: 6
      }
    }
  },
  Form: {
    variants: {
      form: {
        container: {
          label: {

          },
          input: {
            px: 3,
            py: 3
          } as InputProps
        } as any
      },
      floating: {
        container: {
          _focusWithin: {
            label: {
              transform: "translateY(-12px)"
            },

          },
          "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
            transform: "translateY(-12px)"
          },
          label: {
            top: 0,
            left: 0,
            zIndex: 2,
            position: "absolute",
            pointerEvents: "none",
            fontSize: "12px",
            mx: 4,
            px: 1,
            my: 5,
            transformOrigin: "left top",
            _light: {
              color: "#8083A3",
            },
            _dark: {
              color: "white.300"
            }
          },
          input: {
            pt: 9,
            pb: 5,
            px: 5,
            fontWeight: "bold",
            fontSize: "12px",
            _light: {
              bgColor: "#EFEFEF4D",
              color: "black.900"
            },
            _dark: {
              bgColor: "black.300",
              color: "white.900"
            },
            _focus: {
              boxShadow: "0px 0px"
            }
          },
        } as any
      }
    }
  },
  Textarea: {
    baseStyle: {
      fontSize: "14px",
      px: 3
    }
  },
  Input: {
    variants: {
      "searchbar": {
        field: {
          borderRadius: "28px",
          _light: {
            bgColor: "brand.700"
          },
          _dark: {
            bgColor: "white.300"
          }
        }
      },
    } as { [variant: string]: InputProps },
    baseStyle: {
      fontSize: "14px",
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
        fontWeight: "medium",
        color: "black.600",
        _dark: {
          color: "white.600"
        }
      }
    },
    baseStyle: {
      fontSize: "14px",
      color: "black.900",
      _dark: {
        color: "white.900"
      },
      fontFamily: "manrope"
    }
  },
  Button: {
    variants: {
      transparent: {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "white.200",
        _dark: {
          bgColor: "black.900",
          borderColor: "black.200",
        },
        _light: {
          bgColor: "white.900",
          borderColor: "white.200",
        }
      },
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
      },
      ghost: {
        bgColor: "transparent",
        _hover: {
          bgColor: "transparent"
        },
        _active: {
          bgColor: "transparent"
        }
      },
      primary: {
        bgColor: "brand.900",
        color: "",
        _light: {
          color: "white.900"
        },
        _hover: {
          bgColor: "brand.800"
        }
      },
      contrast: {
        fontWeight: "medium",
        borderRadius: '6px',
        _light: {
          bgColor: 'black.900',
          color: 'white.900'
        },
        _dark: {
          bgColor: 'white.900',
          color: 'black.900'
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

export const theme = extendTheme({ colors, config, components, fonts })