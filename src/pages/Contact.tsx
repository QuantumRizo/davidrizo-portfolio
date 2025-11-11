import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactLinks = [
    {
      icon: <Mail className="size-6 text-primary" />,
      label: "Email",
      value: "davidrizo.phys@gmail.com",
      href: "mailto:davidrizo.phys@gmail.com",
    },
    {
      icon: <Linkedin className="size-6 text-primary" />,
      label: "LinkedIn",
      value: "felix-rizo-dev",
      href: "https://www.linkedin.com/in/felix-rizo-dev/",
    },
    {
      icon: <Github className="size-6 text-primary" />,
      label: "GitHub",
      value: "QuantumRizo",
      href: "https://github.com/QuantumRizo",
    },
    {
      icon: <Instagram className="size-6 text-primary" />,
      label: "Instagram",
      value: "@david_rizo_136",
      href: "https://www.instagram.com/david_rizo_136/",
    },
    {
      icon: <MessageCircle className="size-6 text-primary" />,
      label: "WhatsApp",
      value: "+52 562 429 0009",
      href: "https://wa.me/525624290009",
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background opacity-50" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">
            Contact <span className="gradient-text">Me</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interested in collaborating, hiring, or just saying hi?  
            You can reach me through any of these platforms.
          </p>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="space-y-6"
        >
          {contactLinks.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-between md:justify-start gap-4 bg-card border border-border rounded-2xl p-4 hover:bg-accent/30 transition-colors"
            >
              {contact.icon}
              <div className="text-left">
                <p className="font-medium text-lg">{contact.label}</p>
                <p className="text-muted-foreground">{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Back Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <a href="/" className="inline-block">
            <Button
              variant="outline"
              className="group text-lg px-6 py-3 rounded-xl border-primary text-primary hover:bg-primary hover:text-background transition-all"
            >
              Back to Home
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
