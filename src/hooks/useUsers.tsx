import { useEffect, useRef, useState } from "react"
import { User } from "../interfaces/reqres.response";
import { loadUserAction } from "../actions/load-user.action";

export const useUsers = () => {

const [users , setUsers] = useState<User[]>([]);

const currentPage  = useRef(1);

    useEffect(() => {
      loadUserAction(2).then(  setUsers );
    }, []);

    const nextPage = async() => {
        const page = currentPage.current ++;
        const newUsers = await loadUserAction(page);
        if (currentPage.current > 0  ) {
            setUsers(newUsers);
        }else{
            currentPage.current --
        }

    }

    const prevPage = async() => {
        if (currentPage.current < 1 ) return;
        const page =  currentPage.current --;
        const newUsers = await loadUserAction(page);
        setUsers(newUsers);
    }
    


  return {
    users,
    nextPage,
    prevPage
  }
}
