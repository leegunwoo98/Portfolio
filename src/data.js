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
          name: "project1",
          image: "images/gunwoo.jpg",
          id: "2",
          description: "project1",
          children: [
            {
              name: "project1",
              image: "images/gunwoo.jpg",
              id: "3",
              description: "project1",
            },
            {
              name: "project1",
              image: "images/gunwoo.jpg",
              id: "4",
              description: "project1",
            },
          ],
        },
        {
          name: "project2",
          id: "5",
          description: "project2",
        },
        {
          name: "project3",
          image: "images/gunwoo.jpg",
          id: "6",
          description: "project3",
        },
        {
          name: "project3",
          image: "images/gunwoo.jpg",
          id: "7",
          description: "project3",
        },
      ],
    },
    {
      name: "Work",
      image: "./images/briefcase-solid.svg",
      id: "8",
      children: [
        {
          name: "project1",
          image: "images/gunwoo.jpg",
          id: "9",
          description: "project1",
        },
        {
          name: "project2",
          image: "images/gunwoo.jpg",
          id: "10",
          description: "project2",
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
          name: "project3",
          image: "images/gunwoo.jpg",
          id: "11",
          description: "project3",
        },
      ],
    },
    {
      name: "Projects",
      id: "9",
      children: [],
    },
  ],
};
export default data;
