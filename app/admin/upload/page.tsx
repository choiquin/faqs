'use client';

import { useState } from 'react';

export default function UploadFAQsPage() {
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [category, setCategory] = useState('');
  const [service, setService] = useState('');

  const handleUpload = async () => {
    if (!csvFile || !category || !service) {
      alert("Please fill in all fields.");
      return;
    }

    const formData = new FormData();
    formData.append('file', csvFile);
    formData.append('category', category);
    formData.append('service', service);

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
      <h1 className="text-2xl font-bold mb-4">Upload FAQs (CSV)</h1>

      <input
        type="file"
        accept=".csv"
        onChange={(e) => setCsvFile(e.target.files?.[0] || null)}
        className="mb-4 block w-full"
      />

      <input
        type="text"
        placeholder="Category (e.g. services-support)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="mb-4 border p-2 w-full"
      />

      {/* <input
        type="text"
        placeholder="Service Slug (e.g. ml-shop)"
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="mb-4 border p-2 w-full"
      /> */}

      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Upload CSV
      </button>
    </div>
  );
}
