"use client";
import { motion } from "framer-motion";
import { Mail, Code2, Link, Send } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-32 bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-indigo-900/30" />

      <div className="relative max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-green-300 bg-green-500/10 border border-green-500/20 rounded-full">
            ✉️ Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Vamos trabalhar{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              juntos?
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Estou disponível para projetos freelance, consultorias e parcerias.
            Entre em contato e responderei em até 24h.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
            />
          </div>
          <input
            type="text"
            placeholder="Assunto"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition mb-4"
          />
          <textarea
            rows={5}
            placeholder="Descreva seu projeto ou dúvida..."
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition resize-none mb-4"
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:opacity-90 transition shadow-lg shadow-purple-500/25"
          >
            <Send className="w-4 h-4" /> Enviar mensagem
          </button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          {[
            {
              icon: Mail,
              label: "E-mail",
              href: "mailto:fabio@technote.com.br",
            },
            {
              icon: Code2,
              label: "GitHub",
              href: "https://github.com/seu-usuario",
            },
            {
              icon: Link,
              label: "LinkedIn",
              href: "https://linkedin.com/in/seu-usuario",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:text-white hover:border-white/30 transition"
            >
              <s.icon className="w-4 h-4" />
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
