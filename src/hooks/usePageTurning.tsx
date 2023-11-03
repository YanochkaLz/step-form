import { useError } from "@/components/providers/ErrorProvider";
import { useState } from "react";

export function usePageTurning() {
    const [active, setActive] = useState<number>(0);
    const {error} = useError();

    const handleChangePage = (dir: string) => {
        if(error) {
            return;
        }
        let page;
        if (dir === 'next') {
            page = active + 1;
            if (page < 5) {
                setActive(page);
            } 
        } else if (dir === 'back') {
            page = active - 1;
            if (page >= 0) {
                setActive(page);
            }
        }
    }

    return { active, handleChangePage }
}
