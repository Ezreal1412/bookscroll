import { useState, useEffect, useRef } from "react";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    color: "#C8A96E",
    chapter: "Chapter 1 · The Surprising Power of Tiny Habits",
    tag: "🧠 Core Idea",
    content: "You don't rise to the level of your goals. You fall to the level of your systems.",
    sub: "Goals are about the results you want to achieve. Systems are about the processes that lead to those results.",
    deepRead: {
      title: "The Surprising Power of Tiny Habits",
      readTime: "8 min read",
      sections: [
        { type: "passage", text: "It is so easy to overestimate the importance of one defining moment and underestimate the value of making small improvements on a daily basis. Too often, we convince ourselves that massive success requires massive action. Whether it is losing weight, building a business, writing a book, winning a championship, or achieving any other goal, we put pressure on ourselves to make some earth-shattering improvement that everyone will talk about." },
        { type: "reflection", prompt: "Think of a goal you've been pursuing. What's the 'massive action' you've been waiting to take — and what's a 1% version of it you could do today?" },
        { type: "passage", text: "Meanwhile, improving by 1 percent isn't particularly notable — sometimes it isn't even noticeable — but it can be far more meaningful, especially in the long run. The difference a tiny improvement can make over time is surprising. Here's how the math works out: if you can get 1 percent better each day for one year, you'll end up thirty-seven times better by the time you're done." },
        { type: "keyidea", idea: "1% better every day = 37× better in a year. 1% worse every day = nearly zero. Time amplifies whatever you feed it." },
        { type: "passage", text: "Habits are the compound interest of self-improvement. The same way that money multiplies through compound interest, the effects of your habits multiply as you repeat them. They seem to make little difference on any given day and yet the impact they deliver over the months and years can be enormous." },
        { type: "reflection", prompt: "Name one habit — good or bad — that has compounded in your life over the last 3 years. What has it built or eroded?" },
        { type: "passage", text: "Unfortunately, the slow pace of transformation also makes it easy to let a bad habit slide. If you eat an unhealthy meal today, the scale doesn't move much. If you work late tonight and ignore your family, they'll forgive you. A single decision is easy to dismiss. But when we repeat 1 percent errors, day after day, our small choices compound into toxic results." },
        { type: "reflection", prompt: "What's a 'small' bad habit you've been dismissing as harmless? What might it look like compounded over 5 years?" },
        { type: "keyidea", idea: "You don't rise to the level of your goals. You fall to the level of your systems. Goals set the direction. Systems determine progress." },
      ],
    },
  },
  {
    id: 2,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    color: "#7EB8C9",
    chapter: "Chapter 4 · The Associative Machine",
    tag: "🧠 Core Idea",
    content: "System 1 operates automatically and quickly. System 2 allocates attention to effortful mental activities.",
    sub: "Most of our mistakes happen when System 1 is driving and we think System 2 is at the wheel.",
    deepRead: {
      title: "The Associative Machine",
      readTime: "7 min read",
      sections: [
        { type: "passage", text: "To think clearly about the future, it helps to have a clear understanding of how the mind works. The mind that makes decisions is not a single unified agent. It is more like a collection of processes, some fast and automatic, others slow and deliberate." },
        { type: "keyidea", idea: "System 1: fast, automatic, emotional, unconscious. System 2: slow, deliberate, logical, effortful. Both are always running — but only one is usually in charge." },
        { type: "passage", text: "System 1 operates automatically and quickly, with little or no effort and no sense of voluntary control. System 2 allocates attention to the effortful mental activities that demand it, including complex computations. The operations of System 2 are often associated with the subjective experience of agency, choice, and concentration." },
        { type: "reflection", prompt: "Think of a recent decision you made quickly. Was System 1 actually right — or did it steer you wrong? What would System 2 have said if you gave it time?" },
        { type: "passage", text: "When we think of ourselves, we identify with System 2, the conscious, reasoning self that has beliefs, makes choices, and decides what to think about and what to do. Although System 2 believes itself to be where the action is, the automatic System 1 is the hero of the book. System 1 effortlessly originates impressions and feelings that are the main sources of the explicit beliefs and deliberate choices of System 2." },
        { type: "reflection", prompt: "In what areas of your life do you trust your gut (System 1) when you probably shouldn't? Where do you over-analyze when intuition would serve better?" },
        { type: "keyidea", idea: "You are not the rational thinker you believe yourself to be. Most of your judgments were made before you were aware you were judging. Awareness is the first step to better thinking." },
      ],
    },
  },
  {
    id: 3,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    color: "#A8C5A0",
    chapter: "Chapter 3 · Never Enough",
    tag: "💬 Quote",
    content: "The hardest financial skill is getting the goalpost to stop moving.",
    sub: "Modern capitalism is both a wealth-generating and envy-generating machine. Enough is almost always more than we imagined before we had it.",
    deepRead: {
      title: "Never Enough",
      readTime: "6 min read",
      sections: [
        { type: "passage", text: "At a party given by a billionaire on Shelter Island, Kurt Vonnegut informs his pal, Joseph Heller, that their host had made more money in a single day than Heller had earned from his wildly popular novel Catch-22 over its entire history. Heller responds: 'Yes, but I have something he will never have: enough.'" },
        { type: "reflection", prompt: "What does 'enough' look like for you — in money, in work, in recognition? Have you ever defined it clearly, or does the goalpost keep moving?" },
        { type: "passage", text: "The hardest financial skill is getting the goalpost to stop moving. But it's one of the most important. If expectations rise with results there is no logic in striving for more because you'll feel the same after putting in extra effort. It gets dangerous when the taste of having more — more money, more power, more prestige — increases ambition faster than satisfaction." },
        { type: "keyidea", idea: "Social comparison is the thief of 'enough.' When your benchmark is other people, the finish line moves every time someone passes you." },
        { type: "passage", text: "There are many things never worth risking, no matter the potential gain. Reputation is invaluable. Freedom and independence are invaluable. Family and friends are invaluable. Being loved by those who you want to love you is invaluable. And your best shot at keeping these things is knowing when it's time to stop." },
        { type: "reflection", prompt: "What have you risked — or almost risked — chasing more, that you already had enough of? What would you protect at all costs?" },
        { type: "keyidea", idea: "Enough is not too little. Knowing what enough is — and stopping there — might be the most powerful financial move you ever make." },
      ],
    },
  },
  {
    id: 4,
    title: "Man's Search for Meaning",
    author: "Viktor Frankl",
    color: "#D4A5A5",
    chapter: "Part One · Experiences in a Concentration Camp",
    tag: "💬 Quote",
    content: "Between stimulus and response there is a space. In that space is our power to choose our response.",
    sub: "Even in the most brutal conditions, Frankl noticed that some prisoners retained an inner freedom no one could take away.",
    deepRead: {
      title: "The Last of the Human Freedoms",
      readTime: "9 min read",
      sections: [
        { type: "passage", text: "We who lived in concentration camps can remember the men who walked through the huts comforting others, giving away their last piece of bread. They may have been few in number, but they offer sufficient proof that everything can be taken from a man but one thing: the last of the human freedoms — to choose one's attitude in any given set of circumstances, to choose one's own way." },
        { type: "reflection", prompt: "Think of a situation where your circumstances were difficult but your response was still yours to choose. Did you choose consciously — or did you react automatically?" },
        { type: "passage", text: "And there were always choices to make. Every day, every hour, offered the opportunity to make a decision, a decision which determined whether you would or would not submit to those powers which threatened to rob you of your very self, your inner freedom; which determined whether or not you would become the plaything of circumstance." },
        { type: "keyidea", idea: "Freedom is not about what happens to you. It is about the space between what happens and how you respond. That space is yours — always." },
        { type: "passage", text: "Dostoevski said once, 'There is only one thing that I dread: not to be worthy of my sufferings.' These words frequently came to my mind after I became acquainted with those martyrs whose behavior in camp, whose suffering and death, bore witness to the fact that the last inner freedom cannot be lost." },
        { type: "reflection", prompt: "What suffering or difficulty in your life are you currently facing? What would it mean to be 'worthy' of it — to let it make you rather than break you?" },
        { type: "keyidea", idea: "Meaning is not found — it is made. Even in suffering, especially in suffering, you can choose what it means to you. That choice is the root of human dignity." },
      ],
    },
  },
];

const grain = {
  position: "absolute", inset: 0, opacity: 0.035, pointerEvents: "none",
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
  backgroundSize: "120px",
};

// ─── DEEP READ MODE ───────────────────────────────────────────────────────────

function DeepReadMode({ book, onClose }) {
  const [step, setStep] = useState(0);
  const [notes, setNotes] = useState({});
  const [revealed, setRevealed] = useState(false);
  const sections = book.deepRead.sections;
  const current = sections[step];
  const isLast = step === sections.length - 1;
  const progress = ((step + 1) / sections.length) * 100;

  useEffect(() => {
    setRevealed(false);
    const t = setTimeout(() => setRevealed(true), 80);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 200, background: "#080808",
      display: "flex", flexDirection: "column",
      fontFamily: "'Georgia', 'Times New Roman', serif", overflowY: "auto",
    }}>
      <div style={grain} />

      {/* Header */}
      <div style={{
        position: "sticky", top: 0, zIndex: 10,
        background: "#080808ee", backdropFilter: "blur(12px)",
        padding: "16px 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        borderBottom: "1px solid #1a1a1a",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <span style={{ fontSize: 11, color: book.color, fontFamily: "sans-serif", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Deep Read · {book.title}
          </span>
          <span style={{ fontSize: 10, color: "#444", fontFamily: "sans-serif" }}>{book.deepRead.readTime}</span>
        </div>
        <button onClick={onClose} style={{
          background: "none", border: "1px solid #222", borderRadius: 2,
          color: "#555", fontSize: 11, fontFamily: "sans-serif",
          letterSpacing: "0.1em", padding: "6px 14px", cursor: "pointer",
        }}>← BACK</button>
      </div>

      {/* Progress bar */}
      <div style={{ height: 2, background: "#111", position: "sticky", top: 57, zIndex: 10 }}>
        <div style={{ height: "100%", background: book.color, width: `${progress}%`, transition: "width 0.6s cubic-bezier(0.22,1,0.36,1)" }} />
      </div>

      {/* Content */}
      <div style={{ maxWidth: 620, margin: "0 auto", padding: "48px 24px 80px", width: "100%" }}>

        {step === 0 && (
          <div style={{ marginBottom: 48, opacity: revealed ? 1 : 0, transform: revealed ? "none" : "translateY(16px)", transition: "all 0.7s ease" }}>
            <div style={{ fontSize: 11, color: "#444", fontFamily: "sans-serif", letterSpacing: "0.2em", marginBottom: 12, textTransform: "uppercase" }}>
              {book.chapter}
            </div>
            <h1 style={{ fontSize: "clamp(24px, 5vw, 36px)", color: "#F0EDE8", fontWeight: 400, fontStyle: "italic", margin: 0, lineHeight: 1.3 }}>
              {book.deepRead.title}
            </h1>
          </div>
        )}

        <div style={{ fontSize: 10, color: "#333", fontFamily: "sans-serif", letterSpacing: "0.2em", marginBottom: 32, opacity: revealed ? 1 : 0, transition: "opacity 0.5s ease 0.1s" }}>
          {step + 1} / {sections.length}
        </div>

        {/* PASSAGE */}
        {current.type === "passage" && (
          <div style={{ opacity: revealed ? 1 : 0, transform: revealed ? "none" : "translateY(24px)", transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.15s" }}>
            <p style={{ fontSize: "clamp(16px, 2.8vw, 20px)", lineHeight: 1.85, color: "#C8C3BB", margin: 0, borderLeft: `2px solid ${book.color}55`, paddingLeft: 20 }}>
              {current.text}
            </p>
          </div>
        )}

        {/* KEY IDEA */}
        {current.type === "keyidea" && (
          <div style={{ opacity: revealed ? 1 : 0, transform: revealed ? "none" : "translateY(24px)", transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.15s", background: `${book.color}12`, border: `1px solid ${book.color}33`, borderRadius: 4, padding: "24px 28px" }}>
            <div style={{ fontSize: 10, color: book.color, fontFamily: "sans-serif", letterSpacing: "0.2em", marginBottom: 14, textTransform: "uppercase" }}>✦ Key Idea</div>
            <p style={{ fontSize: "clamp(15px, 2.5vw, 18px)", lineHeight: 1.7, color: "#E8E3DB", margin: 0, fontStyle: "italic" }}>{current.idea}</p>
          </div>
        )}

        {/* REFLECTION — personal notes, no AI */}
        {current.type === "reflection" && (
          <div style={{ opacity: revealed ? 1 : 0, transform: revealed ? "none" : "translateY(24px)", transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.15s" }}>
            <div style={{ fontSize: 10, color: "#888", fontFamily: "sans-serif", letterSpacing: "0.2em", marginBottom: 20, textTransform: "uppercase" }}>✦ Your Reflection</div>
            <p style={{ fontSize: "clamp(16px, 2.8vw, 20px)", lineHeight: 1.75, color: "#D0C9BE", margin: "0 0 28px", fontStyle: "italic" }}>
              {current.prompt}
            </p>
            <textarea
              value={notes[step] || ""}
              onChange={e => setNotes(prev => ({ ...prev, [step]: e.target.value }))}
              placeholder="Write your thoughts here... (just for you)"
              rows={6}
              style={{
                width: "100%", boxSizing: "border-box",
                background: "#0f0f0f", border: `1px solid #222`,
                borderRadius: 3, padding: "16px", resize: "vertical",
                color: "#C8C3BB", fontSize: 15, lineHeight: 1.7,
                fontFamily: "'Georgia', serif", outline: "none",
                transition: "border-color 0.3s ease",
              }}
              onFocus={e => e.target.style.borderColor = book.color + "66"}
              onBlur={e => e.target.style.borderColor = "#222"}
            />
            <div style={{ marginTop: 10, fontSize: 10, color: "#2e2e2e", fontFamily: "sans-serif", letterSpacing: "0.1em" }}>
              Your notes stay private. Continue when you're ready.
            </div>
          </div>
        )}

        {/* Navigation */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 52, opacity: revealed ? 1 : 0, transition: "opacity 0.5s ease 0.4s" }}>
          <button
            onClick={() => step > 0 && setStep(s => s - 1)}
            disabled={step === 0}
            style={{
              background: "none", border: "1px solid #1e1e1e", borderRadius: 2,
              padding: "10px 20px", color: step === 0 ? "#1e1e1e" : "#555",
              fontSize: 11, fontFamily: "sans-serif", letterSpacing: "0.1em",
              cursor: step === 0 ? "default" : "pointer", textTransform: "uppercase",
            }}
          >← Prev</button>

          {isLast ? (
            <button onClick={onClose} style={{
              background: book.color, border: "none", borderRadius: 2,
              padding: "12px 28px", color: "#0a0a0a", fontSize: 11,
              fontFamily: "sans-serif", letterSpacing: "0.15em",
              cursor: "pointer", fontWeight: 700, textTransform: "uppercase",
            }}>Complete Chapter ✓</button>
          ) : (
            <button onClick={() => setStep(s => s + 1)} style={{
              background: "none", border: `1px solid ${book.color}88`, borderRadius: 2,
              padding: "10px 24px", color: book.color, fontSize: 11,
              fontFamily: "sans-serif", letterSpacing: "0.1em",
              cursor: "pointer", textTransform: "uppercase",
            }}>Continue →</button>
          )}
        </div>
      </div>
      <style>{`textarea::placeholder { color: #2a2a2a; }`}</style>
    </div>
  );
}

// ─── BOOK CARD ────────────────────────────────────────────────────────────────

function BookCard({ book, isActive, onDeepRead }) {
  const [revealed, setRevealed] = useState(false);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeAnim, setLikeAnim] = useState(false);

  useEffect(() => {
    if (isActive) { const t = setTimeout(() => setRevealed(true), 100); return () => clearTimeout(t); }
    else setRevealed(false);
  }, [isActive]);

  return (
    <div style={{
      height: "100vh", width: "100%",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0, scrollSnapAlign: "start", position: "relative",
      background: `radial-gradient(ellipse at 30% 20%, ${book.color}1e 0%, #0a0a0a 70%)`,
      fontFamily: "'Georgia', 'Times New Roman', serif",
    }}>
      <div style={grain} />

      <div style={{ position: "absolute", left: 24, top: "50%", transform: "translateY(-50%)", width: 1, height: revealed ? "38%" : "0%", background: `linear-gradient(to bottom, transparent, ${book.color}77, transparent)`, transition: "height 1.2s cubic-bezier(0.22,1,0.36,1)" }} />

      <div style={{ width: "min(520px, 88vw)", padding: "0 16px", display: "flex", flexDirection: "column", gap: 26 }}>

        <div style={{ display: "flex", flexDirection: "column", gap: 6, opacity: revealed ? 1 : 0, transform: revealed ? "none" : "translateY(20px)", transition: "all 0.7s ease 0.1s" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.18em", fontFamily: "sans-serif", color: book.color, textTransform: "uppercase", fontWeight: 600 }}>{book.tag}</span>
          <span style={{ fontSize: 10, letterSpacing: "0.12em", fontFamily: "sans-serif", color: "#444", textTransform: "uppercase" }}>{book.chapter}</span>
        </div>

        <div style={{ opacity: revealed ? 1 : 0, transform: revealed ? "none" : "translateY(30px)", transition: "all 0.8s ease 0.25s" }}>
          <div style={{ fontSize: "clamp(20px, 4.2vw, 30px)", lineHeight: 1.48, color: "#F0EDE8", fontStyle: "italic", fontWeight: 400, borderLeft: `3px solid ${book.color}`, paddingLeft: 20 }}>
            "{book.content}"
          </div>
        </div>

        <div style={{ opacity: revealed ? 1 : 0, transform: revealed ? "none" : "translateY(30px)", transition: "all 0.8s ease 0.4s" }}>
          <p style={{ fontSize: "clamp(13px, 2.3vw, 15px)", lineHeight: 1.8, color: "#777", margin: 0, fontFamily: "sans-serif", fontWeight: 300 }}>
            {book.sub}
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", opacity: revealed ? 1 : 0, transform: revealed ? "none" : "translateY(20px)", transition: "all 0.7s ease 0.52s", marginTop: 4 }}>
          <div>
            <div style={{ fontSize: 14, color: "#E0D8CC", fontWeight: 600, fontFamily: "sans-serif" }}>{book.title}</div>
            <div style={{ fontSize: 11, color: "#444", fontFamily: "sans-serif", marginTop: 3 }}>by {book.author}</div>
          </div>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <button onClick={() => { setLiked(!liked); setLikeAnim(true); setTimeout(() => setLikeAnim(false), 600); }} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, transform: likeAnim ? "scale(1.4)" : "scale(1)", transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)" }}>
              <span style={{ fontSize: 20 }}>{liked ? "❤️" : "🤍"}</span>
              <span style={{ fontSize: 8, color: "#333", fontFamily: "sans-serif", letterSpacing: "0.05em" }}>LOVE</span>
            </button>
            <button onClick={() => setSaved(!saved)} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
              <span style={{ fontSize: 20 }}>{saved ? "🔖" : "📄"}</span>
              <span style={{ fontSize: 8, color: "#333", fontFamily: "sans-serif", letterSpacing: "0.05em" }}>SAVE</span>
            </button>
          </div>
        </div>

        <div style={{ opacity: revealed ? 1 : 0, transition: "opacity 0.7s ease 0.65s", display: "flex", gap: 12 }}>
          <button onClick={onDeepRead} style={{ background: book.color, border: "none", borderRadius: 2, padding: "11px 20px", color: "#0a0a0a", fontSize: 11, fontFamily: "sans-serif", letterSpacing: "0.12em", cursor: "pointer", fontWeight: 700, textTransform: "uppercase" }}>
            📖 Deep Read
          </button>
          <button style={{ background: "none", border: `1px solid ${book.color}44`, borderRadius: 2, padding: "11px 16px", color: "#555", fontSize: 11, fontFamily: "sans-serif", letterSpacing: "0.1em", cursor: "pointer", textTransform: "uppercase" }}>
            Buy Book →
          </button>
        </div>
      </div>

      <div style={{ position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: 5 }}>
        {books.map(b => (
          <div key={b.id} style={{ width: 2, height: b.id === book.id ? 18 : 5, borderRadius: 2, background: b.id === book.id ? book.color : "#252525", transition: "all 0.3s ease" }} />
        ))}
      </div>
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────

export default function BookScroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [deepReadBook, setDeepReadBook] = useState(null);
  const [showIntro, setShowIntro] = useState(true);
  const [activeTab, setActiveTab] = useState("For You");
  const cardRefs = useRef([]);

  useEffect(() => { const t = setTimeout(() => setShowIntro(false), 2400); return () => clearTimeout(t); }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { const i = cardRefs.current.indexOf(e.target); if (i !== -1) setActiveIndex(i); } }),
      { threshold: 0.55 }
    );
    cardRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", position: "relative" }}>
      <style>{`
        ::-webkit-scrollbar { display: none; }
        @keyframes introFade { to { opacity: 0; pointer-events: none; } }
        @keyframes pulse { 0%,100% { opacity:0.3 } 50% { opacity:1 } }
      `}</style>

      {showIntro && (
        <div style={{ position: "fixed", inset: 0, zIndex: 300, background: "#0a0a0a", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, animation: "introFade 0.7s ease 1.8s forwards", fontFamily: "'Georgia', serif" }}>
          <div style={{ fontSize: 11, color: "#333", fontFamily: "sans-serif", letterSpacing: "0.3em", textTransform: "uppercase" }}>Welcome to</div>
          <div style={{ fontSize: "clamp(40px, 9vw, 64px)", color: "#F0EDE8", fontStyle: "italic" }}>BookScroll</div>
          <div style={{ fontSize: 11, color: "#2a2a2a", fontFamily: "sans-serif", letterSpacing: "0.2em" }}>scroll · read deeply · think clearly</div>
        </div>
      )}

      {deepReadBook && <DeepReadMode book={deepReadBook} onClose={() => setDeepReadBook(null)} />}

      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "linear-gradient(to bottom, #0a0a0af0, transparent)", fontFamily: "'Georgia', serif" }}>
        <span style={{ fontSize: 20, color: "#F0EDE8", fontStyle: "italic" }}>BookScroll</span>
        <div style={{ display: "flex", gap: 20 }}>
          {["For You", "Library", "Classics"].map(tab => (
            <span key={tab} onClick={() => setActiveTab(tab)} style={{ fontSize: 11, fontFamily: "sans-serif", letterSpacing: "0.1em", color: activeTab === tab ? "#F0EDE8" : "#333", textTransform: "uppercase", cursor: "pointer", borderBottom: activeTab === tab ? "1px solid #F0EDE8" : "1px solid transparent", paddingBottom: 2, transition: "all 0.3s ease" }}>{tab}</span>
          ))}
        </div>
      </div>

      <div style={{ height: "100vh", overflowY: "scroll", scrollSnapType: "y mandatory" }}>
        {books.map((book, i) => (
          <div key={book.id} ref={el => cardRefs.current[i] = el} style={{ scrollSnapAlign: "start" }}>
            <BookCard book={book} isActive={activeIndex === i} onDeepRead={() => setDeepReadBook(book)} />
          </div>
        ))}
        <div style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, scrollSnapAlign: "start", background: "radial-gradient(ellipse at center, #111, #0a0a0a)", fontFamily: "'Georgia', serif" }}>
          <div style={{ fontSize: "clamp(24px,5vw,36px)", color: "#F0EDE8", fontStyle: "italic" }}>You've read 4 ideas.</div>
          <div style={{ fontSize: 13, color: "#444", fontFamily: "sans-serif", letterSpacing: "0.1em" }}>Now go deep on one.</div>
          <div style={{ marginTop: 8, border: "1px solid #222", borderRadius: 2, padding: "12px 24px", color: "#C8A96E", fontSize: 11, fontFamily: "sans-serif", letterSpacing: "0.15em", cursor: "pointer" }}>EXPLORE MORE BOOKS →</div>
        </div>
      </div>

      <div style={{ position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: activeIndex === 0 ? 1 : 0, transition: "opacity 0.5s ease", pointerEvents: "none" }}>
        <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom, #444, transparent)", animation: "pulse 1.8s ease infinite" }} />
        <span style={{ fontSize: 9, color: "#333", fontFamily: "sans-serif", letterSpacing: "0.18em" }}>SCROLL</span>
      </div>
    </div>
  );
}
