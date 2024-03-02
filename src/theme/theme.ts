import { Ubuntu } from "next/font/google";
import { Container, createTheme } from '@mantine/core';
import cx from 'clsx';

import containerClasses from "../components/containers/container/container.module.scss";

const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: ['700', '500', '400', '300']
})


export const theme = createTheme({
    fontFamily: ubuntu.style.fontFamily,
    components: {
        Container: Container.extend({
            classNames: (_, {size}) => ({
                root: cx({ [containerClasses.responsiveContainer]: size === 'responsive' }),
            })
        })
    }
})