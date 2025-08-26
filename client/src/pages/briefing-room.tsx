export default function BriefingRoomPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto p-6 space-y-8">
        <header className="border-b-4 border-red-600 pb-4">
          <h1 className="text-3xl font-bold">Briefing Room</h1>
        </header>

        <nav>
          <ul className="flex space-x-4 text-blue-600 underline">
            <li>
              <a href="#watch">Watch Briefing</a>
            </li>
            <li>
              <a href="#victim">Victim Information</a>
            </li>
            <li>
              <a href="#suspects">Suspect Profiles</a>
            </li>
          </ul>
        </nav>

        <section id="watch" className="space-y-4">
          <h2 className="text-xl font-semibold text-red-700">Watch Briefing</h2>
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Briefing Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section id="victim" className="space-y-4">
          <h2 className="text-xl font-semibold text-red-700">Victim Information</h2>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Graham Steele — The Victim</strong>
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Age: 39</li>
              <li>
                Occupation: CEO and co‑founder of boutique design firm “Steele & Nayar.”
              </li>
              <li>
                Relationships: In a trial separation; friends aware Evelyn suspected infidelity but couldn’t prove it; professional partner with Priya; employed Marco until recently; secret affair with Cath.
              </li>
              <li>
                Last 48 Hours: Firing dispute with Marco; heated strategy call with Priya; late dinner at home with a guest; texted a friend about “needing to talk to Evelyn this weekend.” Found murdered in his bedroom the next morning.
              </li>
              <li>
                Complications: Updated will in Evelyn’s favor; considering restructuring that could dilute Priya; planned to rehire a cheaper landscaping crew.
              </li>
            </ul>
          </div>
        </section>

        <section id="suspects" className="space-y-6">
          <h2 className="text-xl font-semibold text-red-700">Suspect Profiles</h2>

          <article className="space-y-2">
            <h3 className="text-lg font-bold">Evelyn Steele — Spouse (Trial Separation)</h3>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>
                <strong>Relationship to victim:</strong> Wife; staying with her sister this week during a brief separation.
              </li>
              <li>
                <strong>Background:</strong> Interior designer; suspected his infidelity and monitored his routines.
              </li>
              <li>
                <strong>Motive snapshot:</strong> Betrayal + financial/estate tensions (beneficiary/prenup context).
              </li>
              <li>
                <strong>Behavior of concern (documented):</strong>
                <ul className="list-disc ml-5 space-y-1">
                  <li>
                    Late-night drive-bys: ALPR + neighborhood cams log six passes in 3 weeks (two loops night before).
                  </li>
                  <li>
                    Access history: Locksmith invoice for copied patio slider key; smart-lock shows manual latch opens on two earlier nights.
                  </li>
                  <li>
                    Burner “watcher” social account follows you + mutuals; saved posts geo-tagged near his street on dates matching drive-bys.
                  </li>
                  <li>
                    Trunk “Keep” box: prenup/bank printouts + night photos of the house from the street.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Counterpoints / alibi anchors:</strong>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Sister’s condo fob + cameras: 8:47 p.m. → ~9:20 a.m. (night of).</li>
                  <li>Bar receipt with “two glasses” is two nights earlier; bartender can’t ID her.</li>
                  <li>Spousal key access is lawful; none of the photos are from the murder morning.</li>
                </ul>
              </li>
              <li>
                <strong>What to press (questions):</strong>
                <ul className="list-disc ml-5 space-y-1">
                  <li>“Purpose of the drive-bys? Why two loops last night?”</li>
                  <li>“Who else knows about the spare key? When last used?”</li>
                  <li>“Why follow Cath and mutuals from a burner? What were you watching for?”</li>
                </ul>
              </li>
            </ul>
          </article>

          <article className="space-y-2">
            <h3 className="text-lg font-bold">Marco Flores — Former Landscape Contractor</h3>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>
                <strong>Relationship to victim:</strong> Long-time gardener; recently fired after years of service.
              </li>
              <li>
                <strong>Background:</strong> Known quick temper (recently smashed a tool in anger); minor, non-violent run-ins with the law years back; historically loyal to the Steele family since Graham was a kid.
              </li>
              <li>
                <strong>Motive snapshot:</strong> Resentment over termination; pride + perceived injustice.
              </li>
              <li>
                <strong>Opportunity indicators:</strong>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Muddy boot print near back patio; soil traces match his fertilizer blend.</li>
                  <li>
                    Service gate propped with his signature wooden wedge; camera covering that gate found unplugged earlier.
                  </li>
                  <li>Old remote gate opener (returned) pinged at 6:12 a.m. murder morning.</li>
                </ul>
              </li>
              <li>
                <strong>Counterpoints / alibi anchors:</strong>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Partner alibi: Home from 9 p.m.; smart-meter shows tool use ~6 a.m.</li>
                  <li>Boot print wear pattern doesn’t match his current boots (older pair?).</li>
                </ul>
              </li>
              <li>
                <strong>What to press (questions):</strong>
                <ul className="list-disc ml-5 space-y-1">
                  <li>“Explain the 6:12 a.m. gate ping.”</li>
                  <li>“Where are your older boots? Can we see them?”</li>
                  <li>“Who knew your wedge trick? Anyone else could copy it?”</li>
                </ul>
              </li>
            </ul>
          </article>

          <article className="space-y-2">
            <h3 className="text-lg font-bold">Priya Nayar — Business Partner (COO)</h3>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>
                <strong>Relationship to victim:</strong> Co-founder at Steele & Nayar.
              </li>
              <li>
                <strong>Background:</strong> High-stakes week; Friday blow-up at the office (witnessed); canceled annual camping trip right after.
              </li>
              <li>
                <strong>Motive snapshot:</strong> Draft severance with her handwritten edits; risk to equity/reputation; Board “Role Change” meeting slated for the next morning.
              </li>
              <li>
                <strong>Opportunity indicators:</strong>
                <ul className="list-disc ml-5 space-y-1">
                  <li>
                    VPN access at 6:18 a.m. to firm financials; garage badge at 7:02 a.m. (could reach the house by ~7:30).
                  </li>
                  <li>Severance draft found in victim’s briefcase with her redline handwriting.</li>
                </ul>
              </li>
              <li>
                <strong>Counterpoints / alibi anchors:</strong>
                <ul className="list-disc ml-5 space-y-1">
                  <li>6:30–7:30 a.m. video call with overseas supplier (mentions screen share), aligning with VPN.</li>
                  <li>HR email shows role changes paused pending legal review.</li>
                </ul>
              </li>
              <li>
                <strong>What to press (questions):</strong>
                <ul className="list-disc ml-5 space-y-1">
                  <li>“When and where did you last handle that physical severance draft?”</li>
                  <li>“Why cancel the camping trip immediately after the argument?”</li>
                  <li>“Walk the exact 6:00–8:00 a.m. timeline—devices, calls, location.”</li>
                </ul>
              </li>
            </ul>
          </article>
        </section>
      </div>
    </div>
  );
}

