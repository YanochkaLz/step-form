import { TextInput, TextInputProps } from '@mantine/core';
import React, { FC } from 'react';

import classes from './input.module.scss';

interface ICustomInput extends TextInputProps {
  handleChange: (value: string, name: string) => void,
  name: string
}

const CustomInput: FC<ICustomInput> = ({ error, handleChange, name, ...props }) => {

  return <TextInput
    error={error && 'This field is required'}
    onChange={(e) => handleChange(e.target.value, name)}
    classNames={classes}
    size='lg'
    radius='md'
    {...props}
  />
}

export default CustomInput
