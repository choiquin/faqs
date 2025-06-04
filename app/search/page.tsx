import { notFound } from "next/navigation"
import faqs from "@/data/email-support/faqs.json"
import faqs from "@/data/connectivity/faqs.json"
import faqs from "@/data/services-support/ml-shop/faqs.json"
import faqs from "@/data/services-support/billspayment/faqs.json"
import faqs from "@/data/services-support/insurance/faqs.json"
import faqs from "@/data/services-support/eload-gaming/faqs.json"
import faqs from "@/data/services-support/car-loan/faqs.json"
import faqs from "@/data/services-support/home-loan/faqs.json"
import faqs from "@/data/services-support/salary-loan/faqs.json"
import faqs from "@/data/services-support/ml-shop/faqs.json"
import faqs from "@/data/services-support/prenda-renewal/faqs.json"
import faqs from "@/data/services-support/personal-property/faqs.json"
import faqs from "@/data/services-support/business-pro/faqs.json"
import faqs from "@/data/services-support/business-loan/faqs.json"




export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q?.toLowerCase() || ""

  const results = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(query) ||
    faq.answer.toLowerCase().includes(query)
  )

  if (!query) return notFound()

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
