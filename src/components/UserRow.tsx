import { User } from "../interfaces/reqres.response"
interface Props {
    user: User;
}

export const UserContent = ({user}:Props) => {

    return (
        <>
            <tr className="p-2">
                <th>
                    <img className="w-14 rounded-full" src={user.avatar} alt="User Avatar" />
                </th>
                <th>{user.first_name} {user.last_name}</th>
                <th>{user.email}</th>
            </tr>
        </>
    )
}
