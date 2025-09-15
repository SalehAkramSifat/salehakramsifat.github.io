import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { Code, Database, Smartphone, GitBranch } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'

// custom counter hook
function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration])

  return count
}

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'text-primary',
      skills: [
        { name: 'Flutter & Dart', level: 95, color: 'bg-primary' },
        { name: 'UI/UX Design', level: 80, color: 'bg-accent' },
        { name: 'Responsive Design', level: 90, color: 'bg-primary' }
      ]
    },

    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'text-primary',
      skills: [
        { name: 'State Management', level: 85, color: 'bg-primary' },
        { name: 'Native Features', level: 80, color: 'bg-accent' },
        { name: 'App Store Deployment', level: 88, color: 'bg-primary' }
      ]
    },
    {
      title: 'Tools & Version Control',
      icon: GitBranch,
      color: 'text-accent',
      skills: [
        { name: 'Git & GitHub', level: 85, color: 'bg-accent' },
        { name: 'VS Code', level: 92, color: 'bg-primary' },
        { name: 'Android Studio', level: 88, color: 'bg-accent' }
      ]
    },
    {
      title: 'Backend & Database',
      icon: Database,
      color: 'text-accent',
      skills: [
        { name: 'Firebase', level: 90, color: 'bg-accent' },
        { name: 'REST API', level: 90, color: 'bg-primary' },
        // { name: 'SQLite/Hive', level: 85, color: 'bg-accent' }
      ]
    },
  ]

  const technologies = [
    'Flutter', 'Dart', 'Firebase', 'GetX',
    'REST API', 'Git', 'GitHub', 'VS Code',
    'Android Studio', 'Figma', 'Postman', 'Firebase Analytics'
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
            in various technologies and tools.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-l-4 border-l-primary/30 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-primary/10`}>
                      <category.icon size={24} className={category.color} />
                    </div>
                    <span className="text-xl">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full ${skill.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1.5,
                              delay: categoryIndex * 0.1 + skillIndex * 0.2,
                              ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technologies Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Technologies I Work With
          </h3>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 300
                }}
                whileHover={{
                  scale: 1.1,
                  y: -2
                }}
                viewport={{ once: true }}
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 w-full"
        >
          <div className="flex flex-wrap justify-center items-center gap-12 px-4">
            {[
              { number: '15+', label: 'Projects Completed' },
              { number: '1+', label: 'Years Experience' },
              { number: '10+', label: 'Happy Clients' },
              { number: '2000+', label: 'Code Commits\nSince 2024' },
              { number: '1000h+', label: 'Hours of Coding\n(May 2025 - Present)' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-3xl sm:text-4xl font-bold text-primary mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-muted-foreground text-base sm:text-lg font-medium text-center whitespace-pre-line">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
