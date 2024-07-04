import { ThemeOptions } from "@mui/material";
import * as React from "react";

declare module '@mui/material/styles' {
    interface Theme {
        status : {
            inputError: string,
            inputBg : string,
            alertSuccess: string
        }
    }
    interface ThemeOptions {
        status : {
            inputError: React.CSSProperties['color'],
            inputBg : React.CSSProperties['color'],
            alertSuccess: React.CSSProperties['color'],
        }
    }
}