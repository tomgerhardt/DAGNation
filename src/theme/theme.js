import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    "palette": {
        "type": "dark",
        "background": {
            "default": "#171619",
            "paper": "#424242"
        },
        "divider": "rgba(255, 255, 255, 0.12)",
        "text": {
            "primary": "#fff",
            "secondary": "rgba(255, 255, 255, 0.7)",
            "disabled": "rgba(255, 255, 255, 0.5)"
        },
        "action": {
            "active": "#fff",
            "hover": "rgba(255, 255, 255, 0.08)",
            "selected": "rgba(255, 255, 255, 0.16)",
            "disabled": "rgba(255, 255, 255, 0.3)",
            "disabledBackground": "rgba(255, 255, 255, 0.12)"
        },
        "primary": {
            "main": "#000000",
            "light": "#56525F",
            "dark": "#171619"
        },
        "secondary": {
            "main": "#FFFFFF"
        }
    },
    "typography": {
        "fontFamily": "\"Montserrat\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
        "fontWeightBold": 900,
        "h2": {
            "fontFamily": "\"Montserrat\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
            "fontWeight": 200,
            "lineHeight": 1.2
        },
        "h3": {
            "fontFamily": "\"Montserrat\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
            "lineHeight": 1.3,
            "fontWeight": 200
        }
    },
    "shape": {
        "borderRadius": 8
    },
    "breakpoints": {
        "values": {
            "xs": 0,
            "sm": 600,
            "md": 960,
            "lg": 1280,
            "xl": 1920
        }
    }
});

export default theme;

