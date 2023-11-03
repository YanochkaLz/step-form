import { FC, PropsWithChildren } from "react";
import { Container as MantineContainer, ContainerProps } from '@mantine/core';

const Container: FC<PropsWithChildren<ContainerProps>> = ({ children, ...rest }) => {
    return (
        <MantineContainer size="responsive" {...rest}>
            {children}
        </MantineContainer>
    )
}

export default Container
