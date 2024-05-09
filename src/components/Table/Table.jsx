


const Table = () => {
    const employees = [
        { id: 1, employeeId: 101, image: "https://i.ibb.co/nMvqYzn/Liton-2.jpg", name: 'Liton Mia', position: 'Software Engineer', salary: 400, phone: '01738751356', email: "litonmia2k1@gmail.com", joiningDate: '2023-01-15', location: 'New York' },
        { id: 2, employeeId: 102, image: "https://i.ibb.co/nCTxbwd/Fj-U2lkc-WYAg-NG6d.jpg", name: 'Jane Smith', position: 'Fronted Developer', salary: 300, phone: '01738751356', email: "janesmith@example.com", joiningDate: '2022-11-05', location: 'Los Angeles' },
        { id: 3, employeeId: 103, image: "https://i.ibb.co/4KvYBbp/profilepicture-2-portrait-head.jpg", name: 'John Doe', position: 'Backend Developer', salary: 350, phone: '01738751356', email: "johndoe@example.com", joiningDate: '2023-03-20', location: 'Chicago' },
        { id: 4, employeeId: 104, image: "https://i.ibb.co/chBDNRK/girl.jpg", name: 'Hart Hagerty', position: 'Full Stack Developer', salary: 400, phone: '01738751356', email: "harth@example.com", joiningDate: '2023-06-10', location: 'Houston' },
        { id: 5, employeeId: 105, image: "https://i.ibb.co/0QGCNFt/profilepicture-3-smile-head.jpg", name: 'Michael Johnson', position: 'MERN Stack Developer', salary: 370, phone: '01738751356', email: "michaelj@example.com", joiningDate: '2022-09-28', location: 'Phoenix' }
    ]
    return (
        <div>
            <div className="overflow-x-auto mb-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-blue-200 text-center">
                            <th>ID</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Salary</th>
                            <th>Joining</th>
                            <th>Location</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.employeeId}</td>
                                <td><img className="w-9 h-9 rounded-full" src={employee.image} alt="" /></td>
                                <td className="text-center">{employee.name}</td>
                                <td className="text-center">{employee.phone}</td>
                                <td className="text-center">{employee.email}</td>
                                <td className="text-center">{employee.position}</td>
                                <td className="text-center">${employee.salary} <button>Pay</button></td>
                                <td className="text-center">{employee.joiningDate}</td>
                                <td className="text-center">{employee.location}</td>
                                <td>
                                    <button className="text-xl text-green-600 mr-5"><i className="fa-solid fa-pen-to-square"></i></button>
                                    <button className="text-xl text-red-600"><i className="fa-solid fa-trash-can"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;