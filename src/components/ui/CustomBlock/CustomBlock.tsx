import { Flex, FlexProps } from "@mantine/core";
import { FC, ReactNode } from "react";

interface CustomBlockProps extends FlexProps {
    children: ReactNode;
}


const CustomBlock: FC<CustomBlockProps> = ({ children, ...props }) => {
    return (
        <Flex p={20} gap={'20px'} bg={'var(--Magnolia)'} style={{ borderRadius: '.5rem' }} justify={'center'} align={'center'} {...props}>
            {children}
        </Flex>
    )
}

export default CustomBlock
