import { useUsers } from "../hooks/useUsers"
import { UserContent } from "./UserRow"


export const UserPage = () => {

    const {users,nextPage,prevPage} = useUsers();
    console.log(users);
    

  return (
    <>
    <table className="bg-black text-white rounded-lg w-[500px]">
        <thead className="p-2">
            <tr>
                <th>Avatar</th>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {users.map( user => (

                <UserContent key={user.id} user={user}  />
                
             ))}

           
        </tbody>
    </table>

    <div className="flex justify-between w-[500px] mt-2">
        <button
        onClick={ nextPage } 
        className="p-2 bg-blue-600 text-white rounded-lg">
            Anterior
        </button>
        <button
        onClick={ prevPage } 
        className="p-2 bg-blue-600 text-white rounded-lg">
            Siguiente
        </button>
    </div>

    </>
  )
}
