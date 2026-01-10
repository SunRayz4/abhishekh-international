
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6fb] to-white font-serif">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute  z-0"></div>
        <div className="container mx-auto px-4 py-32 relative z-10 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-gray-800">
            About <span className="text-[#800000]">Abhishek International</span>
          </h2>
          <div className="mb-8 h-1 w-24 bg-[#800000] mx-auto rounded-full"></div>
        
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
      </div>

      {/* Story Section */} 
      <div className="container mx-auto px-4 py-16 -mt-0 relative z-20" style={{marginTop:'-170px'}}>
        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-10">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/50 to-transparent z-10"></div>
              <Image 
                src="/images/building.jpg" 
                alt="Abhishek International School Campus" 
                fill 
                className="object-cover transition duration-700 hover:scale-105" 
                priority
              />
            </div>
            <div className="py-4">
              <div className="inline-block mb-5 px-3 py-1 bg-[#6a1b9a]/10 rounded-full">
                <span className="text-sm font-medium text-[#800000]">Our Journey</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold text-gray-800">
               Contributing in Education Field Since 2004
              </h2>
              <div className="space-y-5 text-gray-700">
                <p className="leading-relaxed">
                  Abhishek International School is run by the trust Abhishek Vidyalayam, a renowned institution dedicated to providing quality education. The pioneer of this trust, Chairman Mr. Gururaj Charantimath, and Executive Director Mrs. Geeta Charantimath, have been in the education sector for over twenty years, bringing a wealth of experience and expertise to the table.
                </p>
                <p className="leading-relaxed">
                 Our extensive one-acre campus provides a serene and ideal environment for systematic learning, allowing students to grow and develop in a peaceful and supportive setting.

Established in 2014, Abhishek International School has rapidly grown into a reputable CBSE school, offering classes from Nursery to Standard 10.
                </p>
                <p className="leading-relaxed">
                  Our focus is on nurturing each child, recognizing their unique strengths, and transforming weaknesses into opportunities for growth. We strive to create a holistic learning experience that not only imparts academic knowledge but also helps students develop essential life skills, values, and character. Our ultimate goal is to shape better citizens for our country, who are equipped to make a positive impact in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Methodology Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "OUR METHODOLOGY",
              image: "http://www.abhishekinternationalschool.com/assets/img/p1.jpg",
              desc: "Abhishek International School combines preferred practices in Primary and Secondary school education with the fastest growing methods of the world-renowned Activity based Education System. We recognize the uniqueness of every child and develop it further. Our Activity based Education System facilitates opportunities for social, emotional, intellectual and physical growth of the child. The age-appropriate learning environment enables children to reach their fullest-potential."
            },
            {
              title: "EXTRA CURRICULAR ACTIVITIES",
              image: "http://www.abhishekinternationalschool.com/assets/img/Activities.jpg",
              desc: "The aim at Abhishek International School is to provide our students with the opportunity to develop life skills which include self- awareness and teamwork. Children are provided with teaching aids, Worksheets and Booklets that give a complete hands-on experience to them as these years are the most crucial years that act as a foundation for their future development. Hence, it is imperative to include a blended curriculum that is theme based and concept based providing our scholars the holistic approach to learning and development. Our main focus areas of development are Personal, Social and Emotional Development, Communication, Mathematical and Logical Development, Environmental Awareness, Fine and Gross Motor skill Development and Creative Development."
            },
            {
              title: "OLDAGE VISIT",
              image: "http://www.abhishekinternationalschool.com/assets/img/oldage.jpg",
              desc: "Abhishek International School visited Orphanage on 17th November 2022 Thursday at SNEHWAN EK AASHECHA KIRAN in Mahalungae, Alandi. In presence of our Hon. & Respected Mrs.Geeta Charantimath Madam ,Mrs. Manisha Kasbe Madam, Rutuja Kasbe Madam, Principal Mrs. Ramamani Iyengar Madam, Co-ordinators Mrs. Kavita Sharma& Mrs.Jagruti Satpute, Teachers, Non Teaching Staff and students of our school. Our school had organized donation of some Food, Toys, Sarees, Dress ,Kids clothes, Shoes to the Orphanage. All our Teachers, Parents, Students were happy to participate and they collected items for donation. Our Principal Mrs. Ramamani Iyengar madam,teacher Mrs. Anita Naidu Miss, our class girls and boys from std 8th& 9th visited SNEHWAN EK AASHECHA KIRAN."
            }
          ].map((item, index) => (
            <Card key={index} className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="h-[250px] relative overflow-hidden">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 "
                  quality={90}
                />

              </div>
              <CardContent className="pt-6 pb-8 px-6">
                <h3 className="text-xl font-semibold text-[#800000] mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      
      
      

     
      </div>
    
  );
}