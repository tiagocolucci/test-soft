import React from "react";
import IUser from '../interfaces/IUser';

interface Props {
    user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
    return (
        <div>
            <p><strong>Nome:</strong> { user.name }</p>
            <p><strong>E-mail:</strong> { user.email }</p><br/>
        </div>
    );
};

export default User;