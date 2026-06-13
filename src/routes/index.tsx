import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Github,
  Code2,
  Trophy,
  Download,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  Database,
  Globe,
  Cpu,
  Award,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Particles } from "@/components/portfolio/Particles";
import { FloatingShapes } from "@/components/portfolio/FloatingShapes";
import { Avatar3D } from "@/components/portfolio/Avatar3D";
import { Section } from "@/components/portfolio/Section";
import { TiltCard } from "@/components/portfolio/TiltCard";
import resume from "@/assets/resume.pdf.asset.json";
import shot1 from "@/assets/increedu-image.png.asset.json";
import shot2 from "@/assets/increedu-image-2.png.asset.json";
import shot3 from "@/assets/increedu-image-3.png.asset.json";
import shot4 from "@/assets/increedu-image-4.png.asset.json";
import shot5 from "@/assets/increedu-image-5.png.asset.json";
import shot6 from "@/assets/increedu-image-6.png.asset.json";
import vinnuPhoto from "@/assets/vinnu.png.asset.json";

const increeduShots = [
  { src: shot1.url, caption: "Learner login & adaptive landing" },
  { src: shot2.url, caption: "Interest assessment flow" },
  { src: shot3.url, caption: "Personalized learning paths" },
  { src: shot4.url, caption: "Mentor connections & milestones" },
  { src: shot5.url, caption: "Teacher dashboard & course upload" },
  { src: shot6.url, caption: "Admin dashboard & analytics" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vinnu Battu — Full Stack Developer & CS Student" },
      {
        name: "description",
        content:
          "Portfolio of Vinnu Battu — Computer Science Engineering student, MERN stack developer, and competitive programmer based in Visakhapatnam, India.",
      },
      { property: "og:title", content: "Vinnu Battu — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "MERN stack developer, 106+ LeetCode problems solved, 2★ CodeChef. Building beautiful, scalable software.",
      },
    ],
  }),
  component: Portfolio,
});

const stats = [
  { value: "106+", label: "LeetCode Solved", icon: Code2 },
  { value: "2★", label: "CodeChef Rating", icon: Trophy },
  { value: "MERN", label: "Full Stack Dev", icon: Globe },
  { value: "2028", label: "Graduating", icon: GraduationCap },
];

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    items: ["C", "C++", "Java", "Python", "JavaScript"],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    items: ["HTML", "CSS", "React.js", "Node.js", "Express.js"],
  },
  { title: "Database", icon: Database, items: ["MongoDB"] },
  {
    title: "Core Concepts",
    icon: Cpu,
    items: ["DSA", "OOP", "DBMS"],
  },
];

const achievements = [
  { title: "106+ LeetCode Problems Solved", desc: "Consistent practice across DSA topics." },
  { title: "2★ CodeChef Rating", desc: "Active competitive programmer." },
  { title: "LeetCode 100 Days Consistency Badge", desc: "Daily discipline & consistency." },
  { title: "SUSHACKS 3.0 Hackathon", desc: "Participated in a national-level hackathon." },
  { title: "Google Cloud Arcade Program", desc: "Hands-on cloud labs & badges." },
];

const certifications = [
  "MERN Stack Development Training",
  "Google Cloud Arcade Certifications",
  "Technical Workshops & Coding Programs",
];

const profiles = [
  {
    name: "GitHub",
    handle: "@vinnubattu9-cmd",
    url: "https://github.com/vinnubattu9-cmd",
    icon: Github,
  },
  {
    name: "LeetCode",
    handle: "@vinnubattu7",
    url: "https://leetcode.com/u/vinnubattu7/",
    icon: Code2,
  },
  {
    name: "CodeChef",
    handle: "@vinnu_7",
    url: "https://www.codechef.com/users/vinnu_7",
    icon: Trophy,
  },
];

function Portfolio() {
  return (
    <div id="top" className="relative min-h-screen overflow-hidden">
      <Particles />
      <Nav />

      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-20 px-4">
        <FloatingShapes />
        <div className="relative mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-xs">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-muted-foreground">Available for internships · 2026</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="block italic font-medium opacity-90">Vinnu</span>
              <span className="block text-gradient animate-gradient">BATTU</span>
            </h1>

            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-lg">
              Computer Science Engineering Student · Full Stack Developer · Competitive Programmer
            </p>
            <p className="mt-3 text-sm text-muted-foreground/80 max-w-lg">
              I build performant, full-stack web applications with the MERN stack — backed by a
              love for problem solving, data structures, and clean software engineering.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-primary animate-gradient px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform animate-glow-sweep"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={resume.url}
                download
                className="inline-flex items-center gap-2 rounded-full glass-strong px-5 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-white/5 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </div>
          </motion.div>

          <Avatar3D />
        </div>
      </section>

      {/* ABOUT */}
      <Section
        id="about"
        eyebrow="About me"
        title={<>Engineering ideas into <span className="text-gradient">software</span></>}
        subtitle="A motivated Computer Science Engineering undergraduate from Visakhapatnam, India — passionate about software development, web technologies, DSA, and competitive programming."
      >
        <div className="grid md:grid-cols-3 gap-5">
          <TiltCard className="md:col-span-2">
            <div className="glass-strong rounded-3xl p-6 md:p-8 h-full glow-ring">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="relative shrink-0 mx-auto sm:mx-0">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-primary opacity-60 blur-md" />
                  <img
                    src={vinnuPhoto.url}
                    alt="Vinnu Battu portrait"
                    className="relative h-36 w-36 sm:h-40 sm:w-40 rounded-2xl object-cover ring-1 ring-white/15"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-xl bg-gradient-primary p-2.5 shadow-glow">
                      <GraduationCap className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-lg md:text-xl font-semibold">B.Tech in Computer Science Engineering</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    I'm currently pursuing my undergraduate degree with a strong academic record
                    <span className="text-foreground font-medium"> (CGPA 8.7/10)</span>. My focus is on
                    full-stack engineering with the MERN stack, sharpening DSA fundamentals daily on
                    LeetCode and CodeChef, and shipping projects that combine clean architecture with
                    great user experience.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["MERN", "DSA", "OOP", "DBMS", "REST APIs", "Git"].map((t) => (
                      <span key={t} className="rounded-full glass px-3 py-1 text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
          <TiltCard>
            <div className="glass-strong rounded-3xl p-8 h-full glow-ring">
              <div className="text-6xl font-display font-bold text-gradient">8.7</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">CGPA / 10</div>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" /> Visakhapatnam, India
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="h-4 w-4 text-primary" /> Class of 2028
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <TiltCard>
                <div className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                  <s.icon className="h-5 w-5 mx-auto mb-3 text-primary" />
                  <div className="font-display text-3xl font-bold text-gradient">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section
        id="skills"
        eyebrow="Skills"
        title={<>The <span className="text-gradient">tech stack</span> I work with</>}
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <TiltCard>
                <div className="glass-strong rounded-3xl p-6 h-full glow-ring group">
                  <div className="rounded-xl bg-gradient-primary w-11 h-11 flex items-center justify-center shadow-glow mb-4 group-hover:scale-110 transition-transform">
                    <g.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold mb-3">{g.title}</h3>
                  <ul className="space-y-1.5">
                    {g.items.map((it) => (
                      <li key={it} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section
        id="projects"
        eyebrow="Featured project"
        title={<>Building <span className="text-gradient">InCreEdu</span></>}
        subtitle="A full-stack learning management platform built end-to-end with the MERN stack."
      >
        <TiltCard>
          <div className="relative glass-strong rounded-3xl p-8 md:p-12 overflow-hidden glow-ring">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />

            <div className="relative grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs mb-4">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  Full-Stack · MERN
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold">
                  InCreEdu — Learning Management Platform
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  A secure, interactive LMS with authentication, course & resource management,
                  real-time database integration, and a clean REST API layer. Designed for both
                  learners and instructors with a focus on UX and performance.
                </p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm">
                  {[
                    "Secure auth & authorization",
                    "Course & resource management",
                    "Real-time MongoDB integration",
                    "Full-stack REST architecture",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["MongoDB", "Express.js", "React.js", "Node.js", "REST"].map((t) => (
                    <span key={t} className="rounded-full glass px-3 py-1 text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="relative aspect-square rounded-2xl glass overflow-hidden p-3">
                  <div className="absolute inset-0 bg-gradient-primary opacity-10" />
                  <motion.img
                    key={shot1.url}
                    src={shot1.url}
                    alt="InCreEdu learner login"
                    loading="lazy"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative h-full w-full object-cover object-top rounded-xl"
                  />
                  <div className="absolute bottom-4 left-4 right-4 glass-strong rounded-xl px-3 py-2 text-xs flex items-center justify-between">
                    <span className="font-mono">incre-edu.app</span>
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Screenshot gallery */}
            <div className="relative mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
              {increeduShots.map((s, i) => (
                <motion.a
                  key={s.src}
                  href={s.src}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="group block glass rounded-2xl overflow-hidden glow-ring"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-black/20">
                    <img
                      src={s.src}
                      alt={`InCreEdu — ${s.caption}`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-4 py-3 text-xs text-muted-foreground">{s.caption}</div>
                </motion.a>
              ))}
            </div>
          </div>
        </TiltCard>
      </Section>

      {/* ACHIEVEMENTS */}
      <Section
        id="achievements"
        eyebrow="Achievements"
        title={<>Milestones & <span className="text-gradient">recognition</span></>}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <TiltCard>
                <div className="glass-strong rounded-2xl p-6 h-full hover:bg-white/5 transition-colors">
                  <Trophy className="h-5 w-5 text-primary mb-3" />
                  <h4 className="font-display font-semibold">{a.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{a.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-10">
          <h3 className="font-display text-xl font-semibold mb-4 text-center">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((c) => (
              <div
                key={c}
                className="glass rounded-2xl p-5 flex items-center gap-3 hover:bg-white/5 transition-colors"
              >
                <Award className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CODING PROFILES */}
      <Section
        eyebrow="Coding profiles"
        title={<>Find me <span className="text-gradient">online</span></>}
      >
        <div className="grid md:grid-cols-3 gap-5">
          {profiles.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group block"
            >
              <div className="glass-strong rounded-3xl p-6 glow-ring h-full">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-gradient-primary p-3 shadow-glow">
                    <p.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold mt-4">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.handle}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        eyebrow="Get in touch"
        title={<>Let's <span className="text-gradient">build</span> something</>}
        subtitle="Open to internships, collaborations, and interesting problems to solve."
      >
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: Mail, label: "Email", value: "vinnubattu9@gmail.com", href: "mailto:vinnubattu9@gmail.com" },
            { icon: Phone, label: "Phone", value: "+91 83741 30507", href: "tel:+918374130507" },
            { icon: MapPin, label: "Location", value: "Visakhapatnam, AP, India" },
          ].map((c) => {
            const Inner = (
              <div className="glass-strong rounded-3xl p-6 h-full glow-ring hover:bg-white/5 transition-colors">
                <c.icon className="h-5 w-5 text-primary mb-3" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                <div className="font-display font-semibold mt-1 break-all">{c.value}</div>
              </div>
            );
            return c.href ? (
              <a key={c.label} href={c.href} className="block">
                {Inner}
              </a>
            ) : (
              <div key={c.label}>{Inner}</div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="mailto:vinnubattu9@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform"
          >
            <Mail className="h-4 w-4" />
            Say hello
          </a>
        </div>
      </Section>

      <footer className="relative py-10 px-4 text-center text-xs text-muted-foreground border-t border-border/50">
        <p>© {new Date().getFullYear()} Vinnu Battu · Crafted with care.</p>
      </footer>
    </div>
  );
}
