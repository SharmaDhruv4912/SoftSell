import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 40, height = 40 }) => {
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="text-primary" // Use the primary color
    >
      <motion.path
        d="M20 2C10.059 2 2 10.059 2 20C2 29.941 10.059 38 20 38C29.941 38 38 29.941 38 20C38 10.059 29.941 2 20 2Z"
        fill="currentColor"
        fillOpacity="0.2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.path
        d="M12 12C12 10.8954 12.8954 10 14 10H26C27.1046 10 28 10.8954 28 12V28C28 29.1046 27.1046 30 26 30H14C12.8954 30 12 29.1046 12 28V12Z"
        fill="currentColor"
        fillOpacity="0.6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.path
        d="M16 15H24M16 20H24M16 25H20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </motion.svg>
  );
};

export default Logo;