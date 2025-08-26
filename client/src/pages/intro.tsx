import { Target } from "lucide-react";

export default function CaseFilePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-2xl mx-auto p-6 space-y-8">
        <header className="border-b-4 border-red-600 pb-4">
          <h1 className="text-3xl font-bold">CASE FILE: OMITB-001</h1>
          <p className="text-sm text-gray-600">Classified Briefing</p>
        </header>

        <section>
          <h2 className="text-xl font-semibold text-red-700 mb-2">Mission Brief</h2>
          <div className="space-y-4 text-sm">
            <p>
              <strong>Welcome, Detective.</strong> You've been seconded to assist on a priority case.
            </p>
            <p>
              You and Deputy Oliver will report to the Duty Chief for an urgent briefing at{' '}
              <strong className="text-red-700">8:00pm tonight</strong>.
            </p>
            <p>
              You are authorized to review materials marked{' '}
              <span className="bg-gray-100 px-1 font-mono">OMITB-001</span> only.
            </p>
            <p className="border-l-4 border-red-600 pl-4">
              Do not discuss the case outside the briefing room.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-red-700">Team Profiles</h2>

          <article className="space-y-4 border border-gray-300 rounded-md p-4 bg-gray-50">
            <div>
              <h3 className="text-lg font-bold">Catherine "Cath" Waite</h3>
              <p className="text-sm text-gray-600">Lead Investigator</p>
            </div>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Assignment: You are Catherine "Cath" Waite, Lead Detective on case OMITB-001.</li>
              <li>Role: Set the working timeline, choose initial leads, run interviews, call decisions.</li>
              <li>Public Background: Commended for pattern-spotting and witness rapport; calm under pressure; trusted to make tight calls.</li>
              <li>Prior Contact with Victim: <em>(routine):</em> You took Graham Steele's statement last fall re: a suspected break-in; saw him at a community safety seminar.</li>
              <li>Working Style: Evidence-first, clear questions; trust your gut but verify; stay open to exculpatory info.</li>
              <li>Dynamic with Oliver: You keep things professional-ish; you enjoy light banter but don't encourage romance; you steer him back on task when he gets playful or pushes the boundary.</li>
              <li className="mt-2 border-l-4 border-red-600 pl-4">
                <span className="flex items-center font-semibold"><Target className="w-4 h-4 mr-2 text-red-600" />Objective Tonight</span>
                Own the brief, pick an initial suspect to pressure, and keep the lens wide.
              </li>
            </ul>
          </article>

          <article className="space-y-4 border border-gray-300 rounded-md p-4 bg-gray-50">
            <div>
              <h3 className="text-lg font-bold">Oliver Khan</h3>
              <p className="text-sm text-gray-600">Lead Deputy</p>
            </div>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Partnership: You work with Oliver Khan, Lead Deputy supporting OMITB-001.</li>
              <li>Role: Manage evidence packets/exhibits, run the GPT "interrogator," and handle scene flow (briefing → clues → interrogations).</li>
              <li>Public Background: Organized, detail-minded, tech-savvy; reliable under time pressure.</li>
              <li>Temperament & Dynamic with You: Protective and occasionally intense; likes theatrics; flirts and nudges past strictly professional tone. You sometimes banter back but set the pace and boundaries.</li>
              <li>Strengths You Rely On: Tight logistics, timely props, surfacing the right clue at the right moment.</li>
              <li>Watch-outs: Can chase a lead too fast or ham it up—responds well when you redirect or assign a concrete task.</li>
              <li className="mt-2 border-l-4 border-red-600 pl-4">
                <span className="flex items-center font-semibold"><Target className="w-4 h-4 mr-2 text-red-600" />Objective Tonight</span>
                Keep materials flowing on your cue so you can decide the initial suspect and drive the case.
              </li>
            </ul>
          </article>
        </section>
      </div>
    </div>
  );
}

