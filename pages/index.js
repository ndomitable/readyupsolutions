export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-white text-gray-800 px-6 pt-10 pb-20">
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">ReadyUp Solutions</h1>
        <p className="text-xl text-gray-600">CRM Implementation & Integration Experts</p>
      </header>

      <section className="mb-24 text-center">
        <h2 className="text-3xl font-bold mb-6">What We Do</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          We specialize in seamless CRM implementation and integration with Salesforce, Zoho CRM, and HubSpot. Let us streamline your operations and enhance customer engagement with tailored CRM solutions.
        </p>
      </section>

      <section className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
          <h3 className="text-2xl font-semibold text-blue-700 mb-3">Salesforce Services</h3>
          <p className="text-gray-600">Custom implementation, automation setup, third-party integrations, and expert training for your team.</p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
          <h3 className="text-2xl font-semibold text-green-600 mb-3">Zoho CRM Services</h3>
          <p className="text-gray-600">End-to-end customization, API integrations, and smart dashboards to empower your sales team.</p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
          <h3 className="text-2xl font-semibold text-orange-600 mb-3">HubSpot Services</h3>
          <p className="text-gray-600">Full-service onboarding, marketing automation, pipeline design, and clean data migration.</p>
        </div>
      </section>

      <section className="text-center mb-24">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          With deep CRM expertise and a passion for process improvement, ReadyUp Solutions delivers tailored systems that work for you — not the other way around. We’re fast, reliable, and focused on results.
        </p>
      </section>

      <section className="text-center mb-24">
        <h2 className="text-3xl font-bold mb-6">Our Happy Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
          {["/logos/logo1.png", "/logos/logo2.png", "/logos/logo3.png", "/logos/logo4.png", "/logos/logo5.png", "/logos/logo6.png"].map((src, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-md">
              <img src={src} alt={`Client Logo ${i + 1}`} className="h-12 mx-auto" />
            </div>
          ))}
        </div>
        <p className="text-gray-500 mt-4 text-sm">(Sample logos for now — real clients coming soon!)</p>
      </section>

      <section className="text-center bg-blue-50 rounded-2xl p-10 shadow-inner">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Let’s Talk</h2>
        <p className="text-lg text-gray-700 mb-6">Ready to transform your CRM? Let’s start with a conversation.</p>
        <a 
          href="mailto:contact@readyupsolutions.io"
          className="inline-block bg-blue-600 text-white py-3 px-8 text-lg font-medium rounded-full hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}