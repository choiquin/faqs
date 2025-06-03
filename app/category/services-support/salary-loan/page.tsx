export default function SalaryLoanFAQ() {
  const faqs = [
    {
      question: "How do I reset my Gmail password?",
      answer:
        "Go to the Gmail login page, click 'Forgot password?', and follow the recovery instructions. If you're using a work account, contact your IT admin.",
    },
    {
      question: "How can I set up Gmail on my phone?",
      answer:
        "Download the Gmail app from your app store, sign in with your credentials, and enable notifications for full functionality.",
    },
    {
      question: "Why am I not receiving any emails?",
      answer:
        "Check your spam folder, ensure your inbox isn't full, and confirm your internet connection. Also check your email filters and forwarding rules.",
    },
    {
      question: "How do I enable two-factor authentication on Gmail?",
      answer:
        "Go to your Google Account > Security > 2-Step Verification and follow the prompts. This improves account security significantly.",
    },
  ]

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-red-700">Salary Loan FAQs</h1>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b pb-4">
            <h2 className="text-lg font-semibold text-gray-900">{faq.question}</h2>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
