'use client';

import React from 'react';

const AnnualReportPage = () => {
  const sections = [
    {
      number: "1",
      title: "Growth & Milestones",
      content: [
        "Our journey began in 2014 with just 19 students. Today, we proudly nurture more than 782 students in our well-equipped campus at Moshi–Pradhikaran. This remarkable growth reflects the trust of parents, the dedication of teachers, and the sincere efforts of our students.",
        "I am proud to announce that our Grade 10 Board Result last year was 100%, which stands as a testimony to our academic excellence."
      ]
    },
    {
      number: "2",
      title: "Academic Excellence",
      bullets: [
        "School follows the CBSE curriculum.",
        "Continuous upgradation of academic systems.",
        "Teachers regularly attend CBSE training programs.",
        "Introduction of German as an additional subject.",
        "Robotics introduced from Grade 1.",
        "Digital classrooms in all rooms.",
        "Well-equipped Science, Computer, Mathematics & Geography labs.",
        "Library periods allotted for all classes.",
        "Daily homework and attendance shared through school app."
      ]
    },
    {
      number: "3",
      title: "Co-Curricular & Skill Development",
      content: [
        "We offer more than 27 co-curricular and extracurricular activities to ensure holistic development."
      ],
      bullets: [
        "Commando training & Mallakhamb during school hours.",
        "Daily discipline drills with patriotic slogan \"Jai Hind.\"",
        "English, Hindi & Marathi skits to build communication skills.",
        "Science Exhibition conducted on 20 December with 148 projects."
      ]
    },
    {
      number: "4",
      title: "Sports Achievements",
      content: [
        "Sports are an integral part of our curriculum.",
        "Students actively participated in:"
      ],
      list: ["Kabaddi", "Kho-Kho", "Football", "Volleyball", "Long Jump"],
      footer: "Our students secured medals at ZP, Zonal, and Association-level competitions."
    },
    {
      number: "5",
      title: "Cultural & Social Activities",
      content: [
        "We celebrated various national, cultural and social events:",
        "Palkhi, Guru Purnima, Nag Panchami, Raksha Bandhan, Kranti Din, Gopal Kala, Ganesh Utsav, Dandiya, Constitution Day, Kargil Vijay Diwas, Amar Jawan Diwas and more."
      ],
      subsection: {
        title: "Awareness Programs Conducted:",
        items: [
          "Mobile De-addiction Campaign",
          "Patriotic Storytelling",
          "Tiranga Rally",
          "Social Awareness Rallies",
          "Street Plays",
          "Tree Plantation Drives",
          "Terror Attack Awareness Program (with Police Parents)"
        ]
      }
    },
    {
      number: "6",
      title: "Pre-Primary Section",
      content: [
        "Special focus is given to joyful and activity-based learning.",
        "Activities included:"
      ],
      list: [
        "Colour Day",
        "Fruit Day",
        "Umbrella Day",
        "Theme-based celebrations"
      ],
      footer: "These activities enhance sensory development, creativity, and communication skills."
    },
    {
      number: "7",
      title: "Value Education & Health Initiatives",
      bullets: [
        "No chocolate distribution on birthdays – students bring saplings or storybooks.",
        "Certificates of appreciation provided.",
        "Health awareness seminar for adolescent girls (nutrition, hygiene, menstruation).",
        "Good parenting sessions organized for parents."
      ]
    },
    {
      number: "8",
      title: "Infrastructure & Facilities",
      bullets: [
        "Safe drinking water & separate washrooms on each floor.",
        "CCTV surveillance & safety measures.",
        "Modern laboratories.",
        "Digital learning environment."
      ]
    },
    {
      number: "9",
      title: "Educational Tours",
      bullets: [
        "Pre-Primary to Grade 4 – Avani Resort",
        "Grades 5 to 7 – Kalpataru Baug",
        "Grades 8 to 10 – Educational Tour to Hyderabad"
      ]
    },
    {
      number: "10",
      title: "Future Plans",
      bullets: [
        "Introduction of Cricket Academy",
        "Skating & Rope Mallakhamb",
        "More skill-based programs"
      ]
    }
  ];

  const styles = {
    container: {
      background: '#f8f9fa',
      minHeight: '100vh',
      padding: 0,
      margin: 0
    },
    header: {
      background: 'linear-gradient(135deg, #800000 0%, #a00000 100%)',
      color: 'white',
      padding: '3rem 0',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      textAlign: 'center' as const
    },
    schoolName: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: 'white'
    },
    divider: {
      width: '100px',
      height: '4px',
      background: 'white',
      borderRadius: '2px',
      margin: '0 auto'
    },
    reportTitle: {
      fontSize: '1.75rem',
      marginTop: '1.5rem',
      marginBottom: '0.5rem',
      color: 'white'
    },
    academicYear: {
      fontSize: '1.125rem',
      marginBottom: 0,
      color: 'white'
    },
    mainContent: {
      maxWidth: '1140px',
      margin: '0 auto',
      padding: '3rem 1rem'
    },
    card: {
      background: 'white',
      borderLeft: '4px solid #800000',
      borderRadius: '8px',
      marginBottom: '1.5rem',
      padding: '2rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease'
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '1rem'
    },
    numberBadge: {
      background: '#800000',
      color: 'white',
      width: '45px',
      height: '45px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      marginRight: '1rem',
      flexShrink: 0
    },
    sectionTitle: {
      color: '#800000',
      fontWeight: 'bold',
      fontSize: '1.5rem',
      marginTop: '0.5rem',
      marginBottom: 0
    },
    cardBody: {
      marginLeft: '2.5rem'
    },
    paragraph: {
      marginBottom: '1rem',
      color: '#212529',
      lineHeight: '1.6'
    },
    listItem: {
      marginBottom: '0.5rem',
      display: 'flex',
      alignItems: 'flex-start'
    },
    bullet: {
      color: '#800000',
      marginRight: '0.5rem',
      flexShrink: 0
    },
    subsection: {
      marginTop: '1rem',
      padding: '1rem',
      background: '#f8f9fa',
      borderRadius: '6px'
    },
    subsectionTitle: {
      color: '#800000',
      fontWeight: '600',
      marginBottom: '1rem',
      fontSize: '1.125rem'
    },
    conclusionCard: {
      background: 'linear-gradient(135deg, #800000 0%, #a00000 100%)',
      color: 'white',
      borderRadius: '8px',
      padding: '2.5rem',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      border: 'none'
    },
    conclusionTitle: {
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      fontSize: '1.5rem',
      color: 'white'
    },
    conclusionText: {
      marginBottom: '1rem',
      lineHeight: '1.6',
      color: 'white'
    },
    quote: {
      textAlign: 'center' as const,
      marginTop: '2rem',
      paddingTop: '2rem',
      borderTop: '2px solid rgba(255,255,255,0.3)',
      fontSize: '1.75rem',
      fontWeight: 'bold',
      color: 'white'
    },
    footer: {
      textAlign: 'center' as const,
      marginTop: '3rem',
      padding: '2rem 0'
    },
    footerText: {
      color: '#6c757d',
      marginBottom: '0.25rem',
      fontStyle: 'italic'
    },
    footerSmall: {
      color: '#6c757d',
      fontSize: '0.875rem'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={{maxWidth: '1140px', margin: '0 auto', padding: '0 1rem'}}>
          <h1 style={styles.schoolName}>Abhishek International School</h1>
          <div style={styles.divider}></div>
          <h2 style={styles.reportTitle}>Annual Report</h2>
          <p style={styles.academicYear}>Academic Year 2025–26</p>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {sections.map((section, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.cardHeader}>
              <div style={styles.numberBadge}>{section.number}</div>
              <h3 style={styles.sectionTitle}>{section.title}</h3>
            </div>
            
            <div style={styles.cardBody}>
              {section.content && section.content.map((para, idx) => (
                <p key={idx} style={styles.paragraph}>{para}</p>
              ))}
              
              {section.bullets && (
                <div>
                  {section.bullets.map((bullet, idx) => (
                    <div key={idx} style={styles.listItem}>
                      <span style={styles.bullet}>●</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              )}

              {section.list && (
                <div style={{marginLeft: '1rem'}}>
                  {section.list.map((item, idx) => (
                    <div key={idx} style={styles.listItem}>
                      <span style={styles.bullet}>➤</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {section.subsection && (
                <div style={styles.subsection}>
                  <h5 style={styles.subsectionTitle}>{section.subsection.title}</h5>
                  <div>
                    {section.subsection.items.map((item, idx) => (
                      <div key={idx} style={styles.listItem}>
                        <span style={styles.bullet}>✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.footer && (
                <p style={{...styles.paragraph, fontWeight: '600', marginTop: '1rem'}}>{section.footer}</p>
              )}
            </div>
          </div>
        ))}

        {/* Conclusion Section */}
        <div style={styles.conclusionCard}>
          <h3 style={styles.conclusionTitle}>Conclusion & Acknowledgement</h3>
          
          <div>
            <p style={styles.conclusionText}>
              <strong>Dear parents,</strong> your child is the future of India. Encourage them in their career choices and always support them positively.
            </p>
            <p style={styles.conclusionText}>
              <strong>Dear students,</strong> respect your parents and teachers, maintain discipline, speak the truth, and take care of your health.
            </p>
            <p style={styles.conclusionText}>
              We will continue working sincerely for academic excellence and holistic development.
            </p>
          </div>

          <div style={styles.quote}>
            "Be Smart, Be Kind, Be Responsible."
          </div>
        </div>

        {/* Footer Note */}
        <div style={styles.footer}>
          <p style={styles.footerText}>
            Building Excellence, Nurturing Leaders
          </p>
          <p style={styles.footerSmall}>
            Abhishek International School | Moshi–Pradhikaran
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnnualReportPage;