"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  { slug: "ml-shop", name: "ML Shop" },
  { slug: "billspayment", name: "Billspayment" },
  { slug: "insurance", name: "Insurance" },
  { slug: "eload-gaming", name: "eLoad/Gaming" },
  { slug: "car-loan", name: "Car Loan" },
  { slug: "home-loan", name: "Home Loan" },
  { slug: "salary-loan", name: "Salary Loan" },
  { slug: "prenda-renewal", name: "Prenda Renewal" },
  { slug: "personal-property", name: "Personal Property" },
  { slug: "business-pro", name: "Business Pro" },
  { slug: "business-loans", name: "Business Loans" },
];

export default function ServicesSupportLanding() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold mb-6 text-red-700">
          Services Support
        </h1>
        <p className="text-gray-600 text-lg">
          Explore FAQs, step-by-step guides, and troubleshooting for each MLhuillier service.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ slug, name }) => (
          <Link
            key={slug}
            href={`/category/services-support/${slug}`}
            className="group relative block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-red-700"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-red-700">
                {name}
              </h2>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-red-700 transition" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Help docs, common issues & solutions for <strong>{name}</strong>
            </p>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-700 group-hover:w-full transition-all duration-300" />
          </Link>
        ))}
      </div>
    </section>
  );
}
