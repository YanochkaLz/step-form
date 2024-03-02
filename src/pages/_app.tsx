import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { theme } from '../theme/theme';
import { Provider } from "react-redux";
import '@mantine/core/styles.css';
import '../styles/globals.scss';
import { ErrorProvider } from "@/components/providers/ErrorProvider";
import store from "@/store";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MantineProvider theme={theme}>
            <Provider store={store}>
                <ErrorProvider>
                    <Component {...pageProps} />
                </ErrorProvider>
            </Provider>
        </MantineProvider>
    )
}
