import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Users = () => {
    const axiosSecure = useAxiosSecure();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosSecure.get('/users')
            .then(res => {
                setUsers(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [axiosSecure]);

    const handleToggleRole = (userId, currentRole) => {
        const newRole = currentRole === "guest" ? "admin" : "guest";
        axiosSecure.patch(`/users/${userId}`, { role: newRole })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success(`Role updated to ${newRole} successfully`);
                    setUsers(users.map(user =>
                        user._id === userId ? { ...user, role: newRole } : user
                    ));
                } else {
                    toast.error("Failed to update role");
                }
            })
            .catch(err => {
                console.error(err);
                toast.error("Error updating role");
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4">
            <Helmet>
                <title>Users | DocHouse</title>
            </Helmet>
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            {users.length === 0 ? (
                <div>No users found.</div>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.email} className="mb-4">
                            <div className="p-4 bg-white rounded shadow flex items-center">
                                <img
                                    src={user.photo}
                                    alt={user.name}
                                    className="w-16 h-16 rounded-full mr-4"
                                />
                                <div className="flex-1">
                                    <p><strong>Name:</strong> {user.name}</p>
                                    <p><strong>Email:</strong> {user.email}</p>
                                    <p><strong>Role:</strong> {user.role}</p>
                                    <p><strong>Status:</strong> {user.status}</p>
                                </div>
                                <button
                                    onClick={() => handleToggleRole(user._id, user.role)}
                                    className={`px-4 py-2 text-white rounded shadow ml-4 ${user.role === "guest" ? "bg-green-500" : "bg-red-500"}`}
                                >
                                    {user.role === "guest" ? "Make Admin" : "Make Guest"}
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Users;
