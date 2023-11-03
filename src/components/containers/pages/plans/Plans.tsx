import { Box } from "@mantine/core";
import PlansSwitch from "@/components/containers/pages/plans/PlansSwitch";
import { FC, useState } from "react";
import PlansCards from "./PlansCards";
import { IPageProps } from "../info/Info";

const Plans: FC<IPageProps> = ({fullData}) => {

    const [isMonthly, setMonthly] = useState(fullData.plan.period === 'Monthly');

    return (
        <>
            <PlansCards fullData={fullData} isMonthly={isMonthly} />
            <Box mt={20}>
                <PlansSwitch isMonthly={isMonthly} setMonthly={setMonthly} />
            </Box>
        </>
    )
}

export default Plans
