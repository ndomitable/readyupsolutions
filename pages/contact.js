export default function Contact() {
  return (
    <main className="min-h-screen bg-blue-50 text-gray-800 px-6 pt-10 pb-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Contact Information</h1>
        <p className="text-lg text-gray-600">We'd love to hear from you. Reach out using the info below.</p>
      </header>
      <section className="max-w-xl mx-auto bg-white rounded-2xl p-8 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Our Contact Details</h2>
        <ul className="text-gray-700 space-y-3">
          <li><strong>Email:</strong> <a href="mailto:contact@readyupsolutions.io" className="text-blue-600 hover:underline">contact@readyupsolutions.io</a></li>
          <li><strong>Phone:</strong> (555) 123-4567</li>
          <li><strong>Address:</strong> 123 Business Parkway, Suite 100, CRM City, USA</li>
        </ul>
      </section>
    </main>
  );
}