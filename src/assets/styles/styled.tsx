import HighlightOff from "@mui/icons-material/HighlightOff";
import { Accordion, Alert, Button, CircularProgress, Drawer, FormControl, FormControlLabel, ImageList, ImageListItem, InputLabel, MobileStepper, OutlinedInput, RadioGroup, Rating, Slider, styled, TextField, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CustomRadioButtonProps, ErrorObject, InfectionIntensity, SkinToneBoxProps, UserProfileProps } from "../../Types/Types";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import image from '../../../public/images/bg_ellipses.png'
import imageSecond from '../../../public/images/imageLgSize.png'
import { CircularProgressbar } from "react-circular-progressbar";
import homeImage from '../../../public/images/Group3.png'
import homeImageLandscape from '../../../public/images/Group3 Lanscape.png'
import homeLargeScreeImage from '../../../public/images/Group 23.png'
import homeXlScreenImage from '../../../public/images/Groupxl.png'
// import homeImageSmSize from '../../../public/images/homeImageSmSize.png'
import { theme } from "../../Theme/Theme";
export const LoginSection = styled(Box)({

  '.MuiTypography-root': {
    marginTop: '13px',
    textAlign: "left",
    color: '#2F2F32',
  },
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
      width: '83px',
      columnGap: '15px'
    }
  },
  '.Skin': {
    margin: '0 auto',
    borderRadius: '12px',
  }
}))
export const SkintoneImage = styled(ImageList)(({ theme }) => ({
  width: "93px",
  height: '93px',
  overflowY: 'unset',
  '@media(orientation  : landscape)': {
    width: '110px',
    height: '110px'
  },
  [theme.breakpoints.up('lg')]: {
    width: '67px',
    height: '67px'
  },
  [theme.breakpoints.up('xl')]: {
    width: '85px',
    height: '85px'
  }
}))
export const CustomToolBar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0px',
  '.MuiButtonBase-root': {
    paddingLeft: '0px'
  }
}))
export const Nav = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  [theme.breakpoints.up('lg')]: {
    width: "224px",
    display: 'flex',
    flexDirection: 'column'
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
    width: "192px",
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
  }
}))
export const ButtonSection = styled(Box)(({ theme }) => ({
  height: '-webkit-fill-available',
  display: 'flex',
  justifyContent: "center",
  alignItems: 'end',
  [theme.breakpoints.up('lg')]: {
    width: "192px",
    margin: '0 auto',
    paddingBottom: '16px'
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
    backgroundColor: 'transparent',
  },
  backgroundColor: 'white',
  '.MuiButton-root:hover': {

  },
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'start',
    width: "97%"
  }
}))
export const HomePageWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: "15px",
  '@media (orientation : landscape)': {
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
export const HomeSectionCardWrapper = styled(Box)(({ theme }) => ({
  '@media(orientation  : landscape)': {
    width: "50%",
  },
  [theme.breakpoints.up("lg")]: {
    width: '100%'
  }

}))
export const HomePageCardWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#F0F1F4',
  borderRadius: '12px',
  width: '100%',
  cursor: 'pointer',
  [theme.breakpoints.up('sm')]: {
    width: "100%",
  },
  '@media(min-width: 1920px)': {
    padding: '40px 56px 40px 56px'
  },
}))
export const PlusIcon = styled(SubmitButton)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'white',
  minWidth: '48px',
  height: '48px',
  width: '48px',
  // maxWidth: '160px',
  ':hover': {
    textDecoration: "none",
    backgroundColor: 'white'
  },
  '.test': {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      width: "auto",
      display: 'block',
      justifyContent: 'start',
    }
  },
  [theme.breakpoints.up('lg')]: {
    width: "auto",

  }


}))
export const CardWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'column',
    rowGap: "15px",
  },
  '@media(orientation  : landscape)': {
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
    rowGap: "15px",
    // columnGap: ''
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
export const InfectedAreaSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  rowGap: "8px",
  columnGap: '8px'
}))
export const ImageDiv = styled(ImageListItem)<InfectionIntensity>(({ theme }) => ({
  width: "160px",
  height: "160px !important",
  justifyContent: 'center',
  position: "relative",
  aspectRatio: 1,
  borderRadius: '12px',
  '.MuiImageListItem-img': {
    borderRadius: '8px'
  },
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
export const AdditonalSymptomSection = styled(Box)(({ theme }) => ({

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
export const IntensityRange = styled(Box)(({ theme }) => ({
  width: "20px",
  height: '20px',
  position: 'absolute',
  top: "7px",
  right: '7px',
  borderRadius: '32px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))

export const MultilineInput = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.status.inputBg,
  border: 'none',
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
export const CustomRating = styled(Box)(({ theme }) => ({
  width: "100%",
  height: '48px',
  borderRadius: "12px",
  display: 'flex',
  justifyContent: "flex-start"
}))
export const RateValue = styled(Box)(({ theme }) => ({
  width: "10%",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))

export const LogoWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.up('lg')]: {
    padding: "32px  32px  12px  32px"
  }
}))


export const EmailField = styled(OutlinedInput)<ErrorObject>(({ error }) => ({
  '&  .MuiOutlinedInput-root': {
    borderRadius: '12px',
  },

  '& .MuiInputBase-input': {
    // backgroundColor: error ? '#C5141414' : '#F0F1F4',

    fontWeight: 400,
    height: '10px',
    borderRadius: '12px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    // border: 'none',
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

export const SummaryScreenWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#076EB0',
  backgroundImage: `url(${image})`,
  borderRadius: '0px 0px 24px 24px',
  // backgroundPosition: "left center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  // height: '250px',
  [theme.breakpoints.up('sm')]: {
    //imageSecond
    backgroundImage: `url(${imageSecond})`,

  },
  '@media (orientation: landscape)': {
    backgroundImage: `url(${image})`,
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: "1024px",
    margin: '0 auto',
    padding: '0 15px',
    backgroundImage: `url(${imageSecond})`,
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: '1240px',
    backgroundImage: `url(${homeXlScreenImage})`,
  }
}))
export const CloseIconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'end',
  padding: '12px 16px 12px 16px'
}))

export const SummaryContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 15px',

  [theme.breakpoints.up('sm')]: {
    width: '62.66%',
    margin: '0 auto',
    justifyContent: 'space-between',
    padding: 0
  },
  '@media (orientation: landscape)': {
    width: "100%",
    maxWidth: 'inherit',
    justifyContent: 'space-between',
    padding: '0 15px'
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '852px',
    padding: '0'
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: '1032px'
  }
}))

export const ProgressBarWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  paddingTop: '8px',
  paddingBottom: '24px',
  '@media (orientation: landscape)': {
    width: "118px"
  },
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'flex-start',
    rowGap: '20px',
    width: '160px'
  },
  [theme.breakpoints.up('xl')]: {
    width: '184px',
    height: '184px'
  }
}))
export const Progress = styled(CircularProgress)(() => ({
  color: 'green ',
  width: "118px !important",
  height: 'auto !important',
  background: "linear-gradient(90deg, #E32929 25%, #D76F39 50%, #CBB64A 75%, #9CE324 100%)",

  '.MuiCircularProgress-root ': {

  }
}))
export const CustomProgressBar = styled(CircularProgressbar)(({ theme }) => ({
  fill: "white !important",
  width: '118px',
  '.CircularProgressbar-text': {
    fill: "white !important",
    fontSize: '30px',
    lineHeight: '52px',
    fontWeight: 600
  },
  [theme.breakpoints.up('lg')]: {
    width: '160px'
  }
}))
export const HomeProgressBar = styled(CircularProgressbar)(({ theme }) => ({
  fill: "white !important",
  '.CircularProgressbar-text': {
    fill: "white !important",
    fontSize: '30px',
    lineHeight: '52px',
    fontWeight: 600
  },
  [theme.breakpoints.up('lg')]: {
    // width: '160px'
  }
}))
export const SymptomsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '30px',
  width: '100%',


  [theme.breakpoints.up('lg')]: {
    width: '100%',
    flexDirection: 'row',
    columnGap: '32px'
  }
}))
export const SymptomsCardWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '8px',
  [theme.breakpoints.up('lg')]: {
    rowGap: '16px '
  }


}))
export const HomeScoreWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#076EB0',
  backgroundImage: `url(${homeImage})`,
  borderRadius: '16px',
  // backgroundPosition: "left center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  // height: '250px',
  [theme.breakpoints.up('sm')]: {
    //imageSecond 
    width: '100%',
    backgroundImage: `url(${homeImage})`,
  },
  '@media (orientation: landscape)': {
    backgroundImage: `url(${homeImageLandscape})`,
    width: '50%'
  },
  [theme.breakpoints.up('lg')]: {
    // maxWidth: "1024px",
    width: '100%',
    paddingTop: '40px',
    paddingLeft: '40px',
    paddingBottom: '40px',
    backgroundImage: `url(${homeLargeScreeImage})`,
  },
  [theme.breakpoints.up('xl')]: {
    paddingTop: '56px',
    paddingLeft: '56px',
    paddingBottom: '56px',
    backgroundImage: `url(${homeXlScreenImage})`,
  }
}))
export const TestScoreWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '8px',
  '.ring': {
    width: '100px',
    height: '100px',

    [theme.breakpoints.up('lg')]: {
      width: '152px',
      height: '152px'
    },
    [theme.breakpoints.up('xl')]: {
      width: '184px',
      height: '184px'
    }
  },

  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    columnGap: '16px',
    alignItems: 'center',
  }
}))
export const HomeIcon = styled(PlusIcon)(({ theme }) => ({
  marginTop: '14px',
  [theme.breakpoints.up('lg')]: {
    marginTop: '44px',
    padding: '0px 24px 0px 24px'
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: '56px',

  }
}))
export const BodyDiv = styled(Box)(({ theme }) => ({
  width: '158px',
  aspectRatio: '0.47878787878',
  [theme.breakpoints.up('sm')]: {
    width: '132px'
  },
  "@media (orientation: landscape)": {
    width: '132px'
  },
  [theme.breakpoints.up('lg')]: {
    width: '147xpx'
  }

}))
export const UserProfileDiv = styled(Box)<UserProfileProps>(({ isSelected, theme }) => ({
  padding: '16px 24px 16px 24px',
  borderRadius: '12px',
  border: isSelected ? '1px solid #B3D06A' : '1px solid transparent',
  backgroundColor: isSelected ? '#E2F2C8' : "#F0F1F4"
}))
export const CustomAccrodion = styled(Accordion)(({theme}) =>({
border  : '1px solid red',
borderRadius : '12px',
":last-of-type" : {
  borderBottomLeftRadius : "12px",
  borderBottomRightRadius : "12px"
},
":first-of-type"  :{
  borderTopLeftRadius : "12px",
  borderTopRightRadius : "12px"   
},

}))