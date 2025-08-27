import { useState } from "react";

interface Suspect {
  id: string;
  name: string;
  background: string;
  clues: string[];
  followUps: string[];
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
    followUps: [
      "One pass the night before shows two slow loops and a brief hazard-light stop near the driveway. (↑ suspicion)",
      "Locksmith confirms Evelyn requested a copy and asked about quiet entry on sliders; odd-hour latch opens correspond to non-cleaning days. (↑ suspicion)",
      "The account’s saved collection includes annotated map screenshots (“Wed 11:20 — lights on in office”). Recovery number links to her family plan. (↑ suspicion)",
      "Photo EXIF shows 11:22 p.m. two nights before from a spot facing the bedroom window; bank printouts have highlighted transfers to Graham’s personal account. (↑ suspicion)",
      "Call log shows blocked caller asking which doors are “usually left latched in the morning.” Housekeeper recognizes Evelyn’s phrasing from earlier chats. (↑ suspicion)",
      "Elevator outage explains a 17-minute lobby gap; footage shows Evelyn re-entering the condo level after. (↓ suspicion)",
      "Sleep app shows continuous motionless window 1:05–5:57 a.m.; no steps recorded. (↓ suspicion)",
      "Bartender recalls a man with a woman in a green scarf but can’t ID faces from CCTV; timestamp confirms not murder night. (ambiguous)",
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
    followUps: [
      "Hallway mic catches “You don’t get to erase me from what I built.” Colleague notes Priya left visibly shaking. (↑ suspicion)",
      "Texts show she bought a day parking pass near the office Saturday; calendar blocked as “Board prep.” (↑ suspicion)",
      "Printer microdots tie the draft to office printer 2 at 6:55 p.m. day before; sticky note reads “Monday decision?”. (↑ suspicion)",
      "Full thread restore shows they discussed a supplier letter of credit; “move” = LC extension, not personnel. (↓ suspicion)",
      "Traffic cam captures her car leaving garage 7:14 a.m.; route ETA to Larchmont 22–26 min (arrive ~7:36–7:40). (ambiguous)",
      "Overseas supplier provides recording excerpt; Priya on camera 6:33–7:04; screen-share 6:45–6:58. (↓ suspicion)",
      "Outside counsel email advises “pause until Q3 board”; Priya forwarded it to Graham with “Understood.” (↓ suspicion)",
      "Router logs show static WAN IP and DHCP lease to her laptop; no evidence of mobile hotspot travel. (↓ suspicion)",
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
    followUps: [
      "Site photos show his initials burned into one side of similar wedges; electrical tape and matching zip-ties missing from his toolbox inventory. (↑ suspicion)",
      "Soil analysis adds polymeric sand from the Steele patio job he did last year—unique ratio he favors. (↑ suspicion)",
      "Foreman says Marco kept the old remote a week post-termination “to finish a shed job” before returning it; current custody unclear; signal could be used by whoever held it. (ambiguous)",
      "Marco sent a follow-up apology later that night, but never unsent the dropped pin; contact notes show he kept scouting the property line for “loose stonework.” (↑ suspicion)",
      "Browser shows “bypass GFCI patio” and a YouTube “kill power to cameras” clip watched at 5:42 p.m. day before. He claims a neighbor asked for help. (↑ suspicion)",
      "Neighbor’s Ring mic picks up saw hum 6:03–6:10 a.m.; truck remains in driveway. (↓ suspicion, but not airtight)",
      "Rust and plant residue only; river silt suggests they’d been tossed days before, not that morning. (↓ suspicion)",
      "Partner says Marco keeps an old pair in the truck “for dirty jobs”; Marco says they were stolen last month—no theft report filed. (↑ suspicion)",
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
            idx === current ? "bg-blue-600 text-white border-blue-600" : "bg-gray-200 text-gray-700 border-gray-200"
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
  const [phaseIdx] = useState(0);
  const [hours, setHours] = useState(12);
  const [revealed, setRevealed] = useState<Record<string, number[]>>({
    evelyn: [],
    priya: [],
    marco: [],
  });
  const [followed, setFollowed] = useState<Record<string, number[]>>({
    evelyn: [],
    priya: [],
    marco: [],
  });
  const [chiefConsulted, setChiefConsulted] = useState(false);
  const [chiefMessage, setChiefMessage] = useState("");
  const [eliminated, setEliminated] = useState<string | null>(null);

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

  const handleChief = () => {
    setChiefConsulted(true);
    setChiefMessage(
      'Duty Chief Vega: "Hmm good start, but it\'s not enough, I can give you another 6 hours, but after that I need you to eliminate at least one of these suspects so that we can focus our investigation. We don\'t have a lot of time, Cath!"'
    );
    setHours(6);
  };

  const handleFollowUp = (id: string, idx: number) => {
    if (hours <= 0) return;
    const used = followed[id];
    if (used.includes(idx)) return;
    setFollowed({ ...followed, [id]: [...used, idx] });
    setHours(hours - 1);
  };

  if (eliminated) {
    const eliminatedName = suspects.find((s) => s.id === eliminated)?.name;
    const remaining = suspects.filter((s) => s.id !== eliminated);
    return (
      <div className="min-h-screen bg-white text-gray-900 p-8">
        <header className="border-b-4 border-blue-600 pb-4 mb-6">
          <h1 className="text-4xl font-bold">Briefing Room</h1>
        </header>
        <PhaseChain phases={phases} current={phaseIdx} />
        {chiefMessage && (
          <div className="mb-4 p-4 bg-yellow-100 border border-yellow-400 rounded">
            {chiefMessage}
          </div>
        )}
        <div className="p-4 border rounded-md mb-6">
          You have eliminated {eliminatedName}. Vega grants you six extra hours to follow up on any revealed clues.
        </div>
        <div className="mb-4 font-semibold">Hours Remaining: {hours}</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {remaining.map((s) => {
            const used = revealed[s.id];
            const done = followed[s.id];
            return (
              <div key={s.id} className="border p-4 rounded-md space-y-2">
                <h2 className="text-lg font-bold">{s.name}</h2>
                <p className="text-sm">{s.background}</p>
                <ul className="list-disc ml-4 text-sm space-y-1">
                  {used.map((i) => (
                    <li key={i}>
                      {s.clues[i]}
                      {done.includes(i) ? (
                        <p className="mt-1 ml-4">Follow-up → {s.followUps[i]}</p>
                      ) : (
                        <button
                          onClick={() => handleFollowUp(s.id, i)}
                          disabled={hours <= 0}
                          className="ml-2 px-1 py-0.5 bg-purple-600 text-white rounded disabled:bg-gray-400"
                        >
                          Follow up
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (hours <= 0 && chiefConsulted) {
    return (
      <div className="min-h-screen bg-white text-gray-900 p-8">
        <header className="border-b-4 border-blue-600 pb-4 mb-6">
          <h1 className="text-4xl font-bold">Briefing Room</h1>
        </header>
        <PhaseChain phases={phases} current={phaseIdx} />
        {chiefMessage && (
          <div className="mb-4 p-4 bg-yellow-100 border border-yellow-400 rounded">
            {chiefMessage}
          </div>
        )}
        <div className="mb-6">Select a suspect to eliminate:</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {suspects.map((s) => {
            const used = revealed[s.id];
            return (
              <div key={s.id} className="border p-4 rounded-md space-y-2">
                <h2 className="text-lg font-bold">{s.name}</h2>
                <p className="text-sm">{s.background}</p>
                <button

                  onClick={() => {
                    setEliminated(s.id);
                    setHours(6);
                  }}
                  className="px-2 py-1 bg-blue-600 text-white rounded"
                >
                  Eliminate
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

  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <header className="border-b-4 border-blue-600 pb-4 mb-6">
        <h1 className="text-4xl font-bold">Briefing Room</h1>
      </header>
      <PhaseChain phases={phases} current={phaseIdx} />
      {hours <= 0 && !chiefConsulted && (
        <div className="flex justify-center mb-4">
          <button onClick={handleChief} className="px-6 py-3 bg-blue-600 text-white rounded-md">
            Take findings to the police chief
          </button>
        </div>
      )}
      {chiefMessage && (
        <div className="mb-4 p-4 bg-yellow-100 border border-yellow-400 rounded">
          {chiefMessage}
        </div>
      )}
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
