'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
    Mic,
    MicOff,
    Video,
    VideoOff,
    PhoneOff,
    MessageSquare,
    MoreVertical,
    Users,
    Settings,
    Share,
    X
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function VideoConsultation() {
    const [isMuted, setIsMuted] = useState(false);
    const [isVideoOff, setIsVideoOff] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <div className="h-screen w-full bg-slate-900 flex overflow-hidden relative">

            {/* Main Video Area */}
            <div className={`flex-1 relative transition-all duration-300 ${isChatOpen ? 'mr-80' : ''}`}>

                {/* Header Overlay */}
                <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent z-10 flex justify-between items-start text-white">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary-500/20 backdrop-blur rounded-lg">
                            <Video className="w-5 h-5 text-primary-400" />
                        </div>
                        <div>
                            <h2 className="font-bold text-lg drop-shadow-md">Dr. Sarah Smith</h2>
                            <p className="text-xs text-slate-300 flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                05:23
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Settings className="w-5 h-5" /></button>
                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Users className="w-5 h-5" /></button>
                    </div>
                </div>

                {/* Main Feed */}
                <div className="w-full h-full flex items-center justify-center bg-slate-800">
                    {/* Placeholder for Doctor Video */}
                    <img
                        src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                        alt="Doctor Feed"
                        className="w-full h-full object-cover opacity-90"
                    />
                    {/* Fallback if no video */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {!isVideoOff ? null : <div className="text-white font-bold">Camera Off</div>}
                    </div>
                </div>

                {/* Self View PIP */}
                <div className="absolute bottom-24 right-6 w-48 aspect-video bg-black rounded-xl border-2 border-slate-700 shadow-2xl overflow-hidden z-20 hover:scale-105 transition-transform cursor-move">
                    <img
                        src="https://images.unsplash.com/photo-1599480922896-1c2586796277?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                        alt="Self View"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1 right-2 text-[10px] bg-black/50 px-1 rounded text-white">You</div>
                </div>

                {/* Controls Bar */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-slate-900/80 backdrop-blur-md p-3 rounded-2xl border border-slate-700 shadow-2xl z-30">
                    <button
                        onClick={() => setIsMuted(!isMuted)}
                        className={`p-4 rounded-xl transition-all ${isMuted ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}
                    >
                        {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                    </button>

                    <button
                        onClick={() => setIsVideoOff(!isVideoOff)}
                        className={`p-4 rounded-xl transition-all ${isVideoOff ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}
                    >
                        {isVideoOff ? <VideoOff className="w-6 h-6" /> : <Video className="w-6 h-6" />}
                    </button>

                    <button className="p-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white transition-all">
                        <Share className="w-6 h-6" />
                    </button>

                    <Link href="/patient" className="p-4 rounded-xl bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20 transition-all px-8">
                        <PhoneOff className="w-6 h-6" />
                    </Link>

                    <button
                        onClick={() => setIsChatOpen(!isChatOpen)}
                        className={`p-4 rounded-xl transition-all ${isChatOpen ? 'bg-primary-500 text-white' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}
                    >
                        <MessageSquare className="w-6 h-6" />
                    </button>
                </div>

            </div>

            {/* Chat Sidebar */}
            <div className={`fixed right-0 top-0 bottom-0 w-80 bg-white border-l border-slate-200 shadow-2xl transform transition-transform duration-300 z-40 flex flex-col ${isChatOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                    <h3 className="font-bold text-slate-900">Consultation Chat</h3>
                    <button onClick={() => setIsChatOpen(false)} className="text-slate-400 hover:text-slate-600"><X className="w-5 h-5" /></button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {/* Messages */}
                    <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0"></div>
                        <div className="bg-slate-100 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                            <p className="text-sm text-slate-700">Hello! I've reviewed your blood work.</p>
                            <span className="text-[10px] text-slate-400 mt-1 block">10:05 AM</span>
                        </div>
                    </div>

                    <div className="flex gap-2 flex-row-reverse">
                        <div className="bg-primary-500 text-white p-3 rounded-lg rounded-tr-none max-w-[80%]">
                            <p className="text-sm">Thanks, Doctor. Any concerns?</p>
                            <span className="text-[10px] text-primary-100 mt-1 block">10:06 AM</span>
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t border-slate-100 bg-slate-50">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="flex-1 px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-primary-500 text-sm"
                        />
                        <button className="p-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
                            <Share className="w-4 h-4 rotate-90" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}
