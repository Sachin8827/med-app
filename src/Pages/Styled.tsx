import * as React from 'react';
import styled from '@emotion/styled';
import { createTheme, Box } from '@mui/material';

const theme = createTheme();

export const MyComponent = styled(Box)({
    color: 'red',
    '&.active': {
        color: 'green',
    },
    '& .MuiTypography-h4': {
        fontSize: '25px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '30px',
        },
    }
});

export const MyComponent1 = styled(Box)({
    color: 'green'
});

export const MyComponent2 = styled(Box)({
    color: 'blue'
});

export const MyComponent3 = styled(Box)({
    color: 'yellow'
});
