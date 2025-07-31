import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Refund = () => (
    <div className="min-h-screen">
      <Header />
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8 text-deep-bottle-green">Refund &amp; Replacement Policy</h1>
      <p className="mb-2 text-sm text-gray-500">Effective Date: 22 June, 2025</p>
      <p className="mb-6">At Book My Ayurveda, we are committed to ensuring a smooth and transparent experience for all our customers. Our products and services are carefully curated with quality and customer satisfaction in mind. However, in rare cases where issues arise, we have a clearly defined refund policy to protect the interests of both parties.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Eligibility for Refund or Replacement</h2>
      <p className="mb-4">Refunds or replacements are only provided under the following circumstances:</p>
      <ol className="list-decimal pl-6 mb-4">
        <li className="mb-2">Non-Delivery: If your order was not delivered at all due to a logistics error or lost shipment, we will initiate a full refund or reship the product at no additional cost.</li>
        <li className="mb-2">Damaged Product: If the product you received is physically damaged, you are eligible for a refund or replacement only if:
          <ul className="list-disc pl-6 mt-2">
            <li>You notify us within 48 hours of receiving the delivery.</li>
            <li>You share a clear, continuous unboxing video that starts from showing the sealed outer packaging and continues through the full unboxing process, clearly displaying the damage.</li>
                  </ul>
          <span className="block mt-2 text-sm text-gray-600">No claim for damaged products will be entertained without proper video evidence. Photos or delayed communication beyond 48 hours will not be considered valid for processing refunds.</span>
        </li>
      </ol>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Non-Eligibility for Refund</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Products that have been used, tampered with, or damaged intentionally are not eligible.</li>
        <li>Products without proof of purchase (invoice/order ID) will not be accepted for refund requests.</li>
        <li>Herbal formulations once opened cannot be returned unless proven to be expired or damaged upon delivery, with the required unboxing video proof.</li>
        <li>Change of mind or dissatisfaction with the taste/effectiveness of herbal remedies does not qualify for a refund.</li>
                  </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">How to Request a Refund</h2>
      <p className="mb-4">To initiate a refund or replacement request, please email us at <a href="mailto:support@bookmyayurveda.com" className="text-pea-green underline">support@bookmyayurveda.com</a> with:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Your order number</li>
        <li>The unboxing video</li>
        <li>A brief description of the issue</li>
              </ul>
      <p className="mb-4">Our team will respond within 2–3 business days and guide you through the next steps.</p>
      </div>
      <Footer />
    </div>
  );

export default Refund;
