import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { images } from '../assets';

export default function Blog() {
  const articles = [
    {
      image: images.blog[0],
      category: 'Wellness',
      title: '10 Morning Rituals for Inner Peace',
      excerpt: 'Discover simple yet powerful morning practices that can transform your day and bring lasting tranquility.',
      date: 'March 15, 2024',
      readTime: '5 min read'
    },
    {
      image: images.blog[1],
      category: 'Yoga',
      title: 'The Benefits of Daily Yoga Practice',
      excerpt: 'Learn how a consistent yoga practice can improve your physical health, mental clarity, and emotional balance.',
      date: 'March 12, 2024',
      readTime: '7 min read'
    },
    {
      image: images.blog[2],
      category: 'Nature',
      title: 'Forest Bathing: Nature\'s Therapy',
      excerpt: 'Explore the Japanese practice of Shinrin-yoku and its profound effects on stress reduction and well-being.',
      date: 'March 10, 2024',
      readTime: '6 min read'
    }
  ];

  return (
    <section id="blogs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
          <p className="text-gray-600 text-lg">Insights and inspiration for your wellness journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-sm font-medium rounded-full mb-3">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
