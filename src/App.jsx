import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
  ChevronRight,
  SlidersHorizontal,
  Send,
  Film,
  Instagram,
  Phone,
  Clapperboard,
  Scissors,
  Play,
  Edit3,
  Plus,
  Trash2,
  RotateCcw
} from 'lucide-react';

const INITIAL_PROFILE = {
  id: 'shubham',
  name: 'Shubham Gaikwad',
  tagline: 'Video Editor & Visual Storyteller',
  availability: 'Available for YouTube, Reels & Short Film edits',
  ratingText: 'Creative Video Editor & Motion Designer',
  headline: 'Transforming raw footage into engaging visual stories & cinematic cuts.',
  bioShort: 'I’m Shubham Gaikwad — a video editor based in Nashik, Maharashtra. I specialize in crafting high-retention YouTube content, viral Reels/Shorts, and narrative short films.',
  bioLong1: 'With a focus on pacing, dynamic sound design, color grading, and smooth transitions, I turn raw video clips into polished visual experiences. I frequently use DaVinci Resolve, Adobe Premiere Pro, and After Effects.',
  bioLong2: 'Whether it’s editing fast-paced vertical video content or cutting cinematic narrative short films, I aim to keep viewers engaged from the first second to the last.',
  avatarUrl: '', // Uses custom SVG vector portrait rendered from photo
  location: 'Nashik, Maharashtra, India',
  timeZone: 'Asia/Kolkata',
  email: 'shubhamgaik2603@gmail.com',
  phone: '+91 9699476022',
  instagram: 'https://www.instagram.com/rix_k_/',
  focusArea: 'Short Films & Reels',
  tools: 'DaVinci Resolve, Premiere Pro, After Effects',
  skills: [
    { name: 'DaVinci Resolve (Color & Edit)', category: 'Video Editing', level: 'Frequently Used' },
    { name: 'Adobe Premiere Pro', category: 'Video Editing', level: 'Frequently Used' },
    { name: 'Adobe After Effects', category: 'Motion Graphics', level: 'Frequently Used' },
    { name: 'Short Film Editing & Pacing', category: 'Narrative', level: 'Featured' },
    { name: 'YouTube & Reels Hook Editing', category: 'Short Form', level: 'Advanced' },
    { name: 'Audio Design & SFX Sync', category: 'Post Production', level: 'Intermediate' },
    { name: 'Color Grading & Look Creation', category: 'Post Production', level: 'Intermediate' }
  ],
  projects: [
    {
      id: '01',
      title: 'Cinematic Indie Short Film Edit',
      category: 'Short Film',
      tags: ['DaVinci Resolve', 'Premiere Pro', 'Narrative Cut', 'Color Grade'],
      client: 'Indie Film Project',
      year: '2026',
      summary: 'A recently edited dramatic short film focusing on tight emotional pacing, tension building, and rich color grading.',
      metrics: 'Full Narrative Cut • Custom SFX Sync',
      bgGradient: 'from-amber-100 via-rose-50 to-orange-100',
      details: 'Handled scene assembly, multi-camera dialogue synchronization, dynamic pacing adjustment, and cinematic color grading in DaVinci Resolve.'
    },
    {
      id: '02',
      title: 'High-Retention Tech & Lifestyle Reels',
      category: 'Reels / Shorts',
      tags: ['After Effects', 'Premiere Pro', 'Subtitles', 'Fast Cuts'],
      client: 'Content Creators',
      year: '2026',
      summary: 'Engaging vertical short-form edits equipped with animated captions, motion graphics, and sound design to boost watch time.',
      metrics: '90%+ Viewer Retention • Viral Style',
      bgGradient: 'from-blue-100 via-indigo-50 to-slate-100',
      details: 'Designed hook-oriented intro sequences, custom kinetic captions, motion pop-ups, and seamless sound effect layers.'
    },
    {
      id: '03',
      title: 'YouTube Video & Vlog Post-Production',
      category: 'YouTube',
      tags: ['Premiere Pro', 'Sound Design', 'B-Roll Sync'],
      client: 'YouTube Creators',
      year: '2026',
      summary: 'Full-length YouTube video editing including jump cuts, B-roll integration, background music balancing, and visual callouts.',
      metrics: 'Clean Pacing • Multi-track Audio',
      bgGradient: 'from-emerald-100 via-teal-50 to-cyan-100',
      details: 'Structured long-form video content to eliminate fluff, added context graphics, lower thirds, and balanced audio tracks for crisp voiceover output.'
    }
  ],
  experience: [
    {
      role: 'Independent Video Editor & Freelancer',
      company: 'Self-Employed',
      period: '2025 — PRESENT',
      location: 'Nashik, MH, India',
      description: 'Editing short films, YouTube content, and high-impact Instagram Reels for creators and indie projects.',
      highlights: [
        'Successfully edited a full indie short film from rough cut to final master.',
        'Crafted engaging short-form vertical edits optimized for Instagram algorithms.'
      ]
    }
  ]
};

export default function App() {
  const [profile, setProfile] = useState(INITIAL_PROFILE);
  const [editorOpen, setEditorOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  // UI Interactive States
  const [currentTime, setCurrentTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('All');
  const [projectFilter, setProjectFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Form State
  const [formState, setFormState] = useState({ name: '', email: '', service: 'Video Editing', budget: 'Standard', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      try {
        const options = {
          timeZone: profile.timeZone || 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        };
        setCurrentTime(now.toLocaleTimeString('en-US', options));
      } catch (e) {
        setCurrentTime(now.toLocaleTimeString('en-US'));
      }
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [profile.timeZone]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({ name: '', email: '', service: 'Video Editing', budget: 'Standard', message: '' });
    }, 4000);
  };

  const updateField = (key, value) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
  };

  const handleSkillChange = (index, field, value) => {
    const updated = [...profile.skills];
    updated[index][field] = value;
    setProfile({ ...profile, skills: updated });
  };

  const addSkill = () => {
    setProfile({
      ...profile,
      skills: [...profile.skills, { name: 'New Editing Skill', category: 'Video Editing', level: 'Intermediate' }]
    });
  };

  const removeSkill = (index) => {
    const updated = profile.skills.filter((_, i) => i !== index);
    setProfile({ ...profile, skills: updated });
  };

  const handleProjectChange = (index, field, value) => {
    const updated = [...profile.projects];
    if (field === 'tags') {
      updated[index][field] = value.split(',').map((t) => t.trim());
    } else {
      updated[index][field] = value;
    }
    setProfile({ ...profile, projects: updated });
  };

  const addProject = () => {
    setProfile({
      ...profile,
      projects: [
        ...profile.projects,
        {
          id: `0${profile.projects.length + 1}`,
          title: 'New Video Edit',
          category: 'Reels / Shorts',
          tags: ['Premiere Pro', 'DaVinci Resolve'],
          client: 'Client Name',
          year: '2026',
          summary: 'Description of the editing style, sound effects, and visual flow.',
          metrics: 'High Engagement',
          bgGradient: 'from-amber-100 via-rose-50 to-orange-100',
          details: 'Details regarding cuts, transitions, and software used.'
        }
      ]
    });
  };

  const removeProject = (index) => {
    const updated = profile.projects.filter((_, i) => i !== index);
    setProfile({ ...profile, projects: updated });
  };

  const filteredSkills = selectedSkillCategory === 'All'
    ? profile.skills
    : profile.skills.filter((s) => s.category === selectedSkillCategory);

  const filteredProjects = projectFilter === 'All'
    ? profile.projects
    : profile.projects.filter((p) => p.category === projectFilter);

  return (
    <div className="min-h-screen bg-[#f8f8f7] text-[#0f0f0f] font-sans antialiased selection:bg-neutral-900 selection:text-white relative overflow-x-hidden">
      
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-200/30 via-rose-200/20 to-transparent blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-slate-200/40 via-orange-100/20 to-transparent blur-[140px]" />
        <div className="absolute bottom-[5%] left-[5%] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-purple-100/30 via-pink-100/20 to-transparent blur-[130px]" />
      </div>

      {/* Decorative Background Typography Watermark */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[12vw] font-black tracking-tighter text-neutral-900/[0.025] select-none pointer-events-none whitespace-nowrap z-0 uppercase">
        {profile.name}
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#f8f8f7]/80 border-b border-neutral-200/70">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <a href="#" className="font-bold text-lg tracking-tight flex items-center gap-2 group shrink-0">
            <span className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-mono text-sm uppercase">
              {profile.name.split(' ').map(n => n[0]).join('')}
            </span>
            <span className="font-semibold text-neutral-900">
              {profile.name} <span className="text-xs font-mono text-neutral-400 font-normal">®</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-neutral-500 bg-white/60 px-3 py-1 rounded-full border border-neutral-200/60">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            <span>Nashik Time: {currentTime}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setEditorOpen(true)}
              className="px-3.5 py-1.5 text-xs font-semibold text-neutral-900 bg-amber-300 hover:bg-amber-400 rounded-full transition-all flex items-center gap-1.5 shadow-xs"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Portfolio</span>
            </button>

            <nav className="hidden md:flex items-center gap-5 text-xs font-medium text-neutral-600 ml-2">
              {['About', 'Work', 'Skills', 'Experience'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-neutral-950 transition-colors">
                  {item}
                </a>
              ))}
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-700"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 border-b border-neutral-200 px-6 py-6 shadow-xl space-y-4">
            <nav className="flex flex-col space-y-3 font-medium text-neutral-800">
              {['About', 'Work', 'Skills', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base hover:text-black py-1"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 pt-28 md:pt-36 pb-24 relative z-10 space-y-32">

        <section id="hero" className="space-y-10">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {profile.availability}
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-neutral-200/80 text-xs font-medium text-neutral-700">
              <Film className="w-3.5 h-3.5 text-amber-500" />
              <span>{profile.ratingText}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.08]">
                {profile.headline}
              </h1>
              <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl">
                {profile.bioShort}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#work"
                  className="px-6 py-3.5 bg-neutral-900 text-white font-medium rounded-full hover:bg-neutral-800 transition-all flex items-center gap-2 group text-sm"
                >
                  <Clapperboard className="w-4 h-4" />
                  View Edits & Reel
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-6 py-3.5 bg-white border border-neutral-200/90 text-neutral-800 font-medium rounded-full hover:bg-neutral-50 transition-all flex items-center gap-2 text-sm"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-neutral-500" />
                      <span>{profile.email}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 relative">
              <div className="relative mx-auto max-w-xs lg:max-w-none rounded-3xl p-3 bg-white/90 border border-neutral-200/80 shadow-xl group hover:rotate-1 transition-transform duration-500">
                <div className="overflow-hidden rounded-2xl relative aspect-4/5 bg-[#dbe4ee] flex items-center justify-center">
                  {profile.avatarUrl ? (
                    <img
                      src={profile.avatarUrl}
                      alt={profile.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                  ) : (
                    <div className="w-full h-full relative flex items-end justify-center bg-gradient-to-b from-[#e3eafd] via-[#c2d4ee] to-[#a3b8d6] overflow-hidden">
                      <svg viewBox="0 0 400 500" className="w-full h-full object-cover drop-shadow-md">
                        <defs>
                          <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3d5a80" />
                            <stop offset="100%" stopColor="#293241" />
                          </linearGradient>
                          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#c68a53" />
                            <stop offset="100%" stopColor="#a36b3b" />
                          </linearGradient>
                        </defs>
                        <circle cx="200" cy="180" r="160" fill="#ffffff" opacity="0.3" />
                        
                        <path d="M 80 500 L 130 350 L 170 330 L 200 350 L 230 330 L 270 350 L 320 500 Z" fill="url(#shirtGrad)" />
                        <path d="M 170 330 L 200 380 L 230 330 L 210 450 L 190 450 Z" fill="#2d425c" />
                        <circle cx="200" cy="390" r="3" fill="#ffffff" />
                        <circle cx="200" cy="430" r="3" fill="#ffffff" />

                        <rect x="175" y="270" width="50" height="70" rx="8" fill="#8f572b" />

                        <path d="M 135 150 Q 135 280 200 285 Q 265 280 265 150 Q 265 100 200 95 Q 135 100 135 150 Z" fill="url(#skinGrad)" />

                        <path d="M 142 190 Q 140 278 200 285 Q 260 278 258 190 Q 248 280 200 280 Q 152 280 142 190 Z" fill="#1e1b18" opacity="0.9" />
                        <path d="M 170 232 Q 200 220 230 232 Q 200 242 170 232 Z" fill="#1e1b18" opacity="0.85" />

                        <path d="M 182 248 Q 200 252 218 248" stroke="#754222" strokeWidth="3" fill="none" strokeLinecap="round" />

                        <path d="M 196 175 L 193 212 L 207 212" stroke="#855128" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                        <ellipse cx="170" cy="172" rx="11" ry="7" fill="#ffffff" />
                        <circle cx="170" cy="172" r="5" fill="#1a1412" />
                        <path d="M 152 158 Q 170 150 185 158" stroke="#120f0d" strokeWidth="5.5" fill="none" strokeLinecap="round" />
                        
                        <ellipse cx="230" cy="172" rx="11" ry="7" fill="#ffffff" />
                        <circle cx="230" cy="172" r="5" fill="#1a1412" />
                        <path d="M 215 158 Q 230 150 248 158" stroke="#120f0d" strokeWidth="5.5" fill="none" strokeLinecap="round" />

                        <path d="M 125 140 C 115 80, 160 30, 200 30 C 255 30, 280 80, 275 140 C 265 110, 250 90, 200 85 C 150 90, 135 110, 125 140 Z" fill="#120f0d" />
                        <path d="M 130 120 Q 165 50 220 55 Q 260 70 270 125 Q 250 80 200 75 Q 150 80 130 120 Z" fill="#241e1a" />
                      </svg>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs font-mono uppercase tracking-wider opacity-80">Location</div>
                    <div className="text-sm font-semibold flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" /> {profile.location}
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-3 bg-neutral-900 text-white text-xs font-mono px-3 py-1.5 rounded-full shadow-lg border border-neutral-700 flex items-center gap-1.5">
                  <Scissors className="w-3 h-3 text-amber-400" /> Premiere & DaVinci
                </div>
                <div className="absolute -bottom-3 -left-3 bg-white text-neutral-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md border border-neutral-200 flex items-center gap-1.5">
                  <Film className="w-3 h-3 text-purple-600" /> Short Films & Reels
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="space-y-12">
          <div className="border-b border-neutral-200/80 pb-4 flex items-end justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">01 // Background</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mt-1">About & Video Editing Skills</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 space-y-6 bg-white/80 p-8 rounded-3xl border border-neutral-200/80 shadow-xs">
              <h3 className="text-xl font-bold text-neutral-900">{profile.tagline}</h3>
              <p className="text-neutral-600 leading-relaxed">{profile.bioLong1}</p>
              <p className="text-neutral-600 leading-relaxed">{profile.bioLong2}</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-100 text-sm">
                <div>
                  <div className="text-xs font-mono text-neutral-400 uppercase">Specialization</div>
                  <div className="font-semibold text-neutral-800 mt-0.5">{profile.focusArea}</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-400 uppercase">Primary Software</div>
                  <div className="font-semibold text-neutral-800 mt-0.5">DaVinci & Premiere</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-400 uppercase">Base</div>
                  <div className="font-semibold text-neutral-800 mt-0.5">Nashik, India</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-white/80 p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-neutral-900 flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-neutral-500" />
                    Editing Toolkit & Focus
                  </h3>
                  <span className="text-xs font-mono text-neutral-400">{filteredSkills.length} Skills</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['All', 'Video Editing', 'Motion Graphics', 'Short Form', 'Narrative', 'Post Production'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedSkillCategory(cat)}
                      className={`text-xs px-2.5 py-1 rounded-full border transition-all ${
                        selectedSkillCategory === cat
                          ? 'bg-neutral-900 text-white border-neutral-900'
                          : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {filteredSkills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-neutral-100/80 text-neutral-800 px-3 py-1.5 rounded-xl text-xs font-medium border border-neutral-200/50"
                    >
                      <Film className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{skill.name}</span>
                      <span className="text-[10px] font-mono text-neutral-400 bg-white px-1.5 py-0.5 rounded-md">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 text-xs font-mono text-neutral-400">
                Tools: {profile.tools}
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="space-y-10">
          <div className="border-b border-neutral-200/80 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">02 // Portfolio</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mt-1">Projects & Editing Portfolio</h2>
            </div>

            <div className="flex items-center gap-1 bg-neutral-200/60 p-1 rounded-xl text-xs font-medium">
              {['All', 'Short Film', 'Reels / Shorts', 'YouTube'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setProjectFilter(filter)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    projectFilter === filter
                      ? 'bg-white text-neutral-900 font-semibold'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-3xl border border-neutral-200/80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`h-56 sm:h-64 bg-gradient-to-br ${project.bgGradient} p-6 relative flex flex-col justify-between border-b border-neutral-200/50`}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold bg-white/80 px-2.5 py-1 rounded-md text-neutral-800">
                        {project.id}
                      </span>
                      <span className="text-xs font-mono text-neutral-600 bg-white/60 px-2.5 py-1 rounded-md">
                        {project.year} • {project.client}
                      </span>
                    </div>

                    <div className="bg-white/90 rounded-2xl p-4 shadow-lg border border-white/80 flex items-center justify-between group-hover:scale-[1.02] transition-transform duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center">
                          <Play className="w-4 h-4 fill-white ml-0.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-neutral-900">{project.title}</div>
                          <div className="text-[10px] font-mono text-neutral-500">{project.category} Project</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((t, idx) => (
                        <span key={idx} className="text-[11px] font-mono bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900">{project.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{project.summary}</p>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-2 flex items-center justify-between border-t border-neutral-100 mt-2">
                  <span className="text-xs font-mono font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                    {project.metrics}
                  </span>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-neutral-900 flex items-center gap-1 group-hover:underline"
                  >
                    Details <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-12">
          <div className="border-b border-neutral-200/80 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">03 // Track Record</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mt-1">Editing Experience</h2>
          </div>

          <div className="relative border-l-2 border-neutral-200/80 ml-3 md:ml-6 space-y-10 pl-6 md:pl-10">
            {profile.experience.map((exp, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-neutral-900 border-2 border-neutral-900 ring-4 ring-neutral-200" />

                <div className="bg-white/80 rounded-3xl border border-neutral-200/80 p-6 sm:p-8 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-neutral-900">{exp.role}</h3>
                        <span className="text-xs font-mono text-neutral-500">@ {exp.company}</span>
                      </div>
                      <p className="text-xs text-neutral-500 font-mono mt-0.5">{exp.location}</p>
                    </div>

                    <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full border border-neutral-200 self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="pt-4 border-t border-neutral-100 space-y-2.5">
                    <div className="text-xs font-mono text-neutral-400 uppercase">Key Highlights</div>
                    <ul className="space-y-2">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-xs sm:text-sm text-neutral-700 flex items-start gap-2">
                          <span className="text-emerald-600 font-bold mt-0.5">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="space-y-12">
          <div className="border-b border-neutral-200/80 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">04 // Get In Touch</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mt-1">Let’s Edit Your Next Project</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-neutral-900">Get in direct touch with Shubham</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Open for freelance video editing projects, YouTube edits, short film editing, and high-retention Instagram Reels.
                </p>
              </div>

              <div className="space-y-3">
                <div
                  onClick={handleCopyEmail}
                  className="p-4 bg-white rounded-2xl border border-neutral-200/80 shadow-xs hover:border-neutral-400 cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-neutral-100 rounded-xl text-neutral-700">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-neutral-400 uppercase">Direct Email</div>
                      <div className="text-sm font-semibold text-neutral-900">{profile.email}</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-neutral-500 group-hover:text-neutral-900 underline">
                    {copiedEmail ? 'Copied!' : 'Copy'}
                  </span>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-neutral-200/80 shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-neutral-100 rounded-xl text-neutral-700">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-neutral-400 uppercase">Phone / WhatsApp</div>
                      <div className="text-sm font-semibold text-neutral-900">{profile.phone}</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-neutral-200/80 shadow-xs flex items-center gap-3">
                  <div className="p-2.5 bg-neutral-100 rounded-xl text-neutral-700">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-neutral-400 uppercase">Location</div>
                    <div className="text-sm font-semibold text-neutral-900">{profile.location}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-mono uppercase text-neutral-400">Social Channels</div>
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-xs font-semibold hover:opacity-90 transition-all shadow-xs"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram (@rix_k_)</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-xl">
              {formSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">Message Sent!</h3>
                  <p className="text-neutral-600 text-sm max-w-md mx-auto">
                    Thank you. Shubham will review your video editing request and reply shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-medium text-neutral-700 uppercase">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono font-medium text-neutral-700 uppercase">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="rahul@creator.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-medium text-neutral-700 uppercase">Editing Type Required</label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
                    >
                      <option value="Short Film Editing">Short Film Editing</option>
                      <option value="Instagram Reels / Shorts">Instagram Reels / Shorts</option>
                      <option value="YouTube Video Editing">YouTube Video Editing</option>
                      <option value="Color Grading & SFX">Color Grading & SFX</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-medium text-neutral-700 uppercase">Project Details & Footage Links</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Hi Shubham, I have raw footage for a short film / Reel..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-neutral-900 text-white font-medium rounded-2xl hover:bg-neutral-800 transition-all shadow-md flex items-center justify-center gap-2 group text-sm"
                  >
                    <span>Send Editing Request to Shubham</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

      </main>

      {editorOpen && (
        <div className="fixed inset-0 z-50 bg-neutral-950/70 backdrop-blur-md flex justify-end">
          <div className="bg-white w-full max-w-xl h-full shadow-2xl flex flex-col justify-between border-l border-neutral-200 overflow-y-auto">
            <div className="p-6 border-b border-neutral-200 sticky top-0 bg-white/95 backdrop-blur-sm z-20 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Edit3 className="w-4 h-4 text-amber-500" />
                  <h3 className="font-bold text-lg text-neutral-900">Customize Profile</h3>
                </div>
                <p className="text-xs text-neutral-500">Edit fields to dynamically update details.</p>
              </div>
              <button onClick={() => setEditorOpen(false)} className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-6 py-2 border-b border-neutral-100 bg-neutral-50 flex items-center gap-2 text-xs font-mono">
              {[
                { id: 'profile', label: '1. Basic Info' },
                { id: 'skills', label: '2. Skills' },
                { id: 'projects', label: '3. Projects' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-md font-semibold transition-all ${
                    activeTab === tab.id ? 'bg-neutral-900 text-white' : 'text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-6 space-y-6 flex-1 overflow-y-auto">
              {activeTab === 'profile' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono font-medium text-neutral-600">Full Name</label>
                      <input
                        type="text"
                        value={profile.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-neutral-50"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono font-medium text-neutral-600">Location</label>
                      <input
                        type="text"
                        value={profile.location}
                        onChange={(e) => updateField('location', e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-neutral-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono font-medium text-neutral-600">Custom Image URL (Optional)</label>
                    <input
                      type="text"
                      placeholder="Paste image link or leave empty for custom portrait"
                      value={profile.avatarUrl}
                      onChange={(e) => updateField('avatarUrl', e.target.value)}
                      className="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-neutral-50"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono font-medium text-neutral-600">Headline</label>
                    <textarea
                      rows={2}
                      value={profile.headline}
                      onChange={(e) => updateField('headline', e.target.value)}
                      className="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-neutral-50 resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono font-medium text-neutral-600">Email Address</label>
                      <input
                        type="text"
                        value={profile.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-neutral-50"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono font-medium text-neutral-600">Phone</label>
                      <input
                        type="text"
                        value={profile.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-neutral-50"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'skills' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-neutral-500">Edit Skill Matrix</span>
                    <button onClick={addSkill} className="text-xs font-semibold px-3 py-1 bg-neutral-900 text-white rounded-md flex items-center gap-1">
                      <Plus className="w-3 h-3" /> Add Skill
                    </button>
                  </div>

                  <div className="space-y-3">
                    {profile.skills.map((skill, index) => (
                      <div key={index} className="p-3 border rounded-xl bg-neutral-50 flex items-center gap-2">
                        <input
                          type="text"
                          value={skill.name}
                          onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                          className="flex-1 px-2 py-1 text-xs border rounded"
                        />
                        <button onClick={() => removeSkill(index)} className="p-1 text-rose-600 hover:bg-rose-50 rounded">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'projects' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-neutral-500">Edit Projects</span>
                    <button onClick={addProject} className="text-xs font-semibold px-3 py-1 bg-neutral-900 text-white rounded-md flex items-center gap-1">
                      <Plus className="w-3 h-3" /> Add Project
                    </button>
                  </div>

                  <div className="space-y-4">
                    {profile.projects.map((proj, index) => (
                      <div key={index} className="p-4 border rounded-2xl bg-neutral-50 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold">Project #{index + 1}</span>
                          <button onClick={() => removeProject(index)} className="text-xs text-rose-600 hover:underline">
                            Remove
                          </button>
                        </div>

                        <input
                          type="text"
                          value={proj.title}
                          onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                          className="w-full px-2.5 py-1 text-xs border rounded bg-white"
                        />

                        <textarea
                          rows={2}
                          value={proj.summary}
                          onChange={(e) => handleProjectChange(index, 'summary', e.target.value)}
                          className="w-full px-2.5 py-1 text-xs border rounded bg-white resize-none"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-neutral-200 sticky bottom-0 bg-white/95 backdrop-blur-sm flex items-center justify-between">
              <button
                onClick={() => setProfile(INITIAL_PROFILE)}
                className="text-xs font-mono text-neutral-500 hover:text-neutral-900 flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset Defaults
              </button>
              <button
                onClick={() => setEditorOpen(false)}
                className="px-6 py-2.5 bg-neutral-900 text-white rounded-full text-xs font-semibold"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="border-t border-neutral-200/80 bg-white/50 backdrop-blur-sm py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-neutral-500 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>© {new Date().getFullYear()} {profile.name} • Video Editor • Nashik, Maharashtra</span>
          </div>

          <div className="flex items-center gap-6">
            <a href={profile.instagram} target="_blank" rel="noreferrer" className="hover:text-neutral-900 underline">
              Instagram
            </a>
            <a href="#hero" className="hover:text-neutral-900 transition-colors">Back to top ↑</a>
          </div>
        </div>
      </footer>

      {/* Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-neutral-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white max-w-2xl w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative border border-neutral-200">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                {activeModalProject.category} • {activeModalProject.year}
              </span>
              <h3 className="text-2xl font-bold text-neutral-900">{activeModalProject.title}</h3>
            </div>

            <div className="space-y-4 text-neutral-600 text-sm leading-relaxed border-t border-neutral-100 pt-4">
              <p>{activeModalProject.details}</p>
              <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200/80 font-mono text-xs text-neutral-800">
                <strong>Highlight:</strong> {activeModalProject.metrics}
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 bg-neutral-900 text-white rounded-full text-xs font-semibold"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
