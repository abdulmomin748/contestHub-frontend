import Plants from '../../components/Home/Plants'
import Banner from './Banner'
import Faq from './Faq'
import HowItWorks from './HowItWorks'
import PopularContest from './PopularContest'
import PricingPlans from './PricingPlans'
import WhyChooseUs from './WhyChooseUs'
import WinnerAdvertiseMent from './WinnerAdvertiseMent'

const Home = () => {
  return (
    <div>
      {/* <Plants /> */}
      {/* More components */}
      <Banner />
      <PopularContest />
      <WinnerAdvertiseMent />
      <HowItWorks />
      <WhyChooseUs />
      <PricingPlans />
      <Faq />
    </div>
  )
}

export default Home
