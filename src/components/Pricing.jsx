function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Pricing Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h3 className="text-2xl font-bold">Starter</h3>

          <p className="text-5xl font-bold my-6"> $99</p>

                  <ul className="space-y-3 text-gray-700">

                  <li>✔ Responsive Website</li>
                  <li>✔ Email Support</li>
                  <li>✔ SEO Basics</li>
                  <li>✔ 1 Month Support</li>
                  </ul>

            <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-300">Choose Plan</button>

        </div>

          <div className="bg-blue-600 text-white p-8 rounded-xl shadow-xl hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold">Professional</h3>
            <p className="text-4xl font-bold mt-4">$299</p>
            <p className="mt-4">Best for growing businesses.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold">Enterprise</h3>
            <p className="text-4xl font-bold mt-4">$599</p>
            <p className="mt-4">For large companies.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pricing;