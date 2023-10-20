export default interface Props {
    label: string,
    variant: 'filled' | 'outlined' | 'standard',
    size: 'small' | 'medium',
    disabled?: boolean,
    menuItems?: any,
    helperText?: string,
    fullWidth?: boolean,
    mode?: 'light' | 'dark'
}