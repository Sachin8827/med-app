import { ThemeOptions } from "@mui/material";
import * as React from "react";

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            inputError: string,
            inputBg: string,
            alertSuccess: string
        }
    }
    interface ThemeOptions {
        status: {
            inputError: React.CSSProperties['color'],
            inputBg: React.CSSProperties['color'],
            alertSuccess: React.CSSProperties['color'],
        }
    }
    interface TypographyVariants {
        pbold: React.CSSProperties
        plight: React.CSSProperties
        heading1: React.CSSProperties
        heading2: React.CSSProperties
    }

    interface TypographyVariantsOptions {
        pbold?: React.CSSProperties | {};
        plight?: React.CSSProperties | {};
        heading1?: React.CSSProperties | {}
        heading2?: React.CSSProperties | {}
    }
}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        pbold: true;
        plight: true;
        heading1: true;
        heading2: true;
    }
}