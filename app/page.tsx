"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, ChevronRight, Code, Database, Globe } from "lucide-react"
import {CustomHeader} from "@/components/ui/Customheader.tsx"
import { useLoading } from "@/components/loading-provider"
import { useRouter } from "next/navigation"
import ContactForm  from "@/components/ContactForm"
import { CustomFooter } from "@/components/ui/CustomFooter"

export default function Home() {

  const { setIsLoading } = useLoading()
  const router = useRouter()

  const handleNavigation = (href: string) => {
    if (!href.startsWith("#")) {
      setIsLoading(true)
      setTimeout(() => {
        router.push(href)
      }, 300)
    }
  }



  return (



    

    <div className="flex min-h-screen flex-col">


     <CustomHeader />






      <main className="flex-1">




        <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Robert Hollander</h1>
                  <p className="text-xl text-muted-foreground">Computer Science Student & Software Developer</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button>
                      Contact Me
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#projects">
                    <Button variant="outline">View My Projects</Button>
                  </Link>


                  <a href="/RobertResumeNov24.pdf" download="Robert_Hollander_Resume.pdf">
              
                    <Button variant="outline">Resume</Button>
                  
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <img
                  alt="Hero"
                  className="aspect-square overflow-hidden rounded-xl object-cover object-center"
                  height="450"
                  src="/sitepic.PNG?height=450&width=450"
                  width="450"
                />
              </div>

              
            </div>
          </div>
        </section>




        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">

              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get to Know Me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hey there 👋. Im Robert, a 2nd year student studying computer science at York University in Toronto. I am interested in many areas
                of computer science and tech! Some of the areas I am currently really enjoying learning about/developing is web development, databases, and networking.
                </p>
              </div>


            </div>



    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="w-full max-w-3xl mx-auto">
        <div className="space-y-8">


          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-center border-b pb-2">Education</h2>
              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold">Honours Bachelor of Arts in Computer Science</h3>
                <p className="text-muted-foreground">
                  York University, Toronto, ON
                  <br />
                  <span className="font-medium">2023 - Present</span>
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-center border-b pb-2">Experience</h2>
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-semibold">Scratch Programming Instructor</h3>
                  <p className="text-muted-foreground">
                    Genius Camp Inc.
                    <br />
                    <span className="font-medium">Fall 2024 - Spring 2025</span>
                  </p>
                </div>

                <div className="text-center space-y-2">
                  <h3 className="text-lg font-semibold">Service Desk Analyst Intern</h3>
                  <p className="text-muted-foreground">
                    Give and Go Prepared Foods
                    <br />
                    <span className="font-medium">Summer 2025</span>
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-center border-b pb-2">Interests</h2>
              <div className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  Web Development • Databases • APIs • Software & System Design
                  <br />
                  Computer Networking • IT • Cloud Computing
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
          </div>
        </section>


        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Skills</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technical Expertise</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are the technologies and tools I've worked with
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
        <Card className="flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Frontend Development</CardTitle>
              <Code className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 pt-4">
                <Badge variant="secondary">HTML</Badge>
                <Badge variant="secondary">CSS</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Backend Development</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 pt-4">
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">C</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Java</Badge>
                <Badge variant="secondary">Spring Boot</Badge>
                <Badge variant="secondary">Django</Badge>
                <Badge variant="secondary">Flask</Badge>
                <Badge variant="secondary">SQL</Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tools & Devops</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 pt-4">
                <Badge variant="secondary">Bash</Badge>
                <Badge variant="secondary">Git</Badge>
                <Badge variant="secondary">GitHub</Badge>
                <Badge variant="secondary">VS Code</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">Oracle Cloud</Badge>
                <Badge variant="secondary">Render</Badge>
                <Badge variant="secondary">Vercel</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>





        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Projects</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Recent Work</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of the projects I've worked on
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden flex flex-col">
                <img
                  alt="Project 1"
                  className="aspect-video w-full object-cover"
                  height="225"
                  src="/productscout.PNG?height=225&width=400"
                  width="400"
                />
                <CardHeader>
                  <CardTitle>ProductScout</CardTitle>
                  <CardDescription className="min-h-[60px]">
                    A backend focused web app that utilizes selenium to extract data from a variety of retailers and
                    return results from multiple sources.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Flask</Badge>
                    <Badge variant="outline">Redis</Badge>
                    <Badge variant="outline">HTML/CSS/JavaScript</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                <a href="https://github.com/rh2o6/productscout" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  </a>
                  <Button size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                  
                </CardFooter>
              </Card>
              <Card className="overflow-hidden flex flex-col">
                <img
                  alt="Project 2"
                  className="aspect-video w-full object-cover"
                  height="225"
                  src="/tf2.png?height=225&width=400"
                  width="400"
                />
                <CardHeader>
                  <CardTitle>TF2 API</CardTitle>
                  <CardDescription className="min-h-[60px]">
                    A RESTful API that serves infromation about the video game Team Fortress 2. Users can look up game items and information about characters. Hosted with a frontend built with react to make API calls
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Java</Badge>
                    <Badge variant="outline">Spring Boot</Badge>
                    <Badge variant="outline">SQL</Badge>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Next.js</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Badge variant="secondary" className="px-3 py-1">
                    In Progress
                  </Badge>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden flex flex-col">
                <img
                  alt="Project 3"
                  className="aspect-video w-full object-cover"
                  height="225"
                  src="/botimg.PNG?height=225&width=400"
                  width="400"
                />
                <CardHeader>
                  <CardTitle>Waluigi Discord Bot</CardTitle>
                  <CardDescription className="min-h-[60px]">
                    A discord bot inspired by DankMemer bot. Users can initate the bot with several commands and play minigames. User information and statistics are saved with PostgreSQL
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Discord</Badge>
                    <Badge variant="outline">SQL</Badge>
                    <Badge variant="outline">PostgreSQL</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">

                <a href="https://github.com/rh2o6/WAHHBOT" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  </a>

                  <a href="https://www.youtube.com/watch?v=Mz5tAqNHJH0" target="_blank" rel="noopener noreferrer">
                  <Button size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a question or want to work together? Feel free to reach out!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <p className="text-muted-foreground">Feel free to reach out through any of these channels</p>
                <div className="mt-4 grid gap-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <span>robert201621@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="h-5 w-5" />
                    <span>github.com/rh2o6</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5" />
                    <span>linkedin.com/in/rh206</span>
                  </div>
                </div>
              </div>
             <ContactForm />
            </div>
          </div>
        </section>
      </main>


      <CustomFooter />

      
    </div>
  )
}

