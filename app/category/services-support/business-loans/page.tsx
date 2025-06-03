import { promises as fs } from 'fs';
import path from 'path';

interface FAQItem {
  question: string;
  answer: string;
}

export default async function BusinessLoanFAQ() {
  let faqs: FAQItem[] = [];

  try {
    const filePath = path.join(process.cwd(), 'data', 'services-support', 'business-loan', 'faqs.json');
    const file = await fs.readFile(filePath, 'utf-8');
    faqs = JSON.parse(file);
  } catch (err) {
    console.warn("Failed to load Business Loan FAQs", err);
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-red-700">Business Loan FAQs</h1>
      {faqs.length === 0 ? (
        <p className="text-gray-600">No FAQs found for Business Loan.</p>
      ) : (
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b pb-4">
              <h2 className="text-lg font-semibold text-gray-900">{faq.question}</h2>
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
