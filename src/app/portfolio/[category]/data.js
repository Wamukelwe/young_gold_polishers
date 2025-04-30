import PickItUp from 'public/PikitUp.jpg'
import GlobalCitizen from 'public/Global.jpg'
import KumoCare1 from 'public/Kumo2.jpg'
import Train from 'public/Training1.jpg'
import Train3 from 'public/Training3.jpg'
import CleanItUp from 'public/Clean.jpeg' 
import CleanItUp2 from 'public/CleanUp.jpeg'
import FeedingScheme from 'public/Feeding.jpg'
import Mentorship from 'public/Mentor.jpeg'

export const items = {
  illustrations: [
    {
      id: 1,
      title: "Feeding Scheme",
      desc: "Provided over 10 meals to underprivileged children",
      image: FeedingScheme,
    },
    {
      id: 2,
      title: "Clean up campaigns",
      desc: "Conducting cleanup campaigns, reaching 50 young individuals.",
      image: CleanItUp2,
    },
    {
      id: 3,
      title: "Agricultural training",
      desc: "Training 43 young people on planting avocados",
      image: Train,
    },
  ],
  Projects: [
    {
      id: 1,
      title: "PIKITUP",
      desc: "We have partnered with PIKITUP in the Ha Re Sebetseng campaign which includes cleaning parks and Libraries in Johannesburg",
      image: PickItUp,
    },
    {
      id: 2,
      title: "Global Citizen",
      desc: "We have worked with Global Citizen during the time they were hosting their event in South Africa, and we participated in cleaning up",
      image: GlobalCitizen,
    },
    {
      id: 3,
      title: "Ketumile child care",
      desc: "We adopted the school and took children under our wing, educating them on how to grow their own food",
      image: KumoCare1,
    },
  ],
  Programmes: [
    {
      id: 1,
      title: "Mentorship",
      desc: "We mentor the youth in their journey of entrepreneurship",
      image: Mentorship,
    },
    {
      id: 2,
      title: "Agriculture training",
      desc: "We educate the youth on how to plant trees, fruits, and veggies within their communities",
      image: Train3,
    },
    {
      id: 3,
      title: "Clean up initiative",
      desc: "We get our youth involved with environmental issues and clean up communities",
      image: CleanItUp,
    }
  ],
};
