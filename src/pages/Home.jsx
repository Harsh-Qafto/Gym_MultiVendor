/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

const Home = () => {
  const categories = [
    { name: 'HIIT', img: 'https://s3-alpha-sig.figma.com/img/294c/7bd4/961c9ea12a7087b1b591cf4fd6b36b0d?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dPeQnu8WXoCyjoavt5L322fRDwJeRXTJgON132jaV4gSJEOMxdlTysiVWuubyVkXAiWzBTrhn2AHU1YHKTMME8g5yBPsJxDnHA1FVKoKTpzeKqi5cEFy~u6xZNNlMJYX4ySIHEyXnJH-WEKIqPcIP3EnJglurEeTShTkKG47Di3le-uZ9DejPFExgZiQA3KLTRi7lsZtnaTwy6zpKhZeV8uHFeGthJdplEibZE5ISDq8xKNQcds773jTXXnhJNC8-BczHN8P2-AL0rBatDrA-FX6VKNpzyVGbR-aouil38ifwyRuxCUoFnJq3yYMN-Lm7qx7Eiu3i9hjdFNt3DX5fw__' },
    { name: 'Strength', img: 'https://s3-alpha-sig.figma.com/img/bf70/fa7b/c5abb07ecbe7751108d6ae4784a39219?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pGvlJxpToYd9ps2McufF3IuWULGDro11eixrk~A4KKsUTotNAP9Qi8q5XQtm3meHGBUzPAC7C~gImch8XKRF14K6croia0SUmDdVLQu6KWQpMX7Uu93ubvWPlnEz4DtMuz2qD~Etb1chAqoS4ROz89IH5vJ-z0rKAoAT6NdI8kNx3VjFSQyT7zHx3j8KkvLCh-8CJC16Js~qbvNmMciLdXAyGWCRnvDuEblKL6dVdwfK03QFfDq4CU0BNPmFqmJrO3awd7nu1-oBfzZfd1juXNEtjtBQuuPAWx0pWgBOkAkmlN-nwEmHbYgSNNgL1UguBzAC0p5UJtPTN32Id53v0g__' },
    { name: 'Yoga', img: 'https://s3-alpha-sig.figma.com/img/efa1/6bb2/2a900e8f4ee0e3dc39c09c57ac59896b?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UyvjRIG4rQx5iF6ROQJts8tvsBLT1YbR~xy0iGPuBP2H3g5tgUqKdLgQmTlqxsh61yfZ1pO~jp~0efm9SJM7e03C15doq5DpJOtk2YtK9FakxTX9EHMBR936PcyrQmb944ctbA-0lsfh42oWupfKyeH2F83EbTTip~JVOku3h3aWGXB2cuG08xs7lv7GLI-BYX5cLD1fcdSqKzsR6QEeCNgMX-Z5pnGbZalpc9VzFirDLwMpfzKt0rq8JiXrXygZpppPt4iokXXRaWnpjI~tm-RkwDFkPK5W768nvn0nliPnhC2bqhWxVdeLhNHERFqwM9-Td6sAV~pgEbIypIwRJw__' },
    { name: 'Dance', img: 'https://s3-alpha-sig.figma.com/img/f161/10ef/5196b160c2baf4db79981087006c178f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FrC1f0CiDSvaQMtwT16KnvYZugZbGwe6drUE1ok3GepWrnPHs8c0nUq2SuXomRYWy6mmwjMIY7x7gl~SvQzKRHDERCtC0p87kRi7AYPV2iztR5oYEDu-W-K0WYwlhYbHBlaHV9-q9vYEeYYssoSaP4VtAk8UevnawI1LXSXRUMW1b6oJOYFnj4Cf~u5JMDchdhKkQUgwLVTd8ZvoGnHFZes9TCXStE1GCNKm2zx3UZoc3wZmxBKHjn285xbLpPyRTStNtzCMIN3UOeBmHckcpvb4K9Gk1rGy183XeOwYBQPL9AWEyDPbvOuylYKtChfoLVuL-HbUssllLmqN8edOaw__' },
  ];

  const promotions = [
    { title: 'CrossFit', discount: '15%', description: 'CrossFit is a universal way of saving your health and making your body strong.', bg: 'https://s3-alpha-sig.figma.com/img/659a/ec16/ae0f315d9f8f01447ec72291d89076e1?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BD-tn540ggcNAKwWE8--x0aqPi1n3ZswvtD7e~uTqTb4PlhzUPzGEs5BJdqU8hxEIorDnVOdnD59fuL4c-Mru2XN6mCGDpQ~bqmAPd1SjgVB57feXJxWDaULqV1kmZSKlVLtV4-7qyoeP~qDutr4SIc8fZKiNSJVXCSfQcgny8ry6LlzvkLh0Yx7lkq8kwb5c4a9LBavPJS2unf6rULsu2R7q7Ne97qkBRitwXH9oTKp2QqswQMh-n1F807bf9f6H52dKHaPYb7wmIj~EGWrfWyAh4XIylQNuYALqGhT8CmXurelTZAn00ABuT~9WbMzLSWTdzdZC4lJDEI3r4yRpg__' },
    { title: 'Aerobic', discount: '10%', description: 'Aerobic is the perfect activity for women to stay fit and healthy.', color: 'bg-pink-300', bg: 'https://s3-alpha-sig.figma.com/img/24a3/7134/8e4c18b076fbfb5c4de4ec2b7dca480e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aY9-b~bu4eReSzJZmdgnNMmyMaUBEJFVtMak49o3Hlbe6X3LlgPTl77JGe1JZyDBnHhFPnopkLWNdyZBA4zUv2YNkGPvLWjM1kLbTdBWW5H9RmLV5j7y6iFN3j8AW8P-U69lfBAHq8VqZVnegFTbU6Vxg03uQJsVc8APDlndOgnpsQatywk0Ib9Ha4fAsBWG85vUzlZibC3WFgQ-1pxTqubzIjnIW5St8K4Nfe9py3~pblIA3uMkKVQo15m-DusSFRT1xscUXmgUyNQzgXMyI2uwcAqCmYKCkp70xCuC7f0xtP6nKBapFaoU435BiGQYhZWZHC5xodMEq8ZbWKaRzg__' },
    { title: 'Fitness', discount: '25%', description: 'Fitness is necessary for everybody to train your muscles and endurance.', bg: 'https://s3-alpha-sig.figma.com/img/bbf3/8351/07eada89c7837c3747bcb134495f62e0?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G4BKW5xMZHpdpPcipcKYARS5kOFd7CKzfI8wW0HGYXDkqU1lRV95I5k0klX7vfYKfbjeyreup-FEkCuo-wWvs3OGZFkK3Js5oxv~TbeN-0VQZeK4UNEGp6qTkLqmBP2flSTxOTlaJgHD3nd3DgvQe5pOx98Qdr0zeNyI7U~niGV6PiA1Y3v4cP-y7XHhp9pZ-~cbg9sRcW-k9Q20qpJhKIImrOoAvqtRjW17NGGMjEDjEeJdnBQN~eKBY~CGuXR5glBpkgAY7uc4bv66WBOHAM3rgXKHnT1yT~FjLlauAi559hTJ3Pt6l2vHKgFw~5MsJh7Wi4NnXuzUYx8vdCJfgw__' }
  ];

  const fitnessCenters = [
    { title: "Elevate Wellness Club", location: "Zirakpur", rating: "4.5", img: "https://s3-alpha-sig.figma.com/img/47a3/4907/321c8964cd9c5bb4b8e369e71d75e072?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L-OG09IUImgHuXWuKuIO~DaU7Chx3G1TSx7mr0qAIsxdCXlzGNlnu-~WopExLLzMOacuAaB9Iy86AlWdDqSD9iR~71LeHJNcldq0X5hGGqAT0uz9hiM9gRcw8ZbvXhFi0FKYR4MxyfhwphJIMhPJrRb6-KzC8veCNwwqDmUxF11kv61QeD~2W1vQFn-aAkBqih3j9qSG79Ksc~cW9oQOonIFK8WT1-iiYkYliNsm0p85WwO4UaNu9k69So8milOn0~dR3wXHFnndWw6GdSYuS5He9SryP1w-q7xhwsJfd1xPUd37Y~lHwyVOuxvg099cyorH56FACkhjqyDS6ZV55A__" },
    { title: "Elevate Wellness Club", location: "Chandigarh", rating: "4.5", img: "https://s3-alpha-sig.figma.com/img/47a3/4907/321c8964cd9c5bb4b8e369e71d75e072?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L-OG09IUImgHuXWuKuIO~DaU7Chx3G1TSx7mr0qAIsxdCXlzGNlnu-~WopExLLzMOacuAaB9Iy86AlWdDqSD9iR~71LeHJNcldq0X5hGGqAT0uz9hiM9gRcw8ZbvXhFi0FKYR4MxyfhwphJIMhPJrRb6-KzC8veCNwwqDmUxF11kv61QeD~2W1vQFn-aAkBqih3j9qSG79Ksc~cW9oQOonIFK8WT1-iiYkYliNsm0p85WwO4UaNu9k69So8milOn0~dR3wXHFnndWw6GdSYuS5He9SryP1w-q7xhwsJfd1xPUd37Y~lHwyVOuxvg099cyorH56FACkhjqyDS6ZV55A__" },
    { title: "Elevate Wellness Club", location: "Mohali", rating: "4.5", img: "https://s3-alpha-sig.figma.com/img/47a3/4907/321c8964cd9c5bb4b8e369e71d75e072?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L-OG09IUImgHuXWuKuIO~DaU7Chx3G1TSx7mr0qAIsxdCXlzGNlnu-~WopExLLzMOacuAaB9Iy86AlWdDqSD9iR~71LeHJNcldq0X5hGGqAT0uz9hiM9gRcw8ZbvXhFi0FKYR4MxyfhwphJIMhPJrRb6-KzC8veCNwwqDmUxF11kv61QeD~2W1vQFn-aAkBqih3j9qSG79Ksc~cW9oQOonIFK8WT1-iiYkYliNsm0p85WwO4UaNu9k69So8milOn0~dR3wXHFnndWw6GdSYuS5He9SryP1w-q7xhwsJfd1xPUd37Y~lHwyVOuxvg099cyorH56FACkhjqyDS6ZV55A__" },
  ];

  const recommendedCenters = [
    { title: "Elevate Wellness Club", location: "5 Days Ago", rating: "4.5", img: "https://via.placeholder.com/400" },
    { title: "Elevate Wellness Club", location: "5 Days Ago", rating: "4.5", img: "https://via.placeholder.com/400" },
    { title: "Elevate Wellness Club", location: "5 Days Ago", rating: "4.5", img: "https://via.placeholder.com/400" },
    { title: "Elevate Wellness Club", location: "5 Days Ago", rating: "4.5", img: "https://via.placeholder.com/400" },
    { title: "Elevate Wellness Club", location: "5 Days Ago", rating: "4.5", img: "https://via.placeholder.com/400" },
  ];

  const trainers = [
    { name: "Miranda", spec: "Cardio & Nutrition, Weightlifting", img: "https://s3-alpha-sig.figma.com/img/5649/56a4/25766fbdea982d9374451a9c8fbe7e95?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fq6RobJrQSkSg~3CCT87EBkFxa4EJAhcEjyALybfJ8rE4TAuykwEjZFsinWeKOZGASHGQBSe4DaIl4TRvcuXa87fjFby2ntpGmvBCGh5AyITYLb3ntjyQjsi2hLORDT-sbK50~y1EX0mzlJLitynU9C7XZiCcutzunmJPvkIGrrLaXCXoGjSiMfUajlfLR089BsZDce6SD8XTa2lredDk0ORnPMNS-sD1inXTxZdCM5ipJhSInUgVefp7qsF8PDhxPZgHc5RFrct5tmPxS-nlcTmPm4MQ97WzVvZ324hMPWWNaZoRX78uZB9KzNiyKssv5wW1Uy7sPGhZZJJmZu5pQ__" },
    { name: "Madison Proning", spec: "Strength Building", img: "https://s3-alpha-sig.figma.com/img/f2db/23fc/142db32f7077fec4f59214be6fdbe294?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JIvsuA8A4dlXTvSWSeCiqyBMLUXS0MmNYuKp1bihwV7eTiPUFvV8jnThGwMze2fXIl9vh22pA6vtv6gqJlZLc1hF~tow7h6zTUfFRdhk5zWCjBRIRlKZ0dBbrPaScle9ZRd4JSdA4rl81qsx6OeCWymZO-njjuIZf5RLoleWCIYupSaiiRlyPmdSqcA9D9hav7FLlTQMu~OHLO3~qeQtY5xOr6SKMXvD9R2T9B~RBqutNTar~1Tv54B~dhK1w5jUy4xsFyCt9h71D--H25c8Ut5e-ITuVFNAKrfflij2BHvh0N8uKqR5d6YAEOj40WpqXmZtkJYY3EowS2KDEreC0Q__" },
    { name: "Joshua Franklin", spec: "Conditioning & Fitness", img: "https://s3-alpha-sig.figma.com/img/23d2/98e9/25b62942009890ec991a2365505766ef?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m0OklCXZjiV4ECpkQznNjL86ycznGXArmMO4m-0iuNqFdJyZdQ6l4DS5eovKD0qZ5E~Ig1nw888w4p0tkgT0KPFoVqb~ZEqev04X-MZd-9INtH1pCmV5yslEGT9yN8oVkDrOrKatgBImNE9NZXzWzEktzcVKDFoWzMhT-oCFLbclMwfaxeFhi0P-rWd-L2hhPeuM0OjlPjF68LWf5uGJmxGMR0LzuHzxknxN9RE8z5oVkljEZ8ZGAU46xdU9cFuBqhKUbp~uioIudPBeQPahZK~WHTu5W7hnz3xu7ReRyUT1Z8yKVl8f1gWiuDjClilWiohWm5hk2jkx1SK79sEk6Q__" },
    { name: "Steve Smith", spec: "Weightlifting", img: "https://s3-alpha-sig.figma.com/img/b770/0063/c15de863a1a4a74f191992274fd1e160?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B74FRYwK7V4-u-V0QY6mikgeJ8OrVlG-vY7ePRN1lUWp4IMIKI0rlYfqjvSRJtNs-uy4gd-8wJez8FNfmcqE8SnObdlGDxe2FEcHsAoKPy9qR3h9WY6E6MPz9T6oWhQ0u7ns~hwC8CNNgI69g~kN9OtUigis5BZah3BauIgD2gG9TYDRdPzfxY03FZQEQZzI7mv7TEQV8t7-ryzjiOSbK6QbrtIuhfKSPM0CqgHdwJ9TMmdfM2uvFhW8AiolkkFxu738gElQNzuqRg5TXvvVVslBX3fYURQRp0HK~k3T4Kwx8GpacfUmiClM7HGN3TxopB0XQuFMOPmMGCaGqoYSIQ__" },
  ];

  const testimonials = [
    { text: "This gym has everything I need, from weights to cardio. Couldn't ask for more. Joining this gym was the best decision I made for my health. I feel fantastic! friendly atmosphere and great trainers. I've seen real results! Best gym experience ever. The community here keeps me motivated. Clean facilities, friendly staff, and all the equipment I need .Love this place.", name: "John Doe", rating: 5 },
    { text: "This gym has everything I need, from weights to cardio. Couldn't ask for more. Joining this gym was the best decision I made for my health. I feel fantastic! friendly atmosphere and great trainers. I've seen real results! Best gym experience ever. The community here keeps me motivated. Clean facilities, friendly staff, and all the equipment I need .Love this place.", name: "Jane Doe", rating: 4 },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const responsive3 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className='absolute left-1/2 -translate-x-14 bottom-4 z-10 bg-white text-orange-600 hover:bg-orange-600 hover:text-white flex items-center justify-center rounded-full h-12 w-12 border'
      >
        <span className="mdi mdi-arrow-left text-2xl" />
      </button>
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className='absolute right-1/2 translate-x-14 bottom-4 z-10 bg-white text-orange-600 hover:bg-orange-600 hover:text-white flex items-center justify-center rounded-full h-12 w-12 border'
      >
        <span className="mdi mdi-arrow-right text-2xl" />
      </button>
    );
  };


  return (
    <>

      <Navbar />
      <div className="bg-gray-100">
        {/* Hero Section */}
        <div
          className="relative bg-gray-900 text-white min-h-[90vh] bg-cover bg-center flex items-center"
          style={{ backgroundImage: "url('/images/Hero.jpg')" }}
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-center h-full py-20 z-10">
            <h1 className="text-4xl sm:text-7xl max-w-3xl mx-auto w-full font-extrabold">
              Top Fitness Centers Near Me
            </h1>
            <p className="mt-4 sm:text-xl font-medium max-w-2xl mx-auto">
              The best gym for you depends on your fitness goals and location. Consider visiting gyms to see which one feels like the best fit for you.
            </p>
            <div className="mt-6 max-w-4xl mx-auto w-full flex flex-col sm:flex-row gap-4 text-black">

              <select className="p-3 rounded-md w-full">
                <option>Locations</option>
                <option>Delhi</option>
                <option>Chandigarh</option>
              </select>
              <input
                type="text"
                placeholder="Search Gym"
                className="p-3 rounded-md w-full"
              />
              <select className="p-3 rounded-md w-full">
                <option>Choose Category</option>
                <option>Weight Lifting</option>
                <option>Cardio</option>
              </select>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="max-w-7xl px-4 sm:px-6 mx-auto py-12">
          <div className="">
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              max-w-7xlClass="carousel-max-w-7xl pb-20"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px px-2"
            >
              {categories.map((category, index) => (
                <div key={index} className="p-4 rounded-lg">
                  <img src={category.img} alt={category.name} className="w-full h-64 object-cover rounded-lg" />
                  <h3 className="mt-4 text-xl font-semibold">{category.name}</h3>
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        {/* Promotions Section */}
        <div className="max-w-7xl px-4 sm:px-6 mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promotions.map((promo, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-md bg-[url('${promo.bg}')] bg-center bg-invert bg-cover bg-no-repeat ${index === 1 ? 'md:row-span-2' : 'md:col-span-2'}`}
              >
                <div className='flex justify-between text-start gap-4 min-h-60 h-full'>
                  <div className='max-w-sm my-auto'>
                    <h3 className="text-xl font-bold">{promo.title}</h3>
                    <p className="mt-2 font-medium">{promo.description}</p>
                  </div>
                  <div className='my-auto flex flex-col justify-between h-full'>
                    <p className="mt-4 text-2xl font-bold whitespace-nowrap">{promo.discount} off</p>
                    <button className="mt-4 text-sm font-medium whitespace-nowrap bg-white py-2 px-3 rounded shadow-md">Explore More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fitness Centers Near You */}
        <section className="py-8 sm:px-6 px-4 max-w-7xl mx-auto">
          <div className='flex flex-wrap justify-between items-center gap-4'>
            <h2 className="text-xl sm:text-2xl font-bold">Fitness Centers Near You</h2>
            <button className='py-2 px-3 rounded bg-orange-600 text-white font-medium text-sm w-full sm:w-fit'>Explore More</button>
          </div>
          <div className="w-full mt-10">
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive2}
              arrows={true}
              ssr={true}
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              max-w-7xlClass="carousel-max-w-7xl"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px px-2 pb-20"
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
            >
              {fitnessCenters.map((center, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <div className='relative'>
                    <img src={center.img} alt={center.title} className="w-full h-48 object-cover" />
                    <div className='absolute top-0 left-0 bg-white flex items-center px-2 m-0.5 rounded-tl font-medium'>
                      <span className='mdi mdi-star text-yellow-400 text-2xl' />
                      <span>/</span>
                      <span>{center.rating}</span>
                    </div>
                  </div>
                  <div className="p-4 text-start">
                    <h3 className="text-xl font-semibold">{center.title}</h3>
                    <p className="font-medium mt-2"><span className='mdi mdi-map-marker text-2xl text-orange-600' /><span>Location:</span><span> {center.location}</span></p>
                    <hr className='my-3' />
                    <p className='font-semibold'>Activity Available:</p>
                    <p className='text-sm mt-1 text-gray-600 truncate'>Gym | Group X | Cardio | Weight Training </p>
                    <hr className='my-3' />
                    <div className='w-full flex'>
                      <button className="bg-orange-600 font-medium text-white px-4 py-2 rounded ml-auto">Explore</button>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        {/* Best Trainers for You */}
        <section className="py-8 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className='flex flex-wrap justify-between items-center gap-4'>
            <h2 className="text-xl sm:text-2xl font-bold">Fitness Centers Near You</h2>
            <button className='py-2 px-3 rounded bg-orange-600 text-white font-medium text-sm w-full sm:w-fit'>Explore More</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
            {trainers.map((trainer, index) => (
              <div key={index} className="h-full shadow-md rounded-lg overflow-hidden">
                <img src={trainer.img} alt={trainer.name} className="w-full h-72 object-cover object-top" />
                <div className="p-4 px-6 bg-black text-white py-10">
                  <div className='flex justify-between gap-4'>
                    <h3 className="text-xl font-semibold truncate">{trainer.name}</h3>
                    <div className='whitespace-nowrap'>
                      <span className='mdi mdi-star text-yellow-400' />
                      <span>/</span><span>5</span>
                    </div>
                  </div>
                  <hr className='my-4' />
                  <div className='text-start'>
                    <p className="font-semibold mt-2">Specialization:</p>
                    <p className='text-sm text-gray-300 truncate'>{trainer.spec}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-8 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className='flex flex-wrap justify-between items-center gap-4'>
            <h2 className="text-xl sm:text-2xl font-bold">Fitness Centers Near You</h2>
            <button className='py-2 px-3 rounded bg-orange-600 text-white font-medium text-sm w-full sm:w-fit'>Explore More</button>
          </div>
          <div className="my-10">
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive3}
              ssr={true}
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              max-w-7xlClass="carousel-max-w-7xl pb-20"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px px-2"
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white shadow rounded-lg p-6 border h-full">
                  <span className="mdi mdi-format-quote-close text-6xl text-orange-600"></span>
                  <p className="text-gray-700 font-normal">{testimonial.text}</p>
                  <div className='flex flex-col sm:flex-row gap-2 justify-between items-center mt-5'>
                    <div className='flex items-center'>
                      <img
                        src='https://s3-alpha-sig.figma.com/img/9e9c/fe7c/70b67e3f9be8eccd8bedc335dbfc75bd?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V1V2VpQDlQsN20BzGwGHU9gyIjwK4M9AQVP0O2zenkJ7NVbyqrpv0ahP68-ebqVxkQa~C3TmHB6i08zIsqwRLGN3o0ebKvP0zqfC-WQdwwzTM1442BLdUZyyVyPiUhJz8MRtwIp-1ZNC3cfO4OFeAqW1XlFWdYXCNdgjILJzqHX53zR3SiPWIqXG1a6k2ObPwWR500sO-CLU6Z-uIqsP4aeIxB8fz8qwjQtcIHzTTD26YVLslaIhK4-tBohZ4x6aOe-xQOQjjKzOx~3fOg0do5TLX2FIcT37SBcYaXgDVPUOVgwm4blGHnv0Qx4-XILY-xOv0MF4tQgv8EtZDG8JIQ__'
                        className='rounded-full w-12 h-12 mr-3 object-cover'
                        alt={`${testimonial.name}'s profile`}
                      />
                      <div className='h-full'>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-gray-600">Customer</p>
                      </div>
                    </div>
                    <p className="mt-2">{'⭐'.repeat(testimonial.rating)}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
        <section className="flex flex-col md:flex-row justify-center px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="w-full md:w-1/2">
            <img
              src="https://s3-alpha-sig.figma.com/img/7555/8638/ca316a587096662312bbe0066a7eacca?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GLgLuXR1yYWbzgJZDuu8DIDprCw4S3lBO6jNH5rX7f9OoxVf2fErCT4P4PGoQn-W9AbNNyVUkuHJ69-seFzMGY3MdWeFT198OSA-QOOSg3o9FRZautCrUWBIvjJCTIVsWXirZ~WBu7ZpRhLU5gQI9o-B0z3MbWey3eb08V1rfKQG0Nn6cwGQZFY3zsLNFPfP-rIrM7dyuKPv8Z-JF85VbcjD1KC3PZbgiH313DY8SMlbDiwVNMRfPQMUpHY3YFgFCvZYO-2qEEdCYFGq60T8bhIwCNvG-h4PYRkTmGoWabenHSDDlzNf8aQgsXM42xgoTb9FbZoOkaTybNRybbkTfg__"
              alt="Gym Trainer"
              className="object-cover w-full h-full self-stretch"
            />
          </div>

          <div className="w-full md:w-1/2 bg-cover text-white bg-[url('https://s3-alpha-sig.figma.com/img/bde8/9539/263b74f45768452916e8ec6a84170725?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eqm7O~MQzhk9ixM3LyUDuvWDIGAM-xZa2lgb-zOWmMSdxPjv9bdD3rG3avcA2FXF-FHC46bDiL6dSO29woJWohX8NGN6QEjjCmwQZS0i-~8WwHdaUsJBNN~kNyV5y16M6HXzk3VHYz-lbk63fs72-dG-w-teoHYEJpfawhOqxE2j5WWDxbjyt~pDeM~YX-D8aftVQTkG-nm8hiv~kFSo5uO3HzRs36J48sZBxvn9S--wun35M1vBTsUQzVMbPAmt1F7YKMRIHKwCqI8KVuw3QQ~ndk7UM1nwSKaCdzPGZApMDyYHp8Ujtb-YuDutpDZHjgfu9PO9mxOMphnRMo~8HA__')] p-8">
            <h2 className="text-3xl font-bold mb-6">Our Services</h2>
            <div className="space-y-4">
              {[
                { icon: <span className="mdi mdi-weight-lifter text-2xl" />, title: 'Best Gyms List', description: 'Two Herb Creature Bearing Signs Won’t Void Signs Eve Female Every Together Thin Thilshnm You’re Every Fourth Cattle Thermal Grid Line Accrose' },
                { icon: <span className="mdi mdi-currency-usd text-2xl" />, title: 'Regional Plans', description: 'Two Herb Creature Bearing Signs Won’t Void Signs Eve Female Every Together Thin Thilshnm You’re Every Fourth Cattle Thermal Grid Line Accrose' },
                { icon: <span className="mdi mdi-yoga text-2xl" />, title: 'All Types Gym', description: 'Two Herb Creature Bearing Signs Won’t Void Signs Eve Female Every Together Thin Thilshnm You’re Every Fourth Cattle Thermal Grid Line Accrose' },
                { icon: <span className="mdi mdi-trophy-award text-2xl" />, title: 'Years of Experience', description: 'Two Herb Creature Bearing Signs Won’t Void Signs Eve Female Every Together Thin Thilshnm You’re Every Fourth Cattle Thermal Grid Line Accrose' }
              ].map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="rounded-full border border-white p-1 px-2 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div className="max-w-xs">
                    <h3 className="text-lg font-bold">{service.title}</h3>
                    <p className="text-sm font-semibold text-white">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="flex flex-wrap sm:flex-nowrap py-8 px-4 ">
          {['bg-yellow-700', 'bg-red-700', 'bg-pink-700', 'bg-purple-700', 'bg-pink-500', 'bg-purple-500'].map((color, index) => (
            <div key={index} className={`w-full h-64 ${color} relative`}>
              <img
                src="https://s3-alpha-sig.figma.com/img/5285/f8b1/f05a118fa7d72bbe2a1ae5b61e5f963d?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q4OuZbLD5mwhND3wQ0zY3NfFM1nvMMZfUPBKUUbCOnoq4vnX0FGFM0wev-bQ~jNgpOZLehFcprnpZtwoKAMTPJotD9ixOx1bPdCKT2CLsu54hmViNBtWi40Wd9R3jKe2H5aZ8CQutZmfAWTuPcAUqdz50W~ubUC1JY58TcMKRHI04fmthG1pVHK-3Eu6-6Uxajuadr8aXPPmb6mWYoczKbtfQ1WciSe6GF33SQfzJxsZkg9JhzH3Oaw2OU05hhYIKNtG-sxZLLcZ2s2yviUmlZ5Hpi~lWlPlsHTb88f68cW2OSduSgCRP7k1Hc3F~52bwO78cZKk2vauUt737oHTJQ__"
                alt={`Gallery ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
              />
            </div>
          ))}
        </section>

      </div>
      <Footer />
    </>

  );
}

export default Home;
