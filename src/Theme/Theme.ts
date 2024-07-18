import { createTheme } from "@mui/material";
export const theme = createTheme({

  status: {
    inputError: "#C5141414",
    inputBg: '#F0F1F4',
    alertSuccess: '#E7F4D1'
  },
  palette: {
    error: {
      main: '#C51414',
    },
    primary: {
      main: '#076EB0',
      light: '#E6F4F9'
    },
    common: {
      black: '#2F2F32'
    }
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {

          [`@media (min-width:640px)`]: {
            paddingLeft: 10,
            paddingRight: 10,
          },
          [`@media (min-width:1280px)`]: {
            paddingLeft: 0,
            paddingRight: 0,
          },
        }
      }
    }
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    h3: {
      fontSize: '18px',
      lineHeight: '26px',
      fontWeight: '600',
      color: '#2F2F32',
      "@media (min-width:1200px)": {
        fontSize: '22px',
        lineHeight: '30px'
      }
    },
    h4: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: '32px',
      color: '#2F2F32',
    },
    h5: {
      lineHeight: '32px',
      fontWeight: 600,
      color: '#2F2F32',
      ['@media (min-width:1200px)']: {
        fontSize: '28px',
        lineHeight: '36px'
      },
      [`@media (min-width:1536px)`]: {
        fontSize: '40px',
        lineHeight: '48px'
      }
    },
    h6: {
      fontSize: "18px",
      lineHeight: '26px',
      fontWeight: 600,
      color: '#2F2F32',
      [`@media (min-width:1200px)`]: {
        fontSize: '22px',
        lineHeight: '30px'
      }
    },
    body2: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: "24px",
      color: '#707070',
      [`@media (min-width:1200px)`]: {
        fontSize: '18px',
        lineHeight: '26px'
      }
    },
    subtitle2: {
      fontWeight: 600,
      lineHeight: '26px',
      fontSize: '18px',
      color: '#2F2F32',
      [`@media (min-width:1536px)`]: {
        fontSize: '24px',
        lineHeight: '32px'
      }
    },
    button: {
      textTransform: 'none',
      fontSize: '16px',
      lineHeight: '24px',
      [`@media (min-width:1536px)`]: {
        fontSize: '18px',
        lineHeight: '26px',
        fontWeight: 500
      }
    },
    h1: {
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: "32px",
      color: '#2F2F32',
      [`@media (min-width:1200px)`]: {
        fontSize: '28px',
        lineHeight: '36px'
      },
    },
    pbold: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 500,
      color: '#2F2F32',
      ['@media (min-width: 1200px)']: {
        fontSize: '18px',
        lineHeight: '26px',
      },
    },
    plight: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
      color: '#707070',
      [`@media (min-width:1200px)`]: {
        fontSize: '18px',
        lineHeight: '26px'
      }
    },
    p3: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '22px',
      color: '#707070',
      [`@media (min-width:1536px)`]: {
        fontSize: '18px',
        lineHeight: '24px'
      }
    },
    heading1: {
      fontSize: '20px',
      lineHeight: '28px',
      fontWeight: 600,
      color: '#2F2F32',
      [`@media (min-width:1200px)`]: {
        fontSize: '24px',
        lineHeight: '32px'
      },
      [`@media (min-width:1536px)`]: {
        fontSize: '26px',
        lineHeight: '34px'
      }
    },

  },
})
