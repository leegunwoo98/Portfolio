const data = {
  name: "Gunwoo Lee",
  image: "images/gunwoo.jpg",
  id: "0",
  description:
    "I am a senior in Washington University in St. Louis, majoring in Computer Science and Computational Biology. I started programming from 2016. I have experience full-stack web development, mobile development, and data science. I am currently looking for a full-time position as a software engineer.",
  children: [
    {
      name: "Education",
      image: "./images/school-solid.svg",
      id: "1",
      children: [
        {
          name: "University",
          image:
            "https://marcomm.wustl.edu/wp-content/uploads/2015/07/Washington_University_SealRGB200-oqtfje.png",
          id: "2",
          description: "Washington University in St. Louis",
          children: [
            {
              name: "Major",
              id: "3",
              children: [
                {
                  name: "Computer Science",
                  id: "4",
                },
                {
                  name: "Computational Biology",
                  id: "5",
                },
              ],
            },
            {
              name: "GPA",
              id: "6",
              children: [
                {
                  name: "3.83/4.0",
                },
              ],
            },
          ],
        },
        {
          name: "HighSchool",
          image:
            "data:image/png;base64,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",
          id: "5",
          description: "Korean Minjok Leadership Academy",
          children: [
            {
              id: "6",
              name: "Major",
              children: [{}],
            },
          ],
        },
      ],
    },
    {
      name: "Work",
      image: "./images/briefcase-solid.svg",
      id: "8",
      children: [
        {
          name: "S&G Inc",
          id: "9",
          description: "CTO",
        },
        {
          name: "Washington University School of Medicine",
          image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/WashU_St._Louis_seal.svg/1200px-WashU_St._Louis_seal.svg.png",
          id: "10",
          description: "research technician",
          children: [
            {
              name: "project1",
              image: "images/gunwoo.jpg",
              id: "12",
              description: "project1",
            },
          ],
        },
        {
          name: "W-Block",
          image: "images/gunwoo.jpg",
          id: "11",
          description: "project3",
        },
      ],
    },
    {
      name: "Projects",
      id: "9",
      children: [
        {
          name: "dPay",
          image: "images/dPay.jpeg",
          id: "10",
          description:
            "A 2day project in WashU Hackathon. Created a divide and pay app using React-Native, Expo, Express, SQL, Node.JS, AWS RDS and Prisma",
          link: "https://devpost.com/software/dpay",
        },
        {
          name: "W-Block",
          description: "A landing page for W-Block using React.",
          link: "https://w-block.com",
        },
        {
          name: "Booking API",
          description:
            "A booking API for Artmonstay using Express, Node.js, and MongoDB.",
          link: "https://github.com/leegunwoo98/artmon_homepage",
        },
      ],
    },
  ],
};
export default data;
