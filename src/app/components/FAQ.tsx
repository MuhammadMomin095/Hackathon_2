import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Does my card need international purchases enabled?",
      answer: "Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.",
      note: "Please note, some banks may charge a small transaction fee for international orders.",
    },
    {
      question: "Can I pay for my order with multiple methods?",
      answer: "No, payment for Nike orders can't be split between multiple payment methods.",
    },
    {
      question: "What payment method is accepted for SNKRS orders?",
      answer: "SNKRS orders accept Visa, Mastercard, PayPal, and Apple Pay.",
    },
    {
        question: "Why don't I see Apple Pay as an option?",
        answer: "To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.",
      },
  ];

  return (
    <div className="px-4 p-4 -ml-1 sm:px-8 lg:px-12 w-full max-w-[923.75px] mx-auto mt-8">
      <p className="text-xl font-medium text-[#111]">FAQs</p>
      {faqs.map((faq, index) => (
        <div key={index} className="mt-4">
          <p className="text-base font-bold text-left text-[#111]">{faq.question}</p>
          <p className="text-base text-left text-[#111] mt-2">{faq.answer}</p>
          {faq.note && <p className="text-sm text-left text-[#111] mt-2">{faq.note}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
