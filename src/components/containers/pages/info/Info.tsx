import { useError } from "@/components/providers/ErrorProvider";
import CustomInput from "@/components/ui/Input/CustomInput";
import { IData, setInfoData } from "@/store/dataReducer";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export interface InterfaceInfo {
    name: string,
    email: string,
    phone: string
}

export interface IPageProps {
    fullData: IData
}

const Info: FC<IPageProps> = ({fullData}) => {
    const [info, setInfo] = useState<InterfaceInfo>({
        ...fullData.info
    })

    
    const {setError } = useError();
    const dispatch = useDispatch();
    
    const [errorName, setErrorName] = useState<null | boolean>(false);
    const [errorEmail, setErrorEmail] = useState<null | boolean>(false);
    const [errorPhone, setErrorPhone] = useState<null | boolean>(false);
    
    
    const handleChange = (value: string, name: string) => {
        switch (name) {
            case 'name':
                if (value.length < 2) {
                    setErrorName(true)
                } else {
                    setErrorName(false)
                }
                break;
            case 'email':
                const emailRegex = /^\S+@\S+\.\S+$/;
                if (value.match(emailRegex)) {
                    setErrorEmail(false);
                } else {
                    setErrorEmail(true);
                }
                break;
            case 'phone':
                const phoneRegex = /^\+\d{11}$/;
                if (value.match(phoneRegex)) {
                    setErrorPhone(false);
                } else {
                    setErrorPhone(true);
                }
                break;
            default:
                return;
        }
        setInfo((prev: InterfaceInfo) => ({ ...prev, [name]: value }));
    }

    useEffect(() => {
        if(!info.email?.length || !info.name?.length || !info.phone?.length) {
            return;
        }
        if(errorName === false && errorEmail === false && errorPhone === false) {
            setError(false);
            dispatch(setInfoData(info));
        } else {
            setError(true);
        }
    }, [errorName, errorEmail, errorPhone]);

    return (
        <>
            <CustomInput value={info.name} error={errorName} handleChange={handleChange} name={'name'} placeholder="e.g. Stephen King" label="Name" />
            <CustomInput value={info.email} error={errorEmail} handleChange={handleChange} name={'email'} placeholder="e.g. stephenking@lorem.com" label="Email Address" />
            <CustomInput value={info.phone} error={errorPhone} handleChange={handleChange} name={'phone'} placeholder="e.g. +1 234 567 890" label="Phone Number" />
        </>
    )
}

export default Info
