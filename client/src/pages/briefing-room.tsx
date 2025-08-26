import { useState } from "react";

interface Suspect {
  id: string;
  name: string;
  background: string;
  clues: string[];
}

const suspects: Suspect[] = [
  {
    id: "evelyn",
    name: "Evelyn Steele — Spouse (trial separation)",
    background:
      "Interior designer. Married to Graham; on a week-long trial separation while she wrestles with suspected infidelity. Tends to monitor and control when anxious; arguments lately mixed trust + estate/beneficiary issues.",
    clues: [
      "Patterned surveillance drives: ALPR + neighborhood cams log six late-night passes over 3 weeks, including two loops the night before.",
      "Spare-key access plan: Locksmith invoice (3 months ago) shows she commissioned a copy of the patio slider key; smart-lock history shows manual latch opens on two prior nights at odd hours.",
      "Burner \"watcher\" account: A no-posts IG/TikTok handle (tied to her recovery phone) follows Cath + mutuals and saves geo-tagged posts near Graham’s street on dates matching the drive-bys.",
      "\"Evidence box\" in trunk: Shoebox marked \"Keep\" with prenup/bank printouts and night photos of the house taken from the street (printed, dated).",
      "Housekeeper pretext call: She phoned the housekeeper from an alternate number asking about cleaning start times and \"which doors you leave latched in the morning\" two days before the murder.",
      "Sister-condo trail: Fob + lobby cams place her 8:47 p.m. → ~9:20 a.m. (murder night).",
      "Phone stays put: Her phone connects to sister’s Wi-Fi all night; no motion until morning.",
      "Bar receipt context: \"Two glasses\" receipt is two nights earlier at an unusual bar for Graham; bartender can’t ID Evelyn—suggests suspicion, not placement.",
    ],
  },
  {
    id: "priya",
    name: "Priya Nayar — Business partner (COO)",
    background:
      "Co-founder/COO at Steele & Nayar. Brilliant, exacting, and politically savvy. Relationship with Graham has soured over power/strategy; an equity re-cut and possible exit were on the table.",
    clues: [
      "Friday blow-up: Multiple employees report a shouting match about equity/control; Priya said, ‘Not after everything I built.’",
      "Trip canceled to stay in the fight: She canceled her annual camping trip hours after the argument, texting ‘can’t leave this hanging.’",
      "Physical severance draft: A printed severance with her handwritten redlines (equity/role reduced) is found in Graham’s briefcase.",
      "Message suppression: Deleted Slack DMs recovered: ‘we need to move before Monday.’ (Context unclear but time-critical.)",
      "Morning proximity enablement: Badge at 7:02 a.m. (garage in/out) + VPN access 6:18 a.m. to financials; leaves a small window to be near Larchmont by ~7:30.",
      "Live alibi window: 6:30–7:30 a.m. video call with an overseas supplier (mentions screen share), aligning with VPN logs.",
      "HR pause: Documented HR email shows all role changes paused pending legal review—undercuts an ‘imminent ouster’ narrative.",
      "Home IP footprint: The 6:18 a.m. VPN login resolves to her home IP across town, not a mobile hotspot near the scene.",
    ],
  },
  {
    id: "marco",
    name: "Marco Flores — Former landscape contractor",
    background:
      "Knew the Steele family since Graham was a kid; took pride in the property. Recently fired after cost-cutting. Quick temper, fiercely loyal until he feels disrespected.",
    clues: [
      "Back-gate know-how: Service gate left propped with his signature wooden wedge; the camera covering that gate was unplugged the previous afternoon (he serviced that zone that day).",
      "Boot-print & soil match: Partial work-boot print by the patio; soil residue matches his slow-release fertilizer blend.",
      "Access exploit: The old remote gate opener (supposedly returned) pings the system at 6:12 a.m. murder morning—someone used a device linked to Marco’s former serial.",
      "Anger trail: Texts to his foreman after the firing: ‘He’ll regret this’ + dropped map pin for the side gate.",
      "How-to searches: His phone history shows YouTube/Google queries on disabling backyard cams and ‘bypass ring power’ the day before.",
      "Partner alibi + meter: Partner places him home from 9 p.m.; smart-meter spike ~6:00 a.m. consistent with using power tools in his garage.",
      "No blood on tools: Missing pruning shears found downstream show plant residue only, no blood.",
      "Footwear mismatch: Tread wear in the print doesn’t match his current boots (points to an older pair not yet found).",
    ],
  },
];

function PhaseChain({ phases, current }: { phases: string[]; current: number }) {
  return (
    <div className="flex space-x-2 mb-6">
      {phases.map((phase, idx) => (
        <div
          key={phase}
          className={`px-4 py-2 rounded-full text-sm font-medium border ${
            idx === current ? "bg-red-600 text-white border-red-600" : "bg-gray-200 text-gray-700 border-gray-200"
          }`}
        >
          {phase}
        </div>
      ))}
    </div>
  );
}

export default function BriefingRoomPage() {
  const phases = ["Investigation"];
  const [phaseIdx, setPhaseIdx] = useState(-1);
  const [hours, setHours] = useState(12);
  const [revealed, setRevealed] = useState<Record<string, number[]>>({
    evelyn: [],
    priya: [],
    marco: [],
  });

  const handleBegin = () => setPhaseIdx(0);

  const handleInvestigate = (id: string) => {
    if (hours <= 0) return;
    const suspect = suspects.find((s) => s.id === id);
    if (!suspect) return;
    const used = revealed[id];
    if (used.length >= suspect.clues.length) return;
    const remaining = suspect.clues
      .map((_, idx) => idx)
      .filter((idx) => !used.includes(idx));
    const nextIdx = remaining[Math.floor(Math.random() * remaining.length)];
    setRevealed({ ...revealed, [id]: [...used, nextIdx] });
    setHours(hours - 1);
  };

  if (phaseIdx === -1) {
    return (
      <div className="min-h-screen bg-white text-gray-900 p-8">
        <header className="border-b-4 border-red-600 pb-4 mb-8">
          <h1 className="text-4xl font-bold">Briefing Room</h1>
        </header>
        <div className="flex justify-center">
          <button onClick={handleBegin} className="px-6 py-3 bg-red-600 text-white rounded-md">
            Begin
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <header className="border-b-4 border-red-600 pb-4 mb-6">
        <h1 className="text-4xl font-bold">Briefing Room</h1>
      </header>
      <PhaseChain phases={phases} current={phaseIdx} />
      <div className="mb-4 font-semibold">Hours Remaining: {hours}</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {suspects.map((s) => {
          const used = revealed[s.id];
          const allRevealed = used.length >= s.clues.length;
          return (
            <div key={s.id} className="border p-4 rounded-md space-y-2">
              <h2 className="text-lg font-bold">{s.name}</h2>
              <p className="text-sm">{s.background}</p>
              <button
                onClick={() => handleInvestigate(s.id)}
                disabled={hours <= 0 || allRevealed}
                className="px-2 py-1 bg-blue-600 text-white rounded disabled:bg-gray-400"
              >
                Spend 1 hour
              </button>
              <ul className="list-disc ml-4 text-sm space-y-1">
                {used.map((i) => (
                  <li key={i}>{s.clues[i]}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

