'use client';

import { Video, Mic, MessageSquare, FileText, UserPlus, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function DoctorConsultation() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Active Consultations</h1>
                    <p className="text-slate-500">Manage ongoing and upcoming remote consultations.</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                    {/* Live Consultation Card */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                        <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
                                <span className="font-bold">LIVE NOW</span>
                            </div>
                            <div className="text-slate-400 text-sm">Timer: 14:32</div>
                        </div>
                        <div className="p-8 flex flex-col items-center justify-center space-y-6 bg-slate-50">
                            <div className="w-32 h-32 rounded-full ring-4 ring-white shadow-lg overflow-hidden">
                                <img src="https://i.pravatar.cc/150?img=12" alt="Patient" className="w-full h-full object-cover" />
                            </div>
                            <div className="text-center">
                                <h2 className="text-2xl font-bold text-slate-900">Michael Brown</h2>
                                <p className="text-slate-500">General Checkup • 15:00 - 15:30</p>
                            </div>
                            <div className="flex gap-4">
                                <Button size="lg" className="bg-red-500 hover:bg-red-600 gap-2">
                                    <Video className="w-5 h-5" /> Join Video Call
                                </Button>
                                <Button size="lg" variant="outline" className="gap-2">
                                    <MessageSquare className="w-5 h-5" /> Chat
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Queue */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                        <h3 className="font-bold text-lg mb-4">Upcoming Queue</h3>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/150?img=${20 + i}`} alt="Patient" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Patient #{i}</h4>
                                            <p className="text-sm text-slate-500">Symptom: Fever & Cold</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-bold text-slate-900">10:{30 + (i * 15)} AM</div>
                                        <Button size="sm" variant="ghost" className="text-primary-600">View Details</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Quick tools */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                        <h3 className="font-bold text-lg mb-4">Quick Tools</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <Button variant="outline" className="h-24 flex flex-col gap-2 items-center justify-center text-slate-600 hover:text-primary-600 hover:border-primary-200">
                                <FileText className="w-6 h-6" />
                                <span>Write Rx</span>
                            </Button>
                            <Button variant="outline" className="h-24 flex flex-col gap-2 items-center justify-center text-slate-600 hover:text-primary-600 hover:border-primary-200">
                                <FileText className="w-6 h-6" />
                                <span>Lab Request</span>
                            </Button>
                            <Button variant="outline" className="h-24 flex flex-col gap-2 items-center justify-center text-slate-600 hover:text-primary-600 hover:border-primary-200">
                                <Clock className="w-6 h-6" />
                                <span>History</span>
                            </Button>
                            <Button variant="outline" className="h-24 flex flex-col gap-2 items-center justify-center text-slate-600 hover:text-primary-600 hover:border-primary-200">
                                <UserPlus className="w-6 h-6" />
                                <span>Referral</span>
                            </Button>
                        </div>
                    </div>

                    {/* Pending Reviews */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                        <h3 className="font-bold text-lg mb-4">Pending Reviews</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm">
                                <div className="w-2 h-2 mt-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                                <div>
                                    <span className="font-medium text-slate-900">Lab Results - Jane Doe</span>
                                    <p className="text-slate-500 text-xs">Received 2 hours ago</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 text-sm">
                                <div className="w-2 h-2 mt-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                                <div>
                                    <span className="font-medium text-slate-900">X-Ray Review - John Smith</span>
                                    <p className="text-slate-500 text-xs">Received 4 hours ago</p>
                                </div>
                            </li>
                        </ul>
                        <Button variant="ghost" className="w-full mt-4 text-sm">View All Pending Items</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
