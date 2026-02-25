'use client';

import { useState, useEffect } from 'react';
import { Users, UserPlus, AlertCircle, TrendingUp, CheckCircle, XCircle, Search, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import io from 'socket.io-client';

interface LoginActivity {
    id: string;
    name: string;
    role: string;
    timestamp: string;
    socketId: string;
    image?: string;
}

export default function AdminDashboard() {
    const [activities, setActivities] = useState<LoginActivity[]>([]);

    useEffect(() => {
        const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:5000');

        socket.on('new_login', (data: LoginActivity) => {
            setActivities(prev => [data, ...prev].slice(0, 10)); // Keep last 10
        });

        // Cleanup
        return () => {
            socket.disconnect();
        };
    }, []);

    const formatDateTime = (isoString: string) => {
        const date = new Date(isoString);
        return {
            date: date.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }),
            time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        };
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Admin Control Center</h1>
                    <p className="text-slate-500">Platform Overview & Management</p>
                </div>
                <Button variant="secondary" className="gap-2">
                    <TrendingUp className="w-4 h-4" /> Generate Report
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
                    <div>
                        <p className="text-slate-500 text-sm">Total Users</p>
                        <h3 className="text-2xl font-bold text-slate-900">25,402</h3>
                    </div>
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                        <Users className="w-6 h-6" />
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
                    <div>
                        <p className="text-slate-500 text-sm">New Doctors</p>
                        <h3 className="text-2xl font-bold text-slate-900">12</h3>
                    </div>
                    <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                        <UserPlus className="w-6 h-6" />
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
                    <div>
                        <p className="text-slate-500 text-sm">Active Sessions</p>
                        <h3 className="text-2xl font-bold text-green-600">{activities.length > 0 ? activities.length + 342 : 342}</h3>
                    </div>
                    <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                        <TrendingUp className="w-6 h-6" />
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
                    <div>
                        <p className="text-slate-500 text-sm">Reports</p>
                        <h3 className="text-2xl font-bold text-red-500">5</h3>
                    </div>
                    <div className="p-3 bg-red-50 text-red-600 rounded-lg">
                        <AlertCircle className="w-6 h-6" />
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">

                {/* Real-time Login Feed */}
                <div className="md:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="p-4 border-b border-slate-100 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <h3 className="font-bold text-lg">Real-Time Login Activity</h3>
                        </div>
                        <div className="text-xs text-slate-500 font-medium">Live Stream</div>
                    </div>
                    <div className="divide-y divide-slate-100 max-h-[400px] overflow-y-auto">
                        {activities.length === 0 ? (
                            <div className="p-8 text-center text-slate-500 italic">
                                No recent login activity detected.
                            </div>
                        ) : (
                            activities.map((activity, index) => {
                                const dt = formatDateTime(activity.timestamp);
                                return (
                                    <div key={index} className="px-6 py-4 hover:bg-slate-50 transition-colors animate-in slide-in-from-top-2 border-l-4 border-transparent hover:border-primary-500">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-full border-2 border-slate-100 overflow-hidden shadow-sm">
                                                    <img src={activity.image || `https://i.pravatar.cc/150?u=${activity.id}`} alt={activity.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900">{activity.name}</p>
                                                    <div className="flex items-center gap-2">
                                                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${activity.role === 'admin' ? 'bg-red-100 text-red-700' :
                                                            activity.role === 'doctor' ? 'bg-purple-100 text-purple-700' :
                                                                activity.role === 'pharmacist' ? 'bg-orange-100 text-orange-700' :
                                                                    'bg-blue-100 text-blue-700'
                                                            }`}>
                                                            {activity.role}
                                                        </span>
                                                        <span className="text-[10px] text-slate-400">• New Session</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="flex items-center gap-1.5 text-slate-900 font-semibold text-sm">
                                                    <Clock className="w-3.5 h-3.5 text-primary-500" />
                                                    {dt.time}
                                                </div>
                                                <div className="text-[11px] text-slate-400 font-medium">
                                                    {dt.date}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>

                {/* Doctor Approvals */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-100">
                    <div className="p-4 border-b border-slate-100">
                        <h3 className="font-bold text-lg">Pending Approvals</h3>
                    </div>
                    <div className="divide-y divide-slate-100">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="p-4 space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-600">DR</div>
                                    <div>
                                        <p className="font-bold text-slate-900">Dr. Emily Stone</p>
                                        <p className="text-xs text-slate-500">Neurologist • License: #88291</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button size="sm" isFullWidth className="bg-green-500 hover:bg-green-600 gap-1 h-8 text-xs">
                                        <CheckCircle className="w-3 h-3" /> Approve
                                    </Button>
                                    <Button size="sm" variant="danger" isFullWidth className="gap-1 h-8 text-xs">
                                        <XCircle className="w-3 h-3" /> Reject
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
