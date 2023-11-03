import CustomBlock from "@/components/ui/CustomBlock/CustomBlock";
import { Switch, Text } from "@mantine/core";
import { FC } from "react";

export interface IPlansSwitch {
  setMonthly: (c: boolean) => void,
  isMonthly: boolean,
}

const PlansSwitch: FC<IPlansSwitch> = ({ setMonthly, isMonthly }) => {

  return (
    <CustomBlock>
      <Text fw={500} c={!isMonthly ? 'var(--Cool-gray)' : 'var(--Marine-blue)'} size="lg">
        Monthly
      </Text>
      <Switch
        checked={!isMonthly}
        onChange={e => setMonthly(!e.currentTarget.checked)}
        styles={{
          track: {
            backgroundColor: 'var(--Marine-blue)',
            border: 'none'
          }
        }}
        size="md"
      />
      <Text fw={500} c={isMonthly ? 'var(--Cool-gray)' : 'var(--Marine-blue)'} size="lg">
        Yearly
      </Text>
    </CustomBlock>
  )
}

export default PlansSwitch
