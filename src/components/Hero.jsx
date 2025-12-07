import React, { useState, useEffect, useRef } from "react";

export const Hero = () => {
  const [active, setActive] = useState(0);
  const [badgeIndex, setBadgeIndex] = useState(0);
  const [badgeText, setBadgeText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const badgeMessages = [
    "100% local — your data never leaves your device",
    "India's first AI to make your OS smart",
    "Works with any browser, any app",
    "No cloud, no subscriptions, just you",
  ];

  const scenarios = [
    { app: "Gmail", window: <GmailWindow />, aiText: "Found an invoice — ₹45,000 from ABC Corp. Want me to save it?" },
    { app: "VS Code", window: <VSCodeWindow />, aiText: "I see an error on line 23. Need help fixing it?" },
    { app: "n8n", window: <N8nWindow />, aiText: "Setting up Google Sheets? I'll guide you step by step." },
    { app: "Terminal", window: <TerminalWindow />, aiText: "Found your MongoDB URI from last month." },
  ];

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % scenarios.length), 5000);
    return () => clearInterval(timer);
  }, []);

  // Badge typing animation
  useEffect(() => {
    const currentMessage = badgeMessages[badgeIndex];
    let index = 0;
    setBadgeText("");
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (index < currentMessage.length) {
        setBadgeText(currentMessage.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        setTimeout(() => {
          setBadgeIndex((prev) => (prev + 1) % badgeMessages.length);
        }, 2500);
      }
    }, 40);

    return () => clearInterval(typeInterval);
  }, [badgeIndex]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left - rect.width / 2) / 40,
      y: (e.clientY - rect.top - rect.height / 2) / 40,
    });
  };

  return (
    <section ref={containerRef} onMouseMove={handleMouseMove} className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-to-bl from-orange-500/20 to-transparent rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-tr from-amber-500/15 to-transparent rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-20">
        {/* Hero Content */}
        <div className="text-center mb-12 md:mb-20">
          {/* Badge */}
          <div className="mb-6 md:mb-8">
            <span className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 rounded-full bg-white/[0.03] border border-white/[0.06]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs sm:text-sm text-gray-400 min-w-[200px] sm:min-w-[280px]">
                {badgeText}
                <span className={`inline-block w-0.5 h-3 sm:h-4 bg-orange-500 ml-0.5 align-middle ${isTyping ? 'animate-pulse' : 'opacity-0'}`} />
              </span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8">
            <span className="text-white">AI that's </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">always</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">with you</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
            On every screen, in every app. Helping with setups, fixing errors, saving important data.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 md:mb-8">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-white text-sm sm:text-base bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download for Free
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/[0.03] border border-white/[0.08] rounded-xl sm:rounded-2xl font-medium text-white text-sm sm:text-base flex items-center justify-center gap-2">
              Watch Demo
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              </svg>
            </button>
          </div>

          {/* Trust Points */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
            {["No signup required", "Works offline", "Windows & Mac"].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5 sm:gap-2">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500/70" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Product Demo */}
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-orange-500/10 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl" />

          {/* Desktop Frame */}
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0c0c10] shadow-2xl">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-4 bg-[#111116] border-b border-white/[0.05]">
              <div className="flex gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/10" />
              </div>

              {/* App Tabs - Scrollable on mobile */}
              <div className="flex gap-1 overflow-x-auto scrollbar-hide">
                {scenarios.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                      i === active ? "bg-white/[0.08] text-white" : "text-gray-500"
                    }`}
                  >
                    {s.app}
                  </button>
                ))}
              </div>

              <div className="hidden sm:flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs text-gray-500">Active</span>
              </div>
            </div>

            {/* Content Area */}
            <div className="relative h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
              <div className="absolute inset-0">{scenarios[active].window}</div>

              {/* AI Assistant Popup */}
              <div className="absolute bottom-3 sm:bottom-6 md:bottom-8 right-3 sm:right-6 md:right-8 left-3 sm:left-auto">
                <div className="w-full sm:w-72 md:w-80 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-[#16161c]/95 backdrop-blur-xl border border-white/[0.08] shadow-2xl">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                      <span className="text-white font-bold text-xs sm:text-sm">भा</span>
                    </div>
                    <div>
                      <div className="text-white font-medium text-xs sm:text-sm">Bharat MCP</div>
                      <div className="text-green-400/80 text-[10px] sm:text-xs flex items-center gap-1">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-400" />
                        Watching
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{scenarios[active].aiText}</p>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 sm:py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg sm:rounded-xl text-white text-xs sm:text-sm font-medium">
                      Yes, help me
                    </button>
                    <button className="py-2 sm:py-2.5 px-3 sm:px-4 bg-white/[0.03] border border-white/[0.08] rounded-lg sm:rounded-xl text-gray-400 text-xs sm:text-sm">
                      Later
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dock */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 py-3 sm:py-4 bg-[#0a0a0e] border-t border-white/[0.05]">
              {[FolderIcon, GlobeIcon, MailIcon, CodeIcon].map((Icon, i) => (
                <div key={i} className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white/[0.03] flex items-center justify-center">
                  <Icon />
                </div>
              ))}
              <div className="w-px h-6 sm:h-8 bg-white/[0.08] mx-1 sm:mx-2" />
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                <span className="text-white font-bold text-xs sm:text-sm">भा</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FolderIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const GmailWindow = () => (
  <div className="h-full bg-[#0f0f14] flex">
    <div className="w-40 md:w-56 bg-[#111118] p-3 md:p-5 border-r border-white/[0.05] hidden sm:block">
      <div className="px-3 py-2 bg-blue-500/10 text-blue-400 rounded-lg text-xs md:text-sm font-medium mb-4">Compose</div>
      <div className="space-y-1 text-xs md:text-sm">
        <div className="px-3 py-2 bg-white/[0.05] text-white rounded-lg">Inbox <span className="float-right text-gray-500">66</span></div>
        <div className="px-3 py-2 text-gray-500">Starred</div>
      </div>
    </div>
    <div className="flex-1 p-4 sm:p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">A</div>
        <div>
          <div className="text-white font-medium text-sm">ABC Corp Finance</div>
          <div className="text-gray-500 text-xs">Invoice for March Services</div>
        </div>
      </div>
      <div className="space-y-2 text-gray-400 text-xs sm:text-sm">
        <p>Dear Team,</p>
        <p>Please find attached the invoice.</p>
        <p className="text-white font-medium">Amount: ₹45,000 + GST</p>
      </div>
      <div className="mt-4 inline-flex items-center gap-3 px-3 py-2 bg-white/[0.03] rounded-lg border border-white/[0.06]">
        <div className="w-8 h-10 bg-red-500/10 rounded flex items-center justify-center text-red-400 text-[10px] font-bold">PDF</div>
        <div>
          <div className="text-white text-xs font-medium">Invoice_March.pdf</div>
          <div className="text-gray-500 text-[10px]">245 KB</div>
        </div>
      </div>
    </div>
  </div>
);

const VSCodeWindow = () => (
  <div className="h-full bg-[#1e1e1e] flex">
    <div className="w-40 bg-[#252526] p-3 border-r border-white/[0.05] hidden md:block">
      <div className="text-gray-500 text-[10px] mb-3 uppercase tracking-wider">Explorer</div>
      <div className="space-y-0.5 text-xs">
        <div className="px-2 py-1.5 text-gray-400">src</div>
        <div className="px-2 py-1.5 bg-[#37373d] text-white rounded ml-2">main.py</div>
      </div>
    </div>
    <div className="flex-1 p-4 sm:p-6 font-mono">
      <div className="text-gray-500 text-[10px] sm:text-xs mb-3">main.py</div>
      <pre className="text-gray-400 text-[10px] sm:text-xs md:text-sm leading-5 sm:leading-6">
{`21  def get_user(data):
22      user = data.get('user')`}
      </pre>
      <pre className="text-red-400 bg-red-500/10 px-2 py-1 rounded text-[10px] sm:text-xs md:text-sm leading-5 sm:leading-6 inline-block">
{`23      return user.name  # Error`}
      </pre>
      <div className="mt-4 sm:mt-6 px-3 py-2 bg-red-500/10 border-l-2 border-red-500 rounded-r text-red-400 text-[10px] sm:text-xs">
        TypeError: Cannot read 'name' of undefined
      </div>
    </div>
  </div>
);

const N8nWindow = () => (
  <div className="h-full bg-[#1a1a1f] p-4 sm:p-6 md:p-8">
    <div className="flex items-center gap-3 mb-6 sm:mb-10">
      <span className="text-white font-medium text-sm">My Workflow</span>
      <button className="px-2 py-1 bg-green-500 text-white text-xs rounded font-medium">Execute</button>
    </div>
    <div className="flex items-center justify-center gap-3 sm:gap-6 py-6 sm:py-12">
      {[{ color: "bg-purple-500", name: "Webhook" }, { color: "bg-green-500", name: "Sheets", error: true }, { color: "bg-blue-500", name: "Email" }].map((node, i) => (
        <div key={i} className="flex items-center gap-3 sm:gap-6">
          <div className="flex flex-col items-center gap-1.5">
            <div className={`relative w-10 h-10 sm:w-14 sm:h-14 ${node.color} rounded-lg sm:rounded-xl flex items-center justify-center`}>
              <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {node.error && <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">!</div>}
            </div>
            <span className="text-gray-500 text-[10px] sm:text-xs">{node.name}</span>
          </div>
          {i < 2 && <div className="w-6 sm:w-12 h-0.5 bg-gray-700 rounded-full" />}
        </div>
      ))}
    </div>
    <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-400 text-[10px] sm:text-xs">
      Google Sheets node needs credentials.
    </div>
  </div>
);

const TerminalWindow = () => (
  <div className="h-full bg-[#0d1117] p-4 sm:p-6 md:p-8 font-mono">
    <div className="text-gray-600 text-[10px] sm:text-xs mb-4">~ Terminal</div>
    <div className="space-y-3">
      <div className="text-gray-300 text-[10px] sm:text-xs md:text-sm">
        <span className="text-green-400">➜</span> "What was my MongoDB connection string?"
      </div>
      <div className="text-gray-600 text-[10px] sm:text-xs">Searching...</div>
      <div className="mt-4 p-3 bg-white/[0.03] rounded-lg border border-white/[0.06]">
        <div className="text-gray-500 text-[10px] mb-1">Found from Nov 15, 2024:</div>
        <div className="text-green-400 text-[10px] sm:text-xs break-all">mongodb+srv://user:****@cluster0.mongodb.net/mydb</div>
      </div>
    </div>
  </div>
);