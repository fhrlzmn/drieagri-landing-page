'use client';

import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openedFaq, setOpenedFaq] = useState<number>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const faqs = [
    {
      question: 'Gimana Cara Bergabung di DrieAgri?',
      answer:
        'Pertama, Kamu bisa mendaftarkan akun terlebih dahulu ya agries. Setelah kamu mendaftarkan akun kamu bisa login untuk masuk ke dalam fitur yang tersedia pada DrieAgri dan selamat kamu sudah bergabung di DrieAgri',
    },
    {
      question: 'Kalau lupa password bagaimana?',
      answer:
        'Kamu bisa klik tombol lupa password yang ada di halaman login, lalu masukkan email yang kamu gunakan untuk mendaftar. Setelah itu, kamu akan mendapatkan email untuk mereset password kamu.',
    },
    {
      question: 'Untuk mengurus dokumen bagaimana?',
      answer:
        'Kamu bisa menghubungi customer service kami melalui email atau WhatsApp yang tertera di website kami. Customer service kami akan membantu kamu untuk mengurus dokumen yang kamu butuhkan.',
    },
    {
      question: 'Cara mendapatkan pelayanan?',
      answer:
        'Kamu bisa menghubungi customer service kami melalui email atau WhatsApp yang tertera di website kami. Customer service kami akan membantu kamu untuk mendapatkan',
    },
    {
      question: 'Cara mengikuti program DrieAgri?',
      answer:
        'Kamu bisa melakukan pendaftaran program yang ada di website kami. Setelah itu, kamu akan mendapatkan email konfirmasi untuk mengikuti program tersebut.',
    },
  ];

  return (
    <section id='bantuan' className='w-full mt-32 md:mt-48 text-center'>
      <span className='text-black text-lg md:text-2xl font-bold'>
        Frequently Asked Questions
      </span>
      <h2 className='text-primary text-3xl md:text-5xl font-bold mt-4'>
        Butuh Bantuan?
      </h2>
      <span className='block h-1 w-full max-w-64 md:max-w-192 bg-secondary mt-6 mx-auto' />
      <div className='grid md:grid-cols-3 w-full gap-4 mt-16 px-12 md:px-24'>
        <div className='hidden md:block md:col-span-1 rounded-lg overflow-hidden bg-[url("/assets/faq.jpg")] bg-cover' />
        <div className='md:col-span-2 flex flex-col bg-white rounded-lg border-2 border-primary'>
          {faqs.map((faq, index) => (
            <div key={index} className='text-start'>
              <button
                onClick={() => setOpenedFaq(openedFaq === index ? -1 : index)}
                className='flex justify-between items-center w-full bg-primary text-white p-4'
              >
                <h4 className='text-lg md:text-xl text-white font-bold text-start'>
                  {faq.question}
                </h4>
                <ChevronDown
                  size={48}
                  className={`font-semibold transform transition-transform duration-300 ${
                    openedFaq === index ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              <div
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                style={{
                  maxHeight:
                    openedFaq === index
                      ? `${contentRefs.current[index]?.scrollHeight || 0}px`
                      : '0px',
                }}
                className='bg-white overflow-hidden transition-all duration-300 ease-in-out'
              >
                <p className='text-[#585858] text-md md:text-xl p-4'>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
