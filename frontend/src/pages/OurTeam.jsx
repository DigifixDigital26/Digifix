import { Linkedin, ArrowUpRight } from 'lucide-react';

const teamMembers = [
  {
    name: 'Ayush Nigam',
    role: 'Founder & Creative Developer',
    description:
      'Focused on building digital experiences through design, development and creative strategy.',
    image: '/images/team/ayush.jpg',
    linkedin: '',
  },
  {
    name: 'Team Member',
    role: 'Graphic Designer',
    description:
      'Creating thoughtful visual identities and designs that communicate brand stories.',
    image: '/images/team/member-2.jpg',
    linkedin: '',
  },
  {
    name: 'Team Member',
    role: 'Web Developer',
    description:
      'Turning ideas into functional, responsive and user-focused digital experiences.',
    image: '/images/team/member-3.jpg',
    linkedin: '',
  },
];

export default function OurTeam() {
  return (
    <section className="bg-brand-cream section-y">

      <div className="container-x">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">

          <p className="para mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Meet The Team
          </p>

          <h2 className="cinzel text-3xl leading-tight text-brand-green sm:text-4xl lg:text-5xl">
            The People Behind The Work.
          </h2>

          <p className="para mx-auto mt-5 max-w-xl text-base leading-relaxed text-brand-green/75 sm:text-lg">
            A small team of creative thinkers and developers
            focused on building meaningful digital experiences
            and helping businesses grow.
          </p>

        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {teamMembers.map((member, index) => (

            <article
              key={member.name + index}
              className="group"
            >

              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden border border-brand-green/15 bg-brand-cream-dark">

                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  width="600"
                  height="750"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-brand-green/0 transition-colors duration-500 group-hover:bg-brand-green/10" />

                {/* LinkedIn */}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn profile`}
                    className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center border border-brand-gold bg-brand-cream text-brand-green transition-colors duration-300 hover:bg-brand-gold"
                  >
                    <Linkedin size={19} />
                  </a>
                )}

              </div>

              {/* Member Details */}
              <div className="mt-5 border-t-2 border-brand-gold pt-5">

                <div className="flex items-start justify-between gap-3">

                  <div>

                    <h3 className="cinzel text-xl text-brand-green">
                      {member.name}
                    </h3>

                    <p className="para mt-2 text-sm font-medium uppercase tracking-wider text-brand-gold">
                      {member.role}
                    </p>

                  </div>

                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-brand-green transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                </div>

                <p className="para mt-4 text-base leading-relaxed text-brand-green/75">
                  {member.description}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}