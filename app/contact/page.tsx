"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsArrowRight } from "react-icons/bs";

import { profile } from "@/lib/data";
import { fadeIn } from "@/variants";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const values = new FormData(form);
    const name = String(values.get("name") ?? "").trim();
    const email = String(values.get("email") ?? "").trim();
    const message = String(values.get("message") ?? "").trim();

    if (!name || !EMAIL_PATTERN.test(email) || message.length < 10) {
      toast.error("Nom, email valide et message de 10 caractères minimum requis.");
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      toast.error(`Formulaire non configuré. Écrivez-moi à ${profile.email}.`);
      return;
    }

    values.append("access_key", accessKey);
    values.append("from_name", "Portfolio Mohamed EL-GHAZOUI");

    setIsLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: values,
      });
      const data = (await response.json()) as { success?: boolean; message?: string };
      if (!response.ok || !data.success) throw new Error(data.message);
      toast.success("Message envoyé. Je vous répondrai rapidement.");
      form.reset();
    } catch {
      toast.error("L'envoi a échoué. Réessayez ou écrivez-moi par email.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="flex-1 flex flex-col gap-6 w-full mx-auto"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="flex flex-col sm:flex-row gap-6 w-full">
        <input type="text" name="name" placeholder="Nom" className="input" maxLength={200} disabled={isLoading} />
        <input type="email" name="email" placeholder="E-mail" className="input" maxLength={100} disabled={isLoading} />
      </div>
      <input type="text" name="subject" placeholder="Sujet" className="input" maxLength={200} disabled={isLoading} />
      <textarea name="message" placeholder="Message..." className="textarea" rows={4} maxLength={1000} disabled={isLoading} />
      <button
        type="submit"
        className="btn rounded-full border border-white/50 max-w-42.5 px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group disabled:pointer-events-none"
        disabled={isLoading}
      >
        <span className={isLoading ? "" : "group-hover:translate-y-[-120%] group-hover:opacity-0 transition-all duration-500"}>
          {isLoading ? "Envoi..." : "Discutons"}
        </span>
        {!isLoading && (
          <BsArrowRight
            className="translate-y-[-120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
            aria-hidden
          />
        )}
      </button>
    </motion.form>
  );
};

const Contact = () => {
  return (
    <div className="min-h-full xl:h-full bg-primary/30 xl:overflow-y-auto">
      <div className="container mx-auto py-28 xl:py-32 text-center xl:text-left flex items-center justify-center min-h-full">
        <div className="flex flex-col w-full max-w-175">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-6"
          >
            Prenons <span className="text-accent">contact.</span>
          </motion.h2>
          <p className="text-center mb-10">
            Recherche d&apos;un stage PFE de 6 mois en développement full-stack.{" "}
            <a className="text-accent" href={`mailto:${profile.email}`}>{profile.email}</a>
            {" · "}
            <a href="tel:+212682444921">{profile.phone}</a>
            {" · "}
            {profile.location}
          </p>
          <ContactForm />
          <a
            href={profile.cv}
            download
            className="mt-8 text-center text-sm text-white/60 hover:text-accent transition-all"
          >
            Télécharger mon CV (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
