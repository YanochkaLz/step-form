import AddOns from "@/components/containers/pages/add-ons/AddOns";
import Finish from "@/components/containers/pages/finish/Finish";
import Info, { IPageProps } from "@/components/containers/pages/info/Info";
import Plans from "@/components/containers/pages/plans/Plans";

export interface IPage {
    title: string,
    description: string,
    Component: React.ComponentType<IPageProps>,
    number: number,
}

export const pages: ReadonlyArray<IPage> = [
   {
    title: 'Personal info',
    description: 'Please provide your name, email address, and phone number.',
    Component: Info,
    number: 0
   },
   {
    title: 'Select your plan',
    description: 'You have the option of monthly or yearly billing.',
    Component: Plans,
    number: 1
   },
   {
    title: 'Pick add-ons',
    description: 'Add-ons help enhance your gaming experience.',
    Component: AddOns,
    number: 2
   },
   {
    title: 'Finishing up',
    description: 'Double-check everything looks OK before confirming.',
    Component: Finish,
    number: 3
   }
]