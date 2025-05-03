export interface BlogPost {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

export default function fetchBlogPosts(): Promise<BlogPost[]> {
  const blogPosts = [
    {
      title: 'Petani Indonesia Menerapkan Smart Farming 4.0',
      description:
        'Smart farming 4.0 merupakan metode pertanian cerdas berbasis teknologi, di mana berbagai teknologi mutakhir seperti sensor tanah, drone, dan sistem irigasi otomatis digunakan untuk mengoptimalkan produksi. Dengan pendekatan ini, petani dapat memantau kondisi tanaman secara real-time, meningkatkan efisiensi penggunaan air dan pupuk, serta mengurangi risiko gagal panen.',
      imageUrl: '/assets/blog/blog-1.png',
      linkUrl: '#blog',
    },
    {
      title: 'Petani Indonesia Menerapkan Pertanian Modern',
      description:
        'Inovasi di bidang pertanian semakin berkembang dan mengubah wajah industri pertanian yang selama ini dikenal sebagai industri tradisional. Pertanian modern mencakup penggunaan mesin-mesin canggih, sistem pertanian vertikal, dan teknologi berbasis AI yang membantu petani dalam pengambilan keputusan. Hal ini membuka peluang baru bagi generasi muda untuk terlibat dalam sektor pertanian yang lebih efisien dan produktif.',
      imageUrl: '/assets/blog/blog-2.png',
      linkUrl: '#blog',
    },
    {
      title: 'Petani Indonesia Menerapkan Pertanian Digital',
      description:
        'Pertanian digital adalah bentuk transformasi digital dalam dunia pertanian, di mana data dan teknologi informasi digunakan untuk meningkatkan kualitas dan kuantitas hasil panen. Petani kini dapat mengakses aplikasi untuk memantau cuaca, merekam data pertanian, hingga mengelola hasil panen secara digital, sehingga proses pertanian menjadi lebih transparan dan terukur.',
      imageUrl: '/assets/blog/blog-3.png',
      linkUrl: '#blog',
    },
    {
      title: 'Petani Indonesia Menerapkan Pertanian Berkelanjutan',
      description:
        'Pertanian berkelanjutan merupakan pendekatan yang menyeimbangkan kebutuhan manusia akan pangan dengan pelestarian lingkungan hidup. Dalam praktiknya, petani menghindari penggunaan pestisida berlebihan, menjaga kesuburan tanah, dan menerapkan rotasi tanaman. Pendekatan ini bertujuan menciptakan sistem pertanian yang ramah lingkungan, tahan terhadap perubahan iklim, dan bermanfaat bagi generasi mendatang.',
      imageUrl: '/assets/blog/blog-4.jpg',
      linkUrl: '#blog',
    },
    {
      title: 'Petani Indonesia Menerapkan Pertanian Organik',
      description:
        'Pertanian organik adalah metode produksi pangan tanpa penggunaan bahan kimia sintetis seperti pestisida dan pupuk kimia. Petani organik mengandalkan pupuk kompos, pestisida alami, dan metode biologis untuk mengendalikan hama. Produk hasil pertanian organik cenderung lebih sehat, memiliki rasa yang alami, dan ramah lingkungan karena tidak mencemari tanah dan air.',
      imageUrl: '/assets/blog/blog-5.jpg',
      linkUrl: '#blog',
    },
    {
      title: 'Petani Indonesia Menerapkan Pertanian Presisi',
      description:
        'Pertanian presisi adalah pendekatan modern yang mengandalkan data dan teknologi tinggi seperti GPS, sensor tanah, dan pemetaan satelit untuk mengelola pertanian dengan sangat tepat. Dengan pertanian presisi, petani dapat mengetahui kebutuhan spesifik setiap bagian lahan, menghemat input seperti air dan pupuk, serta memaksimalkan hasil panen secara berkelanjutan.',
      imageUrl: '/assets/blog/blog-6.jpg',
      linkUrl: '#blog',
    },
    {
      title: 'Petani Indonesia Menerapkan Pertanian Terpadu',
      description:
        'Pertanian terpadu merupakan sistem pertanian yang mengintegrasikan berbagai kegiatan pertanian seperti tanaman pangan, peternakan, dan perikanan dalam satu kesatuan yang saling mendukung. Model ini memanfaatkan limbah dari satu kegiatan sebagai input untuk kegiatan lainnya, menciptakan efisiensi sumber daya, meningkatkan pendapatan petani, dan menjaga keseimbangan ekosistem.',
      imageUrl: '/assets/blog/blog-7.jpg',
      linkUrl: '#blog',
    },
    {
      title: 'Petani Indonesia Menerapkan Pertanian Berbasis Data',
      description:
        'Pertanian berbasis data merupakan pendekatan yang menggunakan informasi dan analisis data untuk mendukung pengambilan keputusan dalam praktik pertanian. Melalui sensor, drone, dan perangkat lunak analitik, petani dapat mengetahui pola cuaca, kondisi tanah, dan pertumbuhan tanaman secara lebih akurat. Ini membantu meningkatkan hasil panen, mengurangi pemborosan, dan meningkatkan keberlanjutan usaha tani.',
      imageUrl: '/assets/blog/blog-8.jpg',
      linkUrl: '#blog',
    },
    {
      title: 'Petani Indonesia Menerapkan Pertanian Berbasis Teknologi',
      description:
        'Pertanian berbasis teknologi menandai perubahan paradigma dalam dunia pertanian Indonesia. Petani kini memanfaatkan teknologi seperti Internet of Things (IoT), kecerdasan buatan (AI), dan blockchain untuk mengelola proses produksi secara efisien. Teknologi ini memungkinkan pelacakan rantai pasok, penjadwalan penyiraman otomatis, serta analisis prediktif terhadap hasil panen.',
      imageUrl: '/assets/blog/blog-9.jpg',
      linkUrl: '#blog',
    },
  ];

  return Promise.resolve(blogPosts);
}
