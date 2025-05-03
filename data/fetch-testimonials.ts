export interface Testimonial {
  name: string;
  role: string;
  imageUrl: string;
  testimonial: string;
}

export default function fetchTestimonials(): Promise<Testimonial[]> {
  const testimonials = [
    {
      name: 'Alex Saputra',
      role: 'Petani Tanaman Teh',
      imageUrl: '/assets/testimonials/alex.webp',
      testimonial:
        'Ketika Saya menemukan DrieAgri. Saya sangat terbantu dalam hal memelihara tanaman dengan menggunakan teknologi IOT. Saya jadi mengikuti tren perkembangan teknologi dalam memelihara tanaman dan sangat bagus untuk petani di Indonesia',
    },
    {
      name: 'Budi Santoso',
      role: 'Petani Padi',
      imageUrl: '/assets/testimonials/budi.webp',
      testimonial:
        'Sejak menggunakan DrieAgri, saya merasa lebih mudah dalam mengelola lahan pertanian. Teknologi yang diterapkan sangat membantu proses pemantauan dan perawatan padi. Ini benar-benar solusi modern yang cocok untuk petani di masa kini.',
    },
    {
      name: 'Citra Dewi',
      role: 'Petani Sayuran Organik',
      imageUrl: '/assets/testimonials/citra.webp',
      testimonial:
        'DrieAgri memudahkan saya dalam mengelola pertanian organik. Saya dapat memantau kondisi tanaman secara real-time dan merespons dengan cepat. Teknologi ini sangat membantu menjaga kualitas hasil panen dan mendukung pertanian berkelanjutan.',
    },
  ];

  return Promise.resolve(testimonials);
}
