import CheckboxC from "@/components/ui/Checkbox/CheckboxC";
import { add_ons } from "@/constants/add-ons";
import { Checkbox, Flex } from "@mantine/core";
import { FC, useEffect, useState } from "react";
import AddOnsInfo from "./AddOnsInfo";
import { useDispatch } from "react-redux";
import { setOnsData } from "@/store/dataReducer";
import { IPageProps } from "../info/Info";

const AddOns: FC<IPageProps> = ({fullData}) => {
    const [ons, setOns] = useState<string[]>(fullData.addOns);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setOnsData(ons));
    }, [ons])


    return (
        <Checkbox.Group value={ons} onChange={setOns}>
            <Flex direction={'column'} gap={'lg'}>
                {add_ons?.map(elem =>
                    <CheckboxC key={elem.id} checked={ons.includes(elem.title)} value={elem.title} label={<AddOnsInfo info={elem} />} />
                )}
            </Flex>
        </Checkbox.Group>
    )
}

export default AddOns
