import React, { useRef, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const testimonials = [
  {
    name: "📸 Professional Wedding Photography",
    title: "Professional Wedding",
    image: "https://www.atlhea.in/wp-content/uploads/2020/11/ATLHEA-87.jpg",
    quote: `Capture your most cherished moments with elegance, emotion, and timeless beauty.
As a professional wedding photographer, I specialize in documenting love stories with a blend of candid moments, cinematic frames, and fine-art composition. ...`,
  },
  {
    name: "🎉 Birthday Function ",
    title: "Birthday Photo Shoots",
    image:
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/5ac649da-8bf1-4303-98fd-384b08daebcf.__CR0,0,2910,1800_PT0_SX970_V1___.jpg",
    quote: `Celebrate Life’s Special Moments with Timeless Photos ...`,
  },
  {
    name: "🤰 Maternity Function",
    title: "Maternity Function Photo Shoot",
    image:
      "https://images.squarespace-cdn.com/content/v1/5727974359827e5304ee8ddf/e60d2e7c-828d-4fea-8614-0136d3f23384/Maternity+portrait+photography.jpg",
    quote: `Celebrate the Beauty of Motherhood with Elegant Photography ...`,
  },
  {
    name: "🌸 Puberty ",
    title: "Puberty Function Photo Shoot",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/6f6921146584131.62b2f9f5425d4.jpg",
    quote: `Honoring Tradition, Capturing Grace ...`,
  },
  {
    name: "🏡 Housewarming Ceremony",
    title: "Housewarming Ceremony Photo Shoot",
    image:
      "https://th.bing.com/th/id/R.45d774c244014b6024ea384514173821?rik=X2z6yZ7UE0tQDg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-mTKL3_l1mDA%2fUJEpjsu-coI%2fAAAAAAAABqE%2foMLwSGtmPHo%2fs1600%2f038.JPG&ehk=WSDZdRymxI5C4lN8NrIAVFUHzpGatTDGiYojdz%2bBeP8%3d&risl=&pid=ImgRaw&r=0",
    quote: `Welcoming New Beginnings with Beautiful Memories ...`,
  },
];

export default function InfiniteImageSlider() {
  const scrollRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const cardSpacing = 16;
  const normalWidth = 150;
  const selectedWidth = 600;

  const scrollToImage = (index) => {
    const box = scrollRef.current;
    if (!box) return;

    const marginRight = cardSpacing;
    let leftOffset = 0;

    for (let i = 0; i < index; i++) {
      leftOffset += (i === selectedIndex ? selectedWidth : normalWidth) + marginRight;
    }

    const scrollTo =
      leftOffset +
      (index === selectedIndex ? selectedWidth : normalWidth) +
      marginRight -
      box.clientWidth;

    const maxScroll =
      testimonials.length * (normalWidth + marginRight) +
      (selectedWidth - normalWidth) -
      box.clientWidth;

    box.scrollTo({
      left: Math.min(scrollTo, maxScroll),
      behavior: "smooth",
    });
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    scrollToImage(selectedIndex); // Scroll on mount

    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    scrollToImage(selectedIndex);
  }, [selectedIndex]);

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mt: 5 }}>
        Our Services
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: 4,
          height: "100vh",
          boxSizing: "border-box",
          // bgcolor:'white'
        }}
      >
        {/* Image Strip */}
        <Box
          ref={scrollRef}
          sx={{
            flex: 2,
            overflowX: "auto",
            display: "flex",
            alignItems: "flex-end",
            height: "100%",
            whiteSpace: "nowrap",
            scrollBehavior: "smooth",
            paddingBottom: 2,
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {testimonials.map((t, index) => {
            const isSelected = index === selectedIndex;
            return (
              <Box
                key={index}
                onClick={() => setSelectedIndex(index)}
                sx={{
                  flex: "0 0 auto",
                  width: isSelected ? selectedWidth : normalWidth,
                  height: isSelected ? 800 : 200,
                  marginRight: `${cardSpacing}px`,
                  borderRadius: 2,
                  boxShadow: isSelected ? 6 : 2,
                  cursor: "pointer",
                  transition: "all 0.5s ease",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  src={t.image}
                  alt={t.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "all 0.5s ease",
                  }}
                />
              </Box>
            );
          })}
        </Box>

        {/* Text Panel */}
        <Box
          sx={{
            flex: 1,
            pl: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {testimonials[selectedIndex]?.name}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            {testimonials[selectedIndex]?.title}
          </Typography>
          <Typography
            component="pre"
            sx={{
              whiteSpace: "pre-wrap",
              fontFamily: "inherit",
              fontSize: "1.2rem",
              lineHeight: 1.5,
              mt: 2,
              color: "gray",
            }}
          >
            {testimonials[selectedIndex]?.quote}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}


// import React, { useRef, useState, useEffect } from "react";
// import { Box, Typography, IconButton } from "@mui/material";
// import { ArrowForward } from "@mui/icons-material";

// const testimonials = [
//   {
//     name: "📸 Professional Wedding Photography",
//     title: "Pinterest",
//     image: "https://www.atlhea.in/wp-content/uploads/2020/11/ATLHEA-87.jpg",
//     quote: `Capture your most cherished moments with elegance, emotion, and timeless beauty.
// As a professional wedding photographer, I specialize in documenting love stories with a blend of candid moments, cinematic frames, and fine-art composition. Whether it’s an intimate ceremony or a grand celebration, I ensure every smile, tear, and tradition is preserved beautifully.
// Services Offered:
//     • Pre-wedding shoots
//     • Traditional & candid photography
//     • Cinematic wedding videography
//     • Drone coverage
//     • Couple portraits & family sessions
//     • High-resolution photo albums
//     • Same-day edits & social media highlights

// Why Choose Me?
//     • Over X years of experience in wedding photography
//     • Passionate storytelling through visuals
//     • High-quality equipment & post-processing
//     • Customized packages to suit your budget
// Let’s create magic together on your special day — because every love story deserves to be remembered forever.`
//   },
//   {
//     name: "🎉 Birthday Function ",
//     title: "Birthday Photo Shoots",
//     image:
//       "https://m.media-amazon.com/images/S/aplus-media-library-service-media/5ac649da-8bf1-4303-98fd-384b08daebcf.__CR0,0,2910,1800_PT0_SX970_V1___.jpg",
//     quote:
//     ` Celebrate Life’s Special Moments with Timeless Photos
// Whether it’s a child’s first birthday, a milestone 50th celebration, or a surprise party with loved ones, birthdays are full of laughter, love, and unforgettable memories. Our birthday photography services are designed to capture the essence of your celebration — from joyful candid moments to beautifully posed portraits.

// 📸 What’s Included in the Package:
// Candid photography throughout the event
// Family & guest portraits
// Creative shots of birthday decor, cake, and venue
// Cake cutting ceremony highlights
// Group photos with friends & relatives
// Pre-event or outdoor birthday portraits (optional)
// High-resolution edited photos
// Short video highlights (on request)

// 🌟 Why Choose Us:
// Experienced in kids’, teens’, and adult birthday events
// Friendly approach to make guests feel comfortable
// Fast delivery of digital photos and albums
// Customizable packages based on your event size and budget
// Let us turn your celebration into a visual story — because every birthday deserves to be remembered forever.`,
//   },
//   {
//     name: "🤰 Maternity Function",
//     title: "Maternity Function Photo Shoot",
//     image:
//       "https://images.squarespace-cdn.com/content/v1/5727974359827e5304ee8ddf/e60d2e7c-828d-4fea-8614-0136d3f23384/Maternity+portrait+photography.jpg",
//     quote:
// `      Celebrate the Beauty of Motherhood with Elegant Photography
// Maternity is a magical journey — filled with love, anticipation, and unforgettable emotions. Our maternity photo shoots are designed to beautifully capture this special chapter of your life, whether it’s during a traditional baby shower function (Seemantham / Valaikappu) or a serene outdoor maternity session.

// 📸 What We Offer:
// Traditional maternity function coverage (baby shower rituals, blessings, etc.)
// Posed portraits of the mother-to-be
// Couple and family portraits
// Creative maternity poses with props, name boards & baby items
// Decor, rituals, and candid moments capture
// Outdoor maternity shoot (optional)
// High-resolution edited photos
// Short cinematic video highlight (on request)

// 🌟 Why Expecting Mothers Choose Us:
// Gentle, mother-friendly approach
// Experience with traditional & modern maternity styles
// Comfort-focused sessions with flexible timings
// Personalized themes and props available
// Fast delivery of photos and albums
// Your journey into motherhood is precious — let us frame those glowing moments for a lifetime.`,
//   },
//   {
//     name: "🌸 Puberty ",
//     title: "Puberty Function Photo Shoot",
//     image:
//       "https://mir-s3-cdn-cf.behance.net/project_modules/fs/6f6921146584131.62b2f9f5425d4.jpg",
//     quote:
// `      Honoring Tradition, Capturing Grace
// A girl’s puberty ceremony (also known as Ritusuddhi, Manjal Neerattu Vizha, or Coming of Age ceremony) is a deeply meaningful and traditional milestone in many Indian cultures. Our photography service is dedicated to preserving every graceful, emotional, and vibrant moment of this beautiful transformation.

// 📸 What’s Included in the Shoot:
// Full coverage of rituals and ceremonial customs
// Portraits of the young girl in traditional attire
// Family & guest group photos
// Candid moments, emotions, and interactions
// Decor, stage, gifts, and return gifts photography
// Cultural performances or events (if any)
// High-resolution edited images
// Short video highlight or traditional montage (optional)

// 🌟 Why Families Choose Us:
// Respectful handling of culturally sensitive moments
// Experience with various regional traditions (Tamil, Telugu, etc.)
// Female photographers available on request
// Soft and elegant editing style
// Quick delivery of albums and digital files

// Celebrate this rite of passage with dignity and elegance — we’ll ensure every smile, tradition, and blessing is beautifully captured for generations to cherish.`,
//   },
//   {
//     name: "🏡 Housewarming Ceremony",
//     title: "Housewarming Ceremony Photo Shoot",
//     image:
//       "https://th.bing.com/th/id/R.45d774c244014b6024ea384514173821?rik=X2z6yZ7UE0tQDg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-mTKL3_l1mDA%2fUJEpjsu-coI%2fAAAAAAAABqE%2foMLwSGtmPHo%2fs1600%2f038.JPG&ehk=WSDZdRymxI5C4lN8NrIAVFUHzpGatTDGiYojdz%2bBeP8%3d&risl=&pid=ImgRaw&r=0",
//     quote:
// `      Welcoming New Beginnings with Beautiful Memories
// A housewarming ceremony (Griha Pravesh or Pugundha Veedu Vizha) is not just about entering a new home — it's a sacred moment filled with blessings, rituals, family bonds, and dreams coming true. Our photography captures the spiritual essence and emotional warmth of your new beginning with grace and detail.

// 📸 What’s Included in the Shoot:
// Coverage of religious rituals and pujas (Ganapathi Homam, Vaastu Puja, etc.)
// Decor, rangoli, flower arrangements, and entrance shots
// Key moments like coconut breaking, lamp lighting, and first steps inside
// Portraits of homeowners with family and guests
// Candid moments of love, laughter, and celebration
// Group photos with priests, friends, and relatives
// High-resolution edited images
// Optional short highlight video or cinematic teaser

// 🌟 Why Choose Us for Your Special Day:
// Respectful documentation of traditional customs
// Experience in both modern and traditional housewarming events
// Female/male photographer options
// Fast delivery of albums & digital copies
// Custom packages for intimate or large-scale events
// Step into your new home with timeless photographs that reflect the joy, devotion, and beauty of your new journey.`,
//   },
// ];

// export default function InfiniteImageSlider() {
//   const scrollRef = useRef(null);
//   const [selectedIndex, setSelectedIndex] = useState(1);

//   const cardSpacing = 16;
//   const normalWidth = 150;
//   const selectedWidth = 600;

//   const scrollToImage = (index) => {
//     const box = scrollRef.current;
//     if (!box) return;

//     const marginRight = cardSpacing;
//     const totalItems = testimonials.length;

//     let leftOffset = 0;
//     for (let i = 0; i < index; i++) {
//       leftOffset += (i === selectedIndex ? selectedWidth : normalWidth) + marginRight;
//     }

//     const scrollTo =
//       leftOffset +
//       (index === selectedIndex ? selectedWidth : normalWidth) +
//       marginRight -
//       box.clientWidth;

//     const maxScroll =
//       totalItems * (normalWidth + marginRight) +
//       (selectedWidth - normalWidth) -
//       box.clientWidth;

//     box.scrollTo({
//       left: Math.min(scrollTo, maxScroll),
//       behavior: "smooth",
//     });

//     setSelectedIndex(index);
//   };

//   const handleNext = () => {
//     const nextIndex = (selectedIndex + 1) % testimonials.length;
//     scrollToImage(nextIndex);
//   };

//   useEffect(() => {
//     scrollToImage(selectedIndex);
//   }, []); // Run once on mount

//   return (
//     <Box sx={{textAlign:'center',}}>

//     <Typography variant="h4" sx={{  fontWeight: 700,mt:5}}>
//         Our Servies
//       </Typography>
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: 'row',
//         padding:4,
//         // paddingLeft:10,
//         height: "100vh",
//         boxSizing: "border-box",

//       }}
//     >
//       {/* Scrollable Image Strip */}
//       <Box
//         ref={scrollRef}
//         sx={{
//           flex: 2,
//           overflowX: "auto",
//           display: "flex",
//           alignItems: "flex-end",
//           height: "100%",
//           whiteSpace: "nowrap",
//           scrollBehavior: "smooth",
//           paddingBottom: 2,
//           "&::-webkit-scrollbar": { display: "none" },
//         }}
//       >
//         {testimonials.map((t, index) => {
//           const isSelected = index === selectedIndex;
//           return (
//             <Box
//               key={index}
//               onClick={() => scrollToImage(index)}
//               sx={{
//                 flex: "0 0 auto",
//                 width: isSelected ? selectedWidth : normalWidth,
//                 height: isSelected ? 800 : 200,
//                 marginRight: `${cardSpacing}px`,
//                 borderRadius: 2,
//                 boxShadow: isSelected ? 6 : 2,
//                 cursor: "pointer",
//                 transition: "all 0.5s ease",
//                 overflow: "hidden",
//                 position: "relative",
//               }}
//             >
//               <Box
//                 component="img"
//                 src={t.image}
//                 alt={t.name}
//                 sx={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   transition: "all 0.5s ease",
//                 }}
//               />
//             </Box>
//           );
//         })}
//       </Box>

//       {/* Info Panel */}
// {/* <Box sx={{ mt: 4, display:'flex',justifyContent:'flex-end',alignItems:'flex-end'}}>
//           <IconButton
//             onClick={handleNext}
//             sx={{
//               backgroundColor: "#FFD700",
//               "&:hover": { backgroundColor: "#FFCD00" },
//             }}
//           >
//             <ArrowForward />
//           </IconButton>
//         </Box> */}
//       <Box
//         sx={{
//           flex: 1,
//           pl: 4,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//         }}
//       >
//         <Typography variant="h6" fontWeight="bold" gutterBottom>
//           {testimonials[selectedIndex]?.name}
//         </Typography>
//         <Typography variant="subtitle2" color="text.secondary" gutterBottom>
//           {testimonials[selectedIndex]?.title}
//         </Typography>
//         <Typography  component="pre"sx={{whiteSpace: "pre-wrap",fontFamily: "inherit",fontSize: "1.2rem",lineHeight: 1.5,mt: 2, color:'gray'}}>
//             {testimonials[selectedIndex]?.quote}
//         </Typography>

//       </Box>
//     </Box>
//     </Box>
//   );
// }



// import React, { useRef, useState, useEffect, useCallback } from "react";
// import { Box, Typography, IconButton } from "@mui/material";
// import { ArrowForward } from "@mui/icons-material";

// const baseTestimonials = [
//   {
//     id: 1,
//     name: "Ashley Right",
//     title: "Pinterest",
//     image:
//       "https://tse4.mm.bing.net/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
//     quote:
//       "Professionals in their craft! All products were super amazing with strong attention to details, comps and overall vibe",
//   },
//   {
//     id: 2,
//     name: "Daniel Lark",
//     title: "Adobe",
//     image:
//       "https://live.staticflickr.com/65535/52426312575_6fb54515f6_b.jpg",
//     quote:
//       "They nailed the visuals! Clean, modern, and exactly what we needed. Collaboration was seamless too.",
//   },
//   {
//     id: 3,
//     name: "Yuki Tanaka",
//     title: "Shopify",
//     image:
//       "https://images.unsplash.com/photo-1528045252873-2bf37023d58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MzE3NDEwMjJ8fGVufDB8fHx8&w=1000&q=80",
//     quote:
//       "So easy to work with. They totally understood our brand. The final result? Just wow.",
//   },
//   {
//     id: 4,
//     name: "Leo Grant",
//     title: "Airbnb",
//     image:
//       "https://tse4.mm.bing.net/th/id/OIP.bwSUZ52C8RukwXnCIxfGrQHaLH?r=0&w=1425&h=2138&rs=1&pid=ImgDetMain&o=7&rm=3",
//     quote:
//       "The design team brought our concept to life perfectly. From typography to layout, all on point.",
//   },
//   {
//     id: 5,
//     name: "Isaac K.",
//     title: "Google",
//     image:
//       "https://tse3.mm.bing.net/th/id/OIP.j8yd8dJ5215WbgQ0NsLzuAHaNK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
//     quote:
//       "This team delivered fast, communicated clearly, and exceeded our expectations. Highly recommend!",
//   },
// ];

// // Create 5 copies for smooth infinite scroll
// const loopedTestimonials = [
//   ...baseTestimonials,
//   ...baseTestimonials,
//   ...baseTestimonials,
//   ...baseTestimonials,
//   ...baseTestimonials
// ];

// export default function InfiniteImageSlider() {
//   const scrollRef = useRef(null);
//   const [index, setIndex] = useState(baseTestimonials.length * 2); // Start at middle copy
//   const [isScrolling, setIsScrolling] = useState(false);
//   const scrollTimeoutRef = useRef(null);

//   const normalWidth = 150;
//   const selectedWidth = 300;
//   const cardSpacing = 16;

//   // Get the actual testimonial data (loop back to original)
//   const getCurrentTestimonial = (idx) => {
//     return baseTestimonials[idx % baseTestimonials.length];
//   };

//   // Smooth scroll to selected card with better centering
//   const scrollToSelected = useCallback((idx, immediate = false) => {
//     const container = scrollRef.current;
//     if (!container) return;

//     // Calculate position
//     let scrollLeft = 0;
//     for (let i = 0; i < idx; i++) {
//       const isCurrentSelected = i === idx;
//       scrollLeft += (isCurrentSelected ? selectedWidth : normalWidth) + cardSpacing;
//     }
    
//     // Center the selected image in viewport
//     const containerCenter = container.clientWidth / 2;
//     const selectedImageCenter = selectedWidth / 2;
//     scrollLeft = scrollLeft - containerCenter + selectedImageCenter;

//     container.scrollTo({
//       left: scrollLeft,
//       behavior: immediate ? "auto" : "smooth",
//     });
//   }, [selectedWidth, normalWidth, cardSpacing]);

//   // Handle image click with smooth transition
//   const handleImageClick = (idx) => {
//     if (isScrolling) return;
    
//     setIsScrolling(true);
//     setIndex(idx);
    
//     // Smooth scroll to the clicked image
//     setTimeout(() => {
//       scrollToSelected(idx);
//       setTimeout(() => setIsScrolling(false), 600);
//     }, 50);
//   };

//   // Handle next button
//   const handleNext = () => {
//     if (isScrolling) return;
    
//     const nextIndex = index + 1;
//     handleImageClick(nextIndex);
//   };

//   // Infinite scroll correction with smooth transitions
//   const handleScroll = useCallback(() => {
//     if (isScrolling) return;
    
//     const container = scrollRef.current;
//     if (!container) return;

//     // Clear previous timeout
//     if (scrollTimeoutRef.current) {
//       clearTimeout(scrollTimeoutRef.current);
//     }

//     // Set timeout to check position after scroll stops
//     scrollTimeoutRef.current = setTimeout(() => {
//       const scrollLeft = container.scrollLeft;
//       const itemWidth = normalWidth + cardSpacing;
//       const singleSetWidth = itemWidth * baseTestimonials.length;
      
//       // If we're too far left (in first set)
//       if (scrollLeft < singleSetWidth) {
//         const newIndex = index + baseTestimonials.length;
//         setIndex(newIndex);
//         container.scrollLeft = scrollLeft + singleSetWidth;
//       }
//       // If we're too far right (in last set)
//       else if (scrollLeft > singleSetWidth * 3) {
//         const newIndex = index - baseTestimonials.length;
//         setIndex(newIndex);
//         container.scrollLeft = scrollLeft - singleSetWidth;
//       }
//     }, 150);
//   }, [index, normalWidth, cardSpacing, isScrolling]);

//   // Initial positioning
// useEffect(() => {
//   let animationFrameId;
//   let lastTimestamp = null;

//   const scrollContainer = scrollRef.current;
//   if (!scrollContainer) return;

//   const speed = 0.3; // pixels per frame (~18px/sec)

//   const step = (timestamp) => {
//     if (!lastTimestamp) lastTimestamp = timestamp;
//     const delta = timestamp - lastTimestamp;
//     lastTimestamp = timestamp;

//     scrollContainer.scrollLeft += speed * (delta / 16.67); // normalize to 60fps

//     // Loop back to middle when near the end
//     const singleSetWidth = (normalWidth + cardSpacing) * baseTestimonials.length;
//     if (scrollContainer.scrollLeft >= singleSetWidth * 4) {
//       scrollContainer.scrollLeft -= singleSetWidth * 2;
//     }

//     animationFrameId = requestAnimationFrame(step);
//   };

//   animationFrameId = requestAnimationFrame(step);

//   return () => cancelAnimationFrame(animationFrameId);
// }, []);


//   return (
//     <Box sx={{ 
//       display: "flex", 
//       flexDirection: "row", 
//       height: "100vh", 
//       padding: 4,
//       overflow: "hidden" 
//     }}>
//       <Box
//         ref={scrollRef}
//         onScroll={handleScroll}
//         sx={{
//           flex: "0 0 auto",
//           width: (normalWidth + cardSpacing) * 5 + "px",
//           overflowX: "auto",
//           overflowY: "hidden",
//           display: "flex",
//           whiteSpace: "nowrap",
//           alignItems: "flex-end",
//           paddingBottom: 2,
//           "&::-webkit-scrollbar": {
//             height: 8,
//           },
//           "&::-webkit-scrollbar-thumb": {
//             backgroundColor: "#FFD700",
//             borderRadius: 4,
//             "&:hover": {
//               backgroundColor: "#FFCD00",
//             }
//           },
//           "&::-webkit-scrollbar-track": {
//             backgroundColor: "#f0f0f0",
//             borderRadius: 4,
//           },
//         }}
//       >
//         {loopedTestimonials.map((t, i) => {
//           const isSelected = i === index;
//           const isLast = i === loopedTestimonials.length - 1;
          
//           return (
//             <Box
//               key={`${t.id}-${Math.floor(i / baseTestimonials.length)}-${i % baseTestimonials.length}`}
//               onClick={() => handleImageClick(i)}
//               sx={{
//                 flex: "0 0 auto",
//                 width: isSelected ? selectedWidth : normalWidth,
//                 height: isSelected ? 700 : 200,
//                 marginRight: isLast ? 0 : `${cardSpacing}px`,
//                 borderRadius: 2,
//                 boxShadow: isSelected ? 8 : 2,
//                 cursor: isScrolling ? "default" : "pointer",
//                 transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
//                 overflow: "hidden",
//                 border: isSelected ? "3px solid #FFD700" : "3px solid transparent",
//                 transform: isSelected ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
//                 opacity: isScrolling && !isSelected ? 0.7 : 1,
//                 "&:hover": !isScrolling ? {
//                   transform: isSelected 
//                     ? "translateY(-10px) scale(1.05)" 
//                     : "translateY(-5px) scale(1.08)",
//                   boxShadow: isSelected ? 10 : 4,
//                 } : {},
//               }}
//             >
//               <Box
//                 component="img"
//                 src={t.image}
//                 alt={t.name}
//                 sx={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   transition: "all 0.6s ease",
//                   filter: isSelected ? "brightness(1.1) contrast(1.05)" : "brightness(1)",
//                 }}
//               />
              
//               {/* Selected indicator */}
//               {isSelected && (
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     top: 10,
//                     right: 10,
//                     backgroundColor: "#FFD700",
//                     color: "white",
//                     borderRadius: "50%",
//                     width: 32,
//                     height: 32,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     fontSize: "14px",
//                     fontWeight: "bold",
//                     boxShadow: 3,
//                     animation: "pulse 2s infinite",
//                     "@keyframes pulse": {
//                       "0%": { transform: "scale(1)" },
//                       "50%": { transform: "scale(1.1)" },
//                       "100%": { transform: "scale(1)" },
//                     }
//                   }}
//                 >
//                   ★
//                 </Box>
//               )}
//             </Box>
//           );
//         })}
//       </Box>

//       {/* Info Panel */}
//       <Box
//         sx={{
//           flex: 1,
//           pl: 4,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//         }}
//       >
//         <Box
//           key={`info-${index % baseTestimonials.length}`}
//           sx={{
//             animation: "slideInFromRight 0.7s ease-out",
//             "@keyframes slideInFromRight": {
//               "0%": {
//                 opacity: 0,
//                 transform: "translateX(40px)",
//               },
//               "100%": {
//                 opacity: 1,
//                 transform: "translateX(0)",
//               },
//             },
//           }}
//         >
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             {getCurrentTestimonial(index)?.name}
//           </Typography>
//           <Typography variant="subtitle2" color="text.secondary" gutterBottom>
//             {getCurrentTestimonial(index)?.title}
//           </Typography>
//           <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
//             "{getCurrentTestimonial(index)?.quote}"
//           </Typography>
//         </Box>

//         <Box sx={{ mt: 4 }}>
//           <IconButton
//             onClick={handleNext}
//             disabled={isScrolling}
//             sx={{
//               backgroundColor: isScrolling ? "#ddd" : "#FFD700",
//               transition: "all 0.3s ease-in-out",
//               "&:hover": { 
//                 backgroundColor: isScrolling ? "#ddd" : "#FFCD00",
//                 transform: isScrolling ? "scale(1)" : "scale(1.1)",
//               },
//               "&.Mui-disabled": {
//                 backgroundColor: "#ddd",
//                 color: "#999"
//               }
//             }}
//           >
//             <ArrowForward 
//               sx={{
//                 transition: "transform 0.3s ease-in-out",
//                 transform: isScrolling ? "rotate(180deg)" : "rotate(0deg)",
//               }}
//             />
//           </IconButton>
          
//           {/* <Typography 
//             variant="caption" 
//             display="block" 
//             sx={{ 
//               mt: 2, 
//               color: "text.secondary",
//               fontWeight: isScrolling ? "bold" : "normal",
//             }}
//           >
//             {isScrolling 
//               ? "Transitioning..." 
//               : `${(index % baseTestimonials.length) + 1} of ${baseTestimonials.length}`
//             }
//           </Typography> */}
//         </Box>
//       </Box>
//     </Box>
//   );
// }