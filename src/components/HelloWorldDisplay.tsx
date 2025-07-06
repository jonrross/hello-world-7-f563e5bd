import { motion } from 'framer-motion';

export function HelloWorldDisplay() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.h1 
        className="text-4xl md:text-6xl lg:text-8xl font-bold text-foreground"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        hello world 7
      </motion.h1>
    </div>
  );
}