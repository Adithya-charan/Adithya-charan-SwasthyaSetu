'use client';

import { User, Bell, Lock, Shield, CreditCard, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function DoctorSettings() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-900">Settings</h1>

            <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-1 space-y-2">
                    <button className="w-full text-left px-4 py-3 bg-white rounded-lg shadow-sm border border-slate-100 font-medium text-primary-700 flex items-center gap-3">
                        <User className="w-5 h-5" /> Profile Settings
                    </button>
                    <button className="w-full text-left px-4 py-3 bg-transparent rounded-lg hover:bg-white hover:shadow-sm transition-all text-slate-600 flex items-center gap-3">
                        <Bell className="w-5 h-5" /> Notifications
                    </button>
                    <button className="w-full text-left px-4 py-3 bg-transparent rounded-lg hover:bg-white hover:shadow-sm transition-all text-slate-600 flex items-center gap-3">
                        <Lock className="w-5 h-5" /> Security
                    </button>
                    <button className="w-full text-left px-4 py-3 bg-transparent rounded-lg hover:bg-white hover:shadow-sm transition-all text-slate-600 flex items-center gap-3">
                        <Shield className="w-5 h-5" /> Availability
                    </button>
                </div>

                <div className="md:col-span-3 space-y-6">
                    {/* Profile Section */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-6">
                        <h2 className="text-lg font-bold border-b border-slate-100 pb-4">Personal Information</h2>

                        <div className="flex items-center gap-6">
                            <div className="w-24 h-24 rounded-full bg-slate-200 overflow-hidden relative group cursor-pointer">
                                <img src="https://i.pravatar.cc/150" alt="Profile" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs">
                                    Change
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Dr. Sarah Smith</h3>
                                <p className="text-slate-500">Cardiologist</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-900">Full Name</label>
                                <input type="text" defaultValue="Sarah Smith" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-900">Email Address</label>
                                <input type="email" defaultValue="sarah.smith@telehealth.com" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-900">Phone Number</label>
                                <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-900">Specialization</label>
                                <input type="text" defaultValue="Cardiology" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg" disabled />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-900">Bio</label>
                            <textarea className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 h-24" defaultValue="Experienced Cardiologist with 10+ years of practice..."></textarea>
                        </div>

                        <div className="flex justify-end gap-4 pt-4">
                            <Button variant="outline">Cancel</Button>
                            <Button>Save Changes</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
