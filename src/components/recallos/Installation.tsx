import { useState, useEffect } from "react";
import { Check, Copy, Terminal as TerminalIcon, Github } from "lucide-react";
import { SectionHeader } from "./Problem";

const GITHUB_URL = "https://github.com/recallos636/recall-core-memory";

const commands = [
  { cmd: "pip install recallos", out: "Successfully installed recallos" },
  { cmd: "recallos init", out: "✓ memory vault created\n✓ embeddings initialized\n✓ vector database connected\n✓ retrieval engine online\n✓ memory graph generated" },
  { cmd: "recallos memory create", out: "✓ memory collection active" },
];

export function Installation() {
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState(0);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (step >= commands.length) return;
    
    let currentText = "";
    const targetText = commands[step].cmd;
    let i = 0;
    
    setIsTyping(true);
    const interval = setInterval(() => {
      currentText += targetText[i];
      setText(currentText);
      i++;
      if (i >= targetText.length) {
        clearInterval(interval);
        setIsTyping(false);
        setTimeout(() => {
          setStep(s => s + 1);
          setText("");
        }, 1500);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, [step]);

  const copyInstall = () => {
    navigator.clipboard.writeText("pip install recallos");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative mx-auto mt-32 max-w-5xl px-4">
      <SectionHeader
        eyebrow="Installation"
        title="Build your memory layer."
        subtitle="One command to install. One command to initialize. Your knowledge becomes persistent forever."
      />
      
      <div className="mt-12 relative group animate-fade-up">
        {/* Glow effect behind terminal */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#7CFF8A]/30 to-[#4AFF71]/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
        
        <div className="relative rounded-2xl bg-[#050A07]/90 border border-[#7CFF8A]/20 backdrop-blur-xl overflow-hidden shadow-[0_0_40px_rgba(124,255,138,0.1)]">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center gap-2 text-xs text-white/40 font-mono">
              <TerminalIcon className="h-3.5 w-3.5" />
              bash
            </div>
            <button 
              onClick={copyInstall}
              className="flex items-center justify-center h-7 w-7 rounded-md hover:bg-white/10 text-white/50 hover:text-white transition-colors"
              title="Copy install command"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-[#7CFF8A]" /> : <Copy className="h-3.5 w-3.5" />}
            </button>
          </div>
          
          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm sm:text-base leading-relaxed min-h-[320px]">
            {commands.map((c, i) => (
              <div key={i} className={`mb-4 ${i > step ? 'hidden' : ''}`}>
                <div className="flex items-start gap-3">
                  <span className="text-[#7CFF8A] shrink-0">~</span>
                  <span className="text-white">
                    {i === step ? text : c.cmd}
                    {i === step && isTyping && (
                      <span className="inline-block w-2 h-4 ml-1 bg-[#7CFF8A] animate-pulse align-middle" />
                    )}
                  </span>
                </div>
                {i < step && (
                  <div className="mt-2 ml-5 text-[#65FF9A]/70 whitespace-pre-line">
                    {c.out}
                  </div>
                )}
              </div>
            ))}
            {step >= commands.length && (
              <div className="flex items-center gap-3">
                <span className="text-[#7CFF8A]">~</span>
                <span className="inline-block w-2 h-4 bg-[#7CFF8A] animate-pulse align-middle" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* GitHub CTA below terminal */}
      <div className="mt-6 flex items-center justify-center gap-4 text-sm">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/60 transition-all hover:border-[#7CFF8A]/30 hover:text-[#7CFF8A] hover:bg-[#7CFF8A]/5"
        >
          <Github className="h-4 w-4" />
          View source on GitHub
        </a>
      </div>
    </section>
  );
}
