import { DefaultTheme as DefaultT, DarkTheme as DarkT } from 'react-native-paper';


export const LightTheme = {
    ...DefaultT,
    roundness: 2,
    colors: {
      ...DefaultT.colors,
      surface: "#F5F6FA",
      background: "#FFFFFF",
      interlistcolor: "#E8E8EB",
      text: 'black',
      error: '#B71F0E',
      disabled: '#BEC6C6',
      placeholder: '#1481BA',
      backdrop: '#001021',  
      statusbar: 'black'
    },
    fonts: {
        regular: 'Helvetica Neue',
        medium: 'Helvetica Neue Light',
      },
      sizes: {
        horizontal: 20
    },
  };

  export const DarkTheme = {
    ...DarkT,
    dark: false,
    roundness: 4,
    colors: {
        ...DarkT.colors,
        surface: "#0d182c",
        background: "#0d182c",
        interlistcolor: "#E50507",
        border: "#707070",
        text: '#FFFFFF',
        error: '#B71F0E',
        disabled: '#BEC6C6',
        placeholder: '#1481BA',
        backdrop: '#001021',
        statusbar: '#1E1E2E'
    },
    fonts: {
        regular: 'Helvetica Neue',
        medium: 'Helvetica Neue Light',
      },
    sizes: {
        horizontal: 20
    },
  };
