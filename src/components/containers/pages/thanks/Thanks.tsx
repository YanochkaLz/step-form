import { Stack, Image, Text } from '@mantine/core';
import React, { FC } from 'react';

const Thanks: FC = () => {
    return (
        <Stack p={20} h={'100%'} align='center' justify='center'>
            <Image
                w={'100px'}
                src="/icon-thank-you.svg"
            />
            <Text fw={700} fz={'2rem'}>Thank you!</Text>
            <Text style={{textAlign: 'center'}} w={'80%'} fw={400} fz={'1.1rem'} c={'var(--Cool-gray)'}>
                Thanks for confirming your subscription! We hope you have fun using our platform.
                If you ever need support, please feel free to email us at support@loreamgaming.com.
            </Text>
        </Stack>
    )
}

export default Thanks
