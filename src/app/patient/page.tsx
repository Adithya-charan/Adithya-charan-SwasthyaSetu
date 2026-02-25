'use client';
import { Calendar, FileText, ArrowUpRight, Video } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function PatientDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Hello, Sarah! 👋</h1>
                    <p className="text-slate-500">Here's your health overview for today.</p>
                </div>
                <Button href="/patient/appointments" className="gap-2">
                    <Calendar className="w-4 h-4" /> Book Appointment
                </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Upcoming</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Dr. Smith</h3>
                    <p className="text-slate-500 text-sm mb-4">Cardiologist • Today, 2:00 PM</p>
                    <Button size="sm" variant="outline" className="w-full gap-2" href="/video-consultation">
                        <Video className="w-4 h-4" /> Join Call
                    </Button>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                            <FileText className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-semibold bg-purple-100 text-purple-700 px-2 py-1 rounded-full">New</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Lab Results</h3>
                    <p className="text-slate-500 text-sm mb-4">Blood Work • Mar 12, 2024</p>
                    <Button size="sm" variant="ghost" className="w-full gap-2 text-primary-600 hover:text-primary-700 hover:bg-primary-50" href="/patient/records">
                        View Report <ArrowUpRight className="w-4 h-4" />
                    </Button>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full">Active</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Prescriptions</h3>
                    <p className="text-slate-500 text-sm mb-4">2 Active Medications</p>
                    <Button size="sm" variant="ghost" className="w-full gap-2 text-primary-600 hover:text-primary-700 hover:bg-primary-50" href="/patient/prescriptions">
                        Manage <ArrowUpRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Appointment List Section */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                    <h2 className="font-bold text-lg text-slate-900">Recent Appointments</h2>
                    <Button variant="ghost" size="sm" className="text-primary-600" href="/patient/appointments">View All</Button>
                </div>
                <div className="divide-y divide-slate-100">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-6 flex items-center gap-4 hover:bg-slate-50 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-slate-200 flex-shrink-0">
                                <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Doctor" className="w-full h-full rounded-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text-slate-900">Dr. Sarah Smith</h4>
                                <p className="text-sm text-slate-500">General Checkup • Mar 10, 2024</p>
                            </div>
                            <div className="text-right">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    Completed
                                </span>
                                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-primary-600 block mt-1">Rebook</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
