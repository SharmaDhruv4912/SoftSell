import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Upload, BarChart2, DollarSign } from "lucide-react";
import useScrollToSection from "@/hooks/useScrollToSection";

const HowItWorks: React.FC = () => {
  const scrollToSection = useScrollToSection();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const steps = [
    {
      number: 1,
      icon: <Upload className="h-8 w-8" />,
      title: "Upload License",
      description:
        "Submit your software license details through our secure portal. We support all major software vendors.",
    },
    {
      number: 2,
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Get Valuation",
      description:
        "Our experts analyze current market conditions to determine the maximum value for your licenses.",
    },
    {
      number: 3,
      icon: <DollarSign className="h-8 w-8" />,
      title: "Get Paid",
      description:
        "Accept our offer and receive payment within 48 hours via your preferred payment method.",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white dark:bg-gray-900">
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
            How It Works
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Our streamlined three-step process makes selling your unused software
            licenses simple and profitable.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 text-primary dark:text-primary rounded-full mb-6 mx-auto text-3xl font-bold">
                {step.number}
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4 text-center text-primary">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            className="px-8"
          >
            Start Your Valuation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
