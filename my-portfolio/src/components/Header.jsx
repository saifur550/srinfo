import profilePic from "../assets/profile1.jpg";
export default function Header() {
  return (
    <header className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-md">
   <img src={profilePic} alt="Profile" className="w-32 h-32 rounded-full" />
      <div>
        <h1 className="text-3xl font-bold">Md. Saifur Rahman</h1>
        <p className="text-gray-600">
          Customer Service & Hotel Management professional • Cumilla, Bangladesh
        </p>
        <div className="mt-3 flex gap-3">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
            Diploma in Hotel Management
          </span>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
