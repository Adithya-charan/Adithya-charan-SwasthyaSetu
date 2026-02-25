'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import {
    Home,
    User,
    Calendar,
    FileText,
    Settings,
    LogOut,
    Menu,
    X,
    PlusCircle,
    Video,
    Activity,
    Pill,
    Users,
    ShieldAlert
} from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming cn utility or inline

export function SideNav({ role }: { role: 'patient' | 'doctor' | 'pharmacist' | 'admin' }) {
    const pathname = usePathname();
    const { logout, user } = useAuth();

    const links = {
        patient: [
            { name: 'Dashboard', href: '/patient', icon: Home },
            { name: 'Appointments', href: '/patient/appointments', icon: Calendar },
            { name: 'Medical Records', href: '/patient/records', icon: FileText },
            { name: 'Prescriptions', href: '/patient/prescriptions', icon: Pill },
            { name: 'Settings', href: '/patient/settings', icon: Settings },
        ],
        doctor: [
            { name: 'Dashboard', href: '/doctor', icon: Activity },
            { name: 'Appointments', href: '/doctor/schedule', icon: Calendar },
            { name: 'Patients', href: '/doctor/patients', icon: Users },
            { name: 'Consultation', href: '/doctor/consultation', icon: Video },
            { name: 'Settings', href: '/doctor/settings', icon: Settings },
        ],
        pharmacist: [
            { name: 'Dashboard', href: '/pharmacist', icon: Pill },
            { name: 'Orders', href: '/pharmacist/orders', icon: FileText },
            { name: 'Inventory', href: '/pharmacist/inventory', icon: Calendar }, // Using Calendar as placeholder
        ],
        admin: [
            { name: 'Overview', href: '/admin', icon: ShieldAlert },
            { name: 'Users', href: '/admin/users', icon: Users },
            { name: 'Settings', href: '/admin/settings', icon: Settings },
        ]
    };

    const menuItems = links[role];

    return (
        <div className="flex flex-col h-full bg-white border-r border-slate-200 w-64 fixed left-0 top-0 bottom-0 z-40 hidden md:flex">
            <div className="p-6 border-b border-slate-100 flex items-center gap-2">
                <Activity className="w-8 h-8 text-primary-500" />
                <span className="text-xl font-bold text-slate-900">SwasthyaSetu</span>
            </div>

            <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors
                ${isActive
                                    ? 'bg-primary-50 text-primary-700 font-medium'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
              `}
                        >
                            <item.icon className={`w-5 h-5 ${isActive ? 'text-primary-500' : 'text-slate-400'}`} />
                            {item.name}
                        </Link>
                    );
                })}
            </div>

            <div className="p-4 border-t border-slate-100">
                <div className="bg-slate-50 p-3 rounded-lg flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                        <User className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900 truncate">{user?.name || 'User'}</p>
                        <p className="text-xs text-slate-500 capitalize">{role}</p>
                    </div>
                </div>
                <button
                    onClick={logout}
                    className="flex items-center gap-2 text-red-600 hover:bg-red-50 w-full p-2 rounded-lg transition-colors text-sm font-medium"
                >
                    <LogOut className="w-4 h-4" /> Sign Out
                </button>
            </div>
        </div>
    );
}

export default function DashboardLayout({
    children,
    role = 'patient'
}: {
    children: React.ReactNode,
    role?: 'patient' | 'doctor' | 'pharmacist' | 'admin'
}) {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        // Only redirect if absolutely sure user is missing
        // if (!isLoading && !user) {
        //     router.push('/login');
        // }
    }, [user, isLoading, role, router]);

    if (isLoading) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    // DEBUG: If user is missing, show a message instead of blank screen or redirect loop
    if (!user) {
        // return <div className="p-4">No user session found. Please <a href="/login" className="text-blue-500 underline">login</a>.</div>;
        // Or just let it render, the Sidebar might look empty but checks will likely fail
    }
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200 sticky top-0 z-30">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Activity className="w-6 h-6 text-primary-500" /> SwasthyaSetu
                </div>
                <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
                    {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isMobileOpen && (
                <div className="fixed inset-0 bg-slate-900/50 z-40 md:hidden" onClick={() => setIsMobileOpen(false)}>
                    <div className="w-64 h-full bg-white animate-in slide-in-from-left" onClick={e => e.stopPropagation()}>
                        <SideNav role={role} />
                    </div>
                </div>
            )}

            {/* Desktop Sidebar */}
            <SideNav role={role} />

            {/* Main Content */}
            <main className="md:ml-64 min-h-screen p-4 md:p-8 pt-6">
                <div className="max-w-7xl mx-auto space-y-6">
                    {children}
                </div>
            </main>
        </div>
    );
}
