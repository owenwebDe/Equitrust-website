import { MessageCircle, Users, Bell, Heart } from 'lucide-react';

const Community = () => {
  const communityStats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "25,000+",
      label: "Community Members",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      number: "1,000+",
      label: "Daily Active Users",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Bell className="h-8 w-8" />,
      number: "24/7",
      label: "Community Support",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      number: "100+",
      label: "Partners & Supporters",
      color: "from-red-500 to-red-600"
    }
  ];

  const socialLinks = [
    { platform: 'Telegram', url: 'https://t.me/+4m0z6t2nDsBmYTc0', color: 'bg-blue-500 hover:bg-blue-600' },
    { platform: 'Discord', url: '#', color: 'bg-indigo-500 hover:bg-indigo-600' },
    { platform: 'Twitter', url: 'https://x.com/equitrustai', color: 'bg-sky-500 hover:bg-sky-600' },
    { platform: 'Medium', url: '#', color: 'bg-gray-600 hover:bg-gray-700' }
  ];

  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Be part of the Equitrust journey and stay updated on the latest developments
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`bg-gradient-to-r ${stat.color} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 text-white`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <p className="text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-900/50 to-green-900/50 border border-blue-500/30 rounded-xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users already earning $EQAI through mining and trading. 
            Connect with our community and stay updated on all developments.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className={`${social.color} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105`}
              >
                Join {social.platform}
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all duration-200 transform hover:scale-105">
              Start Mining Now
            </button>
            <a 
              href="/application-b8cc3892-b53e-4341-9881-15c91e6333d1.apk" 
              download
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-200 inline-block text-center"
            >
              Download Mining App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;