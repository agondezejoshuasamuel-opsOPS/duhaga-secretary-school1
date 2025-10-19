import { Calendar, BookOpen, Users, GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-school.jpg";
import buildingImage from "@/assets/building.jpg";
import compoundImage from "@/assets/compound.jpg";
import classroomImage from "@/assets/classroom.jpg";
import laboratoryImage from "@/assets/laboratory.jpg";

const Index = () => {
  const activities = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Comprehensive secretarial training with modern teaching methods and qualified instructors.",
    },
    {
      icon: Users,
      title: "Practical Training",
      description: "Hands-on experience in computer labs, typing practice, and office management simulations.",
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "Career guidance, internship opportunities, and industry connections for our students.",
    },
  ];

  const subjects = [
    "Typing & Word Processing",
    "Office Management",
    "Business Communication",
    "Computer Applications",
    "Accounting Principles",
    "Records Management",
    "Shorthand",
    "Business English",
    "Customer Relations",
    "Office Technology",
  ];

  const events = [
    { date: "Jan 15, 2025", title: "New Term Begins", type: "Academic" },
    { date: "Feb 10, 2025", title: "Career Fair", type: "Event" },
    { date: "Mar 5, 2025", title: "Mid-Term Exams", type: "Academic" },
    { date: "Apr 20, 2025", title: "Guest Speaker Series", type: "Event" },
  ];

  const gallery = [
    { image: buildingImage, title: "Main Building", alt: "Modern school building with blue and white architecture" },
    { image: compoundImage, title: "School Compound", alt: "Beautiful green compound with trees and walkways" },
    { image: classroomImage, title: "Modern Classroom", alt: "Well-equipped classroom with computers and whiteboard" },
    { image: laboratoryImage, title: "Computer Laboratory", alt: "State-of-the-art computer lab for practical training" },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <div>
              <h2 className="font-bold text-lg text-foreground">DUHAGA</h2>
              <p className="text-xs text-muted-foreground">Secretary School</p>
            </div>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#activities" className="text-foreground hover:text-primary transition-colors">Activities</a>
            <a href="#curriculum" className="text-foreground hover:text-primary transition-colors">Curriculum</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Gallery</a>
            <a href="#enrollment" className="text-foreground hover:text-primary transition-colors">Enrollment</a>
          </div>
          <Button className="bg-primary hover:bg-primary-light text-primary-foreground">
            Contact Us
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 48, 84, 0.7), rgba(21, 48, 84, 0.8)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            DUHAGA SECRETARY SCHOOL
          </h1>
          <p className="text-2xl md:text-3xl text-secondary-light font-semibold mb-4 animate-fade-in">
            HABWA RUHANGA N'IHANGA LYAITU
          </p>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
            Empowering students with professional secretarial skills for a successful career in office management and administration.
          </p>
          <div className="flex gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-secondary hover:bg-secondary-light text-secondary-foreground shadow-elegant">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Welcome to DUHAGA</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              DUHAGA Secretary School is a premier institution dedicated to providing high-quality secretarial 
              and office management education. With modern facilities, experienced instructors, and a 
              comprehensive curriculum, we prepare our students for successful careers in the professional world.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Activities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                    <activity.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-card-foreground">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{activity.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Calendar */}
      <section id="events" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Upcoming Events</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <CardTitle className="text-lg text-card-foreground">{event.title}</CardTitle>
                      <CardDescription>{event.date} • {event.type}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Curriculum</h2>
          <p className="text-center text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Comprehensive subjects designed to equip students with essential secretarial and office management skills
          </p>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((subject, index) => (
              <div 
                key={index}
                className="bg-primary-light/50 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3 hover:bg-primary-light transition-colors"
              >
                <BookOpen className="h-5 w-5 text-accent" />
                <span className="font-medium">{subject}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Facilities</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {gallery.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-semibold text-xl p-6">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section id="enrollment" className="py-20 bg-gradient-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Enroll?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join DUHAGA Secretary School today and take the first step towards a rewarding career in 
            office management and administration.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>+256 XXX XXX XXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>info@duhaga.ac.ug</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Kampala, Uganda</span>
            </div>
          </div>
          <Button size="lg" className="mt-8 bg-white text-secondary hover:bg-white/90 shadow-elegant">
            Start Your Application
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">DUHAGA Secretary School</h3>
              <p className="text-primary-foreground/80">
                HABWA RUHANGA N'IHANGA LYAITU
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#activities" className="hover:text-accent transition-colors">Activities</a></li>
                <li><a href="#curriculum" className="hover:text-accent transition-colors">Curriculum</a></li>
                <li><a href="#enrollment" className="hover:text-accent transition-colors">Enrollment</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Information</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Phone: +256 XXX XXX XXX</li>
                <li>Email: info@duhaga.ac.ug</li>
                <li>Location: Kampala, Uganda</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2025 DUHAGA Secretary School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
