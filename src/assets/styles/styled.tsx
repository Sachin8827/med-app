import HighlightOff from "@mui/icons-material/HighlightOff";
import { Alert, autocompleteClasses, Button, Drawer, FormControl, FormControlLabel, InputLabel, OutlinedInput, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CustomRadioButtonProps, ErrorObject, SkinToneBoxProps } from "../../Types/Types";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export const LoginSection = styled(Box)({

  // '& .MuiTypography-root': {
  //   marginTop: "24px",
  // },
})

export const LoginFormSection = styled(Box)({
  textAlign: "left",
})

export const MyformControl = styled(FormControl)({

  width: '100%',
  // marginTop: "15px !important"

})

export const Label = styled(InputLabel)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightRegular,
  // color: theme.palette.common.black,
  fontSize: '0.9rem',
  position: 'relative',
  transform: 'unset',

}));

export const Input = styled(OutlinedInput)<ErrorObject>(({ theme, error }) => ({
  backgroundColor: error ? theme.status.inputError : theme.status.inputBg,
  border: error ? `1px solid ${theme.palette.error.main}` : 'none',
  borderRadius: '12px !important',
  '&  .MuiOutlinedInput-root': {
    borderRadius: '12px'
  },

  '& .MuiInputBase-input': {
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

export const PasswordField = styled(OutlinedInput)<ErrorObject>(({ theme, error }) => ({

  backgroundColor: error ? theme.status.inputError : theme.status.inputBg,
  border: error ? `1px solid ${theme.palette.error.main}` : 'none',
  borderRadius: '12px ',
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

}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: '1.5rem',
  height: '43px',
  borderRadius: '12px',
}));

export const ForgotPassword = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginTop: '12px ',
  '.forgot': {
    textDecoration: 'none'
  }
}))
export const ErrorMsg = styled(Typography)({
  marginTop: '7px'
})
export const Para = styled(Typography)(({ theme }) => ({
  marginTop: '10px ',
}));
export const FlexBox = styled(Box)({
  display: 'flex ',
  flexDirection: 'column',
  height: "100%",
})
export const LoginTextMessage = styled(Box)({
  display: 'flex',
  alignItems: "end",
  height: "-webkit-fill-available",
  '& .anchor': {
    color: '#076EB0'

  }

})
export const MyAlert = styled(Alert)(({ theme }) => ({
  background: theme.status.inputError,
  width: 'max-content',
  borderRadius: '12px',
  color: theme.palette.common.black,

  '&  .MuiAlert-icon ': {
    color: theme.palette.error.main
  },
}));
export const Flex = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '25%',
})
export const FlexSuccess = styled(Box)({
  width: '100%',
  position: 'absolute',
  // top: "5px",
  zIndex: 1,
  // width: "100%",
  display: 'flex',
  justifyContent: 'center'
})
export const AlertSuccess = styled(Alert)<ErrorObject>(({ theme }) => ({
  background: theme.status.alertSuccess,
  width: 'max-content',
  borderRadius: '12px',
  padding: '3px 12px',

  color: theme.palette.common.black,

  '&  .MuiAlert-icon ': {
    color: theme.palette.success.main
  },
}));
export const CloseCircleIcon = styled(HighlightOff)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontSize: '80px',
  color: theme.palette.error.main,
}))

export const SignpuFlexBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row-reverse'
}))
export const DateInput = styled(DatePicker)(({ theme }) => ({
  borderRadius: "12px",
  height: "46px",
  backgroundColor: theme.status.inputBg,
  '.MuiInputBase-root': {
    height: "100%",
  },
  '.MuiOutlinedInput-notchedOutline': {
    border: "none",
  }
}))
export const MyRadioButton = styled(FormControlLabel)(({ theme }) => ({
  height: "46px",
  width: "27%",
  borderRadius: '12px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 0,
  '.MuiButtonBase-root': {
    display: 'none'
  }
}))
export const CustomRadioButton = styled((props: CustomRadioButtonProps) => <FormControlLabel {...props} />)(
  ({ theme, isError, isSelected }) => ({
    height: "46px",
    width: "27%",
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    backgroundColor: isError ? "#C5141414" : isSelected ? '#87C81A' : "#F0F1F4",
    color: isSelected ? 'white' : 'black',
    border: isError ? '1px solid red' : '1px solid #F0F1F4',
    '& .MuiButtonBase-root': {
      display: 'none'
    },
  }),
);
export const SkinToneHeading = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '7px 0',

}))
export const SkinToneBox = styled(Box)<SkinToneBoxProps>(({ theme }) => ({
  width: "100%",
  borderRadius: '12px',
  padding: "11px 12px",
}));
export const SkinToneButton = styled(Box)(({ theme }) => ({
  padding: '0',
  width: "100%",
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: 0,
  '.MuiImageList-root': {
    display: 'block',
  },
  '.Skin': {
    margin: '0 auto',
    borderRadius: '12px',
  }
}))
export const Nav = styled(Box)(({ theme }) => ({
  width: 'auto',


}))
export const CustomDrawer = styled(Drawer)(({ theme }) => ({


  '.MuiPaper-root': {
    padding: ' 0.4rem 1rem',

  },
  '.MuiAppBar-root': {
    boxShadow: "none",

  }

}))
export const NavButton = styled(Button)(({ theme }) => ({
  width: '100%',
  height: '48px',
  borderRadius: "12px",
  color: "black",
  lineHeight: '24px',
  fontSize: "16px",
  fontWeight: 500,
  textTransform: "none",
  ':hover': {
    color: theme.palette.primary.main,
  },
  backgroundColor: 'white',
  '.MuiButton-root:hover': {
    backgroundColor: theme.palette.primary.light,
  }
}))
export const HeroImage = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.primary.main,
  borderRadius: '16px',

}))
export const ImageSection = styled(Box)(({ theme }) => ({

  '.bodyCircle': {
    display: 'flex',
    justifyContent: "end",
    width: "100%",
    marginLeft: "15px",
    marginTop: "41px",
    position: 'relative',
    overFlowY: 'unset'
  },
  '.MuiImageList-root': {
    overFlowY: 'unset'
  }
}))
export const HeroText = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  width: "60%",
  top: 0,
  position: 'absolute',
  left: '1rem',
  height: '100%'

}))
export const SiteInfo = styled(Box)(({ theme }) => ({
  backgroundColor: '#F0F1F4',
  borderRadius: '12px',
  [theme.breakpoints.up('sm')]: {
    width: "100%",
  }
}))