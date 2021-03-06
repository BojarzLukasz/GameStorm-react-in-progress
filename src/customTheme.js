import {Box, createTheme, TextField, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

const primaryColor = "rgba(0, 0, 0, 0.60)"
const secondaryColor = "#680f79"
const thirdColor = 'white'

const customTheme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor,
        },
        third: {
            main: thirdColor
        },
    },
    components:{
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: thirdColor,
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginTop: 0,
                    height: 0,
                },
            },
        },
    },
})

export const Item = styled(Box)({
    backgroundColor: primaryColor,
    color: thirdColor ,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    height: 550,
    borderRadius: 50,
});

export const ItemXs = styled(Box)({
    backgroundColor: primaryColor,
    color: thirdColor ,
    borderRadius: 10,
    padding: 10
});

export const CSSTypography = styled(Typography)({
    color: thirdColor
})


export const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: thirdColor,
    },
    '& label.Mui-error': {
        color: 'error.main'
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: thirdColor,
        },
        '&:hover fieldset': {
            borderColor: secondaryColor,
        },
        '&. Mui-focused fieldset': {
            borderColor: secondaryColor,
        },
    },
    '& input': {
        color: thirdColor
    },
});


export default customTheme;