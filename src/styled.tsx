import { Button, Typography } from "@mui/material";
import { InputLabel, OutlinedInput, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { ErrorObject } from "../../Types/Types";
import styled from "styled-components";


export const LoginSection = styled(Box)({

  '.MuiTypography-root': {
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

export const Label = styled(InputLabel)({
  fontWeight: "400 !important",
  color: '#2F2F32 !important',
  fontSize: '1.2rem !important'
})

export const EmailField = styled(OutlinedInput)<ErrorObject>(({ error }) => ({
  '&  .MuiOutlinedInput-root': {
    borderRadius: '12px'
  },

  '& .MuiInputBase-input': {
    backgroundColor: error ? '#C5141414' : '#F0F1F4',
    border: error ? '1px solid red' : 'none',
    fontWeight: 400,
    height: '10px',
    borderRadius: '12px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiButtonBase-root': {
    backgroundColor: '#F0F1F4',
    borderRadius: "0",
    borderBottomRightRadius: '12px',
    borderTopRightRadius: '12px'
  },
  '& .MuiButtonBase-root:hover': {
    backgroundColor: 'inherit',
  },
}));

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
    // height: '36px', // Adjust height as needed
    borderRadius: '12px',
    padding: '10px 14px', // Adjust padding as needed
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiButtonBase-root': {
    borderRadius: "0",
  },

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
  color: 'red'
})