import { createTheme, PaletteOptions } from '@mui/material/styles'
declare module '@mui/material/styles/createPalette' {
    export interface PaletteOptions {
        inheritText?: PaletteColorOptions
        inheritWhite?: PaletteColorOptions
    }
    export interface Palette {
        inheritText: SimplePaletteColorOptions & ColorPartial
        inheritWhite: SimplePaletteColorOptions & ColorPartial
    }
}
const theme = createTheme({
    palette: {
        primary: {
            light: '#004990',
            main: '#004990',
            dark: '#003364',
            contrastText: '#fff',
        },
        secondary: {
            light: '#3C4249',
            main: '#3C4249',
            dark: '#3C4249',
            contrastText: '#FFF',
        },
        error: {
            light: '#B7000E',
            main: '#B7000E',
            dark: '#B7000E',
            contrastText: '#FFF',
        },
        warning: {
            light: '#FFC107',
            main: '#FFC107',
            dark: '#FFC107',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        info: {
            light: '#007CBE',
            main: '#007CBE',
            dark: '#007CBE',
            contrastText: '#FFF',
        },
        success: {
            light: '#5C8118',
            main: '#5C8118',
            dark: '#5C8118',
            contrastText: '#FFF',
        },
        inheritText: {
            light: '#E0E0E0',
            main: '#E0E0E0',
            dark: '#E0E0E0',
            contrastText: '#1E2124',
        },
        inheritWhite: {
            light: '#E0E0E0',
            main: '#E0E0E0',
            dark: '#E0E0E0',
            contrastText: '#FFF',
        },
    },
})
export default theme
