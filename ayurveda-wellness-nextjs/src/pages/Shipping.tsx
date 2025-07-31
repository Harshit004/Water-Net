import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Shipping = () => (
  <div className="min-h-screen">
    <Header />
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8 text-deep-bottle-green">Shipping Policy</h1>
      <p className="mb-2 text-sm text-gray-500">Effective Date: 22 June, 2025</p>
      <p className="mb-6">At Book My Ayurveda, we strive to ensure that your wellness journey begins with a smooth and timely delivery experience. We proudly ship Ayurvedic products worldwide and are committed to maintaining transparency, reliability, and safety throughout the shipping process.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Free Shipping Offer</h2>
      <p className="mb-4">We offer free international shipping on all orders valued at $499 USD or above (excluding taxes or discounts). For orders below this amount, standard shipping charges will apply and are calculated at checkout based on the delivery destination.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Order Processing Time</h2>
      <p className="mb-4">Once your order is confirmed and payment is received, it enters our fulfillment process. We typically dispatch all orders within 2–3 working days (excluding weekends and public holidays). You will receive an email confirmation once your order is shipped.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Delivery Timelines</h2>
      <p className="mb-4">Our international deliveries usually reach within 7–21 business days, depending on the destination country, customs clearance, and local postal services. Please note that remote areas may experience slightly longer delivery times.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Order Tracking</h2>
      <p className="mb-4">Once your package is shipped, we will share a tracking number via email so you can monitor the status and estimated delivery of your order in real time.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Identity Verification for International Shipping</h2>
      <p className="mb-4">To ensure smooth customs clearance and compliance with international shipping regulations, we require a valid identity proof from the customer before dispatch. Accepted documents include:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Passport</li>
        <li>Driver's License (DL)</li>
        <li>National ID (valid in the receiving country)</li>
      </ul>
      <p className="mb-4">This step helps us avoid delays at customs and ensures the order reaches the rightful recipient without hassle.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Customs, Duties &amp; Taxes</h2>
      <p className="mb-4">International shipments may be subject to import taxes, customs duties, and fees levied by the destination country. These charges are the responsibility of the customer and are not included in our pricing. Book My Ayurveda is not liable for any customs delays or additional charges once the shipment reaches your country.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Incorrect Address or Delivery Failure</h2>
      <p className="mb-4">Please double-check your shipping address before placing the order. We are not responsible for packages lost or returned due to incorrect or incomplete addresses. Additional reshipping charges may apply in such cases.</p>
      <p className="mb-4">We are here to support your healing journey — no matter where you are. For any shipping-related queries, feel free to write to us at <a href="mailto:support@bookmyayurveda.com" className="text-pea-green underline">support@bookmyayurveda.com</a> or call us at <a href="tel:+18885118535" className="text-pea-green underline">+1 888 511 8535</a>.</p>
    </div>
    <Footer />
  </div>
);

export default Shipping; 