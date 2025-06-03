'use client';

import { useState } from 'react';

const serviceOptions = [
  { slug: 'ml-shop', name: 'ML Shop' },
  { slug: 'billspayment', name: 'Billspayment' },
  { slug: 'insurance', name: 'Insurance' },
  { slug: 'eload-gaming', name: 'eLoad/Gaming' },
  { slug: 'car-loan', name: 'Car Loan' },
  { slug: 'home-loan', name: 'Home Loan' },
  { slug: 'salary-loan', name: 'Salary Loan' },
  { slug: 'prenda-renewal', name: 'Prenda Renewal' },
  { slug: 'personal-property', name: 'Personal Property' },
  { slug: 'business-pro', name: 'Business Pro' },
  { slug: 'business-loans', name: 'Business Loans' },
];

export default function UploadFAQsPage() {
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [category, setCategory] = useState('');
  const [service, setService] = useState('');

  const handleUpload = async () => {
    if (!csvFile || !category || (category === 'services-support' && !service)) {
      alert("Please fill in all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append('file', csvFile);
    formData.append('category', category);
    if (category === 'services-support') {
      formData.append('service', service);
    }

    const res = await fetch('/api/upload-faqs', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      alert('FAQs uploaded successfully');
    } else {
      alert('Upload failed');
    }
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Upload FAQs (JSON)</h1>

      <input
        type="file"
        accept=".csv"
        onChange={(e) => setCsvFile(e.target.files?.[0] || null)}
        className="mb-4 block w-full"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="mb-4 border p-2 w-full"
      >
        <option value="">Select Category</option>
        <option value="email-support">Email Support</option>
        <option value="device-support">Device Support</option>
        <option value="connectivity">Connectivity</option>
        <option value="services-support">Services Support</option>
      </select>

      {category === 'services-support' && (
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="mb-4 border p-2 w-full"
        >
          <option value="">Select Service</option>
          {serviceOptions.map(({ slug, name }) => (
            <option key={slug} value={slug}>{name}</option>
          ))}
        </select>
      )}

      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Upload CSV
      </button>
    </div>
  );
}
