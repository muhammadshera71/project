const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'iPhone 14 Pro Max',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'The iPhone 14 Pro Max display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.69 inches diagonally (actual viewable area is less).',
      date: '630,000 PKR',
      image: '/images/event1.jpg',
    },
    {
      id: 'e2',
      title: 'Acer Aspire S3',
      description:
        "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
      location: 'The Acer Aspire S3 has a cutting-edge flagship chipset. An  Exynos 2100 and a Snapdragon 888 depending on the market. Both are built on a 5nm process. The results of the two chipsets both performance & graphics wise are striking. Thats why we came up with this event - itll be so much easier. Promised',
      date: '520,090',
      image: '/images/event3.jpg',
    },
    {
      id: 'e3',
      title: 'Apple Macbook Air - 13" 256GB',
      description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'The 16-inch MacBook Pro features a new Magic Keyboard with a refined scissor mechanism that delivers 1mm of key travel and a stable key feel, as well as an Apple-designed rubber dome that stores more potential energy for a responsive key press.',
      date: '430,788',
      image: '/images/event2.jpg',
    },
    {
      id: 'e4',
      title: 'Apple Macbook Air - 13" 256GB',
      description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'The 16-inch MacBook Pro features a new Magic Keyboard with a refined scissor mechanism that delivers 1mm of key travel and a stable key feel, as well as an Apple-designed rubber dome that stores more potential energy for a responsive key press.',
      date: '430,788',
      image: '/images/event4.jpg',
    },
    
    

  ];
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export  function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }