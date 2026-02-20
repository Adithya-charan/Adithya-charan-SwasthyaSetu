'use client';
import { useState } from 'react';
import { FileText, Calendar, Clock, Upload, Download, Activity, AlertCircle, CheckCircle, File, ChevronRight, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function MedicalRecordsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">My Medical Records</h1>
                    <p className="text-slate-500">Manage and access your complete healthcare history securely.</p>
                </div>
                <Button className="gap-2">
                    <Upload className="w-4 h-4" /> Upload New Record
                </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start justify-between">
                    <div>
                        <p className="text-slate-500 text-sm font-medium mb-1">Total Documents</p>
                        <h3 className="text-3xl font-bold text-slate-900">42</h3>
                        <p className="text-xs text-green-600 font-medium mt-1">+3 added this month</p>
                    </div>
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                        <FileText className="w-6 h-6" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start justify-between">
                    <div>
                        <p className="text-slate-500 text-sm font-medium mb-1">Upcoming Exams</p>
                        <h3 className="text-3xl font-bold text-slate-900">2</h3>
                        <p className="text-xs text-slate-500 mt-1">Next: Blood Test (Oct 24)</p>
                    </div>
                    <div className="p-3 bg-orange-50 text-orange-600 rounded-lg">
                        <Calendar className="w-6 h-6" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start justify-between">
                    <div>
                        <p className="text-slate-500 text-sm font-medium mb-1">Last Updated</p>
                        <h3 className="text-2xl font-bold text-slate-900">2 days ago</h3>
                        <p className="text-xs text-slate-500 mt-1">By Dr. Sarah Johnson</p>
                    </div>
                    <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                        <Clock className="w-6 h-6" />
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Main Content Areas */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Recent Lab Reports */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Activity className="w-5 h-5 text-primary-500" />
                                <h3 className="font-bold text-slate-900">Recent Lab Reports</h3>
                            </div>
                            <Button variant="ghost" size="sm" className="text-primary-600">View All</Button>
                        </div>
                        <div className="divide-y divide-slate-100">
                            {[
                                { name: 'Comprehensive Blood Panel', doctor: 'Dr. Sarah Johnson', date: 'Oct 12, 2023' },
                                { name: 'Lipid Profile & Glucose', doctor: 'Dr. Michael Chen', date: 'Sep 28, 2023' },
                                { name: 'Urinalysis Result', doctor: 'Dr. Sarah Johnson', date: 'Aug 15, 2023' }
                            ].map((report, i) => (
                                <div key={i} className="p-4 hover:bg-slate-50 flex items-center justify-between group">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-slate-100 rounded-lg text-slate-500">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900">{report.name}</h4>
                                            <p className="text-xs text-slate-500">{report.doctor} • {report.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Button size="sm" variant="ghost" className="text-primary-600">View Details</Button>
                                        <Button size="sm" variant="ghost" className="text-slate-400 hover:text-slate-600">
                                            <Download className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Vaccination History */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <AlertCircle className="w-5 h-5 text-primary-500" />
                                <h3 className="font-bold text-slate-900">Vaccination History</h3>
                            </div>
                            <Button variant="ghost" size="sm" className="text-primary-600">Update List</Button>
                        </div>
                        <div className="p-6 space-y-6">
                            {[
                                { name: 'Influenza (Flu Shot)', type: 'Annual Dose', date: 'Nov 04, 2023' },
                                { name: 'COVID-19 Booster (Moderna)', type: '3rd Dose', date: 'Jan 12, 2023' },
                                { name: 'Tetanus, Diphtheria, Pertussis', type: 'Primary Series', date: 'May 20, 2019' },
                            ].map((vax, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="mt-1 relative">
                                        <div className="w-3 h-3 rounded-full bg-primary-500 ring-4 ring-primary-50"></div>
                                        {i !== 2 && <div className="absolute top-3 left-1.5 w-0.5 h-12 bg-slate-200 -z-10"></div>}
                                    </div>
                                    <div className="flex-1 flex justify-between items-start">
                                        <div>
                                            <h4 className="font-semibold text-slate-900">{vax.name}</h4>
                                            <p className="text-xs text-slate-500">{vax.type}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs font-medium text-slate-900">{vax.date}</p>
                                            <p className="text-xs text-primary-600 font-medium cursor-pointer hover:underline">Certificate</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Sidebar Widgets */}
                <div className="space-y-6">
                    {/* Chronic Conditions */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-primary-500" /> Chronic Conditions
                        </h3>
                        <p className="text-xs text-slate-500 mb-4">Ongoing health conditions being monitored by your medical team.</p>
                        <div className="space-y-3">
                            {['Hypertension', 'Type 2 Diabetes', 'Allergic Rhinitis'].map((condition) => (
                                <div key={condition} className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                    {condition}
                                </div>
                            ))}
                            <button className="w-full py-2 border border-dashed border-slate-300 rounded-lg text-slate-500 text-sm hover:border-primary-500 hover:text-primary-600 transition-colors">
                                + Add Condition
                            </button>
                        </div>

                        <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-100">
                            <p className="text-sm italic text-slate-600 mb-2">
                                "Patient glucose levels stabilizing with current metformin dosage. Continue daily monitoring."
                            </p>
                            <p className="text-xs text-slate-400">— Dr. Michael Chen, Oct 15</p>
                        </div>
                    </div>

                    {/* Health Summary Card */}
                    <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-6 rounded-xl shadow-lg text-white">
                        <h3 className="font-bold text-lg mb-2">Health Summary 2023</h3>
                        <p className="text-primary-100 text-sm mb-6">Download your annual health overview for insurance or travel.</p>
                        <button className="w-full bg-white text-primary-700 font-bold py-2.5 rounded-lg hover:bg-primary-50 transition-colors shadow-sm">
                            Generate PDF
                        </button>
                    </div>

                    {/* Shared Records */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Share2 className="w-5 h-5 text-slate-500" /> Shared Records
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-700">Dr. Sarah Johnson</span>
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Active</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-700">City General Pharmacy</span>
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Active</span>
                            </div>
                            <Button variant="outline" size="sm" isFullWidth className="mt-2">Manage Access</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
