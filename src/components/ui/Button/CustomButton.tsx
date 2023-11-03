import { Button } from "@mantine/core";
import { FC, PropsWithChildren } from "react";
import styles from './button.module.scss';

interface IButton {
    onClick: React.MouseEventHandler,
    style?: object
}

const CustomButton: FC<PropsWithChildren<IButton>> = ({ children, style = {}, onClick = () => {}}) => {
    return (
        <Button onClick={onClick} className={styles.custBtn} radius='md' fz={'1.2rem'} p={'15px 20px'} h={'fit-content'} w={'fit-content'} style={style}>
            {children}
        </Button>
    )
}

export default CustomButton
