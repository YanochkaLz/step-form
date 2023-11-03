import CustomBlock from '@/components/ui/CustomBlock/CustomBlock';
import { add_ons } from '@/constants/add-ons';
import { plans } from '@/constants/plans';
import { IData } from '@/store/dataReducer';
import { Box, Flex, Stack, Text } from '@mantine/core';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { IPageProps } from '../info/Info';

const Finish: FC<IPageProps> = ({ fullData }) => {
    const data = useSelector(({ data }: { data: IData }) => data);
    let sumCounter = 0;

    const calcPriceAddOn = (on: string): string => {
        let res = '';
        let price = add_ons.find(on2 => on2.title === on)?.price || 1;
        if (data.plan.period === 'Yearly') {
            price *= 10;
            res += '+$' + price + '/yr';
        } else {
            res += '+$' + price + '/mo';
        }
        sumCounter += price;
        return res;
    }

    const calcPricePlan = (): string => {
        let res = '';
        let price = plans[data.plan.id].price;
        if (data.plan.period === 'Yearly') {
            price *= 10;
            res += '$' + price + '/yr';
        } else {
            res += '$' + price + '/mo';
        }
        sumCounter += price;
        return res
    }

    return (
        <Box>
            <CustomBlock>
                <Stack w={'100%'}>
                    <Flex pb={'1.5rem'} style={{ borderBottom: '1px solid var(--Light-gray)' }} w={'100%'} justify={'space-between'} align={'center'}>
                        <Box>
                            <Text fw={700} fz={'1.2rem'}>{plans[data.plan.id].title}({data.plan.period})</Text>
                            {/* <Button onClick={} p={0} style={{ textDecoration: 'underline' }} fw={400} fz={'1rem'} bg={'transparent'} c={'var(--Cool-gray)'}>Change</Button> */}
                        </Box>
                        <Text fw={700} fz={'1.1rem'}>
                            {calcPricePlan()}
                        </Text>
                    </Flex>

                    {data.addOns?.map((on, index) =>
                        <Flex key={index} justify={'space-between'}>
                            <Text fw={400} fz={'1rem'} c={'var(--Cool-gray)'}>{on}</Text>
                            <Text fw={400}>{calcPriceAddOn(on)}</Text>
                        </Flex>
                    )}
                </Stack>
            </CustomBlock>
            <Flex justify={'space-between'} p={20} align={'center'}>
                <Text fw={400} fz={'1rem'} c={'var(--Cool-gray)'}>Total (per month)</Text>
                <Text fw={700} fz={'1.3rem'} c={'var(--Purplish-blue)'}>+${sumCounter}{data.plan.period === 'Yearly' ? '/yr' : '/mo'}</Text>
            </Flex>
        </Box>
    )
}

export default Finish