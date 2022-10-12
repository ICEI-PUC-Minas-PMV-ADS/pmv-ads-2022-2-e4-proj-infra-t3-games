import { useEffect, useState } from "react";
import { ApiException } from "../../shared/services/ApiException";
import { IUser, UsersService } from "../../shared/services/users/UsersService";
import { useAuthContext } from "../../shared/contexts/AuthContext";
import { Link } from "react-router-dom";



export const Dashboard = () => {
    const [lista, setLista] = useState<IUser[]>([]);
    const { isAuthenticated } = useAuthContext();

    // useEffect(() => {
    //     if (isAuthenticated) {
    //         UsersService.getAll().then((res) => {
    //             if (res instanceof ApiException) {
    //                 console.log(res.message);
    //             } else {
    //                 setLista(res);
    //             }
    //         })
    //     }
    // })

    return (
        <div>
            <Link to='/home'>home</Link>
            <h1>Lista de users from database</h1>

            <ul>
                {lista.map((item) => {
                    return <li key={item.id}> {item.Email}  </li>
                })}
            </ul>
        </div>
    );
};