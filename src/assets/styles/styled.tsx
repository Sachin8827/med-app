import HighlightOff from "@mui/icons-material/HighlightOff";
import { Alert, autocompleteClasses, Button, Drawer, FormControl, FormControlLabel, ImageListItem, InputLabel, MobileStepper, OutlinedInput, RadioGroup, styled, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CustomRadioButtonProps, ErrorObject, InfectionIntensity, SkinToneBoxProps } from "../../Types/Types";
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

export const LogoutButton = styled(SubmitButton)(({ theme }) => ({

  [theme.breakpoints.up('lg')]: {
    // marginTop: '297px'
    width: "95%",
    margin: '0 auto'
  }

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
  [theme.breakpoints.up('lg')]: {
    width: "49%",
  }
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
    [theme.breakpoints.up('lg')]: {
      width: '83px'
    }
  },
  '.Skin': {
    margin: '0 auto',
    borderRadius: '12px',
  }
}))
export const CustomToolBar = styled(Toolbar)(({ theme }) => ({
  padding: '0px',
  '.MuiButtonBase-root': {
    paddingLeft: '0px'
  }
}))
export const Nav = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  [theme.breakpoints.up('lg')]: {
    width: "224px"
  },
  '@media (min-width: 1920px)': {
    width: '272px'
  }

}))
export const CustomDrawer = styled(Drawer)(({ theme }) => ({


  '.MuiPaper-root': {
    padding: ' 0.4rem 1rem',

  },
  '.MuiAppBar-root': {
    boxShadow: "none",
  },

}))
export const NavButtonDiv = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    marginTop: '15px',
    display: 'flex',
    flexDirection: 'column',
    height: '86%'
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
  justifyContent: "center",
  ':hover': {
    color: theme.palette.primary.main,
  },
  backgroundColor: 'white',
  '.MuiButton-root:hover': {
    backgroundColor: theme.palette.primary.light,
  },
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'start',
    width: "97%"
  }
}))
export const HomePageDiv = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: "15px",
  '@media (min-width: 640px)': {
    flexDirection: 'row',
    columnGap: '8px',
  },
  [theme.breakpoints.up('lg')]: {
    flexDirection: "column",
    width: "100%",
    margin: '0 auto'
  },
  '@media (orientation: landscape)': {

  }

}))
export const HeroImage = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.primary.main,
  borderRadius: '16px',
  '@media(min-width: 640px)': {
    width: '50%'
  },
  [theme.breakpoints.up('lg')]: {
    width: "100%",

  }

}))
export const ImageSection = styled(Box)(({ theme }) => ({

  '.bodyCircle': {
    height: "100%",
    display: 'flex',
    justifyContent: "end",
    width: "100%",
    marginLeft: "15px",
    marginTop: "41px",
    '@media(min-width: 640px)': {
      marginTop: '0px'
    }
  },
  '.bodyCircle img': {
    [theme.breakpoints.up('lg')]: {
      marginTop: "100px",

    },
  },
  '.bodyCircle img:nth-child(2)': {
    '@media(min-width: 640px)': {
      position: 'absolute',
      bottom: '1px',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: "100px",
      position: 'static'
    },

  },

}))
export const HeroText = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  width: "60%",
  top: 0,
  position: 'absolute',
  left: '1rem',
  height: '100%',
  [theme.breakpoints.up('sm')]: {
    width: "55%",
  },
  '@media(min-width: 640px)': {
    width: '60%'
  },
  [theme.breakpoints.up('lg')]: {
    width: "22%",
  },
  [theme.breakpoints.up('xl')]: {
    width: "30%",
  },

}))
export const HomePageInfo = styled(Box)(({ theme }) => ({
  '@media(min-width: 640px)': {
    width: "50%",
  },
  [theme.breakpoints.up("lg")]: {
    width: '100%'
  }

}))
export const SiteInfo = styled(Box)(({ theme }) => ({
  backgroundColor: '#F0F1F4',
  borderRadius: '12px',
  [theme.breakpoints.up('sm')]: {
    width: "100%",
  },
  '@media(min-width: 1920px)': {
    padding: '40px 56px 40px 56px'
  },
}))
export const PlusIcon = styled(SubmitButton)(({ theme }) => ({
  backgroundColor: 'white',
  minWidth: '48px',
  height: '48px',
  width: '48px',
  maxWidth: '160px',
  ':hover': {
    textDecoration: "none",
    backgroundColor: 'white'
  },
  '.test': {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      width: "auto",
      display: 'block',
    }
  },
  [theme.breakpoints.up('lg')]: {
    width: "auto",
  }


}))
export const Statistics = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'column',
    rowGap: "15px",
  },
  '@media(min-width: 640px)': {
    flexDirection: 'row',
    columnGap: "8px"
  }
}))
export const Home = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
  }
}))

export const SkintoneGroup = styled(RadioGroup)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '15px',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    rowGap: "15px"
  }
}))
export const BodySection = styled(Box)(({ theme }) => ({
  '@media (orientation: landscape)': {
    display: 'flex',
    justifyContent: 'space-between',
    // height: '296px'
  },
  [theme.breakpoints.up('lg')]: {
    display: "block",
  },
  [theme.breakpoints.up('xl')]: {
    marginTop: '30px'
  }
}))
export const BodySectionForm = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'end',
  '@media (orientation: landscape)': {
    height: '100%',
    position: 'relative',
    width: "100%",
    justifyContent: 'space-evenly'
  },
  [theme.breakpoints.up('lg')]: {
    position: 'static',
  },
  [theme.breakpoints.up('xl')]: {
    justifyContent: 'space-between'
  }
}))
export const NextButtonDiv = styled(Box)(({ theme }) => ({
  '@media (orientation: landscape)': {
    position: 'absolute',
    bottom: '5px',
    right: "5px"
  },
  [theme.breakpoints.up('lg')]: {
    bottom: '1.5rem',
    right: "1.5rem"
  },
  [theme.breakpoints.up('xl')]: {
    right: '10rem'
  }

}))
export const SvgBox = styled(Box)(({ theme }) => ({
  aspectRatio: '0.47',
  height: "100%",
  '@media (orientation: landscape)': {
    width: '34%'
  },
  [theme.breakpoints.up('lg')]: {
    width: '42%'
  },
  [theme.breakpoints.up('xl')]: {
    width: '48%'
  }
}))

export const CustomStepper = styled(MobileStepper)(({ theme }) => ({
  height: '13px',
  flexGrow: 1,
  padding: "0",
  width: "100%",
  '.MuiLinearProgress-root ': {
    width: '100%',
    height: "8px",
    maxWidth: 'auto',
    backgroundColor: '#F0F1F4',
    borderRadius: '15px'

  },
  '.MuiLinearProgress-bar': {
    backgroundColor: '#87C81A'
  }
}))
export const InfectedAreaSecion = styled(Box)<InfectionIntensity>(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  rowGap: "8px",
  columnGap: '8px'
}))
export const ImageDiv = styled(ImageListItem)(({ theme }) => ({
  width: "160px",
  height: "160px !important",
  justifyContent: 'center',
  aspectRatio: 1,
  [theme.breakpoints.up('sm')]: {
    width: '182px',
    height: '182px !important',
  },
  '@media (orientation: landscape)': {
    width: '94px',
    height: '94px !important',
    aspectRatio: 1
  },
  [theme.breakpoints.up('lg')]: {
    width: "121px",
    height: '121px !important',
  },
  [theme.breakpoints.up('xl')]: {
    width: "148px",
    height: '148px !important',
  }

}))
export const IntensitySection = styled(BodySection)(({ theme }) => ({

  [theme.breakpoints.up('sm')]: {
    width: "68.9125%",
    margin: '0 auto'
  },
  '@media (orientation: landscape)': {
    width: "65.8125%",
    margin: '0 auto'
  },
  [theme.breakpoints.up('lg')]: {
    width: "100%",

  }
}))