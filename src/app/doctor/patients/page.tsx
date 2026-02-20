'use client';

import { Search, Filter, MoreVertical, FileText, Activity } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function DoctorPatients() {
    const patients = [
        {
            id: 1,
            name: 'Michael Brown',
            age: 45,
            gender: 'Male',
            condition: 'Hypertension',
            lastVisit: 'Oct 24, 2023',
            status: 'Active',
            image: 'https://i.pravatar.cc/150?img=12'
        },
        {
            id: 2,
            name: 'Sarah Wilson',
            age: 28,
            gender: 'Female',
            condition: 'Migraine',
            lastVisit: 'Oct 20, 2023',
            status: 'Follow-up',
            image: 'https://i.pravatar.cc/150?img=5'
        },
        {
            id: 3,
            name: 'James Miller',
            age: 62,
            gender: 'Male',
            condition: 'Type 2 Diabetes',
            lastVisit: 'Sep 15, 2023',
            status: 'Chronic',
            image: 'https://i.pravatar.cc/150?img=8'
        },
        {
            id: 4,
            name: 'Emily Davis',
            age: 34,
            gender: 'Female',
            condition: 'Pregnancy',
            lastVisit: 'Oct 25, 2023',
            status: 'Active',
            image: 'https://i.pravatar.cc/150?img=9'
        },
        {
            id: 5,
            name: 'Robert Taylor',
            age: 55,
            gender: 'Male',
            condition: 'Cardiac Arrhythmia',
            lastVisit: 'Oct 01, 2023',
            status: 'Critical',
            image: 'https://i.pravatar.cc/150?img=3'
        }
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">My Patients</h1>
                    <p className="text-slate-500">View and manage patient records and history.</p>
                </div>
                <Button> <Activity className="w-4 h-4 mr-2" /> Add New Patient</Button>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search by name, ID or condition..."
                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                </div>
                <Button variant="outline"> <Filter className="w-4 h-4 mr-2" /> Filter</Button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-slate-500 font-medium">
                        <tr>
                            <th className="px-6 py-4">Patient Name</th>
                            <th className="px-6 py-4">Age / Gender</th>
                            <th className="px-6 py-4">Condition</th>
                            <th className="px-6 py-4">Last Visit</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {patients.map((patient) => (
                            <tr key={patient.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                                            <img src={patient.image} alt={patient.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-slate-900">{patient.name}</div>
                                            <div className="text-xs text-slate-500">ID: #{1000 + patient.id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-slate-600">{patient.age} yrs, {patient.gender}</td>
                                <td className="px-6 py-4 text-slate-900 font-medium">{patient.condition}</td>
                                <td className="px-6 py-4 text-slate-500">{patient.lastVisit}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${patient.status === 'Active' ? 'bg-green-50 text-green-700' :
                                            patient.status === 'Critical' ? 'bg-red-50 text-red-700' :
                                                patient.status === 'Chronic' ? 'bg-purple-50 text-purple-700' : 'bg-blue-50 text-blue-700'
                                        }`}>
                                        {patient.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-primary-600">
                                            <FileText className="w-4 h-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600">
                                            <MoreVertical className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
