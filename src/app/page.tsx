'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Menu,
  X,
  User,
  Award,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ChevronDown,
  Star,
  Trophy,
  Target,
  BookOpen,
  Users,
  Globe,
  FileText,
  Download,
  Eye,
  GraduationCap
} from 'lucide-react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home', icon: GraduationCap },
    { id: 'about', label: 'About', icon: User },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'cv', label: 'CV', icon: FileText },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Certificate Zoom Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-background rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Certificate Image with Watermark */}
              <div className="relative w-full h-full flex items-center justify-center bg-muted">
                <img
                  src={selectedCertificate}
                  alt="Certificate Zoom View"
                  className="max-w-full max-h-[85vh] object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
                  <img src="/logo-akram.png" alt="Watermark" className="w-40 h-40 object-contain" />
                </div>
              </div>

              {/* Info footer */}
              <div className="bg-background/50 backdrop-blur-sm border-t border-white/10 p-4 text-center text-sm text-muted-foreground">
                Click outside or press X to close | View at full resolution for best clarity
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/logo-akram.png"
                  alt="Akram Hadid Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-semibold text-lg">Akram Hadid</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary ${activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-accent"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-b">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-primary hover:bg-accent ${activeSection === item.id ? 'text-primary bg-accent' : 'text-muted-foreground'
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

        {/* Decorative Logo Background */}
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 z-0 opacity-20 pointer-events-none">
          <img
            src="/logo-akram.png"
            alt="Background Logo"
            className="w-[600px] h-[600px] object-contain blur-lg"
          />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="space-y-6 animate-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-gradient">AKRAM HADID</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium slide-in-from-bottom-4" style={{ animationDelay: '0.2s' }}>
              Bin Mohd Ali Nopiah
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto slide-in-from-bottom-4" style={{ animationDelay: '0.3s' }}>
              Bachelor of Social Science (History) with Honours
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground slide-in-from-bottom-4" style={{ animationDelay: '0.4s' }}>
              <span>Universiti Malaysia Sabah</span>
              <Separator orientation="vertical" className="h-4 hidden sm:block" />
              <span>Graduated December 2025</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 pt-4 slide-in-from-bottom-4" style={{ animationDelay: '0.5s' }}>
              <Badge variant="secondary" className="px-4 py-2 text-sm hover-lift">
                <Star className="w-4 h-4 mr-2" />
                Dean's List • 6 Semesters
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm hover-lift">
                <Award className="w-4 h-4 mr-2" />
                First Class Honours
              </Badge>
            </div>
            <div className="pt-8 slide-in-from-bottom-4" style={{ animationDelay: '0.6s' }}>
              <Button
                size="lg"
                onClick={() => scrollToSection('about')}
                className="px-8 py-6 text-lg hover-lift group"
              >
                Explore My Journey
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Profile Section */}
      <section id="profile" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Profile</h2>
          </div>

          <Card className="p-8 hover-lift bg-card/80 backdrop-blur-sm border border-white/10">
            <CardContent className="pt-0">
              <div className="flex flex-col md:flex-row gap-8 items-stretch">
                {/* Passport Style Photo */}
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="relative w-32 h-48 md:w-40 md:h-60 rounded-lg overflow-hidden shadow-lg border-2 border-white/10 group cursor-pointer">
                    <img
                      src="/profile photo.jpg"
                      alt="Akram Hadid - Profile Photo"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                </div>

                {/* Professional Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">AKRAM HADID</h3>
                    <p className="text-lg text-muted-foreground font-semibold">Bachelor of Social Science (History) Honours</p>
                  </div>

                  <p className="text-base text-muted-foreground leading-relaxed text-justify">
                    Motivated and detail-oriented historian with a passion for public administration and governance. Demonstrates strong leadership, communication, and organizational abilities through active participation in national and university-level programs. Skilled in research, strategic planning, stakeholder engagement, and academic writing.
                  </p>

                  <p className="text-base text-muted-foreground leading-relaxed text-justify">
                    Proven experience in team coordination, customer service, and educational management. Committed to contributing to the development of effective policies and community-driven initiatives in Malaysia's public sector. Recognized achievements include Dean's List placement across 6 consecutive semesters and First Class Honours from Universiti Malaysia Sabah.
                  </p>

                  {/* Contact Information */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-start space-x-2">
                        <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-muted-foreground">Email</p>
                          <p className="font-semibold">contact@example.com</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-muted-foreground">Phone</p>
                          <p className="font-semibold">+60 XXX XXX XXXX</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-muted-foreground">Location</p>
                          <p className="font-semibold">Kota Kinabalu, Malaysia</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <GraduationCap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-muted-foreground">University</p>
                          <p className="font-semibold">UMS (Dec 2025)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education Journey</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Academic progression from secondary education to university level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

            <Card className="p-6 hover-lift slide-in-right bg-card/80 backdrop-blur-sm border border-white/10">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-primary" />
                    Education Timeline
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary pl-4">
                      <h4 className="font-semibold">Bachelor of Social Science (History) Honours</h4>
                      <p className="text-sm text-muted-foreground">Universiti Malaysia Sabah</p>
                      <p className="text-sm text-muted-foreground">Oct 2022 - Dec 2025</p>
                      <Badge variant="outline" className="mt-2">CGPA: 3.72/4.00</Badge>
                    </div>
                    <div className="border-l-2 border-muted pl-4">
                      <h4 className="font-semibold">Diploma in Public Administration</h4>
                      <p className="text-sm text-muted-foreground">MARA University of Technology</p>
                      <p className="text-sm text-muted-foreground">July 2017 - Oct 2020</p>
                      <Badge variant="outline" className="mt-2">CGPA: 3.12/4.00</Badge>
                    </div>
                    <div className="border-l-2 border-muted pl-4">
                      <h4 className="font-semibold">Sijil Pelajaran Malaysia (SPM)</h4>
                      <p className="text-sm text-muted-foreground">Sekolah Menengah Kebangsaan Seri Kundang</p>
                      <p className="text-sm text-muted-foreground">Rawang, Selangor | 2012 - 2016</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Achievements</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Recognition for excellence in academics, leadership, and public speaking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 hover-lift scale-in bg-card/80 backdrop-blur-sm border border-white/10">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-primary" />
                  Awards & Recognition
                </h3>
                <div className="space-y-4">
                  {[
                    "Best Presenter, Global Student Residential Council Summit 2024",
                    "Champion, Speaker's Corner - Universiti Malaysia Sabah",
                    "Champion, National SMJ Oratory Competition",
                    "Dean's List Award - 6 Semesters",
                    "A+ (Excellent) in Academic Writing",
                    "Entrepreneurship Icon - Faculty of Social Sciences (2020)"
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3 group">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                      <span className="text-sm group-hover:text-foreground transition-colors">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover-lift scale-in bg-card/80 backdrop-blur-sm border border-white/10">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-primary" />
                  Leadership & Representation
                </h3>
                <div className="space-y-4">
                  {[
                    "President, Student Welfare Committee (JAKMAS)",
                    "Executive Committee Member, Arts and Culture Bureau",
                    "International Representation - Indonesia & Thailand",
                    "Program Director, JAKMAS Delegation to Indonesia",
                    "Participant, Sayembara Puisi Pentas Dunia 2024"
                  ].map((leadership, index) => (
                    <div key={index} className="flex items-start space-x-3 group">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                      <span className="text-sm group-hover:text-foreground transition-colors">{leadership}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievement Media Section */}
      <section id="achievement-media" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Achievement Media</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Visual collection of awards, recognitions, and memorable moments from competitions and events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Akram Hadid Competition Award */}
            <Card className="overflow-hidden hover-lift group bg-card/80 backdrop-blur-sm border border-white/10 cursor-pointer transition-all" onClick={() => setSelectedCertificate('/media/Akram Hadid.png')}>
              <div className="relative h-64 bg-muted overflow-hidden">
                <img
                  src="/media/Akram Hadid.png"
                  alt="Achievement - Akram Hadid"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <img src="/logo-akram.png" alt="Watermark" className="w-24 h-24 object-contain" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-4 inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-r-full font-light text-sm">Achievement</div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  Recognition & Achievement
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Award and recognition from competitions and events. Celebrating achievement and memorable moments throughout academic and professional journey.
                </p>
                <Button variant="ghost" className="text-primary p-0 h-auto group/btn">
                  <Eye className="w-4 h-4 mr-2 group-hover/btn:translate-y-0" />
                  View
                </Button>
              </CardContent>
            </Card>

            {/* Graduation Photo */}
            <Card className="overflow-hidden hover-lift group bg-card/80 backdrop-blur-sm border border-white/10 cursor-pointer transition-all" onClick={() => setSelectedCertificate('/media/graduations.JPG')}>
              <div className="relative h-64 bg-muted overflow-hidden">
                <img
                  src="/media/graduations.JPG"
                  alt="Graduation Day"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <img src="/logo-akram.png" alt="Watermark" className="w-24 h-24 object-contain" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-4 inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-r-full font-light text-sm">Convocation</div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  Graduation Day
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A significant milestone celebrating the completion of Bachelor of Social Science (History) with Honours from Universiti Malaysia Sabah.
                </p>
                <Button variant="ghost" className="text-primary p-0 h-auto group/btn">
                  <Eye className="w-4 h-4 mr-2 group-hover/btn:translate-y-0" />
                  View Photo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificates Gallery Section */}
      <section id="certificates" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Certificates</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Official certifications and qualifications showcasing expertise and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Degree First Class Certificate */}
            <Card className="overflow-hidden hover-lift group bg-card/80 backdrop-blur-sm border border-white/10 cursor-pointer transition-all" onClick={() => setSelectedCertificate('/Certificate/Cert_Degree First Class.jpg')}>
              <div className="relative h-64 bg-muted overflow-hidden">
                <img
                  src="/Certificate/Cert_Degree First Class.jpg"
                  alt="Degree First Class Certificate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <img src="/logo-akram.png" alt="Watermark" className="w-24 h-24 object-contain" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-4 inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-r-full font-light text-sm">Academic</div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  Degree First Class Honours
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Bachelor's Degree awarded with First Class Honours. Recognition of outstanding academic performance and comprehensive knowledge in the field of study.
                </p>
                <Button variant="ghost" className="text-primary p-0 h-auto group/btn">
                  <Eye className="w-4 h-4 mr-2 group-hover/btn:translate-y-0" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>

            {/* JAKMAS Certificate */}
            <Card className="overflow-hidden hover-lift group bg-card/80 backdrop-blur-sm border border-white/10 cursor-pointer transition-all" onClick={() => setSelectedCertificate('/Certificate/Cert_Jakmas.jpg')}>
              <div className="relative h-64 bg-muted overflow-hidden">
                <img
                  src="/Certificate/Cert_Jakmas.jpg"
                  alt="JAKMAS Certificate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <img src="/logo-akram.png" alt="Watermark" className="w-24 h-24 object-contain" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-4 inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-r-full font-light text-sm">Leadership</div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  JAKMAS Student Welfare
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Certificate from JAKMAS (Student Welfare Committee) recognizing leadership and contribution to student welfare initiatives and community development.
                </p>
                <Button variant="ghost" className="text-primary p-0 h-auto group/btn">
                  <Eye className="w-4 h-4 mr-2 group-hover/btn:translate-y-0" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>

            {/* SEPENA Certificate */}
            <Card className="overflow-hidden hover-lift group bg-card/80 backdrop-blur-sm border border-white/10 cursor-pointer transition-all" onClick={() => setSelectedCertificate('/Certificate/Cert_Sepena.jpg')}>
              <div className="relative h-64 bg-muted overflow-hidden">
                <img
                  src="/Certificate/Cert_Sepena.jpg"
                  alt="SEPENA Certificate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <img src="/logo-akram.png" alt="Watermark" className="w-24 h-24 object-contain" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-4 inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-r-full font-light text-sm">Professional Development</div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  SEPENA Professional Program
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Professional development certificate from SEPENA program. Demonstrates commitment to continuous learning and skill enhancement in professional competencies.
                </p>
                <Button variant="ghost" className="text-primary p-0 h-auto group/btn">
                  <Eye className="w-4 h-4 mr-2 group-hover/btn:translate-y-0" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>

            {/* Exco Kebudayaan Certificate */}
            <Card className="overflow-hidden hover-lift group bg-card/80 backdrop-blur-sm border border-white/10 cursor-pointer transition-all" onClick={() => setSelectedCertificate('/Certificate/Cert.Exco Kebudayaan.jpg')}>
              <div className="relative h-64 bg-muted overflow-hidden">
                <img
                  src="/Certificate/Cert.Exco Kebudayaan.jpg"
                  alt="Exco Kebudayaan Certificate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <img src="/logo-akram.png" alt="Watermark" className="w-24 h-24 object-contain" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-4 inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-r-full font-light text-sm">Cultural Affairs</div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  Executive Committee - Arts & Culture
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Certificate of appointment as Executive Committee member in the Arts and Culture Bureau. Recognition for cultural leadership and organizational contribution.
                </p>
                <Button variant="ghost" className="text-primary p-0 h-auto group/btn">
                  <Eye className="w-4 h-4 mr-2 group-hover/btn:translate-y-0" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>

            {/* Dewan Pustaka Certificate */}
            <Card className="overflow-hidden hover-lift group bg-card/80 backdrop-blur-sm border border-white/10 cursor-pointer transition-all" onClick={() => setSelectedCertificate('/Certificate/Cert. Dewan Pustaka.jpg')}>
              <div className="relative h-64 bg-muted overflow-hidden">
                <img
                  src="/Certificate/Cert. Dewan Pustaka.jpg"
                  alt="Dewan Pustaka Certificate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <img src="/logo-akram.png" alt="Watermark" className="w-24 h-24 object-contain" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-4 inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-r-full font-light text-sm">Recognition</div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  Dewan Pustaka Recognition
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Certificate of recognition from Dewan Pustaka for contribution to literary and cultural initiatives. Demonstrates commitment to preserving and promoting cultural heritage.
                </p>
                <Button variant="ghost" className="text-primary p-0 h-auto group/btn">
                  <Eye className="w-4 h-4 mr-2 group-hover/btn:translate-y-0" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground">All certificates are available for verification upon request</p>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Curriculum Vitae</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional experience and core competencies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-8">
              <Card className="p-6 hover-lift bg-card/80 backdrop-blur-sm border border-white/10">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-primary" />
                    Work Experience
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-2 border-muted pl-4 group">
                      <h4 className="font-semibold group-hover:text-primary transition-colors">Team Leader</h4>
                      <p className="text-sm text-muted-foreground">AEON Wellness (AEON Co. M) Bhd</p>
                      <p className="text-sm text-muted-foreground mb-2">Apr 2022 – Oct 2022</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Supervised team of 5 staff to ensure adherence to SOPs</li>
                        <li>• Improved team efficiency by 20% through training</li>
                        <li>• Managed sales reports, stock inventory, and audits</li>
                      </ul>
                    </div>
                    <div className="border-l-2 border-muted pl-4 group">
                      <h4 className="font-semibold group-hover:text-primary transition-colors">Tutor</h4>
                      <p className="text-sm text-muted-foreground">Pusat Tuisyen Sinergi Gemilang</p>
                      <p className="text-sm text-muted-foreground mb-2">Jan 2021 – Mar 2022</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Taught Science to primary school students</li>
                        <li>• Prepared lesson plans and individualized guidance</li>
                        <li>• Developed engaging learning materials</li>
                      </ul>
                    </div>
                    <div className="border-l-2 border-muted pl-4 group">
                      <h4 className="font-semibold group-hover:text-primary transition-colors">Tearista</h4>
                      <p className="text-sm text-muted-foreground">Tealive</p>
                      <p className="text-sm text-muted-foreground mb-2">Mar 2020 - Jan 2021</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Prepared and served tea-based beverages</li>
                        <li>• Delivered excellent customer service</li>
                        <li>• Maintained workplace cleanliness</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="p-6 hover-lift bg-card/80 backdrop-blur-sm border border-white/10">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-primary" />
                    Contact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 group">
                      <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm group-hover:text-foreground transition-colors">Akramhadid11@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <Phone className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm group-hover:text-foreground transition-colors">011-29568101</span>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <MapPin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm group-hover:text-foreground transition-colors">Rawang, Selangor</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover-lift bg-card/80 backdrop-blur-sm border border-white/10">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-primary" />
                    Core Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Policy Analysis",
                      "Report Writing",
                      "Research",
                      "Strategic Planning",
                      "Leadership",
                      "Public Speaking",
                      "Project Coordination",
                      "Critical Thinking",
                      "MS Office",
                      "Google Workspace",
                      "SPSS"
                    ].map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/logo-akram.png"
                alt="Akram Hadid Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-semibold">Akram Hadid</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2025 Akram Hadid. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}