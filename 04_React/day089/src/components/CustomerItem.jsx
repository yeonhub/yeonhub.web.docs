import { Link } from "react-router-dom";

const CustomerItem = ({ item }) => {
    const { id, title, name, date } = item
    return (
        <tr>
            <td> {id}</td>
            <td><Link to={`/customer/${id}`}> {title}</Link> </td>
            <td> {name}</td>
            <td> {date}</td>
        </tr>
    );
};

export default CustomerItem;