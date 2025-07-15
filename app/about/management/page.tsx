
// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";
// import { SubNavHeader } from "@/components/sub-nav-header";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// const aboutNavItems = [
//   { title: "About Us", href: "/about" },
//   { title: "Vision & Mission", href: "/about/vision-mission" },
//   { title: "Management Members", href: "/about/management" },
//   { title: "Principal's Message", href: "/about/principal-message" },
//   { title: "Curriculum", href: "/about/curriculum" },
// ];

// const managementMembers = [
//   {
//     name: "Mr. Gururaj Rachayya Charantimath",
//     title: "President",
//     image: "/images/President.png",
//     message: `AIS, our students have always been our pride and joy. Their achievements in academics exemplify the consistent efforts put in at schools to nurture each student. We address this emergent segment of quality conscious parents who has the desire of grooming a confident child for tomorrow. Our teaching methods based on experiential learning leads to effective development of the child’s cognitive skills and easy understanding of concepts. Our methodology ensures strong moral, social, emotional and physical development of a child, converting them from a fledgling toddler into a confident, inquisitive and enthusiastic life-long learner. Our approach ensures that the child explores all his skills while learning.`,
//   },
//   {
//     name: "Mr. Suresh Uttam Kasbe",
//     title: "Vice President",
//     image: "/images/vicePresident.jpg",
//     message: `An individual’s intelligence depends on the heredity and environment. We cannot change the heredity of any individual but we can definitely change the environment wherein the individual is able to grasp and keep oneself abreast of the things around them. Our teachers at Abhishek International Moshi Pradhikaran are always concerned and working towards how enhance learning environment to stimulate learning and achievement to the fullest extent. At Abhishek’s Information and Communication Technology provides a support to the students to take an active role in the learning process and strengthen all the multiple intelligences necessary for quality learning. Each child is different. Therefore here we try and help each child to develop self confidence, ability of expression, social behaviour, right attitude towards teachers, classmates and environment and to develop various life skills. We also promote various co-curricular activities along with academics like Yoga, Art and Craft< Music, Physical Education thus taking care of the overall personal development of the child. I strongly believe that education is a continuous and never ending process. Our main aim is to foster a team spirit and encourage a sense of responsibility and self discipline amongst students to develop leadership qualities.`,
//   },
//   {
//     name: "Mrs. Geeta Gururaj Charantimath",
//     title: "Executive Director",
//     image: "/images/executive-director.png",
//     message: `Abhishek International School look forward to this academic session, full of hope and promise that each and every child will be successful and productive members of the family Apart from striving for advancement in academic achievement, AHPS also nurtures students with good and proper attitude and values. The school offers countless opportunities for students to take part in all sorts of co-curricular activities. The achievements of the school do not come easy. The drive for excellence permeates deeply in the school culture. We have a strong belief to promote harmony, dedication and a win-win scenario for everyone in school. Harmony can be interpreted as ‘team cohesion’. With a great team of teaching staff and excellent students, Abhishek International School expects a continuous and sustainable advancement in learning and teaching. Teaching and learning are the core activities of a school. Our staff is committed, caring and professional. Great teachers are the most important ingredient to the success of our school. We always set students’ benefit to be the first priority. The school focuses on promoting a high level of learning culture. School follows refined policies to streamline the academic and co-curricular activities. The school cares and responds proactively to the needs of students and parents.`,
//   },
//   {
//     name: "Mrs. Manisha Kasbe",
//     title: "Secretary",
//     image: "/images/secretary.jpg",
//     message: `Every Student deserves a Childhood full of enthusiasm and experimentation. This is a right time to allow them to expand their horizons and spread their wings. At AIS, every student is exposed to systematic extensive learning under the guidance of trained and perceptive educators so that they will develop a global outlook. The Abhishek International School will spare no efforts to make learning a joyful and sustainable activity for its students, making education a real celebration. The stress-free environment encourages each child to explore, experiment, and discover the world around them. As a Director, I welcome all parents to willingly entrust their wards in our care and we promise to give them a Good schooling that will enable them to compete globally, making them responsible citizens. ‘KNOWLEDGE IS SUPREME POWER’, has been the vocal slogan in and around, reminding us constantly that though every other power exists, the power which comes though Knowledge, can only INSPIRE, RENEW, REDEEM and ABHISHEK INTERNATIONAL SCHOOL, has put a step forward to materialise this beautiful belief into a possible reality, to satisfy the need of the expectant eyes, the hopeful hearts to encounter smoothly, surely and successfully the challenges of the competitive world, battling their way towards a new beginning , a renewal.`,
//   },
//   {
//     name: "Mrs. Sudha Bhat",
//     title: "Principal",
//     image: "/images/principal.jpeg",
//     message: `My vision is to foster a safe, inclusive, and dynamic learning environment where every student is encouraged to reach their full potential—academically, socially, and emotionally. I believe in cultivating a culture of respect, collaboration, and high expectations among students, staff, and families. By promoting innovative teaching, lifelong learning, and community involvement, we aim to prepare our students to become confident, compassionate, and responsible global citizens.`,
//   }
// ];

// export default function ManagementPage() {
//   return (
//     <div className="font-serif bg-gradient-to-b from-[rgb(249,246,251)] to-white min-h-screen">


//       <div className="container mx-auto px-4 py-12">
//         {/* Hero Section */}
//        <section className="relative rounded-xl overflow-hidden h-[300px] md:h-[360px] mb-16">
//   <Image
//     src="/images/schoolbuilding.png"
//     alt="Management"
//     fill
//     className="object-cover"
//     priority
//   />
//   <div className="absolute inset-0 bg-[#6a1b9a]/70 backdrop-brightness-75 flex flex-col justify-center items-center text-center px-4">
//     <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-md">
//       Our <span className="text-[#ab47bc]">Management</span> Members
//     </h1>
//     <p className="mt-4 text-white max-w-2xl text-lg">
//       Meet the visionary leaders shaping the future of Abhishek International School.
//     </p>
//   </div>
// </section>
//         {/* Desktop Grid View */}
//        {/* Alternating Cards Section */}
// <div className="space-y-20">
//   {managementMembers.map((member, idx) => (
//     <div
//       key={idx}
//       className={`flex flex-col md:flex-row items-center gap-8 ${
//         idx % 2 !== 0 ? "md:flex-row-reverse" : ""
//       }`}
//     >
//       {/* Image Container */}
//       <div className="w-full md:w-1/2 flex justify-center">
//         <div className="w-full h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-xl bg-white p-4 flex items-center justify-center">
//           <Image
//             src={member.image || "/placeholder.svg"}
//             alt={member.name}
//             width={400}
//             height={300}
//             className="object-contain w-full h-full"
//           />
//         </div>
//       </div>

//       {/* Text Content */}
//       <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-xl p-6 md:p-8">
//         <h2 className="text-2xl md:text-3xl font-bold text-[#6a1b9a] mb-2">{member.name}</h2>
//         <p className="text-[#ab47bc] text-lg font-semibold mb-4">{member.title}</p>
//         <p className="text-gray-700 leading-relaxed whitespace-pre-line text-justify">
//           {member.message}
//         </p>
//       </div>
//     </div>
//   ))}
// </div>


//         {/* Mobile Carousel View */}
//         <div className="md:hidden px-2">
//           <Carousel
//             opts={{
//               align: "start",
//               loop: true,
//             }}
//             className="w-full"
//           >
//             <CarouselContent>
//               {managementMembers.map((member, idx) => (
//                 <CarouselItem key={idx} className="basis-full sm:basis-1/2">
//                   <div className="p-2">
//                     <Card className="overflow-hidden shadow-lg rounded-xl bg-white">
//                       <div className="relative w-full h-[250px]">
//                         <Image
//                           src={member.image || "/placeholder.svg"}
//                           alt={member.name}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>
//                       <CardContent className="p-6 space-y-3">
//                         <h2 className="text-xl font-bold text-[#6a1b9a]">{member.name}</h2>
//                         <p className="text-[#ab47bc] font-medium">{member.title}</p>
//                         <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">{member.message}</p>
//                         <button className="text-[#6a1b9a] text-sm font-medium hover:text-[#8e24aa] transition-colors">
//                           Read more
//                         </button>
//                       </CardContent>
//                     </Card>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <CarouselPrevious className="left-2 bg-white/80 hover:bg-white text-[#6a1b9a] border-none shadow-lg" />
//             <CarouselNext className="right-2 bg-white/80 hover:bg-white text-[#6a1b9a] border-none shadow-lg" />
//           </Carousel>
//         </div>

//         {/* Values Section */}
//         <div className="mt-24 max-w-5xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-[#6a1b9a]">Our Leadership Values</h2>
//             <div className="h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full mt-4"></div>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               { 
//                 title: "Visionary", 
//                 icon: (
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                   </svg>
//                 )
//               },
//               { 
//                 title: "Integrity", 
//                 icon: (
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                   </svg>
//                 )
//               },
//               { 
//                 title: "Commitment", 
//                 icon: (
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 )
//               },
//               { 
//                 title: "Innovation", 
//                 icon: (
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                   </svg>
//                 )
//               },
//             ].map((value, idx) => (
//               <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
//                 <div className="w-16 h-16 bg-[#f3e5f5] rounded-full flex items-center justify-center mx-auto mb-4">
//                   {value.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-[#6a1b9a]">{value.title}</h3>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Quote Section */}
//         <div className="mt-24 bg-gradient-to-r from-[#6a1b9a] to-[#8e24aa] rounded-2xl p-8 md:p-12 text-white">
//           <div className="max-w-4xl mx-auto text-center">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-6 opacity-70" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
//             </svg>
//             <p className="text-xl md:text-2xl font-medium italic mb-6">
//               "Education is the most powerful weapon which you can use to change the world."
//             </p>
//             <p className="font-bold">- Nelson Mandela</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { SubNavHeader } from "@/components/sub-nav-header";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const aboutNavItems = [
  { title: "About Us", href: "/about" },
  { title: "Vision & Mission", href: "/about/vision-mission" },
  { title: "Management Members", href: "/about/management" },
  { title: "Principal's Message", href: "/about/principal-message" },
  { title: "Curriculum", href: "/about/curriculum" },
];

const managementMembers = [
  {
    name: "Mr. Gururaj Rachayya Charantimath",
    title: "President",
    image: "/images/President.png",
    message: `AIS, our students have always been our pride and joy. Their achievements in academics exemplify the consistent efforts put in at schools to nurture each student. We address this emergent segment of quality conscious parents who has the desire of grooming a confident child for tomorrow. Our teaching methods based on experiential learning leads to effective development of the child's cognitive skills and easy understanding of concepts. Our methodology ensures strong moral, social, emotional and physical development of a child, converting them from a fledgling toddler into a confident, inquisitive and enthusiastic life-long learner. Our approach ensures that the child explores all his skills while learning.`,
  },
  {
    name: "Mr. Suresh Uttam Kasbe",
    title: "Vice President",
    image: "/images/vicePresident.jpg",
    message: `An individual's intelligence depends on the heredity and environment. We cannot change the heredity of any individual but we can definitely change the environment wherein the individual is able to grasp and keep oneself abreast of the things around them. Our teachers at Abhishek International Moshi Pradhikaran are always concerned and working towards how enhance learning environment to stimulate learning and achievement to the fullest extent. At Abhishek's Information and Communication Technology provides a support to the students to take an active role in the learning process and strengthen all the multiple intelligences necessary for quality learning. Each child is different. Therefore here we try and help each child to develop self confidence, ability of expression, social behaviour, right attitude towards teachers, classmates and environment and to develop various life skills. We also promote various co-curricular activities along with academics like Yoga, Art and Craft< Music, Physical Education thus taking care of the overall personal development of the child. I strongly believe that education is a continuous and never ending process. Our main aim is to foster a team spirit and encourage a sense of responsibility and self discipline amongst students to develop leadership qualities.`,
  },
  {
    name: "Mrs. Geeta Gururaj Charantimath",
    title: "Executive Director",
    image: "/images/executive-director.png",
    message: `Abhishek International School look forward to this academic session, full of hope and promise that each and every child will be successful and productive members of the family Apart from striving for advancement in academic achievement, AHPS also nurtures students with good and proper attitude and values. The school offers countless opportunities for students to take part in all sorts of co-curricular activities. The achievements of the school do not come easy. The drive for excellence permeates deeply in the school culture. We have a strong belief to promote harmony, dedication and a win-win scenario for everyone in school. Harmony can be interpreted as 'team cohesion'. With a great team of teaching staff and excellent students, Abhishek International School expects a continuous and sustainable advancement in learning and teaching. Teaching and learning are the core activities of a school. Our staff is committed, caring and professional. Great teachers are the most important ingredient to the success of our school. We always set students' benefit to be the first priority. The school focuses on promoting a high level of learning culture. School follows refined policies to streamline the academic and co-curricular activities. The school cares and responds proactively to the needs of students and parents.`,
  },
  {
    name: "Mrs. Manisha Kasbe",
    title: "Secretary",
    image: "/images/secretary.jpg",
    message: `Every Student deserves a Childhood full of enthusiasm and experimentation. This is a right time to allow them to expand their horizons and spread their wings. At AIS, every student is exposed to systematic extensive learning under the guidance of trained and perceptive educators so that they will develop a global outlook. The Abhishek International School will spare no efforts to make learning a joyful and sustainable activity for its students, making education a real celebration. The stress-free environment encourages each child to explore, experiment, and discover the world around them. As a Director, I welcome all parents to willingly entrust their wards in our care and we promise to give them a Good schooling that will enable them to compete globally, making them responsible citizens. 'KNOWLEDGE IS SUPREME POWER', has been the vocal slogan in and around, reminding us constantly that though every other power exists, the power which comes though Knowledge, can only INSPIRE, RENEW, REDEEM and ABHISHEK INTERNATIONAL SCHOOL, has put a step forward to materialise this beautiful belief into a possible reality, to satisfy the need of the expectant eyes, the hopeful hearts to encounter smoothly, surely and successfully the challenges of the competitive world, battling their way towards a new beginning , a renewal.`,
  },
  {
    name: "Mrs. Sudha Bhat",
    title: "Principal",
    image: "/images/principal.jpeg",
    message: `My vision is to foster a safe, inclusive, and dynamic learning environment where every student is encouraged to reach their full potential—academically, socially, and emotionally. I believe in cultivating a culture of respect, collaboration, and high expectations among students, staff, and families. By promoting innovative teaching, lifelong learning, and community involvement, we aim to prepare our students to become confident, compassionate, and responsible global citizens.`,
  }
];

export default function ManagementPage() {
  return (
    <div className="font-serif bg-gradient-to-b from-[#f9f6fb] to-white min-h-screen">
      

      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-center items-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Our <span className="text-[#e9b1ff]">Leadership</span> Team
            </h1>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
              Meet the visionary leaders guiding Abhishek International School towards excellence in education.
            </p>
          </div>
        </div>
        <Image
          src="/images/schoolbuilding.png"
          alt="School Building"
          fill
          className="object-cover"
          priority
        />
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Management Members Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4a148c] mb-3">
              Our Management Team
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#7b1fa2] to-[#e91e63] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-16">
            {managementMembers.map((member, idx) => (
              <div
                key={idx}
                className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                data-aos="fade-up"
              >
                {/* Image Card */}
                <div className="w-full md:w-2/5">
                  <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-300">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h3 className="text-white text-xl font-bold">{member.name}</h3>
                      <p className="text-[#e1bee7]">{member.title}</p>
                    </div>
                  </div>
                </div>

                {/* Bio Card */}
                <div className="w-full md:w-3/5">
                  <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 h-full">
                    <div className="flex items-center mb-4">
                      <div className="h-1 w-10 bg-[#7b1fa2] mr-3"></div>
                      <h3 className="text-xl font-semibold text-[#4a148c]">{member.title}</h3>
                    </div>
                    <div className="prose max-w-none text-gray-700">
                      <p className="whitespace-pre-line">{member.message}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mobile Carousel */}
        <section className="md:hidden mb-16">
          <h3 className="text-2xl font-bold text-[#4a148c] mb-6 text-center">Meet Our Leaders</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {managementMembers.map((member, idx) => (
                <CarouselItem key={idx} className="basis-full">
                  <div className="p-2">
                    <Card className="overflow-hidden shadow-xl rounded-xl border-0">
                      <div className="relative h-64 w-full">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <h3 className="text-white font-bold">{member.name}</h3>
                          <p className="text-[#e1bee7] text-sm">{member.title}</p>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-gray-700 text-sm line-clamp-4 mb-3">
                          {member.message}
                        </p>
                        <button className="text-[#7b1fa2] text-sm font-medium hover:text-[#9c27b0] transition-colors flex items-center">
                          Read full message
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white/90 hover:bg-white text-[#7b1fa2] border-none shadow-lg" />
            <CarouselNext className="right-2 bg-white/90 hover:bg-white text-[#7b1fa2] border-none shadow-lg" />
          </Carousel>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4a148c] mb-3">
              Our Leadership Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our leadership and decision-making
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#7b1fa2] to-[#e91e63] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Visionary Thinking", 
                description: "Forward-looking approach to education",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#7b1fa2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              { 
                title: "Integrity", 
                description: "Uncompromising ethical standards",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#7b1fa2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                title: "Commitment", 
                description: "Dedication to student success",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#7b1fa2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              { 
                title: "Innovation", 
                description: "Embracing modern educational practices",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#7b1fa2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                )
              },
            ].map((value, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#7b1fa2] hover:border-[#e91e63]"
              >
                <div className="w-14 h-14 bg-[#f3e5f5] rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#4a148c] mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Inspirational Quote */}
       
      </div>
    </div>
  );
}