'use client';
import { useState } from 'react';
import { User, Bell, Shield, CreditCard, LogOut, ChevronRight, Camera } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function PatientSettings() {
    const [notifications, setNotifications] = useState({
        email: true,
        push: true,
        sms: false
    });

    return (
        <div className="max-w-4xl space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
                <p className="text-slate-500">Manage your profile, security, and notification preferences.</p>
            </div>

            {/* Profile Section */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-6 border-b border-slate-50">
                    <h2 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                        <User className="w-5 h-5 text-primary-500" /> Personal Information
                    </h2>
                </div>
                <div className="p-6 space-y-6">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="relative group">
                            <div className="w-24 h-24 rounded-2xl bg-slate-100 flex items-center justify-center overflow-hidden border-2 border-slate-50">
                                <img src="https://i.pravatar.cc/200?img=47" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <button className="absolute -bottom-2 -right-2 p-2 bg-primary-600 text-white rounded-xl shadow-lg hover:bg-primary-700 transition-colors">
                                <Camera className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="flex-1 grid md:grid-cols-2 gap-4 w-full">
                            <Input label="Full Name" defaultValue="Sarah Parker" />
                            <Input label="Email Address" defaultValue="sarah.parker@example.com" />
                            <Input label="Phone Number" defaultValue="+1 (555) 000-0000" />
                            <Input label="Date of Birth" type="date" defaultValue="1992-05-15" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Notifications */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-6 border-b border-slate-50">
                    <h2 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                        <Bell className="w-5 h-5 text-orange-500" /> Notifications
                    </h2>
                </div>
                <div className="p-6 divide-y divide-slate-50">
                    {[
                        { id: 'email', title: 'Email Notifications', desc: 'Receive appointment reminders via email.' },
                        { id: 'push', title: 'Push Notifications', desc: 'Get instant alerts about chat messages and status updates.' },
                        { id: 'sms', title: 'SMS Alerts', desc: 'Receive urgent notifications via text message.' }
                    ].map((item) => (
                        <div key={item.id} className="py-4 flex items-center justify-between first:pt-0 last:pb-0">
                            <div>
                                <h4 className="text-sm font-semibold text-slate-900">{item.title}</h4>
                                <p className="text-xs text-slate-500">{item.desc}</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={notifications[item.id as keyof typeof notifications]}
                                    onChange={() => setNotifications(prev => ({ ...prev, [item.id]: !prev[item.id as keyof typeof notifications] }))}
                                />
                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                            </label>
                        </div>
                    ))}
                </div>
            </section>

            {/* Security */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-6 border-b border-slate-50">
                    <h2 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-500" /> Security
                    </h2>
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between py-2">
                        <div>
                            <h4 className="text-sm font-semibold text-slate-900">Change Password</h4>
                            <p className="text-xs text-slate-500">Update your account password regularly.</p>
                        </div>
                        <Button variant="outline" size="sm">Update</Button>
                    </div>
                    <div className="flex items-center justify-between py-2 border-t border-slate-50">
                        <div>
                            <h4 className="text-sm font-semibold text-slate-900">Two-Factor Authentication</h4>
                            <p className="text-xs text-slate-500">Add an extra layer of security to your account.</p>
                        </div>
                        <Button variant="outline" size="sm" className="text-primary-600 border-primary-100">Enable</Button>
                    </div>
                </div>
            </section>

            <div className="flex justify-end gap-3 pt-4">
                <Button variant="ghost">Cancel</Button>
                <Button>Save Changes</Button>
            </div>
        </div>
    );
}
