"use client";

import { Section, Header, SubHeader, Text, Row, Button, Divider, Gallery } from "@/components";

export default function Home() {

  // // Theme toggle function
  // function handleThemeToggle() {
  //   if (document.documentElement.classList.contains('dark')) {
  //     document.documentElement.classList.remove('dark');
  //     document.documentElement.classList.add('light');
  //   } else {
  //     document.documentElement.classList.remove('light');
  //     document.documentElement.classList.add('dark');
  //   }
  // }

  // <button onClick={handleThemeToggle}>
  //   Mode
  // </button>

  return (
    <div className="w-[95%] max-w-[92rem] mx-auto bg-middleground h-full min-h-screen border-dashed border-x border-support"
    >
      <main className="flex flex-col gap-y-[3rem] max-w-3xl mx-auto px-[1rem] py-[4rem]">
        {/* About */}
        {/* Avatar */}
        <Section>
          <Row>
            <img src="/images/mantvydas-deltuva.png" className="w-[2.5rem] sm:w-[5rem] sm:h-[5rem] h-[2.5rem] sm:rounded-[1.25rem] rounded-[0.625rem]"/>
            <div className="flex flex-col">
              <p className="sm:text-[2.8rem] text-[1.5rem] sm:leading-[3.0rem] leading-[1.5rem] text-header font-bold">
                Mantvydas Deltuva
              </p>
              <p className="text-sm text-text">
                Software Engineer
              </p>
            </div>
          </Row>
        </Section>
        {/* Details */}
        <Section>
          <SubHeader>I am a results-driven software engineer with a passion for building intuitive and efficient digital solutions. Always eager to learn and refine my skills to create better and more impactful software with every project.</SubHeader>
          <Text>Ready to contribute and make a difference.</Text>
          <Row>
            <Button icon="/svgs/linkedin.svg" color="linkedin" href="https://www.linkedin.com/in/mantvydasdeltuva/">LinkedIn</Button>
            <Button icon="/svgs/github.svg" color="github" href="https://github.com/mantvydasdeltuva">GitHub</Button>
          </Row>
        </Section>
        <Divider/>

        {/* Projects */}
        <Section>
          <Header className="font-jetbrains text-center font-medium">
            Projects
          </Header>
        </Section>
        {/* Guidal */}
        <Gallery images={["/images/guidal-1.png", "/images/guidal-2.png", "/images/guidal-3.png", "/images/guidal-4.png"]}/>
        <Section>
          <Header>Guidal</Header>
          <SubHeader>A Tourism App for City Exploration</SubHeader>
          <Text>Guidal is a user-friendly and feature-rich mobile application designed for tourists and city explorers. Initially focused on Patras, Greece, it provides detailed city-specific information with a unique design and full offline functionality. Built with a modular framework, it allows seamless adaptation to new cities with minimal adjustments, making it a versatile companion in the tourism application market.</Text>
        </Section>
        {/* Kath */}
        <Gallery images={["/images/kath-1.png", "/images/kath-2.png"]}/>
        <Section>
          <Header>Kath</Header>
          <SubHeader>A GUI Tool for Gene Variation Analysis</SubHeader>
          <Text>Kath is a user-friendly application that simplifies the in-depth analysis of gene variation data from LOVD, gnomAD, and ClinVar genetic databases. By consolidating critical genetic insights into an accessible interface, it empowers researchers, clinicians, and geneticists to assess pathogenicity, cross-reference variant data, and advance genomic studies with efficiency and precision.</Text>
        </Section>
        <Divider/>

        {/* Experience */}
        <Section>
          <Header className="font-jetbrains text-center font-medium">
            Experience
          </Header>
        </Section>
        <Section>
          <div className="flex flex-row w-full gap-[1rem] p-6 bg-foreground rounded-lg border border-background shadow-sm">
            <img src="/svgs/cognizant.svg" className="w-[5rem] h-[5rem] rounded-[2.5rem]"/>
            <div className="flex flex-col w-full">
              <Header>
                Software Developer · Internship
              </Header>
              <SubHeader>
                Cognizant
              </SubHeader>
              <Text className="py-[0.0rem]">
                Sep 2023 - Dec 2023
              </Text>
            </div>          
          </div>
        </Section>
      </main>
    </div>
  );
}