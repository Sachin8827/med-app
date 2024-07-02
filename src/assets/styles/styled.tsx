import { Button, FormControl, Typography } from "@mui/material";
import { InputLabel, OutlinedInput, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { ErrorObject } from "../../Types/Types";
import styled from "styled-components";
import { Height } from "@mui/icons-material";


export const LoginSection = styled(Box)({

  '& .MuiTypography-root': {
    marginTop: "24px",
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "32px",
    textAlign: "left",
    color: '#2F2F32',
  },
})
export const LoginFormSection = styled(Box)({
  textAlign: "left",
})
export const MyformControl = styled(FormControl)({

  width: '100% !important',
  marginTop: "15px !important"
})
export const Label = styled(InputLabel)({
  fontWeight: "400 !important",
  color: '#2F2F32 !important',
  fontSize: '0.9rem !important',
  position: `relative !important` as any,
  transform: 'unset !important'
})

export const EmailField = styled(OutlinedInput)<ErrorObject>(({ error }) => ({
  backgroundColor: error ? '#C5141414' : '#F0F1F4',
  border: error ? '1px solid red' : 'none',
  borderRadius: '12px !important',

  '&  .MuiOutlinedInput-root': {
    border: 'none',
    borderRadius: '12px'

  },

  '& .MuiInputBase-input': {
    // backgroundColor: error ? '#C5141414' : '#F0F1F4',
    fontWeight: 400,
    height: '13px',
    borderRadius: '12px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },

  '& .MuiButtonBase-root:hover': {
    backgroundColor: 'inherit',
  },
}))

export const PasswordField = styled(OutlinedInput)<ErrorObject>(({ error }) => ({

  backgroundColor: error ? '#C5141414' : '#F0F1F4',
  border: error ? '1px solid red' : 'none',
  borderRadius: '12px !important',
  '& .MuiOutlinedInput-root': {
    border: 'none',
    borderRadius: '12px',
  },
  '& .MuiInputBase-input': {
    fontWeight: 400,
    borderRadius: '12px',
    height: '13px',
    // padding: '10px 14px', // Adjust padding as needed
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },

  '& .MuiButtonBase-root': {
    backgroundColor: "inherit",
    borderRadius: "0",
    borderBottomRightRadius: '12px',
    borderTopRightRadius: '12px'
  },
  '& .MuiButtonBase-root:-webkit-autofill': {
    backgroundColor: '#F0F1F4 !important'
  }

}));

export const SubmitButton = styled(Button)({
  backgroundColor: '#076EB0',
  marginTop: '2rem !important',
  height: '43px',
  borderRadius: '12px !important'
})
export const ForgotPassword = styled(Typography)({
  textAlign: 'center',
  marginTop: '12px !important',
  '.forgot': {
    color: '#076EB0',
    textDecoration: 'none'
  }
})
export const ErrorMsg = styled(Typography)({
  fontSize: '13px !imporant',
  color: 'red',
  marginTop: '7px !important'
})
export const Para = styled(Typography)({
  fontSize: "16px !important",
  display: 'block',
  fontWeight: 400,
  marginTop: '10px !important',
  marginLeft: '0 !important',
  lineHeight: "24px !important",
  textAlign: "left",
  color: '#707070 !important',
});
export const FlexBox = styled(Box)({
  display: 'flex !important',
  flexDirection: 'column',
  height: "100%",


})
export const LoginTextMessage = styled(Box)({
  display: 'flex',
  alignItems: "end",
  height: "-webkit-fill-available",
  width: "100%",
  color: 'black',
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: '24px',
  '& .anchor': {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
    textAlign: "left",
    color: '#076EB0'

  }

})