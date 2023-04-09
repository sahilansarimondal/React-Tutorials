import tourOneImg from "./images/tour-1.jpeg";
import tourTwoImg from "./images/tour-2.jpeg";
import tourThreeImg from "./images/tour-3.jpeg";
import tourFourImg from "./images/tour-4.jpeg";
import tourFiveImg from "./images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
  },
  // rest of the objects
];

export const tours = [
  {
    id: 1,
    img: tourOneImg,
    title: "Tibet Adventure",
    icon: "fas fa-map",
    country: "china",
    date: "august 26th, 2023",
    duration: "6 days",
    cost: "$2100",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 2,
    img: tourTwoImg,
    title: "Best of Java",
    icon: "fas fa-map",
    country: "indonesia",
    date: "may 13th, 2023",
    duration: "11 days",
    cost: "$1400",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 3,
    img: tourThreeImg,
    title: "Explore Hong Kong",
    icon: "fas fa-map",
    country: "Hong Kong",
    date: "June 1st, 2023",
    duration: "8 days",
    cost: "$5000",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 4,
    img: tourFourImg,
    title: "Kenya Highlights",
    icon: "fas fa-map",
    country: "kenya",
    date: "July 29th, 2023",
    duration: "20 days",
    cost: "$3300",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 5,
    img: tourFiveImg,
    title: "Taj Mahal",
    icon: "fas fa-map",
    country: "india",
    date: "November 10th, 2023",
    duration: "10 days",
    cost: "$3000",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
];
