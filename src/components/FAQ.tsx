import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '1. What is the Traveon Wellness Festival?',
      answer:
        'The Traveon Wellness Festival is a multi-day celebration of wellbeing that combines mindful movement, restorative practices, expert-led workshops, and nature-based experiences. It brings together practitioners, teachers, and travelers for immersive programs that foster renewal, connection, and sustainable wellbeing.'
    },
    {
      question: '2. Who is the festival for?',
      answer:
        'The festival welcomes anyone interested in wellbeing — from beginners exploring mindfulness to experienced practitioners and teams seeking corporate retreats. Sessions are designed to be inclusive with options for varied skill levels.'
    },
    {
      question: '3. When and where does it take place?',
      answer:
        'Traveon hosts festivals at curated locations across the year. Specific dates and venues vary by edition — check our Events page for the latest schedule and locations.'
    },
    {
      question: '4. What does a typical day include?',
      answer:
        'A day often includes morning movement (yoga or tai chi), guided nature walks, workshops on nutrition and mindful living, group meals, and evening restorative practices. Schedules vary by package and location.'
    },
    {
      question: '5. How do I register and what are the payment options?',
      answer:
        'You can register via our website booking form for each festival edition. We accept major credit cards and bank transfers; some events offer installment plans. Early-bird pricing is available for a limited time.'
    },
    {
      question: '6. What if our team is remote or hybrid?',
      answer:
        'We prioritize guest safety. Please disclose any medical conditions at booking. Some activities may have age or health guidance. We follow local health regulations and provide on-site support where needed.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg">Everything you need to know about our retreats</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-teal-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-teal-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
