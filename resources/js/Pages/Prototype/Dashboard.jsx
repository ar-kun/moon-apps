// import Authenticated from "@/Layouts/Authenticated";
// import Flickity from "react-flickity-component";
// import { Head } from "@inertiajs/react";
// import FeaturedMovies from "@/Components/FeaturedMovies";
// import BrowserMovies from "@/Components/BrowserMovies";

// export default function Dashboard() {
//     const flickityOptions = {
//         cellAlign: "left",
//         contain: true,
//         groupCells: 1,
//         wrapAround: false,
//         pageDots: false,
//         prevNextButtons: false,
//         draggable: ">1",
//     };
//     return (
//         <Authenticated>
//             <Head title="Dashboard">
//                 <link
//                     rel="stylesheet"
//                     href="https://unpkg.com/flickity@2/dist/flickity.min.css"
//                 />
//             </Head>
//             {/* Feature */}
//             <div>
//                 <div className="font-semibold text-[22px] text-black mb-4">
//                     Featured Movies
//                 </div>
//                 <Flickity className="gap-[30px]" options={flickityOptions}>
//                     {[1, 2, 3, 4].map((item, index) => (
//                         <FeaturedMovies
//                             key={index}
//                             slug="the-avengers"
//                             name="The Avengers"
//                             category="Action, Adventure, Sci-Fi"
//                             thumbnail="/assets/images/featured-1.png"
//                             rating={4.5}
//                         />
//                     ))}
//                 </Flickity>
//             </div>
//             {/* Feature */}
//             {/* Broweser */}
//             <div className="mt-10">
//                 <div className="font-semibold text-[22px] text-black mb-4">
//                     Browse
//                 </div>
//                 <Flickity className="gap-[30px]" options={flickityOptions}>
//                     {/* <!-- Movies 1 --> */}
//                     {[1, 2, 3, 4, 5, 6].map((item, index) => (
//                         <BrowserMovies
//                             key={index}
//                             slug="meong-golden"
//                             name="Meong Golden"
//                             category="Horror • Love"
//                             thumbnail="/assets/images/browse-1.png"
//                         />
//                     ))}
//                 </Flickity>
//             </div>
//             {/* Broweser */}
//         </Authenticated>
//     );
// }
