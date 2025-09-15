import { motion } from 'motion/react'
import { Download, MapPin, Calendar, Briefcase } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function About() {
  const timelineItems = [
    {
      year: '2025',
      title: 'Junior Flutter Developer',
      company: 'SM Technology',
      description: 'Contributed to cross-platform Flutter applications, collaborating with the development team and implementing scalable features.',
      type: 'work'
    },

    {
      year: '2024',
      title: 'Started Flutter Development',
      company: 'Self Learning',
      description: 'Started learning Flutter and Firebase, and successfully developed multiple mobile applications independently.',
      type: 'work'
    },

    {
      year: '2024',
      title: 'Internship at Kotlin',
      company: 'Creative IT Institute',
      description: 'Completed a professional internship under the guidance of Kotlin vai, developing Flutter and Firebase mobile applications.',
      type: 'work'
    },
    // {
    //   year: '2022',
    //   title: 'Bachelor in Computer Science',
    //   company: 'Tech University',
    //   description: 'Graduated with honors, specialized in mobile app development and software engineering.',
    //   type: 'education'
    // },
    {
      year: '2020',
      title: 'Started Diploma Engineering',
      company: 'Computer Science & Technology',
      description: 'Started my Diploma in Computer Science & Technology to learn programming and mobile app development.',
      type: 'milestone'
    }

  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
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
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate Flutter developer with 3+ years of experience creating beautiful,
            high-performance cross-platform applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio and Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-2">
                  <ImageWithFallback
                    src="dummy-profile-image-male.jpg"
                    alt="Saleh Akram Sifat"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -right-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Badge className="bg-primary text-primary-foreground shadow-lg">
                    Flutter Expert
                  </Badge>
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Badge className="bg-accent text-accent-foreground shadow-lg">
                    3+ Years
                  </Badge>
                </motion.div>
              </motion.div>
            </div>

            {/* Bio Text */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Flutter developer with over 3 years of experience in building
                cross-platform mobile applications. My journey began with a fascination for
                creating beautiful, functional apps that work seamlessly across different platforms.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I specialize in Flutter, Dart, Firebase, and various state management solutions.
                My goal is to create apps that not only look great but also provide exceptional
                user experiences with smooth animations and intuitive interactions.
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin size={16} className="text-primary" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Briefcase size={16} className="text-primary" />
                  <span>Available for hire</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar size={16} className="text-primary" />
                  <span>1+ years experience</span>
                </div>
              </div>

              {/* Download Resume Button */}
              <Button className="w-full sm:w-auto" size="lg">
                <Download size={18} className="mr-2" />
                Download Full Resume
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Career Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8">Career Journey</h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30"></div>

              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-16 pb-8 last:pb-0"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className={`absolute left-4 w-4 h-4 rounded-full border-2 border-background ${item.type === 'work' ? 'bg-primary' :
                      item.type === 'education' ? 'bg-accent' : 'bg-secondary'
                      }`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />

                  <Card className="border-l-4 border-l-primary/30 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <Badge variant="outline" className="self-start sm:self-auto mt-1 sm:mt-0">
                          {item.year}
                        </Badge>
                      </div>
                      <p className="text-primary font-medium mb-2">{item.company}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}