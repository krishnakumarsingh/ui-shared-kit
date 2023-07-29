declare module '@mui/material/styles/createPalette' {
    interface PaletteOptions {
        inheritText?: PaletteColorOptions;
        inheritWhite?: PaletteColorOptions;
    }
    interface Palette {
        inheritText: SimplePaletteColorOptions & ColorPartial;
        inheritWhite: SimplePaletteColorOptions & ColorPartial;
    }
}
declare const theme: import("@mui/material/styles").Theme;
export default theme;
