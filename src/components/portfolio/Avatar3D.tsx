import { motion } from "framer-motion";

export function Avatar3D() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mx-auto h-72 w-72 md:h-96 md:w-96"
      style={{ perspective: 1000 }}
    >
      {/* glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-40 blur-3xl animate-pulse-glow" />

      {/* orbit rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-primary/30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 rounded-full border border-accent/30"
      />

      {/* central avatar disc */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-8 rounded-full glass-strong glow-ring flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-primary opacity-20" />
        <span className="relative font-display text-7xl md:text-8xl font-bold text-gradient">
          VB
        </span>
      </motion.div>

      {/* floating tech badges */}
      {[
        { label: "{ }", x: "-10%", y: "10%", delay: 0 },
        { label: "</>", x: "95%", y: "20%", delay: 0.5 },
        { label: "⚛", x: "100%", y: "75%", delay: 1 },
        { label: "JS", x: "-5%", y: "80%", delay: 1.5 },
      ].map((b) => (
        <motion.div
          key={b.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{ delay: b.delay, duration: 3, repeat: Infinity, repeatType: "reverse" }}
          style={{ left: b.x, top: b.y }}
          className="absolute -translate-x-1/2 -translate-y-1/2 glass rounded-xl px-3 py-2 font-display text-sm font-bold text-gradient shadow-glow"
        >
          {b.label}
        </motion.div>
      ))}
    </motion.div>
  );
}
