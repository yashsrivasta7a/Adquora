import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "As a founder, I’ve worked with different agencies before, but Adquora really stood out. Within two months, we saw a noticeable jump in sales and our ad performance improved by nearly 60%. What I appreciate most is that they treat our brand like their own — always experimenting, optimizing, and pushing for better results.",
      name: "Udbhav Bhatt, Founder, BBH Homes"
    },
    {
      id: 2,
      text: "We partnered with Adquora for influencer marketing and ad campaigns. The team not only helped us increase conversions but also positioned our brand strongly across social platforms. Their proactive communication and creative inputs set them apart.",
      name: "Nidhhi Mahajan, Founder, NLM"
    },
    {
      id: 3,
      text: "Adquora has honestly felt like an extension of our own team. They rebuilt our website, managed our social media, and ran campaigns that actually delivered. The creative work gave our brand a fresh identity, and their ad strategies kept our sales growing month after month. It’s rare to find a team that can handle it all this smoothly.",
      name: "Arpit, Founder, Seven Array"
    },
    {
      id: 4,
      text: "Working with Adquora has been one of the best decisions for our brand. They understand the struggles of a growing business and step in wherever needed — from SEO to creatives to performance ads. What I value most is how approachable and solution-oriented the team is. They’re quick to act, transparent with their process, and genuinely invested in our growth.",
      name: "Piyush, Founder, Elite Chuno"
    },
    {
      id: 5,
      text: "Great work done by Adquora. The whole experience was smooth, and we’ll definitely reach out again for future projects.",
      name: "Aarav S."
    },
    {
      id: 6,
      text: "Adquora feels more like working with an in-house team than an outside agency. Super easy to collaborate with.",
      name: "Priya K."
    },
    {
      id: 7,
      text: "After Adquora took over our ads, we saw steady growth in online sales. They kept us updated throughout and explained everything clearly.",
      name: "Rohan M."
    },
    {
      id: 8,
      text: "We struggled with social media consistency earlier, but the plan Adquora gave us made a big difference. Results started showing within weeks.",
      name: "Simran T."
    },
    {
      id: 9,
      text: "Our website redesign with Adquora gave our brand a fresh identity and improved customer experience. The process was seamless from start to finish.",
      name: "Kabir D."
    }
  ];

  const row1Testimonials = testimonials.slice(0, 3);
  const row2Testimonials = testimonials.slice(3, 6);
  const row3Testimonials = testimonials.slice(6, 9);

  const TestimonialCard = ({ testimonial }) => (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <p className="testimonial-text">{testimonial.text}</p>
        <div className="testimonial-author">
          <span className="testimonial-name">{testimonial.name}</span>
        </div>
      </div>
    </div>
  );

  const MarqueeRow = ({ testimonials, direction = 'left', speed = 30 }) => {
    const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

    return (
      <div className="testimonial-row">
        <div className={`testimonial-marquee testimonial-marquee-${direction}`} style={{ '--speed': `${speed}s` }}>
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h3 className="testimonials-title">Loved by companies worldwide</h3>
          <p className="testimonials-subtitle">See what our Clients are saying about Adquora</p>
        </div>

        <div className="testimonials-marquee-container">
          <MarqueeRow testimonials={row1Testimonials} direction="left" speed={40} />
          <MarqueeRow testimonials={row2Testimonials} direction="right" speed={35} />
          <MarqueeRow testimonials={row3Testimonials} direction="left" speed={45} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;