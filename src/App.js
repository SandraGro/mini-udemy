import React from "react";
import Layout from "./Components/Layout/Layout";
import BenefitsContainer from "./Components/BenefitsContainer/BenefitsContainer";
import CourseDetail from "./Components/CourseDetail/CourseDetail";
import FeaturedCourses from "./Components/FeaturedCourses/FeaturedCourses";
import Banner from "./Components/Banner/Banner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const featuredCourses = [
    {
      title: "The Complete Foundation Stock Trading Course",
      author: "Mohsen Hassan, bloom team",
      rating: "4.5",
      originalPrice: "$499",
      discountedPrice: "$199",
      thumbnail:
        "https://img-a.udemycdn.com/course/240x135/1288044_d262_4.jpg?ef_bGb-l7fymYgM8RbuBZoZyX3X5vrxq-J65lDugvCyBEjaZ9vn9RYzF1CsNGQlqB9dmg9m99a52hI54pSPRY-BcxZ4pXpmNN7UCk09Ho8qhVuWGujXM8wZ8D7_bB148",
      reviews: "280",
      bestseller: true,
      category: "Business",
      slug: "the-complete-foundation-stock-trading-course",
      description:
        "Learn how to ipsum aaaaaah jiji tank yuuu! Wiiiii la bodaaa bappleees la bodaaa bappleees butt. Daa tulaliloo po kass la bodaaa underweaaar hahaha jeje butt. Poopayee uuuhhh la bodaaa para tú hana dul sae tulaliloo poopayee jeje hahaha underweaaar.",
    },
    {
      title: "Microsoft Power BI - Up & Running With Power BI Desktop",
      author: "Maven Analytics, Chris Dutton, Aaron Parry",
      rating: "4.6",
      originalPrice: "$1799",
      discountedPrice: "$199",
      thumbnail:
        "https://img-a.udemycdn.com/course/240x135/1570206_26c6_4.jpg?g8DduwjeA8HsswHzYgiXUtz6we5mlR8fZwZTOOiLRV_SDp6WrWeP60dbsn39RYZ8LeZ_AGw_83G_ZtD1liDXFONlo5HZ3vOenyCHGExd7xOtWGEATQntUVJUFracgzUv 1x, https://img-a.udemycdn.com/course/480x270/1570206_26c6_4.jpg?e7VxEUn4ma5roTuwqcqoY3XuIWsbRFpScdS_hPD3KC1ft8agSQfASBWyPYv7bMGSQr83gnj_jiDyFYHycJV9f4YI6KNR32aGsiV4obmIVNqKtdFoMozRquPIwoZ3SEf9 2x",
      reviews: "280",
      bestseller: true,
      category: "Business",
      slug: "microsoft-power-bi-up-running-with-power-bi-desktop",
      description:
        "Learn how to ipsum aaaaaah jiji tank yuuu! Wiiiii la bodaaa bappleees la bodaaa bappleees butt. Daa tulaliloo po kass la bodaaa underweaaar hahaha jeje butt. Poopayee uuuhhh la bodaaa para tú hana dul sae tulaliloo poopayee jeje hahaha underweaaar.",
    },
    {
      title: "User Experience Design Essentials - Adobe XD UI UX Design",
      author: "Scott Harris",
      rating: "4.6",
      originalPrice: "$1799",
      discountedPrice: "$199",
      thumbnail:
        "https://img-a.udemycdn.com/course/240x135/1409030_6722_4.jpg?dy8Ub2XAAAr8HcWzmA9S_dbvC9uyBKMhqaiRpLDYBDAxdw9C17vySFBnffgt8iQRoHmrc0fHmza0r56EJAwjp9t2Gdif1ys73GumgPljd9aZImT2OY8Uyj3OJ1ZwKzqr 1x, https://img-a.udemycdn.com/course/480x270/1409030_6722_4.jpg?Roh5RFEjuNcFa8rTGXtW7Roo5iSeydrPa7-SIrB4Q8uacnXKe78LaTKwWAbkIOmUWMQhDBiHSNFV8Z-6RfDOL-qxRbtcK7KRDydReHlErLrOC66VB5Ihh5IsV7iFSvuz 2x",
      reviews: "280",
      bestseller: true,
      category: "Design",
      slug: "user-experience-design-essentials-adobe-xd--ui-ux-design",
      description:
        "Learn how to ipsum aaaaaah jiji tank yuuu! Wiiiii la bodaaa bappleees la bodaaa bappleees butt. Daa tulaliloo po kass la bodaaa underweaaar hahaha jeje butt. Poopayee uuuhhh la bodaaa para tú hana dul sae tulaliloo poopayee jeje hahaha underweaaar.",
    },
    {
      title: "Photography Beginners: DSLR Photography Camera Settings",
      author: "Rosie Parsons",
      rating: "4.3",
      originalPrice: "$1899",
      discountedPrice: "$199",
      thumbnail:
        "https://img-a.udemycdn.com/course/240x135/410068_fea4_2.jpg?wDi_M1EPjqGCGSsbayaIh6zdHgLJ3xAM3k141WGTLZobHVnimb2-w1v-JMz0nLS3moRC9ELSwwGgwaUTM7BAXGIMHjKndo5VQRaHWz3m5ik7Zrq3LWd8b4bB8U1YfU0 1x, https://img-a.udemycdn.com/course/480x270/410068_fea4_2.jpg?haWxl114j3nK9Diz0-CyfCeMXHik7Jfkvz6o5eK7x0AY2IFa6gdZE-YrdFuDRkfQOQI_cHj1DtyDFqG9ZP52poPnQheK1ihP4NxfekiXWUq9rvftJa54_2v-IeuxKAo 2x",
      reviews: "280",
      bestseller: true,
      category: "Photography",
      slug: "photography-beginners-photography-camera-settings",
      description:
        "Learn how to ipsum aaaaaah jiji tank yuuu! Wiiiii la bodaaa bappleees la bodaaa bappleees butt. Daa tulaliloo po kass la bodaaa underweaaar hahaha jeje butt. Poopayee uuuhhh la bodaaa para tú hana dul sae tulaliloo poopayee jeje hahaha underweaaar.",
    },
  ];
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/course/:courseSlug">
            <CourseDetail featuredCourses={featuredCourses} />
          </Route>
          <Route path="/">
            <Banner />
            <BenefitsContainer />
            <hr></hr>
            <FeaturedCourses featuredCourses={featuredCourses}/>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
