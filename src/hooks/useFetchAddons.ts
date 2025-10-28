import {  useEffect, useState } from "react";
import type { AddOn } from "../types/Item";
import { useModal } from "../modalContext";
import { getAddonsbyCategory } from "../feautures/Specials";


export default function useFetchAddons(addons: string[]) {

    const { setModalOpen } = useModal();
    const [fetchedAddons, setFetchedAddons] = useState<AddOn[]>([]);

    useEffect(() => {
        setModalOpen(true);
    
        const fetchAddons = async () => {
          const allAddons: AddOn[] = [];
          for (const category of addons) {
            const fetched = await getAddonsbyCategory(category);
            allAddons.push(...fetched);
          }
          setFetchedAddons(allAddons);
        };
    
        if (addons.length > 0) {
          fetchAddons();
        }
    
       
        console.log("Addons fetched:", addons);
      }, [addons, setModalOpen]);

      return fetchedAddons;
}