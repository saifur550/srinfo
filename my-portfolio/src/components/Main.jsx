export default function Main() {
  return (
    <main className="md:col-span-2 space-y-6">
      {/* Profile */}
      <section className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">Profile Summary</h2>
        <p>
          Highly motivated hospitality professional with hands-on training in front
          office operations, food & beverage service, housekeeping, and event planning.
          Strong customer-service background with experience in sales and customer
          support. Committed to delivering exceptional guest experiences and supporting
          smooth operations.
        </p>
      </section>

      {/* Work Experience */}
      <section className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">Work Experience</h2>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">The Western — Kitchen Staff</h4>
            <p className="text-sm text-gray-500">Jan 2015 — Aug 2015</p>
            <p>
              Supported daily kitchen operations including food preparation, plating, and
              maintaining hygiene and food safety.
            </p>
          </div>
          <div>
            <h4 className="font-medium">iStore by C-Zone — Sales Assistant</h4>
            <p className="text-sm text-gray-500">2018 — 2021</p>
            <p>
              Provided personalized customer service, demonstrated Apple products and
              accessories, and supported sales targets.
            </p>
          </div>
          <div>
            <h4 className="font-medium">The Royale Bintang — Internship</h4>
            <p className="text-sm text-gray-500">Oct 2016 — Apr 2017</p>
            <p>
              Delivered VIP-level guest service, supported banquets and events, and
              maintained housekeeping standards.
            </p>
          </div>
          <div>
            <h4 className="font-medium">Ankora Surgical — Customer Service</h4>
            <p className="text-sm text-gray-500">Feb 2023 — Present</p>
            <p>
              Handled customer inquiries, achieved sales goals, and maintained distributor
              and client relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">Education</h2>
        <p>
          <strong>Diploma in Hotel Management</strong>, Travex International College —
          2014–2017 (Malaysia)
        </p>
        <p>
          <strong>Higher Secondary Certificate (Business Studies)</strong>, Shashidal
          Alhaj Muhammad Abu Taher College — 2010–2012
        </p>
      </section>

      {/* References */}
      <section className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">References</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Chear Kar Fai — Supervisor, iStore by C-Zone, +60 12-303 1894</li>
          <li>
            Md Shahadat Hossain — Proprietor, Ankora Surgical, +880 1906-682231
          </li>
        </ul>
      </section>
    </main>
  );
}
