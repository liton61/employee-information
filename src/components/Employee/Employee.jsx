

const Employee = () => {
    return (
        <div className="my-10">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                <div className="card shadow-md rounded">
                    <div className="card-body items-center text-center">
                        <i className="fa-solid fa-users text-2xl text-yellow-600"></i>
                        <h2 className="font-bold">Total Employee</h2>
                        <h5 className="font-bold">5</h5>
                    </div>
                </div>
                <div className="card shadow-md rounded">
                    <div className="card-body items-center text-center">
                        <i className="fa-solid fa-briefcase text-2xl text-blue-600"></i>
                        <h2 className="font-bold">Total Task</h2>
                        <h5 className="font-bold">10</h5>
                    </div>
                </div>
                <div className="card shadow-md rounded">
                    <div className="card-body items-center text-center">
                        <i className="fa-solid fa-check-to-slot text-2xl text-green-600"></i>
                        <h2 className="font-bold">Completed Task</h2>
                        <h5 className="font-bold">7</h5>
                    </div>
                </div>
                <div className="card shadow-md rounded">
                    <div className="card-body items-center text-center">
                        <i className="fa-solid fa-circle-xmark text-2xl text-red-600"></i>
                        <h2 className="font-bold">Incomplete Task</h2>
                        <h5 className="font-bold">3</h5>
                    </div>
                </div>
                <div className="card shadow-md rounded">
                    <div className="card-body items-center text-center">
                        <h2 className="font-bold">Task Progress</h2>
                        <div className="radial-progress text-primary" style={{ "--value": 70 }} role="progressbar">70%</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Employee;