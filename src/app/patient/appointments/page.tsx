'use client';
import { useState } from 'react';
import {
    Calendar as CalendarIcon,
    Clock,
    Video,
    MoreVertical,
    Plus,
    Filter,
    Search,
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
    XCircle
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function AppointmentsPage() {
    const [view, setView] = useState<'Upcoming' | 'Past'>('Upcoming');

    const appointments = [
        {
            id: 1,
            doctor: 'Dr. Sarah Smith',
            specialty: 'Cardiologist',
            date: 'Today, Oct 24',
            time: '2:00 PM',
            type: 'Video Call',
            status: 'Confirmed',
            image: 'https://i.pravatar.cc/100?img=21'
        },
        {
            id: 2,
            doctor: 'Dr. James Wilson',
            specialty: 'General Physician',
            date: 'Wed, Oct 26',
            time: '10:30 AM',
            type: 'In-person',
            status: 'Confirmed',
            image: 'https://i.pravatar.cc/100?img=32'
        },
        {
            id: 3,
            doctor: 'Dr. Elena Rodriguez',
            specialty: 'Dermatologist',
            date: 'Fri, Oct 28',
            time: '4:15 PM',
            type: 'Video Call',
            status: 'Pending',
            image: 'https://i.pravatar.cc/100?img=45'
        }
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">My Appointments</h1>
                    <p className="text-slate-500">Manage your upcoming and past medical consultations.</p>
                </div>
                <Button className="gap-2">
                    <Plus className="w-4 h-4" /> Book New Appointment
                </Button>
            </div>

            {/* Filters and Search */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex gap-1 bg-slate-50 p-1 rounded-lg">
                    {['Upcoming', 'Past'].map((v) => (
                        <button
                            key={v}
                            onClick={() => setView(v as any)}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${view === v ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            {v}
                        </button>
                    ))}
                </div>

                <div className="flex gap-2 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search doctors..."
                            className="pl-9 pr-4 py-2 rounded-lg border border-slate-200 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                        <Filter className="w-4 h-4" /> Filter
                    </Button>
                </div>
            </div>

            {/* Appointments Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {appointments.map((apt) => (
                    <div key={apt.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-slate-100 overflow-hidden border-2 border-white shadow-sm">
                                        <img src={apt.image} alt={apt.doctor} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">{apt.doctor}</h3>
                                        <p className="text-primary-600 text-sm font-medium">{apt.specialty}</p>
                                    </div>
                                </div>
                                <div className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${apt.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                                    }`}>
                                    {apt.status === 'Confirmed' ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                                    {apt.status}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-50">
                                <div className="space-y-1">
                                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Date & Time</p>
                                    <div className="flex items-center gap-2 text-slate-700">
                                        <CalendarIcon className="w-4 h-4 text-slate-400" />
                                        <span className="text-sm font-semibold">{apt.date} • {apt.time}</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Consultation Type</p>
                                    <div className="flex items-center gap-2 text-slate-700">
                                        {apt.type === 'Video Call' ? <Video className="w-4 h-4 text-blue-500" /> : <Clock className="w-4 h-4 text-slate-400" />}
                                        <span className="text-sm font-semibold">{apt.type}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3 pt-6">
                                {apt.type === 'Video Call' ? (
                                    <Button className="flex-1 gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200" href="/video-consultation">
                                        <Video className="w-4 h-4" /> Join Meeting
                                    </Button>
                                ) : (apt.status === 'Confirmed' ? (
                                    <Button className="flex-1" variant="outline">View Directions</Button>
                                ) : (
                                    <Button className="flex-1" variant="outline" disabled>Awaiting Confirmation</Button>
                                ))}
                                <Button variant="ghost" className="p-2.5 text-slate-400 hover:text-red-600 hover:bg-red-50">
                                    <XCircle className="w-5 h-5" />
                                </Button>
                                <button className="p-2.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100">
                                    <MoreVertical className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State / Pagination Placeholder */}
            {appointments.length === 0 && (
                <div className="bg-white rounded-2xl p-12 text-center border-2 border-dashed border-slate-200">
                    <CalendarIcon className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-slate-900">No appointments found</h3>
                    <p className="text-slate-500 max-w-sm mx-auto mt-2">You don't have any appointments scheduled for this period. Start by booking a new one.</p>
                </div>
            )}
        </div>
    );
}
