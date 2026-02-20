'use client';
import { Search, Filter, CheckCircle, Clock, Truck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function PharmacistDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-slate-900">Pharmacy Overview</h1>
                <div className="flex gap-2">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input type="text" placeholder="Search Order ID..." className="pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                    </div>
                    <Button variant="outline"><Filter className="w-4 h-4" /></Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-yellow-50 border border-yellow-100 p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                        <Clock className="w-5 h-5 text-yellow-600" />
                        <h3 className="font-bold text-yellow-800">Pending</h3>
                    </div>
                    <p className="text-3xl font-bold text-yellow-900">12</p>
                </div>
                <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                        <Truck className="w-5 h-5 text-blue-600" />
                        <h3 className="font-bold text-blue-800">Processing</h3>
                    </div>
                    <p className="text-3xl font-bold text-blue-900">5</p>
                </div>
                <div className="bg-green-50 border border-green-100 p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <h3 className="font-bold text-green-800">Ready</h3>
                    </div>
                    <p className="text-3xl font-bold text-green-900">28</p>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="p-4 font-semibold text-slate-600">Order ID</th>
                            <th className="p-4 font-semibold text-slate-600">Patient</th>
                            <th className="p-4 font-semibold text-slate-600">Medications</th>
                            <th className="p-4 font-semibold text-slate-600">Date</th>
                            <th className="p-4 font-semibold text-slate-600">Status</th>
                            <th className="p-4 font-semibold text-slate-600">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <tr key={i} className="hover:bg-slate-50">
                                <td className="p-4 font-mono text-sm">#ORD-2024-{i}</td>
                                <td className="p-4 font-medium">John Doe</td>
                                <td className="p-4 text-slate-500">Amoxicillin, Panadol...</td>
                                <td className="p-4 text-slate-500">Mar 12</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${i % 2 === 0 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {i % 2 === 0 ? 'Ready' : 'Pending'}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <Button size="sm" variant="ghost" className="text-primary-600 hover:text-primary-700">Update</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
