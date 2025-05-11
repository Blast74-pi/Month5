import {Card} from "antd";
import "antd/dist/reset.css";

const users = [
    {name: "Бексултан", age: 30, city: "Бишкек", active: true},
    {name: "Саша", age: 25, city: "Бишкек", active: false},
    {name: "Адильхан", age: 40, city: "Бишкек", active: true},
];

const UserCard = ({user}) => {
    return (<Card title={user.name} style={{width: 300, margin: "16px auto", backgroundColor: "#f0f2f5"}}><p>
        <strong>Возраст:</strong> {user.age}</p> <p><strong>Город:</strong> {user.city}</p></Card>);
};

const UserList = () => {
    return (<div style={{padding: 24}}> {users.filter(user => user.active).map((user, index) => (
        <UserCard key={index} user={user}/>))} </div>);
};

export default UserList;