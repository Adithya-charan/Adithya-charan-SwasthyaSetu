'use client';
import { Calendar, Users, Activity, Video, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function DoctorDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Dr. Sarah Smith</h1>
                    <p className="text-slate-500">Cardiology • 5 Appointments Today</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline">Set Availability</Button>
                    <Button>Go Online</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="text-slate-500 text-sm mb-1">Total Patients</div>
                    <div className="text-2xl font-bold text-slate-900">1,204</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="text-slate-500 text-sm mb-1">Appointments</div>
                    <div className="text-2xl font-bold text-slate-900">42</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="text-slate-500 text-sm mb-1">Pending Reports</div>
                    <div className="text-2xl font-bold text-orange-500">8</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="text-slate-500 text-sm mb-1">Rating</div>
                    <div className="text-2xl font-bold text-yellow-500">4.9 ★</div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Next Patient */}
                <div className="col-span-2 bg-white rounded-xl shadow-sm border border-slate-100">
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                        <h2 className="font-bold text-lg">Next Patient</h2>
                        <span className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium">10:30 AM</span>
                    </div>
                    <div className="p-6 flex flex-col md:flex-row gap-6">
                        <div className="w-24 h-24 bg-slate-200 rounded-full flex-shrink-0">
                            <img src="https://i.pravatar.cc/150?img=12" alt="Patient" className="w-full h-full rounded-full object-cover" />
                        </div>
                        <div className="flex-1 space-y-4">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">Michael Brown</h3>
                                <p className="text-slate-500">Male, 45 Years • Chest Pain & Fatigue</p>
                            </div>
                            <div className="flex gap-3 flex-wrap">
                                <div className="bg-slate-50 px-3 py-1 rounded text-sm text-slate-600">BP: 140/90</div>
                                <div className="bg-slate-50 px-3 py-1 rounded text-sm text-slate-600">Weight: 82kg</div>
                                <div className="bg-slate-50 px-3 py-1 rounded text-sm text-slate-600">Last Visit: 2 weeks ago</div>
                            </div>
                            <div className="flex gap-3 pt-2">
                                <Button className="gap-2" href="/video-consultation">
                                    <Video className="w-4 h-4" /> Start Consultation
                                </Button>
                                <Button variant="outline">View Records</Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Schedule */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-100">
                    <div className="p-4 border-b border-slate-100">
                        <h3 className="font-bold">Today's Schedule</h3>
                    </div>
                    <div className="divide-y divide-slate-100">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="p-4 hover:bg-slate-50 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold text-sm">
                                    1{i}:00
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900">Patient Name</p>
                                    <p className="text-xs text-slate-500">Routine Checkup</p>
                                </div>
                                <div className="ml-auto">
                                    {i === 1 ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Clock className="w-4 h-4 text-slate-400" />}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
