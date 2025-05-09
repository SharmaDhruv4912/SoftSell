import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, InnovateTech",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      quote: "After our company merger, we had dozens of duplicate enterprise software licenses sitting unused. SoftSell helped us recover over $120,000 in just two weeks. The process was incredibly smooth, and their valuation exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Finance Director, GrowthPoint",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      quote: "As we migrated to cloud solutions, our old perpetual licenses were just sitting on the books as depreciating assets. SoftSell's marketplace found qualified buyers quickly and handled all the legal paperwork for us. We've since made this a regular part of our software asset management strategy.",
      rating: 4.5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what businesses like yours have to say about working with SoftSell.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <blockquote className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex text-accent mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(testimonial.rating)
                        ? "fill-current"
                        : i < testimonial.rating
                        ? "fill-current opacity-50"
                        : "stroke-current fill-transparent"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
