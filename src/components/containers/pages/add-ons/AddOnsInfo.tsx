import { IAddOns } from '@/constants/add-ons'
import { IData } from '@/store/dataReducer';
import { Box, Flex, Text } from '@mantine/core';
import { useSelector } from 'react-redux';

const AddOnsInfo = ({info} : {info: IAddOns}) => {

    const period = useSelector(({data}: {data: IData}) => data.plan.period);

    return (
        <Flex justify={'space-between'} align={'center'} gap={10} wrap={'wrap'}>
            <Box miw={'100px'} style={{flex: 1}} ml={'10px'}>
                <Text fw={700} fz={'1.2rem'}>{info.title}</Text>
                <Text fw={400} fz={'1rem'} c={'var(--Cool-gray)'}>{info.description}</Text>
            </Box>
            <Text mr={'10px'} pr={'20px'} fw={400} fz={'1.1rem'} c={'var(--Purplish-blue'}>+${period === 'Monthly' ? `${info.price}/mo` : `${info.price*10}/yr`}</Text>
        </Flex>
    )
}

export default AddOnsInfo
