import { useState } from "react";
import { AspectRatio } from "../components/ui/aspect-ratio";
import coverPic from "../pics/breakingnews.png";
import grahamPic from "../pics/grahamsteele.png";
import scenePic from "../pics/scene.png";
import evelynPic from "../pics/evelyn.png";
import priyaPic from "../pics/priya.png";
import marcoPic from "../pics/marco.png";
import vegaPic from "../pics/vega.png";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";

const casefileClasses =
  "bg-amber-50 border-2 border-amber-200 p-4 rounded-sm shadow-md space-y-2";

interface Suspect {
  id: string;
  name: string;
  image: string;
  background: string;
  clues: string[];
  followUps: string[];
}

const suspects: Suspect[] = [
  {
    id: "evelyn",
    name: "Evelyn Steele — Spouse (trial separation)",
    image: evelynPic,
    background:
      "Interior designer. Married to Graham; on a week-long trial separation while she wrestles with suspected infidelity. Tends to monitor and control when anxious; arguments lately mixed trust + estate/beneficiary issues.",
    clues: [
      "Patterned surveillance drives: ALPR + neighborhood cams log six late-night passes over 3 weeks, including two loops the night before.",
      "Spare-key access plan: Locksmith invoice (3 months ago) shows she commissioned a copy of the patio slider key; smart-lock history shows manual latch opens on two prior nights at odd hours.",
      'Burner "watcher" account: A no-posts IG/TikTok handle (tied to her recovery phone) follows Cath + mutuals and saves geo-tagged posts near Graham’s street on dates matching the drive-bys.',
      '"Evidence box" in trunk: Shoebox marked "Keep" with prenup/bank printouts and night photos of the house taken from the street (printed, dated).',
      'Housekeeper pretext call: She phoned the housekeeper from an alternate number asking about cleaning start times and "which doors you leave latched in the morning" two days before the murder.',
      "Sister-condo trail: Fob + lobby cams place her 8:47 p.m. → ~9:20 a.m. (murder night).",
      "Phone stays put: Her phone connects to sister’s Wi-Fi all night; no motion until morning.",
      'Bar receipt context: "Two glasses" receipt is two nights earlier at an unusual bar for Graham; bartender can’t ID Evelyn—suggests suspicion, not placement.',
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
    image: priyaPic,
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
    image: marcoPic,
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

function StageBreadcrumb({ current }: { current: number }) {
  const stages = [
    "Briefing",
    "Clue Gathering",
    "Additional Clue Gathering",
    "Clue Follow Up",
  ];
  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        {stages.map((stage, idx) => (
          <BreadcrumbItem key={stage}>
            {idx === current ? (
              <BreadcrumbPage>{stage}</BreadcrumbPage>
            ) : (
              <BreadcrumbLink className="text-gray-400">{stage}</BreadcrumbLink>
            )}
            {idx < stages.length - 1 && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default function BriefingRoomPage() {
  const [stage, setStage] = useState(0);
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
  const [questioned, setQuestioned] = useState<string | null>(null);
  const [justRevealed, setJustRevealed] = useState<{
    clues: number[];
    followUps: number[];
  }>({ clues: [], followUps: [] });
  const stageIdx = stage <= 1 ? 0 : eliminated ? 3 : chiefConsulted ? 2 : 1;

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
      "Duty Chief Vega: \"Hmm good start, but it's not enough, I can give you another 6 hours, but after that I need you to eliminate at least one of these suspects so that we can focus our investigation. We don't have a lot of time, Cath!\"",
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

  const handleQuestion = (id: string) => {
    const suspect = suspects.find((s) => s.id === id);
    if (!suspect) return;
    const allClues = suspect.clues.map((_, i) => i);
    const allFollow = suspect.followUps.map((_, i) => i);
    const newClues = allClues.filter((i) => !revealed[id].includes(i));
    const newFollow = allFollow.filter((i) => !followed[id].includes(i));
    setRevealed({ ...revealed, [id]: allClues });
    setFollowed({ ...followed, [id]: allFollow });
    setQuestioned(id);
    setJustRevealed({ clues: newClues, followUps: newFollow });
  };

  if (stage === 0) {
    return (
      <div className="min-h-screen bg-white text-gray-900 p-8">
        <header className="border-b-4 border-blue-600 pb-4 mb-6">
          <h1 className="text-4xl font-bold">Briefing Room</h1>
        </header>
        <StageBreadcrumb current={0} />
        <div className="mb-6 flex justify-center">
          <AspectRatio ratio={16 / 9} className="w-full">
            <img
              src={coverPic}
              alt="Briefing cover"
              className="object-cover rounded w-full h-full"
            />
          </AspectRatio>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => setStage(1)}
            className="px-6 py-3 bg-blue-600 text-white rounded-md"
          >
            Begin Briefing
          </button>
        </div>
      </div>
    );
  }

  if (stage === 1) {
    return (
      <div className="min-h-screen bg-white text-gray-900 p-8">
        <header className="border-b-4 border-blue-600 pb-4 mb-6">
          <h1 className="text-4xl font-bold">Briefing Room</h1>
        </header>
        <StageBreadcrumb current={0} />
        <div className="flex flex-col md:flex-row gap-6 mb-6 items-start">
          <img
            src={vegaPic}
            alt="Duty Chief Vega"
            className="h-48 w-48 object-cover rounded shrink-0"
          />
          <div className="space-y-4 text-sm">
            <p>
              Detective, Deputy — thanks for coming in on short notice. We’ve
              got a homicide flagged as OMITB-001.
            </p>
            <p>
              Victim is Graham Steele, male, 39, CEO and co-founder of Steele &
              Nayar, a boutique design firm. He was found deceased this morning
              in the primary bedroom of his home on Larchmont. Preliminary cause
              of death is blunt-force trauma to the head by an unknown household
              object. No sharp-force injuries. We’ll confirm with the ME.
            </p>
            <p>
              Entry/exit: No signs of forced entry. Smart-lock shows routine
              use; we’re pulling full device logs. House staff and contractors
              are being accounted for.
            </p>
            <p>
              Household context: Mr. Steele’s spouse, Evelyn, has been staying
              with her sister this week; she’s cooperating. Business partner is
              Priya Nayar. Long-time landscape contractor is Marco Flores. We’ll
              keep our lens wide for now.
            </p>
            <p>
              Detective Cath — you may recall Mr. Steele. You took his statement
              last fall on a reported break-in and he attended your precinct’s
              community safety seminar. That prior contact is noted and not a
              conflict at this time.
            </p>
            <p>
              Timeline anchors for now: neighbors report quiet overnight; first
              external activity around 07:30–08:00. We’ll refine with cams,
              device telemetry, and phone pings.
            </p>
            <p>
              Your task this evening: (1) get a working timeline, (2) identify a
              primary suspect for initial pressure, (3) flag any exculpatory
              info so we don’t lock in too early. Deputy Oliver will manage
              materials and the digital interrogator.
            </p>
            <p>
              Questions can wait until after you review the packet. Good
              hunting.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mb-6 items-center">
          <div className="text-center">
            <img
              src={grahamPic}
              alt="Graham Steele"
              className="h-48 w-48 object-cover rounded"
            />
            <p className="mt-2 text-sm font-semibold">Graham Steele - Victim</p>
          </div>
          <img
            src={scenePic}
            alt="Crime scene"
            className="h-48 object-cover rounded"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => setStage(2)}
            className="px-6 py-3 bg-blue-600 text-white rounded-md"
          >
            Show Suspects
          </button>
        </div>
      </div>
    );
  }

  if (eliminated) {
    const eliminatedName = suspects.find((s) => s.id === eliminated)?.name;
    const remaining = suspects.filter((s) => s.id !== eliminated);
    return (
      <div className="min-h-screen bg-white text-gray-900 p-8">
        <header className="border-b-4 border-blue-600 pb-4 mb-6">
          <h1 className="text-4xl font-bold">Briefing Room</h1>
        </header>
        <StageBreadcrumb current={stageIdx} />
        {chiefMessage && (
          <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 rounded flex gap-4 items-start">
            <img
              src={vegaPic}
              alt="Duty Chief Vega"
              className="h-48 w-48 object-cover rounded shrink-0"
            />
            <p>{chiefMessage}</p>
          </div>
        )}
        <div className="flex flex-col md:flex-row gap-6 mb-6 items-center">
          <div className="text-center">
            <img
              src={grahamPic}
              alt="Graham Steele"
              className="h-48 w-48 object-cover rounded"
            />
            <p className="mt-2 text-sm font-semibold">Graham Steele - Victim</p>
          </div>
          <img
            src={scenePic}
            alt="Crime scene"
            className="h-48 object-cover rounded"
          />
        </div>
        <div className="p-4 border rounded-md mb-6">
          You have eliminated {eliminatedName}. Vega grants you six extra hours
          to follow up on any revealed clues.
        </div>
        <div className="mb-4 font-semibold">Hours Remaining: {hours}</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {remaining.map((s) => {
            const used = revealed[s.id];
            const done = followed[s.id];
            const highlight =
              questioned === s.id ? justRevealed : { clues: [], followUps: [] };
            return (
              <div key={s.id} className={casefileClasses}>
                <AspectRatio ratio={1} className="w-full">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="object-cover rounded w-full h-full"
                  />
                </AspectRatio>
                <h2 className="text-lg font-bold">{s.name}</h2>
                <p className="text-sm">{s.background}</p>
                {!questioned && (
                  <button
                    onClick={() => handleQuestion(s.id)}
                    className="px-2 py-1 bg-red-600 text-white rounded"
                  >
                    Bring in for questioning
                  </button>
                )}
                <ul className="list-disc ml-4 text-sm space-y-1">
                  {used.map((i) => (
                    <li
                      key={i}
                      className={
                        highlight.clues.includes(i) ? "bg-yellow-100" : ""
                      }
                    >
                      {s.clues[i]}
                      {done.includes(i) ? (
                        <p
                          className={
                            "mt-1 ml-4 " +
                            (highlight.followUps.includes(i)
                              ? "bg-yellow-100"
                              : "")
                          }
                        >
                          Follow-up → {s.followUps[i]}
                        </p>
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
        {questioned && (
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <button className="flex-1 px-6 py-4 bg-red-600 text-white rounded text-xl">
              Arrest {remaining.find((s) => s.id === questioned)?.name}
            </button>
            <button className="flex-1 px-6 py-4 bg-green-600 text-white rounded text-xl">
              Arrest {remaining.find((s) => s.id !== questioned)?.name}
            </button>
          </div>
        )}
      </div>
    );
  }

  if (hours <= 0 && chiefConsulted) {
    return (
      <div className="min-h-screen bg-white text-gray-900 p-8">
        <header className="border-b-4 border-blue-600 pb-4 mb-6">
          <h1 className="text-4xl font-bold">Briefing Room</h1>
        </header>
        <StageBreadcrumb current={stageIdx} />
      {chiefMessage && (
        <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 rounded flex gap-4 items-start">
          <img
            src={vegaPic}
            alt="Duty Chief Vega"
            className="h-48 w-48 object-cover rounded shrink-0"
          />
          <p>{chiefMessage}</p>
        </div>
      )}
        <div className="flex flex-col md:flex-row gap-6 mb-6 items-center">
          <div className="text-center">
            <img
              src={grahamPic}
              alt="Graham Steele"
              className="h-48 w-48 object-cover rounded"
            />
            <p className="mt-2 text-sm font-semibold">Graham Steele - Victim</p>
          </div>
          <img
            src={scenePic}
            alt="Crime scene"
            className="h-48 object-cover rounded"
          />
        </div>
        <div className="mb-6">Select a suspect to eliminate:</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {suspects.map((s) => {
            const used = revealed[s.id];
            return (
              <div key={s.id} className={casefileClasses}>
                <AspectRatio ratio={1} className="w-full">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="object-cover rounded w-full h-full"
                  />
                </AspectRatio>
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
      <StageBreadcrumb current={stageIdx} />
      {chiefMessage && (
        <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 rounded flex gap-4 items-start">
          <img
            src={vegaPic}
            alt="Duty Chief Vega"
            className="h-48 w-48 object-cover rounded shrink-0"
          />
          <p>{chiefMessage}</p>
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-6 mb-6 items-center">
        <div className="text-center">
          <img
            src={grahamPic}
            alt="Graham Steele"
            className="h-48 w-48 object-cover rounded"
          />
          <p className="mt-2 text-sm font-semibold">Graham Steele - Victim</p>
        </div>
        <img
          src={scenePic}
          alt="Crime scene"
          className="h-48 object-cover rounded"
        />
      </div>
      {hours <= 0 && !chiefConsulted && (
        <div className="flex justify-center mb-4">
          <button
            onClick={handleChief}
            className="px-6 py-3 bg-blue-600 text-white rounded-md"
          >
            Take findings to the police chief
          </button>
        </div>
      )}
      <div className="mb-4 font-semibold">Hours Remaining: {hours}</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {suspects.map((s) => {
          const used = revealed[s.id];
          const allRevealed = used.length >= s.clues.length;
          return (
            <div key={s.id} className={casefileClasses}>
              <AspectRatio ratio={1} className="w-full">
                <img
                  src={s.image}
                  alt={s.name}
                  className="object-cover rounded w-full h-full"
                />
              </AspectRatio>
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
