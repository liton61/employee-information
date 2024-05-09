import { Outlet } from "react-router-dom";
import Table from "../Table/Table";
import Employee from "../Employee/Employee";


const Dashboard = () => {
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="lg:flex">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="mx-4 lg:hidden">
                            <h1 className="text-3xl font-bold text-center">Employee Information Management</h1>
                            <Employee></Employee>
                            <Table></Table>
                        </div>
                        <div className="flex-none hidden lg:block lg:w-64 bg-blue-200 min-h-screen">
                            <ul className="menu p-5 w-64 fixed">
                                {/* Navbar menu content here */}
                                <li><a><i className="fa-solid fa-house"></i>Admin Home</a></li>
                                <li><a><i className="fa-solid fa-user-plus"></i>Add Employee</a></li>
                                <li><a><i className="fa-solid fa-plus"></i>Add Task</a></li>
                                <div className="divider">OR</div>
                                <li><a><i className="fa-solid fa-arrow-left"></i>Back Home</a></li>
                            </ul>
                        </div>
                        <div className="lg:w-full">
                            <Outlet></Outlet>
                            <div className="hidden lg:block mx-5 mt-10">
                                <h1 className="text-3xl font-bold text-center">Employee Information Management</h1>
                                <Employee></Employee>
                                <Table></Table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-5 w-64 min-h-full bg-blue-200">
                        {/* Sidebar content here */}
                        <li><a><i className="fa-solid fa-house"></i>Admin Home</a></li>
                        <li><a><i className="fa-solid fa-user-plus"></i>Add Employee</a></li>
                        <li><a><i className="fa-solid fa-plus"></i>Add Task</a></li>
                        <div className="divider">OR</div>
                        <li><a><i className="fa-solid fa-arrow-left"></i>Back Home</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;