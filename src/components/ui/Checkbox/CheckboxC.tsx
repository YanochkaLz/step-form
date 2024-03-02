import { Checkbox } from "@mantine/core";
import { FC } from "react";

interface ICheckbox {
    value: string,
    label: any,
    checked: boolean
}

const CheckboxC: FC<ICheckbox> = ({ value, label, checked = false}) => {
    const backgroundColor = checked ? 'var(--Magnolia)' : 'transparent';
    
    return <Checkbox w={'100%'} styles={{
        label: {
            width: '100%',
            padding: '20px',
            cursor: 'pointer'
        },
        labelWrapper: {
            width: '100%',
            cursor: 'pointer'
        },
        body: {
            alignItems: 'center',
            cursor: 'pointer',
            border: '1px solid var(--Purplish-blue)',
            borderRadius: 'var(--border-radius)',
            backgroundColor 
        },
        inner: {
            marginLeft: '30px',
            cursor: 'pointer',
            
        },
        input: {
            cursor: 'pointer'
        }
    }} value={value} label={label} checked={checked}/>
}

export default CheckboxC
