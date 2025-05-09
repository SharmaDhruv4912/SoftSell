import React from "react";
import { motion } from "framer-motion";
import { Shield, DollarSign, Zap, Headphones, Heart, Users } from "lucide-react";
// import { Button } from "@/components/ui/button";

const WhyChooseUs: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // added one more feature but removed it - maybe add it back later?
  // TODO: remember to check with marketing if we need to change the "70%" number
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Transactions",
      description: "End-to-end encryption and compliance with all regulatory requirements for software license transfers.",
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Best Market Rates", // maybe change to "Competitive" instead?
      description: "Our extensive buyer network ensures you receive up to 70% of the original purchase price.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast Processing",
      description: "Complete the entire process within 2-3 business days, with same-day valuations available.",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Expert Support",
      description: "Dedicated account managers assist you through every step of the selling process.",
    },
    // {
    //   icon: <Heart className="h-8 w-8" />,
    //   title: "Customer Satisfaction",
    //   description: "Join thousands of satisfied customers who've successfully sold their licenses through SoftSell.",
    // },
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
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
            Why Choose SoftSell
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            We've built a platform that prioritizes transparency, security, and maximum value for your assets.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md"
            >
              <div className="text-accent text-3xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
