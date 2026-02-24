"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FadeIn,
  FadeInScale,
  SlideIn,
  FloatIn,
} from "@/components/scroll-animate";
import { QuoteForm } from "@/components/quote-form";
import {
  Cog,
  Factory,
  Users,
  Wrench,
  ClipboardList,
  Pencil,
  Building2,
  HardHat,
  Monitor,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Phone,
} from "lucide-react";
import Image from "next/image";

/* ── Unsplash images — 3D metal printing, industrial training ── */
const IMAGES = {
  hero: "/laser_cut.jpg",
  obj1: "/laser.jpg",
  obj2: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  obj3: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
  publicVise:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80",
  jour1: "/plastic.jpg",
  jour2: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=700&q=80",
  jour3: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=700&q=80",
  mod1: "/local.jpg",
  mod2: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
  mod3: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&q=80",
  cta: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80",
};

const objectifs = [
  {
    icon: Cog,
    title: "Maîtriser les technologies SLM / DMLS",
    desc: "Comprendre les principes de la fusion laser sur lit de poudre, les paramètres clés et les spécificités de chaque procédé.",
    img: IMAGES.obj1,
  },
  {
    icon: Factory,
    title: "Intégrer l'impression métal en production",
    desc: "Identifier les cas d'usage pertinents, évaluer la rentabilité et planifier le déploiement en environnement industriel.",
    img: IMAGES.obj2,
  },
  {
    icon: Users,
    title: "Former les équipes aux bonnes pratiques",
    desc: "Transmettre les compétences en conception, paramétrage machine, post-traitement et contrôle qualité.",
    img: IMAGES.obj3,
  },
];

const publicVise = [
  { icon: Wrench, label: "Ingénieurs", desc: "Conception & R&D" },
  { icon: HardHat, label: "Techniciens", desc: "Production & maintenance" },
  {
    icon: ClipboardList,
    label: "Responsables production",
    desc: "Pilotage industriel",
  },
  { icon: Pencil, label: "Bureaux d'études", desc: "Design & prototypage" },
];

const deroule = [
  {
    jour: "01",
    title: "Théorie & Technologies",
    desc: "Introduction aux procédés de fabrication additive métallique. Technologies SLM, DMLS, EBM. Comparaison des matériaux et propriétés mécaniques.",
    img: IMAGES.jour1,
  },
  {
    jour: "02",
    title: "Pratique machine & Matériaux",
    desc: "Prise en main des équipements, paramétrage des impressions, gestion des poudres métalliques. Exercices pratiques et analyse des résultats.",
    img: IMAGES.jour2,
  },
  {
    jour: "03",
    title: "Cas d'usage métier & Projet",
    desc: "Étude de cas concrets adaptés à votre secteur. Projet fil rouge intégrant conception, impression et post-traitement.",
    img: IMAGES.jour3,
  },
];

const modalites = [
  {
    icon: Building2,
    title: "Dans nos locaux",
    desc: "Plateau technique équipé de machines de dernière génération dans un environnement dédié à la formation.",
    img: IMAGES.mod1,
  },
  {
    icon: HardHat,
    title: "Dans vos locaux",
    desc: "Nous nous déplaçons dans votre entreprise pour former vos équipes directement sur site.",
    img: IMAGES.mod2,
  },
  {
    icon: Monitor,
    title: "En visio",
    desc: "Formation à distance avec démonstrations live et exercices interactifs en temps réel.",
    img: IMAGES.mod3,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* ═══════════════════════════════════════
          NAVIGATION
      ═══════════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5"
          >
            <Image
              src="/logo.png"
              alt="Logo Nouveau Metal"
              width={160}
              height={52}
              className="h-11 w-auto object-contain"
            />
            <span className="font-display font-bold text-[#0f1729] text-[17px] tracking-tight">
              Nouveau Metal
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-6"
          >
            <button
              onClick={() =>
                document.getElementById("programme")?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-[13px] text-slate-500 hover:text-[#0f1729] transition-colors hidden sm:block"
            >
              Programme
            </button>
            <button
              onClick={() =>
                document.getElementById("modalites")?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-[13px] text-slate-500 hover:text-[#0f1729] transition-colors hidden sm:block"
            >
              Modalités
            </button>
            <QuoteForm>
              <Button
                size="sm"
                className="bg-[#0f1729] hover:bg-[#1e293b] text-white rounded-lg text-[13px] font-semibold h-9 px-5 transition-all"
              >
                Demander un devis
              </Button>
            </QuoteForm>
          </motion.div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={IMAGES.hero}
            alt="Impression 3D métal industrielle"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-10 pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/80 text-[11px] font-semibold tracking-[0.12em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Formation certifiante · Entreprises
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-display text-4xl sm:text-5xl lg:text-[4.25rem] font-bold tracking-[-0.025em] leading-[1.08] text-white max-w-3xl mb-7"
          >
            Impression 3D Métal
            <br />
            <span className="text-slate-300">
              Formation sur mesure
              <br className="hidden sm:block" />
              pour l&apos;industrie
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-white/55 text-lg sm:text-xl leading-relaxed max-w-xl mb-10"
          >
            Maîtrisez les technologies SLM et DMLS. Formez vos équipes à la
            fabrication additive métallique avec un programme adapté à vos enjeux.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap items-center gap-4"
          >
            <QuoteForm>
              <Button
                size="lg"
                className="bg-white hover:bg-slate-50 text-[#0f1729] h-13 px-8 text-[14px] font-bold rounded-lg shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5"
              >
                Obtenir un devis personnalisé
                <ArrowRight className="ml-2.5 h-4 w-4" />
              </Button>
            </QuoteForm>
            <button
              onClick={() =>
                document.getElementById("programme")?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-white/60 hover:text-white text-[14px] transition-colors flex items-center gap-2 group"
            >
              Découvrir le programme
              <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 pt-8 border-t border-white/10 flex flex-wrap gap-12"
          >
            {[
              { value: "500+", label: "Professionnels formés" },
              { value: "3 jours", label: "Programme complet" },
              { value: "24h", label: "Réponse sous" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-bold text-white">{s.value}</p>
                <p className="text-white/40 text-sm mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}>
            <ChevronDown className="h-5 w-5 text-white/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          OBJECTIFS
      ═══════════════════════════════════════ */}
      <section id="programme" className="py-24 sm:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          {/* Section header */}
          <div className="max-w-2xl mb-16">
            <FadeIn>
              <span className="tag-pill mb-5 inline-flex">Programme</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.02em] leading-[1.12] text-[#0f1729]">
                Objectifs de la formation
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mt-5 max-w-lg">
                Un programme complet pour intégrer l&apos;impression 3D métal
                dans votre chaîne de production industrielle.
              </p>
            </FadeIn>
          </div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {objectifs.map((obj, i) => (
              <FloatIn key={obj.title} delay={i * 0.12}>
                <Card className="group card-lift h-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={obj.img}
                      alt={obj.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 p-2.5 rounded-lg bg-white/90 backdrop-blur-sm shadow-sm">
                      <obj.icon className="h-5 w-5 text-[#0f1729]" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-[17px] font-display font-bold text-[#0f1729] mb-2.5 leading-snug">
                      {obj.title}
                    </h3>
                    <p className="text-slate-500 text-[14.5px] leading-relaxed">
                      {obj.desc}
                    </p>
                  </CardContent>
                </Card>
              </FloatIn>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
        <div className="section-rule" />
      </div>

      {/* ═══════════════════════════════════════
          PUBLIC VISÉ
      ═══════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left — Image */}
            <SlideIn direction="left">
              <div className="relative rounded-xl overflow-hidden shadow-xl shadow-slate-200/50">
                <Image
                  src={IMAGES.publicVise}
                  alt="Équipe d'ingénieurs en formation"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                {/* Floating card overlay */}
                <div className="absolute bottom-5 left-5 right-5 sm:left-auto sm:right-5 sm:w-64 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0f1729] flex items-center justify-center shrink-0">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-[#0f1729]">Formation inter & intra</p>
                      <p className="text-[12px] text-slate-400">Groupes de 4 à 12 personnes</p>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>

            {/* Right — Text + list */}
            <SlideIn direction="right">
              <span className="tag-pill mb-5 inline-flex">Public visé</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.02em] leading-[1.12] text-[#0f1729] mb-4">
                À qui s&apos;adresse cette formation ?
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-md">
                Destinée aux professionnels de l&apos;industrie souhaitant intégrer
                la fabrication additive métallique dans leurs process.
              </p>

              <div className="space-y-3">
                {publicVise.map((p, i) => (
                  <FadeIn key={p.label} delay={i * 0.08}>
                    <div className="group flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 cursor-default">
                      <div className="p-2.5 rounded-lg bg-slate-100 group-hover:bg-[#0f1729] transition-colors shrink-0">
                        <p.icon className="h-5 w-5 text-slate-600 group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-[#0f1729] text-[15px]">
                          {p.label}
                        </p>
                        <p className="text-sm text-slate-400">{p.desc}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-[#0f1729] group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  </FadeIn>
                ))}
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DÉROULÉ — Timeline
      ═══════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-[#f8fafc]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <FadeIn className="mb-16">
            <div className="max-w-2xl">
              <span className="tag-pill mb-5 inline-flex">Parcours</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.02em] leading-[1.12] text-[#0f1729]">
                Déroulé de la formation
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mt-5 max-w-lg">
                Un parcours progressif en trois temps : théorie, pratique et
                application à vos cas métier.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-5">
            {deroule.map((d, i) => (
              <FadeInScale key={d.jour} delay={i * 0.12}>
                <Card className="group card-lift overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="grid md:grid-cols-[320px_1fr] gap-0">
                    <div className="relative h-56 md:h-auto overflow-hidden">
                      <Image
                        src={d.img}
                        alt={d.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10" />
                    </div>
                    <CardContent className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex items-start gap-5">
                        <div className="step-number">{d.jour}</div>
                        <div className="flex-1">
                          <h3 className="font-display text-xl sm:text-[22px] font-bold text-[#0f1729] mb-3 leading-snug">
                            {d.title}
                          </h3>
                          <p className="text-slate-500 leading-relaxed text-[15px]">
                            {d.desc}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </FadeInScale>
            ))}
          </div>

          <FadeIn delay={0.3} className="mt-8">
            <p className="text-slate-400 text-sm flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-500" />
              Le programme est adaptable en durée et contenu selon vos besoins.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MODALITÉS
      ═══════════════════════════════════════ */}
      <section id="modalites" className="py-24 sm:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <FadeIn className="mb-16">
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end">
              <div>
                <span className="tag-pill mb-5 inline-flex">Flexibilité</span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.02em] leading-[1.12] text-[#0f1729]">
                  Modalités de formation
                </h2>
              </div>
              <p className="text-slate-500 text-lg leading-relaxed lg:text-right lg:max-w-md lg:ml-auto">
                Choisissez le format qui convient le mieux à votre organisation.
                Nous nous adaptons à vos contraintes.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {modalites.map((m, i) => (
              <FloatIn key={m.title} delay={i * 0.12}>
                <Card className="group card-lift h-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={m.img}
                      alt={m.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <div className="p-2.5 rounded-lg bg-slate-100 w-fit mb-4 group-hover:bg-[#0f1729] transition-colors">
                      <m.icon className="h-5 w-5 text-slate-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-[17px] font-display font-bold text-[#0f1729] mb-2">
                      {m.title}
                    </h3>
                    <p className="text-slate-500 text-[14.5px] leading-relaxed">
                      {m.desc}
                    </p>
                  </CardContent>
                </Card>
              </FloatIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-[#0f1729]">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 dot-grid opacity-[0.03]" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
            <FadeIn>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/60 text-[11px] font-semibold tracking-[0.1em] uppercase mb-8">
                <Phone className="h-3 w-3" />
                Contact
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] leading-[1.1] text-white mb-6">
                Prêt à former
                <br />
                vos équipes ?
              </h2>
              <p className="text-white/45 text-lg leading-relaxed mb-10 max-w-lg">
                Recevez un devis personnalisé adapté à vos besoins, votre secteur
                et la taille de votre équipe. Réponse en moins de 24 heures.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <QuoteForm>
                  <Button
                    size="lg"
                    className="bg-white hover:bg-slate-100 text-[#0f1729] h-13 px-8 text-[14px] font-bold rounded-lg shadow-lg transition-all hover:-translate-y-0.5"
                  >
                    Obtenir un devis personnalisé
                    <ArrowRight className="ml-2.5 h-4 w-4" />
                  </Button>
                </QuoteForm>
              </div>
            </FadeIn>

            <SlideIn direction="right" className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "1 à 10", sub: "jours de formation", label: "Durée flexible" },
                  { value: "100%", sub: "personnalisable", label: "Sur mesure" },
                  { value: "24h", sub: "de réponse", label: "Réactivité" },
                  { value: "3", sub: "modalités", label: "Flexibilité" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="p-6 rounded-xl bg-white/5 border border-white/8"
                  >
                    <p className="text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">{item.label}</p>
                    <p className="font-display text-2xl font-bold text-white">{item.value}</p>
                    <p className="text-white/35 text-sm mt-0.5">{item.sub}</p>
                  </motion.div>
                ))}
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════ */}
      <footer className="border-t border-slate-200 py-8 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Logo Nouveau Metal"
              width={100}
              height={34}
              className="h-7 w-auto object-contain"
            />
            <p className="text-slate-400 text-sm">
              &copy; 2026 — Nouveau Metal
            </p>
          </div>
          <p className="text-slate-300 text-xs tracking-wider">
            Tous droits réservés
          </p>
        </div>
      </footer>
    </main>
  );
}
