import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import useScrollToSection from "@/hooks/useScrollToSection";

// FIXME: Need to make mobile responsive better - check iPhone SE size
// Updated on: April 20, 2025 - made backgrounds more subtle

const HeroSection: React.FC = () => {
  const scrollToSection = useScrollToSection();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative pt-16 pb-20 gradient-bg">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row md:items-center md:justify-between"
        >
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Turn Unused Software Licenses Into{" "}
              <span className="text-primary dark:text-primary">Instant Cash</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              SoftSell helps businesses of all sizes recover value from unused or
              underutilized software licenses. Our streamlined process makes selling
              your licenses quick, secure, and profitable.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="text-lg"
              >
                Get a Quote
              </Button>
              <Button
                onClick={() => scrollToSection("how-it-works")}
                variant="outline"
                size="lg"
                className="text-lg"
              >
                Sell My Licenses
              </Button>
            </motion.div>
          </div>
          <motion.div
            variants={itemVariants}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600"
              alt="Software license management"
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-200 dark:bg-purple-700/20 rounded-full filter blur-3xl opacity-40 -z-10" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-indigo-200 dark:bg-indigo-700/20 rounded-full filter blur-3xl opacity-40 -z-10" />
      <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-pink-200 dark:bg-pink-700/20 rounded-full filter blur-3xl opacity-20 -z-10" />
    </section>
  );
};

export default HeroSection;
