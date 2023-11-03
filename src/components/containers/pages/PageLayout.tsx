import { useError } from "@/components/providers/ErrorProvider";
import CustomButton from "@/components/ui/Button/CustomButton";
import { IPage } from "@/constants/pages";
import { IData } from "@/store/dataReducer";
import { Box, Flex, Stack, Text } from "@mantine/core";
import React, { FC } from "react";
import { useSelector } from "react-redux";

interface IPageLayout extends IPage {
    handleChangePage: (dir: string) => void,
    windowWidth: number
}

const PageLayout: FC<IPageLayout> = ({ Component, title, description, number, handleChangePage, windowWidth }) => {
    const { error } = useError();
    const data = useSelector(({ data }: { data: IData }) => data);

    return (
        <Stack h={'100%'} p={windowWidth <= 500 ? '15px' : '40px 60px'} justify="space-between">
            <Box>
                <Text fw={700} fz={'2rem'}>{title}</Text>
                <Text fw={400} fz={'1.1rem'} c={'var(--Cool-gray)'}>{description}</Text>
            </Box>
            <Box style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
                <Component fullData={data} />
            </Box>
            <Flex mt={windowWidth <= 500 ? 50 : 100} justify="space-between">
                <CustomButton style={{ backgroundColor: 'var(--White)', color: 'var(--Cool-gray)' }} onClick={() => handleChangePage('back')}>
                    {number > 0 &&
                        'Go Back'
                    }
                </CustomButton>
                <CustomButton style={error ? { opacity: .3, cursor: 'default' } : { backgroundColor: 'var(--Marine-blue)', alignSelf: 'flex-end' }} onClick={() => handleChangePage('next')}>
                    {number === 3 ? 'Confirm' : 'Next Step'}
                </CustomButton>
            </Flex>
        </Stack>
    )
}

export default PageLayout
