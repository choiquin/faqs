import { notFound } from "next/navigation"
import emailFaqs from "@/data/email-support/faqs.json"
import connectivityFaqs from "@/data/connectivity/faqs.json"
import mlShopFaqs from "@/data/services-support/ml-shop/faqs.json"
import billspaymentFaqs from "@/data/services-support/billspayment/faqs.json"

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q?.toLowerCase() || ""

  const faqs = [
    ...emailFaqs,
    ...connectivityFaqs,
    ...mlShopFaqs,
    ...billspaymentFaqs,
  ]

  if (!query) return notFound()

  const results = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(query) ||
    faq.answer.toLowerCase().includes(query)
  )

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      <p className="mb-6">You searched for: <strong>{query}</strong></p>

      {results.length > 0 ? (
        <ul className="space-y-4">
          {results.map((faq, index) => (
            <li key={index} className="p-4 border rounded">
              <h2 className="font-semibold">{faq.question}</h2>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No matching results found.</p>
      )}
    </div>
  )
}
