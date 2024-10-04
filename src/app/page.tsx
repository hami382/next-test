'use client';

import Header from './components/Header';
import ProfileBar from './components/ProfileBar';
import SideBar from './components/SideBar';

export default function Dashboard() {
    return (
        <div className="flex">
            <SideBar/>

            <div className="flex-1">
                <Header/>
                <ProfileBar/>
                <div className="p-8">
                    <h1 className="text-2xl font-bold">Main Content</h1>
                </div>
            </div>
        </div>
    );
}
