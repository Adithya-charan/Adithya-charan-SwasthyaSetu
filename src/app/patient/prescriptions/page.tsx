'use client';
import { useState } from 'react';
import { Pill, AlertCircle, Clock, CheckCircle, Search, Filter, Download, MoreVertical, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function PrescriptionsPage() {
    const [filter, setFilter] = useState('All');

    const stats = [
        { label: 'Active', value: '4', sub: 'Medications', icon: Pill, color: 'bg-blue-50 text-blue-600' },
        { label: 'Refills Pending', value: '1', sub: 'Awaiting Approval', icon: Clock, color: 'bg-orange-50 text-orange-600' },
        { label: 'Fulfilled (YTD)', value: '12', sub: 'Total this year', icon: CheckCircle, color: 'bg-green-50 text-green-600' },
        { label: 'Expired', value: '2', sub: 'Inactive', icon: AlertCircle, color: 'bg-slate-50 text-slate-600' },
    ];

    const prescriptions = [
        { name: 'Amoxicillin', dose: '500mg • 3x daily • 10 days', doctor: 'Dr. Sarah Smith', date: 'Oct 24, 2023', status: 'Active', statusColor: 'bg-blue-100 text-blue-700' },
        { name: 'Lisinopril', dose: '10mg • 1x daily • 30 days', doctor: 'Dr. James Wilson', date: 'Sep 15, 2023', status: 'Fulfilled', statusColor: 'bg-green-100 text-green-700' },
        { name: 'Ibuprofen', dose: '800mg • As needed', doctor: 'Dr. Sarah Smith', date: 'Jun 10, 2023', status: 'Expired', statusColor: 'bg-slate-100 text-slate-600' },
        { name: 'Metformin', dose: '500mg • 2x daily', doctor: 'Dr. James Wilson', date: 'Oct 28, 2023', status: 'Refill Pending', statusColor: 'bg-orange-100 text-orange-700' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Prescription History</h1>
                    <p className="text-slate-500">View, track, and manage all your medications in one place.</p>
                </div>
                <Button variant="outline" className="gap-2">
                    <Download className="w-4 h-4" /> Download History
                </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${stat.color}`}>
                            <stat.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                            <h3 className="text-3xl font-bold text-slate-900 font-manrope">{stat.value}</h3>
                            <p className="text-xs text-slate-400">{stat.sub}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Table Section */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                {/* Filters */}
                <div className="p-4 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex gap-1 bg-slate-50 p-1 rounded-lg">
                        {['All Prescriptions', 'Active Only', 'Fulfilled', 'Expired'].map(t => (
                            <button
                                key={t}
                                onClick={() => setFilter(t)}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${filter === t ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>

                    <div className="flex gap-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search medications..."
                                className="pl-9 pr-4 py-2 rounded-lg border border-slate-200 text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <Button variant="outline" className="gap-2 px-3">
                            <Filter className="w-4 h-4" /> Filter
                        </Button>
                    </div>
                </div>

                {/* Prescription Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 text-xs uppercase text-slate-500 font-semibold border-b border-slate-200">
                            <tr>
                                <th className="p-5">Medication & Dosage</th>
                                <th className="p-5">Prescribing Doctor</th>
                                <th className="p-5">Date Issued</th>
                                <th className="p-5">Status</th>
                                <th className="p-5">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {prescriptions.map((med, i) => (
                                <tr key={i} className="hover:bg-slate-50 transition-colors">
                                    <td className="p-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                                <Pill className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900">{med.name}</h4>
                                                <p className="text-sm text-slate-500">{med.dose}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-5">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?img=${i + 30}`} alt="Doc" />
                                            </div>
                                            <span className="text-sm font-medium text-slate-700">{med.doctor}</span>
                                        </div>
                                    </td>
                                    <td className="p-5 text-sm text-slate-500">{med.date}</td>
                                    <td className="p-5">
                                        <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold items-center gap-1.5 ${med.statusColor}`}>
                                            <div className={`w-1.5 h-1.5 rounded-full bg-current`}></div>
                                            {med.status}
                                        </span>
                                    </td>
                                    <td className="p-5">
                                        <div className="flex items-center gap-2">
                                            {med.status === 'Active' && <Button size="sm">Send to Pharmacy</Button>}
                                            {med.status === 'Fulfilled' && <Button size="sm" variant="outline">Request Refill</Button>}
                                            {med.status === 'Expired' && <Button size="sm" variant="ghost" className="text-slate-500">Request New</Button>}
                                            {med.status === 'Refill Pending' && <Button size="sm" variant="outline" disabled className="bg-slate-50">Awaiting Doc</Button>}

                                            <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100">
                                                <MoreVertical className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500">
                    <p>Showing <strong>1-4</strong> of <strong>19</strong> prescriptions</p>
                    <div className="flex gap-1">
                        <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50 disabled:opacity-50">{'<'}</button>
                        <button className="w-8 h-8 rounded bg-primary-500 text-white flex items-center justify-center">1</button>
                        <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50">2</button>
                        <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50">3</button>
                        <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50 disabled:opacity-50">{'>'}</button>
                    </div>
                </div>
            </div>

            {/* Need Help Card */}
            <div className="fixed bottom-6 left-6 w-64 md:hidden">
                {/* Mobile floating action button could go here */}
            </div>
        </div>
    );
}
