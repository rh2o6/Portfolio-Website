import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Calendar, Users, Award, ArrowLeft } from "lucide-react"
import {CustomHeader} from "@/components/ui/Customheader.tsx"

export default function VolunteeringPage() {
  return (
    <div className="flex min-h-screen flex-col">
     
      <CustomHeader />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Volunteering & Extracurriculars</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My contributions to the community and activities beyond academics
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
                  <Users className="mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">Volunteer Work</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Making a Difference</h2>
                <p className="max-w-[900px] text-muted-foreground">
                  Contributing my skills and time to causes I care about
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Tech Tutor Program Instructor</CardTitle>
                    <Badge>2022 - 2023</Badge>
                  </div>
                  <CardDescription>Vaughaun Public Libraries</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Facilitated one-on-one technology literacy programs at my local library
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Assited a variety of patrons including those with audiotry and visual needs</li>
                    <li>Educated patrons on best practices using technology and the internet</li>
                    <li>Troubleshooted and solved a variety of issues ranging from hardware to software</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Peer Tutor</CardTitle>
                    <Badge>2021 - 2022</Badge>
                  </div>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Tutored my fellow students in computer science and coding principles
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>
                  Tutored peers in fundamental programming concepts and coding languages
                    </li>

                    <li>Helped students understand algorithms, debugging, and problem-solving</li>

                    <li>Provided one-on-one support to over 50 students, guiding them through coding challenges</li>


                  </ul>
                </CardContent>
              </Card>

              
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
                  <Award className="mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">Extracurricular Activities</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Beyond the Classroom</h2>
                <p className="max-w-[900px] text-muted-foreground">
                  Activities and organizations that have shaped my personal and professional growth
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Computing Students Hub</CardTitle>
                    <Badge>Sep.2024-Present</Badge>
                  </div>
                  <CardDescription>General Executive</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Leading one of York University's largest clubs through events, workshops, and networking
                    opportunities.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>Hosted coding workshops to help members develop programming skills</li>  
<li>Guided club members in academics, offering support in computer science topics</li>  
<li>Facilitated club resources, managing the budget and partnerships with tech companies</li>  
<li>Communicated with other clubs to organize collaborative events and initiatives</li>  

                  </ul>
                </CardContent>
              </Card>



              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Westmount Games Club</CardTitle>
                    <Badge>2022-2023</Badge>
                  </div>
                  <CardDescription>President</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    President of my high schools board games and video games club
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>Hosted club meets where students could connect with each other over shared interest of games</li>  
<li>Coordinated with co-presidents to organize club resources and plan meetings</li>  
<li>Created marketing materials to promote the club and gain members</li>  


                  </ul>
                </CardContent>
              </Card>


            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Soft Skills Developed</h2>
                <p className="max-w-[900px] text-muted-foreground">
                  Key competencies gained through volunteering and extracurricular activities
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-4 py-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Leadership</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Leading teams, organizing events, and taking initiative on projects
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <Calendar className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Time Management</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Balancing multiple commitments and meeting deadlines effectively
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-primary"
                >
                  <path d="M8 9h8" />
                  <path d="M8 13h6" />
                  <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-6l-6 3v-3H3a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h15Z" />
                </svg>
                <h3 className="text-xl font-bold">Communication</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Clearly expressing ideas and actively listening to others
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-primary"
                >
                  <path d="M2 12h20" />
                  <path d="M12 2v20" />
                  <path d="m4.93 4.93 14.14 14.14" />
                  <path d="m19.07 4.93-14.14 14.14" />
                </svg>
                <h3 className="text-xl font-bold">Problem Solving</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Approaching challenges creatively and finding effective solutions
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-primary"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m16 10-4 4-4-4" />
                </svg>
                <h3 className="text-xl font-bold">Adaptability</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Quickly adjusting to new situations and learning on the go
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-primary"
                >
                  <path d="M17 6.1H3" />
                  <path d="M21 12.1H3" />
                  <path d="M15.1 18H3" />
                </svg>
                <h3 className="text-xl font-bold">Project Management</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Planning, executing, and completing projects efficiently
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Robert Hollander. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

