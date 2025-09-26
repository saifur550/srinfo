export default function Sidebar() {
  return (
    <aside className="space-y-6">
      {/* Contact */}
      <div className="bg-white p-6 rounded-2xl shadow-md" id="contact">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">Contact</h2>
        <p>
          <strong>Phone:</strong> +880 1601-429026
        </p>
        <p>
          <strong>Email:</strong> isaifur550@gmail.com
        </p>
        <p>
          <strong>Location:</strong> Cumilla, Bangladesh
        </p>
        <a
          href="mailto:isaifur550@gmail.com"
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          Email Me
        </a>
      </div>

      {/* Skills */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Problem Solving",
            "Multi-tasking",
            "Time Management",
            "Critical Thinking",
            "Handling Pressure",
            "Flexibility",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">Languages</h2>
        <ul className="list-disc pl-6">
          <li>Bangla — Native</li>
          <li>English — Fluent</li>
          <li>Malay — Basic</li>
          <li>Hindi — Basic</li>
        </ul>
      </div>

      {/* Resume Download */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">Download</h2>
        <p>If you would like a copy of the PDF resume, click below.</p>
        <a
          href="/saifur resume.pdf"
          download
          className="mt-3 inline-block bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700"
        >
          Download Resume
        </a>
      </div>
    </aside>
  );
}
