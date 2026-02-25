'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Activity, Lock, Mail, User, Phone, MapPin } from 'lucide-react';

import { useRouter } from 'next/navigation';

export default function SignupPage() {
    const [role, setRole] = useState<'patient' | 'doctor' | 'pharmacist' | 'admin'>('patient');
    const router = useRouter();

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        // Here we would normally call an API to register the user
        // For now, we simulate success and redirect
        // Everyone goes to onboarding now as per requirement
        router.push(`/signup/onboarding?role=${role}`);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col md:flex-row">

                {/* Sidebar Image */}
                <div className="hidden md:block w-1/3 bg-primary-600 p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover opacity-20 mix-blend-overlay"></div>
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <div className="flex items-center gap-2">
                            <Activity className="w-6 h-6" /> <span className="font-bold text-lg">SwasthyaSetu</span>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Join the Future of Healthcare</h2>
                            <p className="text-primary-100">Connect with top specialists and manage your health seamlessly.</p>
                        </div>
                        <div className="text-sm text-primary-200">© 2024 SwasthyaSetu</div>
                    </div>
                </div>

                {/* Form */}
                <div className="w-full md:w-2/3 p-8">
                    <div className="text-center md:text-left mb-6">
                        <h1 className="text-2xl font-bold text-slate-900">Create Account</h1>
                        <p className="text-slate-500">Sign up to get started as a {role}</p>
                    </div>

                    <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
                        {['patient', 'doctor', 'pharmacist', 'admin'].map((r) => (
                            <button
                                type="button"
                                key={r}
                                onClick={() => setRole(r as any)}
                                className={`
                   px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors border
                   ${role === r
                                        ? 'bg-primary-50 border-primary-200 text-primary-700'
                                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}
                 `}
                            >
                                {r.charAt(0).toUpperCase() + r.slice(1)}
                            </button>
                        ))}
                    </div>

                    <form className="space-y-4" onSubmit={handleSignup}>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Input label="First Name" placeholder="John" icon={<User className="w-4 h-4" />} />
                            <Input label="Last Name" placeholder="Doe" icon={<User className="w-4 h-4" />} />
                        </div>

                        <Input label="Email Address" type="email" placeholder="john@example.com" icon={<Mail className="w-4 h-4" />} />
                        <Input label="Password" type="password" placeholder="••••••••" icon={<Lock className="w-4 h-4" />} />

                        {role === 'doctor' && (
                            <Input label="Medical License ID" placeholder="MD-12345-X" icon={<Activity className="w-4 h-4" />} />
                        )}

                        {role === 'pharmacist' && (
                            <Input label="Pharmacy License ID" placeholder="PH-99887-Y" icon={<Activity className="w-4 h-4" />} />
                        )}

                        <div className="flex items-start gap-2 pt-2">
                            <input type="checkbox" className="mt-1 rounded border-slate-300 text-primary-600 focus:ring-primary-500" onChange={() => { }} />
                            <p className="text-sm text-slate-500">
                                I agree to the <Link href="/terms" className="text-primary-600 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link>.
                            </p>
                        </div>

                        <Button isFullWidth size="lg">Create Account</Button>
                    </form>

                    <p className="text-center text-sm text-slate-600 mt-6">
                        Already have an account? <Link href="/login" className="text-primary-600 font-medium hover:underline">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
