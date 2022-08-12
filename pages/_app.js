// 1. import `NextUIProvider` component

import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {// brand colors
      
  }
}
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      background: '#1d1d1d',
      text: '#fff',
      // you can also create your own color
      myDarkColor: '#ff4ecd'
      // ...  more colors}, // optional
    }, // optional
  }
})
function MyApp({ Component, pageProps }) {
  return (
    <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
  >
  <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
</NextThemesProvider>

  );
}

export default MyApp;
