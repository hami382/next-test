'use client';

import NavBar1 from './components/NavBar1';
import NavBar2 from './components/NavBar2';
import SideBar from './components/SideBar';

export default function Dashboard() {
    return (
        <div className="flex">
            {/* Sidebar */}
            <SideBar/>

            <div className="flex-1">
                {/* Main content */}
                <NavBar1/>
                <NavBar2/>
                <div className="p-8">
                    <h1 className="text-2xl font-bold">Main Content</h1>
                </div>
            </div>
        </div>
    );
}
