import PlanCard from '@/components/ui/PlanCard/PlanCard';
import { plans } from '@/constants/plans';
import { setPlan } from '@/store/dataReducer';
import { Box } from '@mantine/core';
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IPageProps } from '../info/Info';


const PlansCards: FC<IPageProps & {isMonthly: boolean}> = ({ isMonthly, fullData }) => {

    const [selected, setSelected] = useState(fullData.plan.id);
    const dispatch = useDispatch()


    const handleChangePlan = (id: number) => {
        if (id < plans.length) {
            setSelected(id);
        }
    }

    useEffect(() => {
        dispatch(setPlan({id: selected, period: isMonthly ? 'Monthly': 'Yearly'}));
    }, [isMonthly, selected])

    return (
        <Box style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            {plans?.map((plan, index) =>
                <PlanCard isMonthly={isMonthly} selected={index === selected} onClick={handleChangePlan} plan={plan} key={plan.title} />
            )}
        </Box>
    )
}

export default PlansCards
