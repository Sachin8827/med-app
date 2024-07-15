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
      h4 : {
        fontSize  :"24px",
        fontWeight : 600,
        lineHeight  :'32px'
      },
      h5: {
        lineHeight: '32px',
        fontWeight: 600,
        color: '#2F2F32',
        [`@media (min-width:1920px)`]: {
          fontSize: '40px',
          lineHeight: '48px'
        }
      },
      body2: {
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: "24px",
        color: '#707070'
      },
      subtitle2: {
        fontWeight: 600,
        lineHeight: '26px',
        fontSize: '18px',
        [`@media (min-width:1920px)`]: {
          fontSize: '24px',
          lineHeight: '32px'
        }
      }
    },
  })
