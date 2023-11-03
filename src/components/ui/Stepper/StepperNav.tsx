import { Stepper, rem } from "@mantine/core";
import { FC } from "react";

interface IStepperNax {
  active: number,
  windowWidth: number
}

const StepperNav: FC<IStepperNax> = ({ active, windowWidth }) => {

  const stepBodyStyle = {
    color: 'var(--White)',
    textTransform: 'uppercase' as 'uppercase',
    display: windowWidth <= 985 ? 'none' : 'flex',
  };

  return (
    <Stepper
      styles={{
        stepBody: stepBodyStyle,
        stepLabel: {
          fontWeight: 300,
          fontSize: '.8rem',
          opacity: .8
        },
        stepDescription: {
          fontWeight: 600,
          color: 'var(--White)'
        },
        verticalSeparator: {
          height: rem(0),
        },
        separator: {
          height: rem(0),
        },
        stepIcon: {
          border: '1px solid var(--White)',
          color: 'var(--White)',
          backgroundColor: 'transparent'
        },
        step: {
          minHeight: '4rem'
        }
      }} iconSize={35} active={active} orientation={windowWidth <= 985 ? 'horizontal' : 'vertical'}>
      <Stepper.Step label="Step 1" description="Your info" />
      <Stepper.Step label="Step 2" description="Select plan" />
      <Stepper.Step label="Step 3" description="Add-ons" />
      <Stepper.Step label="Step 4" description="Summary" />
    </Stepper>
  )
}

export default StepperNav
