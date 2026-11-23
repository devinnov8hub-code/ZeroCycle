"use client";

import { useRef, type ReactNode } from "react";
import Navbar from "./components/navBar";
import CurrentYear from "./components/CurrentYear";
import Image from "next/image";
import heroImg from "./assets/product_image3.png";
import visionImg from "./assets/green_image.jpeg";
import Logo1 from "../app/assets/Brand_logo_2.png";
import teamImg from "../app/assets/Team_Image.jpg";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";

import {
  BatteryCharging,
  Bike,
  CircuitBoard,
  Gauge,
  Lightbulb,
  Motorbike,
  Package,
  Route,
  Settings2,
  Truck,
  Users,
  Zap,
} from "lucide-react";
import LogoCarousel from "./components/logoCarousel";

const PROGRAMME = "TETFAIR 2026";
const PRODUCT_NAME = "ZeroCycle";
const PRODUCT_DESCRIPTOR = "Electric motorcycle";

const teamContent = {
  title: "Meet the team behind ZeroCycle.",
  paragraphs: [
    "The ZeroCycle team is working to make electric mobility more accessible by transforming the motorcycles people already depend on, rather than asking riders to replace them.",
    "The project is built around a practical retrofit system that replaces the combustion engine with an electric drivetrain while retaining the original chassis. Its motor, lithium-ion battery, controller and Battery Management System work together to deliver power and monitor battery health.",
    "Designed with Nigerian roads and environmental conditions in mind, ZeroCycle aims to bring electric mobility within reach of individual owners and commercial riders.",
  ],
  imageAlt: "The ZeroCycle team",
};

const technology = [
  {
    number: "01",
    title: "Electric Motor",
    description:
      "Converts electrical energy into mechanical power to propel the motorcycle.",
    icon: Zap,
  },
  {
    number: "02",
    title: "Lithium-ion Battery",
    description:
      "Stores the electrical energy needed to power the electric drivetrain.",
    icon: BatteryCharging,
  },
  {
    number: "03",
    title: "Motor Controller",
    description:
      "Regulates power delivery between the battery and electric motor.",
    icon: Settings2,
  },
  {
    number: "04",
    title: "Battery Management System",
    description:
      "Monitors battery performance and manages important battery operating parameters.",
    icon: CircuitBoard,
  },
];

const specifications = [
  {
    value: "30 – 80",
    unit: "KM",
    title: "Riding Range",
    description: "Proposed distance per charge",
    icon: Route,
  },
  {
    value: "30 – 70",
    unit: "KM/H",
    title: "Maximum Speed",
    description: "Proposed maximum speed",
    icon: Gauge,
  },
  {
    value: "120 - 200",
    unit: "KG",
    title: "Load Capacity",
    description: "Proposed load capacity",
    icon: Package,
  },
];

const audiences = [
  {
    title: "Individual Owners",
    description:
      "Give your existing motorcycle a new electric-powered direction without replacing its original chassis.",
    icon: Bike,
    number: "01",
  },
  {
    title: "Commercial Riders",
    description:
      "Explore an alternative propulsion system for everyday passenger transportation.",
    icon: Motorbike,
    number: "02",
  },
  {
    title: "Delivery Operators",
    description:
      "Explore the possibilities of electric-powered motorcycles for delivery and logistics operations.",
    icon: Truck,
    number: "03",
  },
  {
    title: "Fleet Owners",
    description:
      "Consider retrofitting existing motorcycles as part of a wider electric mobility transition.",
    icon: Users,
    number: "04",
  },
];

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Technology", href: "#technology" },
  { label: "Specifications", href: "#specifications" },
  { label: "Audience", href: "#audience" },
  { label: "Team", href: "#team" },
];

// Reusable Motion Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * One shared shell for every content section, so they all have the exact same
 * padding and width rules. A section can never squash or cut off its neighbour.
 * To add a new section, wrap it in <Section id="..." bg="bg-white"> and you're done.
 */
function Section({
  id,
  bg,
  children,
}: {
  id: string;
  bg: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative w-full scroll-mt-28 px-5 py-24 sm:px-10 lg:px-16 lg:py-32 ${bg}`}
    >
      <div className="mx-auto w-full max-w-[1440px]">{children}</div>
    </section>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
      <span className="h-2 w-2 rounded-full bg-brand-primary" />
      <span className="text-sm font-bold uppercase tracking-[0.25em] text-black">
        {children}
      </span>
    </motion.div>
  );
}

export default function App() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Subtle parallax lift on the hero motorcycle image as user scrolls
  const bikeY = useTransform(scrollYProgress, [0, 1], [0, -75]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    // overflow-x-clip (not overflow-hidden) so nothing is cut off vertically
    // and the sticky navbar keeps working
    <main className="w-full overflow-x-clip bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        id="home"
        className="
          relative isolate min-h-[850px] w-full
          overflow-hidden bg-[#F8F9F6]
          px-5 pb-20 pt-36
          sm:px-10 lg:min-h-screen lg:px-16
        "
      >
        <div className="relative mx-auto flex max-w-[1440px] flex-col">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="z-10 mb-10 flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-brand-primary" />
            <p className="font-tip text-xs font-semibold uppercase tracking-[0.25em] text-gray-600">
              Electric Mobility · Reimagined
            </p>
          </motion.div>

          <div className="relative z-10 select-none">
            <motion.h1
              style={{ y: titleY }}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="
                w-full text-center font-heading
                text-[clamp(3rem,10vw,11rem)] font-normal uppercase
                leading-[0.85] tracking-[-0.085em]
                text-[#172119]
              "
            >
              ZEROCYCLE
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="
                mt-8 flex flex-col gap-4
                sm:flex-row sm:items-end sm:justify-between
              "
            >
              <p className="font-tip max-w-[460px] text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
                A new generation of electric mobility.
                Transforming conventional petrol-powered
                motorcycles into electric-powered rides.
              </p>
            </motion.div>
          </div>

          <motion.div
            style={{ y: bikeY }}
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="
              pointer-events-none relative z-20
              -mt-10 flex w-full justify-center
              sm:-mt-32 lg:-mt-48
            "
          >
            <div className="relative h-[420px] w-full sm:h-[640px] lg:h-[800px]">
              <Image
                src={heroImg}
                alt="Zero emission electric motorcycle"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 90vw"
                className="object-contain object-center"
                loading="eager"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="
              relative z-30 mt-5 flex flex-col
              gap-5 border-t border-gray-200 pt-6
              sm:flex-row sm:items-center sm:justify-between
            "
          >
            <p className="font-tip max-w-[380px] text-sm leading-6 text-gray-700">
              Retain your motorcycle’s original chassis.
              Rethink how it moves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LOGO CAROUSEL */}
      <LogoCarousel />

      {/* ABOUT SECTION */}
      <Section id="about" bg="bg-white">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
          <motion.div
            className="min-w-0"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <SectionLabel>The idea behind the innovation</SectionLabel>

            <motion.h2
              variants={fadeUp}
              className="font-title max-w-2xl text-4xl font-black leading-[1.1] tracking-tight text-[#172119] sm:text-5xl lg:text-6xl"
            >
              Electric mobility, built around your{" "}
              <span className="text-brand-primary">motorcycle.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-tip mt-7 max-w-xl text-lg leading-9 text-black sm:text-xl sm:leading-10"
            >
              The Zero Emission Electric Motorcycle converts petrol-powered
              motorcycles to electric propulsion, replacing the internal
              combustion engine while retaining the original chassis. It
              uses an electric motor, rechargeable lithium-ion
              battery, motor controller, and BMS to deliver and regulate power
              and monitor battery performance.{" "}
              {PRODUCT_NAME} is {PRODUCT_DESCRIPTOR} developed under the {PROGRAMME} programme.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-tip mt-5 max-w-xl text-lg leading-9 text-black sm:text-xl sm:leading-10"
            >
              Designed for individual owners, commercial riders, delivery
              operators, and fleet owners in Nigeria, it targets 30-80 km per
              charge, 30-70 km/h, and 120-200 kg load capacity.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-w-0 items-center justify-center"
          >
            <Image
              src={heroImg}
              alt="Zero emission electric motorcycle"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full object-contain"
            />
          </motion.div>
        </div>
      </Section>

      {/* TECHNOLOGY SECTION */}
      <Section id="technology" bg="bg-[#F5F7F3]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end"
        >
          <div>
            <SectionLabel>Inside the system</SectionLabel>

            <motion.h2
              variants={fadeUp}
              className="font-title max-w-2xl text-4xl font-black leading-[1.1] tracking-tight text-[#172119] sm:text-5xl lg:text-6xl"
            >
              Four components.
              <br />
              <span className="text-brand-primary">One electric system.</span>
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="font-tip max-w-md text-lg leading-8 text-gray-700 sm:text-xl sm:leading-9"
          >
            A coordinated electric drivetrain designed to replace
            conventional engine propulsion while retaining the
            motorcycle’s original chassis.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {technology.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                variants={cardVariant}
                whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
                className="group rounded-[1.5rem] border border-gray-200/80 bg-white p-7 transition-colors duration-300 hover:border-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-tip text-sm font-bold tracking-widest text-gray-300">
                    {item.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFF6EB] text-brand-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-primary group-hover:text-white">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>
                </div>

                <h3 className="font-title mt-12 text-2xl font-bold tracking-tight text-[#172119]">
                  {item.title}
                </h3>

                <p className="font-tip mt-4 text-lg leading-8 text-black">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </Section>

      {/* SPECIFICATIONS SECTION */}
      <Section id="specifications" bg="bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="flex justify-center">
            <SectionLabel>Performance targets</SectionLabel>
          </div>

          <motion.h2
            variants={fadeUp}
            className="font-title text-4xl font-black leading-tight tracking-tight text-[#172119] sm:text-5xl lg:text-6xl"
          >
            Built around
            <span className="text-brand-primary"> everyday needs.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-tip mt-6 text-lg leading-9 text-gray-700 sm:text-xl sm:leading-10"
          >
            The electric bike is being developed around practical
            transportation requirements, with proposed performance
            targets for everyday mobility.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid gap-5 md:grid-cols-3"
        >
          {specifications.map((spec, index) => {
            const Icon = spec.icon;
            const featured = index === 1;

            return (
              <motion.article
                key={spec.title}
                variants={cardVariant}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                className={`relative overflow-hidden rounded-[1.75rem] p-8 sm:p-10 ${featured
                    ? "bg-brand-primary text-white shadow-xl shadow-brand-primary/15"
                    : "border border-gray-100 bg-[#F7F9F5] text-[#172119]"
                  }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-tip text-sm font-bold uppercase tracking-widest ${featured ? "text-white/75" : "text-gray-600"
                      }`}
                  >
                    0{index + 1} / Performance
                  </span>

                  <Icon
                    size={27}
                    strokeWidth={1.6}
                    className={featured ? "text-white/80" : "text-brand-primary"}
                  />
                </div>

                <div className="mt-14 flex items-baseline gap-2">
                  <span className="font-title text-5xl font-black tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                    {spec.value}
                  </span>

                  <span
                    className={`text-lg font-bold tracking-wider ${featured ? "text-white/90" : "text-black"
                      }`}
                  >
                    {spec.unit}
                  </span>
                </div>

                <h3 className="font-title mt-6 text-2xl font-bold">
                  {spec.title}
                </h3>

                <p
                  className={`font-tip mt-2 text-lg ${featured ? "text-white/80" : "text-gray-700"
                    }`}
                >
                  {spec.description}
                </p>

                <div
                  className={`mt-8 h-px w-full ${featured ? "bg-white/20" : "bg-gray-200"
                    }`}
                />

                <p
                  className={`font-tip mt-5 text-base ${featured ? "text-white/70" : "text-gray-600"
                    }`}
                >
                  Proposed design requirement
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </Section>

      {/* AUDIENCE SECTION */}
      <Section id="audience" bg="bg-[#F5F7F3]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            className="min-w-0"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <SectionLabel>Who it’s designed for</SectionLabel>

            <motion.h2
              variants={fadeUp}
              className="font-title text-4xl font-black leading-[1.1] tracking-tight text-[#172119] sm:text-5xl lg:text-6xl"
            >
              A different way to move for{" "}
              <span className="text-brand-primary">everyone.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-tip mt-7 max-w-md text-lg leading-9 text-gray-700 sm:text-xl sm:leading-10"
            >
              Electric mobility should be practical and accessible
              to the people who depend on motorcycles every day.
              Our retrofit concept explores possibilities for
              individuals and commercial operators alike.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid min-w-0 gap-3 sm:grid-cols-2"
          >
            {audiences.map((audience) => {
              const Icon = audience.icon;

              return (
                <motion.article
                  key={audience.number}
                  variants={cardVariant}
                  whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
                  className="group rounded-[1.5rem] border border-gray-200/80 bg-white p-6 transition-colors duration-300 hover:border-brand-primary/30 hover:shadow-lg hover:shadow-brand-primary/5 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFF6EB] text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <span className="font-tip text-sm font-bold text-gray-300">
                      {audience.number}
                    </span>
                  </div>

                  <h3 className="font-title mt-9 text-2xl font-bold text-[#172119]">
                    {audience.title}
                  </h3>

                  <p className="font-tip mt-3 text-lg leading-8 text-gray-700">
                    {audience.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </Section>

      {/* TEAM SECTION*/}
      <Section id="team" bg="bg-[#FAFBF8]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
        >
          {/* IMAGE (left) */}
          <motion.div variants={fadeUp} className="relative min-w-0">


            <div
              className="relative w-full overflow-hidden rounded-2xl"
              style={{ aspectRatio: "4 / 3" }}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={teamImg}
                  alt={teamContent.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover object-top "
                />
              </motion.div>
            </div>
          </motion.div>

          {/* WRITEUP  */}
          <motion.div variants={fadeUp} className="min-w-0">
            <h2 className="font-title text-4xl font-black leading-[1.1] tracking-tight text-[#172119] sm:text-5xl">
              {teamContent.title}
            </h2>

            <div
              aria-hidden="true"
              className="mt-5 h-1 w-12 rounded-full bg-brand-primary"
            />

            <div className="mt-7 space-y-5">
              {teamContent.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-tip text-lg leading-9 text-gray-700"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* VISION AND FOOTER */}
      <section
        id="contact"
        className="relative w-full scroll-mt-28 bg-[#172119] px-5 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#202E23] px-7 py-16 text-center sm:px-14 sm:py-24"
          >
            <motion.div
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={visionImg}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 90vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-[#172119]/60" />

            <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-brand-primary/15 blur-[100px]" />

            <div className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-brand-primary/10 blur-[100px]" />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="relative z-10 mx-auto max-w-3xl"
            >
              <motion.div
                variants={fadeUp}
                whileHover={{ rotate: 8, scale: 1.06 }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#A4EF75]/20 bg-[#A4EF75]/10 text-[#A4EF75]"
              >
                <Lightbulb size={30} />
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-[#A4EF75]"
              >
                The road ahead
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="font-title mt-6 text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl"
              >
                The future of mobility is
                <span className="text-[#A4EF75]"> electric.</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="font-tip mx-auto mt-7 max-w-xl text-lg leading-9 text-white/80 sm:text-xl sm:leading-10"
              >
                We are exploring a smarter approach to electric
                transportation, one that builds on what already
                exists and reimagines what is possible.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* FOOTER */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="flex flex-col gap-10 border-b border-white/10 pb-10 md:flex-row md:items-start md:justify-between">
              <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
                <a href="#home" className="flex w-fit items-center gap-3">
                  <Image
                    src={Logo1}
                    width={150}
                    alt="ZeroCycle logo"
                    className="h-auto w-[150px] shrink-0"
                  />
                </a>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-white/50">Programme</p>
                    <p className="mt-1 text-base text-white">{PROGRAMME}</p>
                  </div>

                  <div>
                    <p className="text-sm text-white/50">Technology</p>
                    <p className="mt-1 text-base text-white">{PRODUCT_DESCRIPTOR}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-7 gap-y-4">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-base font-medium text-white/75 transition-colors hover:text-[#A4EF75]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-white/60">
                © <CurrentYear /> ZEROCYCLE. All rights reserved.
              </p>

              <p className="text-sm text-white/60">
                Developed under {PROGRAMME}
              </p>
            </div>
          </motion.footer>
        </div>
      </section>
    </main>
  );
}