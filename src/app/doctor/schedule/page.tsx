'use client';

import { Calendar, Clock, MapPin, User, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function DoctorSchedule() {
    const appointments = [
        {
            id: 1,
            patientName: 'Michael Brown',
            time: '10:30 AM',
            type: 'Video Consultation',
            status: 'Upcoming',
            image: 'https://i.pravatar.cc/150?img=12'
        },
        {
            id: 2,
            patientName: 'Sarah Wilson',
            time: '11:45 AM',
            type: 'In-Clinic Visit',
            status: 'Pending',
            image: 'https://i.pravatar.cc/150?img=5'
        },
        {
            id: 3,
            patientName: 'James Miller',
            time: '02:15 PM',
            type: 'Follow-up',
            status: 'Confirmed',
            image: 'https://i.pravatar.cc/150?img=8'
        },
        {
            id: 4,
            patientName: 'Emily Davis',
            time: '04:00 PM',
            type: 'Emergency',
            status: 'Urgent',
            image: 'https://i.pravatar.cc/150?img=9'
        }
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Appointments Schedule</h1>
                    <p className="text-slate-500">Manage your daily appointments and availability.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline"> <Calendar className="w-4 h-4 mr-2" /> Sync Calendar</Button>
                    <Button> <Clock className="w-4 h-4 mr-2" /> Add Time Slot</Button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <h2 className="font-bold text-lg">Today, {new Date().toLocaleDateString()}</h2>
                    <div className="flex gap-2 text-sm text-slate-500">
                        <span className="px-3 py-1 bg-slate-100 rounded-full cursor-pointer hover:bg-slate-200">Day</span>
                        <span className="px-3 py-1 hover:bg-slate-100 rounded-full cursor-pointer">Week</span>
                        <span className="px-3 py-1 hover:bg-slate-100 rounded-full cursor-pointer">Month</span>
                    </div>
                </div>

                <div className="divide-y divide-slate-100">
                    {appointments.map((apt) => (
                        <div key={apt.id} className="p-6 hover:bg-slate-50 transition-colors flex flex-col md:flex-row md:items-center gap-4">
                            <div className="flex items-center gap-4 flex-1">
                                <div className="font-bold text-slate-900 w-24">{apt.time}</div>
                                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                                    <img src={apt.image} alt={apt.patientName} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">{apt.patientName}</div>
                                    <div className="text-sm text-slate-500 flex items-center gap-2">
                                        <span className={`w-2 h-2 rounded-full ${apt.status === 'Upcoming' ? 'bg-blue-500' :
                                                apt.status === 'Urgent' ? 'bg-red-500' :
                                                    apt.status === 'Confirmed' ? 'bg-green-500' : 'bg-yellow-500'
                                            }`} />
                                        {apt.type}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${apt.status === 'Upcoming' ? 'bg-blue-50 text-blue-700' :
                                        apt.status === 'Urgent' ? 'bg-red-50 text-red-700' :
                                            apt.status === 'Confirmed' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'
                                    }`}>
                                    {apt.status}
                                </span>
                                <Button variant="ghost" size="sm">Details</Button>
                                <Button size="sm">Reschedule</Button>
                            </div>
                        </div>
                    ))}

                    {/* Empty Slot Example */}
                    <div className="p-6 bg-slate-50/50 flex flex-col md:flex-row md:items-center gap-4 border-l-4 border-slate-300">
                        <div className="font-bold text-slate-400 w-24">03:00 PM</div>
                        <div className="text-slate-500 italic flex-1">No appointments scheduled</div>
                        <Button variant="outline" size="sm" className="text-slate-500 border-slate-300 border-dashed">
                            <Clock className="w-4 h-4 mr-2" /> Block Time
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
