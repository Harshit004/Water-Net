
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-emerald-900 mb-8">Terms & Conditions</h1>
          
          <div className="bg-emerald-50 p-6 rounded-lg mb-8">
            <p className="text-emerald-800">
              <strong>Effective Date:</strong> 22 June, 2025<br />
              <strong>Website:</strong> www.bookmyayurveda.com
            </p>
          </div>

          <div className="prose prose-emerald max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using BookMyAyurveda website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">2. Service Description</h2>
              <p className="text-gray-700 leading-relaxed">
                BookMyAyurveda provides Ayurvedic consultation services through qualified practitioners. Our services are based on traditional Indian Ayurvedic practices and are intended for wellness and health consultation purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Users are responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Providing accurate and truthful information during consultations</li>
                <li>Following consultation guidelines and recommendations appropriately</li>
                <li>Respecting the intellectual property rights of BookMyAyurveda</li>
                <li>Not misusing the platform for any illegal or harmful activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">4. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                BookMyAyurveda shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services. Users acknowledge that Ayurvedic consultations are traditional wellness practices and should not replace emergency medical care.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content, materials, and intellectual property on this website are owned by BookMyAyurveda or its licensors. Users may not reproduce, distribute, or create derivative works without explicit permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">6. Modifications</h2>
              <p className="text-gray-700 leading-relaxed">
                BookMyAyurveda reserves the right to modify these terms at any time. Changes will be effective immediately upon posting on the website. Continued use of the service constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">7. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of Indian courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">8. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                For questions regarding these terms, please contact us at:
              </p>
              <p className="text-emerald-600 font-semibold mt-2">
                📧 support@bookmyayurveda.com
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
