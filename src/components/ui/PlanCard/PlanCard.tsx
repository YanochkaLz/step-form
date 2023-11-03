import { ICard } from '@/constants/plans';
import { Card, Text } from '@mantine/core';
import Image from 'next/image';
import { FC } from 'react';

import styles from './card.module.scss';

interface IPlanCard {
    plan: ICard,
    onClick?: (id: number) => void,
    selected?: boolean,
    isMonthly: boolean
}

const PlanCard: FC<IPlanCard> = ({ plan, selected, onClick = () => { }, isMonthly }) => {
    return (
        <Card
            withBorder
            radius={'md'}
            onClick={() => onClick(plan.id)}
            className={styles.card}
            style={selected ? { backgroundColor: 'var(--Magnolia)', borderColor: 'var(--Purplish-blue)' } : {}}
        >
            <Image
                src={plan.img}
                height={50}
                width={50}
                alt="Icon"
            />
            <Text mt={'40px'} fw={500} c={'var(--Marine-blue)'} size="xl">
                {plan.title}
            </Text>
            <Text c="dimmed" size="md">
                {isMonthly ? `$${plan.price}/mo` : `$${plan.price * 10}/yr`}
            </Text>
            {!isMonthly &&
                <Text size='sm' mt={5} c={'var(--Marine-blue)'}>2 months free</Text>
            }
        </Card>
    )
}

export default PlanCard
