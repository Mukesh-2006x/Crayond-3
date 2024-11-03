const lightTheme = {
    typography: {
      fontFamily: "Poppins",
    },
    palette: {
      text: {
        primary: "#353448",
        secondary: "#71707E",
        disabled: "#B9B9B9",
      },
      primary: {
        main: "#665CD7",
        light: "#948DE3",
        contrastText: "rgba(256,256,256)",
      },
      secondary: {
        main: "#49C792",
        light: "#CEF3E4",
        contrastText: "rgba(0,0,0,0.87)",
        containedHover: "#6CDBAD",
        outlinedHover: "#EEFBF6",
        disable: "#B9B9B9",
        textColor: "#FFFFFF",
      },
      error: {
        main: "#F44F5A",
      },
      success: {
        main: "#49C792",
      },
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "red",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "red",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "red",
            },
            "&.Mui-active .MuiOutlinedInput-notchedOutline": {
              borderColor: "red",
            },
            "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
              borderColor: "#CACACA",
            },
          },
        },
      },
    },
  };
  
  export default lightTheme;
  