import { motion } from 'motion/react'
import { Heart, ArrowUp, Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' }
  ]

  const serviceLinks = [
    { name: 'Flutter Development', href: '#' },
    { name: 'App Consultation', href: '#' },
    { name: 'UI/UX Design', href: '#' },
    { name: 'Code Review', href: '#' }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/salehakramsifat', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/salehakramsifat', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/salehakramsifat', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/salehakramsifat', label: 'Instagram' },
    { icon: Mail, href: 'mailto:salehakramsifat@gmail.com', label: 'Email' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-secondary text-secondary-foreground dark:bg-gray-950 dark:text-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-semibold">Sifat</span>
            </div>

            <p className="text-muted-foreground dark:text-gray-400 leading-relaxed">
              Flutter Developer & Cross-Platform App Specialist passionate about
              creating beautiful, high-performance mobile applications.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted/20 text-muted-foreground hover:bg-primary hover:text-primary-foreground dark:bg-gray-800 dark:hover:bg-primary dark:text-gray-300 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300 block"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300 block"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-4">
              <div>
                <p className="text-muted-foreground text-sm dark:text-gray-400">Email</p>
                <a
                  href="mailto:salehakramsifat@example.com"
                  className="text-primary hover:text-accent dark:hover:text-accent transition-colors duration-300"
                >
                  salehakramsifat@gmail.com
                </a>
              </div>
              <div>
                <p className="text-muted-foreground text-sm dark:text-gray-400">Location</p>
                <p className="text-foreground dark:text-gray-200">Dhaka, Bangladesh</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm dark:text-gray-400">Availability</p>
                <p className="text-accent">Open for freelance work</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Separator className="bg-border/30 dark:bg-gray-800" />

      {/* Footer Bottom */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-muted-foreground text-sm dark:text-gray-400"
          >
            <span>© {currentYear} Saleh Akram Sifat. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart size={16} className="text-red-500 fill-current" />
            </motion.div>
            <span>using Flutter & React</span>
          </motion.div>

          {/* Back to Top Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="group dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <span className="mr-2">Back to Top</span>
              <motion.div
                className="transition-transform duration-300 group-hover:-translate-y-1"
              >
                <ArrowUp size={16} />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating Back to Top Button for Mobile */}
      <motion.button
        className="fixed bottom-6 right-6 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 md:hidden dark:bg-blue-600"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  )
}
