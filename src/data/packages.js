import goa from "../assets/images/goa.webp";
import manali from "../assets/images/Manali.jpeg";
import kashmir from "../assets/images/Kashmir.webp";
import kerala from "../assets/images/Kerala.jpg";
import ladakh from "../assets/images/Ladakh.webp";

const packages = [
  {
    id: 1,
    title: "Goa",
    image: goa,
    category: "Beach",
    price: "₹9,999",
    duration: "4 Days / 3 Nights",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Manali",
    image: manali,
    category: "Hill",
    price: "₹12,999",
    duration: "5 Days / 4 Nights",
    rating: 4.7,
  },
  {
    id: 3,
    title: "Kashmir",
    image: kashmir,
    category: "Hill",
    price: "₹18,999",
    duration: "6 Days / 5 Nights",
    rating: 4.9,
  },
  {
    id: 4,
    title: "Kerala",
    image: kerala,
    category: "Beach",
    price: "₹15,499",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
  },
  {
    id: 5,
    title: "Leh Ladakh",
    image: ladakh,
    category: "Adventure",
    price: "₹22,999",
    duration: "7 Days / 6 Nights",
    rating: 4.9,
  },
];

export default packages;