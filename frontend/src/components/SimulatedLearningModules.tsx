import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Stethoscope, 
  Activity, 
  Clock, 
  CheckCircle2, 
  Circle, 
  X, 
  ShieldCheck, 
  Award,
  ChevronRight,
  PlayCircle
} from 'lucide-react';

// --- Types ---
interface Lesson {
  id: string;
  title: string;
  completed: boolean;
}

interface Module {
  id: string;
  iconName: 'heart' | 'stethoscope' | 'activity';
  title: string;
  level: string;
  duration: string;
  description: string;
  tags: string[];
  lessons: Lesson[];
}

// --- Initial Mock Data ---
const INITIAL_MODULES: Module[] = [
  {
    id: "3d-anatomy",
    iconName: "activity",
    title: "3D Anatomy & AR Surgery Simulations",
    level: "Intermediate",
    duration: "18 Hours",
    description: "Interactive virtual dissection, vascular branching & laparoscopic camera navigation",
    tags: ["Cross-Sectional", "Surgical Landmarks", "POCUS"],
    lessons: [
      { id: "l1_1", title: "Virtual Dissection Fundamentals", completed: true },
      { id: "l1_2", title: "Identifying Vascular Branching", completed: true },
      { id: "l1_3", title: "Laparoscopic Camera Navigation", completed: true },
      { id: "l1_4", title: "Advanced Surgical Landmarks", completed: false },
      { id: "l1_5", title: "Point-of-Care Ultrasound (POCUS) Mastery", completed: false },
    ]
  },
  {
    id: "diagnostic-challenges",
    iconName: "stethoscope",
    title: "Case-Based Diagnostic Challenges",
    level: "Advanced",
    duration: "24 Hours",
    description: "20 high-fidelity emergency department vignettes with real lab & imaging findings",
    tags: ["Differential Diagnosis", "ABG Analysis", "Chest X-Rays"],
    lessons: [
      { id: "l2_1", title: "Emergency Vignette Analysis & Triage", completed: true },
      { id: "l2_2", title: "Interpreting Complex ABG Results", completed: true },
      { id: "l2_3", title: "Advanced Chest X-Ray Reading", completed: false },
      { id: "l2_4", title: "Formulating Differential Diagnoses", completed: false },
      { id: "l2_5", title: "Lab Findings & Clinical Correlation", completed: false },
    ]
  },
  {
    id: "clinical-empathy",
    iconName: "heart",
    title: "Clinical Empathy & Soft Skills Mastery",
    level: "Foundational",
    duration: "12 Hours",
    description: "Doctor-patient bedside communication, SPIKES bad news delivery, and trauma team dynamics",
    tags: ["Informed Consent", "Medical Ethics", "ICU Handover"],
    lessons: [
      { id: "l3_1", title: "Bedside Communication & Active Listening", completed: true },
      { id: "l3_2", title: "SPIKES Protocol: Delivering Bad News", completed: true },
      { id: "l3_3", title: "High-Stress Trauma Team Dynamics", completed: true },
      { id: "l3_4", title: "Informed Consent & Medical Ethics", completed: true },
      { id: "l3_5", title: "Effective ICU & Ward Handovers", completed: false },
    ]
  }
];

const CERTIFICATIONS = [
  { id: 'cert1', title: 'Advanced Cardiovascular Life Support (ACLS)', issuer: 'American Heart Association', status: 'Active', icon: Heart, color: 'text-rose-400', bg: 'bg-rose-400/10' },
  { id: 'cert2', title: 'Basic Life Support (BLS)', issuer: 'American Heart Association', status: 'Active', icon: Activity, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { id: 'cert3', title: 'Advanced Trauma Life Support (ATLS)', issuer: 'American College of Surgeons', status: 'In Progress', icon: ShieldCheck, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
];

export const SimulatedLearningModules: React.FC = () => {
  const [modules, setModules] = useState<Module[]>([]);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);

  // Initialize from localStorage or fallback to INITIAL_MODULES
  useEffect(() => {
    const stored = localStorage.getItem('simulated_learning_modules');
    if (stored) {
      try {
        setModules(JSON.parse(stored));
      } catch (e) {
        setModules(INITIAL_MODULES);
      }
    } else {
      setModules(INITIAL_MODULES);
    }
  }, []);

  // Save to localStorage whenever modules change
  useEffect(() => {
    if (modules.length > 0) {
      localStorage.setItem('simulated_learning_modules', JSON.stringify(modules));
      
      // Update selectedModule if it's currently open to reflect new state
      if (selectedModule) {
        const updatedSelected = modules.find(m => m.id === selectedModule.id);
        if (updatedSelected) {
          setSelectedModule(updatedSelected);
        }
      }
    }
  }, [modules]);

  const toggleLesson = (moduleId: string, lessonId: string) => {
    setModules(prev => prev.map(mod => {
      if (mod.id !== moduleId) return mod;
      return {
        ...mod,
        lessons: mod.lessons.map(lesson => 
          lesson.id === lessonId ? { ...lesson, completed: !lesson.completed } : lesson
        )
      };
    }));
  };

  const calculateProgress = (mod: Module) => {
    if (mod.lessons.length === 0) return 0;
    const completedCount = mod.lessons.filter(l => l.completed).length;
    return Math.round((completedCount / mod.lessons.length) * 100);
  };

  const renderIcon = (iconName: string, className: string = "w-6 h-6") => {
    switch (iconName) {
      case 'heart': return <Heart className={className} />;
      case 'stethoscope': return <Stethoscope className={className} />;
      case 'activity': return <Activity className={className} />;
      default: return <Activity className={className} />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'foundational': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'intermediate': return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'advanced': return 'bg-rose-500/20 text-rose-300 border-rose-500/30';
      default: return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
    }
  };

  return (
    <div className="space-y-8 w-full max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-black text-white flex items-center gap-3">
          <PlayCircle className="w-7 h-7 text-indigo-400" />
          Simulated Learning Modules
        </h2>
        <p className="text-slate-400 mt-2">Immersive, high-fidelity clinical scenarios designed to bridge the gap between theory and practice.</p>
      </div>

      {/* Module Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod) => {
          const progress = calculateProgress(mod);
          
          return (
            <motion.div
              key={mod.id}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setSelectedModule(mod)}
              className="bg-[#12183A] border border-white/10 rounded-2xl p-6 cursor-pointer hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all group relative overflow-hidden flex flex-col h-full"
            >
              {/* Top Section */}
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  {renderIcon(mod.iconName)}
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wider ${getLevelColor(mod.level)}`}>
                  {mod.level}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-indigo-300 transition-colors">
                {mod.title}
              </h3>
              <p className="text-sm text-slate-400 mb-4 flex-1 line-clamp-3">
                {mod.description}
              </p>

              {/* Meta Data */}
              <div className="flex items-center gap-4 text-xs font-medium text-slate-300 mb-5">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-500" />
                  {mod.duration}
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-slate-500" />
                  {mod.lessons.length} Lessons
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {mod.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-300 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2 text-xs font-bold">
                  <span className="text-slate-400">Progress</span>
                  <span className={progress === 100 ? 'text-emerald-400' : 'text-indigo-400'}>
                    {progress}%
                  </span>
                </div>
                <div className="w-full bg-[#0A0F24] rounded-full h-2 overflow-hidden border border-white/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full rounded-full ${progress === 100 ? 'bg-emerald-500' : 'bg-indigo-500'}`}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Certification Programs */}
      <div className="mt-12 pt-8 border-t border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Award className="w-6 h-6 text-emerald-400" />
          Certification Programs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CERTIFICATIONS.map(cert => (
            <div key={cert.id} className="bg-[#12183A] border border-white/10 rounded-xl p-5 flex items-center gap-4 hover:bg-white/[0.03] transition-colors">
              <div className={`w-12 h-12 rounded-xl ${cert.bg} border border-white/5 flex items-center justify-center shrink-0`}>
                <cert.icon className={`w-6 h-6 ${cert.color}`} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1 leading-snug">{cert.title}</h4>
                <p className="text-[11px] text-slate-400 mb-1">{cert.issuer}</p>
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${cert.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">{cert.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {selectedModule && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModule(null)}
              className="absolute inset-0 bg-[#050814]/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0E1432] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 border-b border-white/10 bg-gradient-to-br from-[#12183A] to-[#0E1432]">
                <button 
                  onClick={() => setSelectedModule(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Video Player Placeholder */}
                <div className="w-full aspect-video bg-[#050814] rounded-2xl mb-6 relative overflow-hidden border border-white/10 group cursor-pointer">
                  <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 rounded-full bg-indigo-500/80 text-white flex items-center justify-center backdrop-blur-sm shadow-xl"
                    >
                      <PlayCircle className="w-8 h-8 ml-1" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                      AR Simulation Active
                    </div>
                    <div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded border border-white/10 text-[10px] font-bold text-white">
                      1080p
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    {renderIcon(selectedModule.iconName, "w-7 h-7")}
                  </div>
                  <div>
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider mb-2 ${getLevelColor(selectedModule.level)}`}>
                      {selectedModule.level}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                      {selectedModule.title}
                    </h2>
                  </div>
                </div>
                
                <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                  {selectedModule.description}
                </p>
                
                <div className="flex items-center gap-6 mt-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                    <Clock className="w-4 h-4 text-indigo-400" />
                    {selectedModule.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    {calculateProgress(selectedModule)}% Completed
                  </div>
                </div>
              </div>

              {/* Lesson List */}
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Course Modules & Lessons
                </h3>
                <div className="space-y-3">
                  {selectedModule.lessons.map((lesson, index) => (
                    <div 
                      key={lesson.id}
                      onClick={() => toggleLesson(selectedModule.id, lesson.id)}
                      className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                        lesson.completed 
                          ? 'bg-emerald-500/5 border-emerald-500/20 hover:bg-emerald-500/10' 
                          : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.04]'
                      }`}
                    >
                      <button className="shrink-0 focus:outline-none">
                        {lesson.completed ? (
                          <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                        ) : (
                          <Circle className="w-6 h-6 text-slate-500" />
                        )}
                      </button>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-bold truncate transition-colors ${
                          lesson.completed ? 'text-emerald-50' : 'text-slate-200'
                        }`}>
                          {index + 1}. {lesson.title}
                        </p>
                        <p className="text-xs text-slate-500 truncate mt-0.5">
                          {lesson.completed ? 'Completed' : 'Pending completion'}
                        </p>
                      </div>
                      <ChevronRight className={`w-5 h-5 shrink-0 ${lesson.completed ? 'text-emerald-500/30' : 'text-slate-600'}`} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
