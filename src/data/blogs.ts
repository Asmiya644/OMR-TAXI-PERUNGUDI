export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  distance: string;
  duration: string;
  routeHighlight: string;
  imageUrl: string;
  badge: string;
  oneWayPrice: number;
  readTime: string;
  publishedDate: string;
  intro: string;
  whyChooseCab: string[];
  keyHighlights: {
    heading: string;
    description: string;
  }[];
  itineraryTips: string[];
  vehicleRecommendations: {
    category: string;
    capacity: string;
    luggage: string;
    rate: string;
    bestFor: string;
  }[];
  whatsappMessage: string;
}

export const blogsData: BlogPost[] = [
  {
    slug: "chennai-to-pondicherry-ecr-guide",
    title: "Chennai to Pondicherry ECR Drive: 200km Scenic Coastal Guide",
    subtitle:
      "A scenic road trip along the East Coast Road (SH 49), featuring seaside stopovers, heritage architecture, beachside cafes, and hassle-free weekend travel.",
    distance: "200 km",
    duration: "3.5 - 4 Hours",
    routeHighlight: "Via East Coast Road (SH 49) / Scenic Bay of Bengal Highway",
    imageUrl: "/images/pondicherry.jpg",
    badge: "Coastal Drive",
    oneWayPrice: 4200,
    readTime: "5 min read",
    publishedDate: "October 2026",
    intro:
      "The road trip from Chennai to Pondicherry (Puducherry) along the East Coast Road (State Highway 49) is widely celebrated as one of the most picturesque coastal drives in South India. Stretching approximately 200 kilometers with the Bay of Bengal sparkling on your left, this journey connects the buzzing tech corridors of OMR to the peaceful, bohemian charm of White Town and Auroville. When you hire a private chauffeured cab with OMR Taxi Perungudi, the entire 4-hour journey turns into a stress-free holiday without the fatigue of navigating weekend highway traffic or hunting for parking in narrow French Quarter lanes.",
    whyChooseCab: [
      "Total Doorstep Flexibility: Get picked up directly from your apartment or office in OMR, Perungudi, or Velachery at whatever time suits you best.",
      "Scenic Freedom: Stop spontaneously for hot filter coffee, fresh coconut water, or photo ops by the sea without rushing for bus timetables.",
      "Zero Parking Hassle in Pondy: Navigating White Town's narrow one-way streets is effortless when your private chauffeur handles parking.",
      "Transparent Billing: Fuel and vehicle allowances are fixed upfront, while toll plazas are billed at actuals via FastTag.",
    ],
    keyHighlights: [
      {
        heading: "Mahabalipuram (Mamallapuram) - km 55",
        description:
          "Take a 45-minute pause to witness the UNESCO World Heritage 8th-century Shore Temple, Arjuna's Penance, and Krishna's Butter Ball. Perfect for sea-breeze photos and early morning breakfast.",
      },
      {
        heading: "Alamparai Fort Backwaters - km 100",
        description:
          "A hidden gem tucked near Kadappakkam featuring historical 17th-century brick fort ruins overlooking tranquil coastal backwaters where the sea meets the bay.",
      },
      {
        heading: "Marakkanam Salt Pans & Coastal Stretch - km 120",
        description:
          "Vast white salt fields stretching to the horizon. In the winter months, migratory waterbirds and flamingos can often be spotted in the nearby estuaries.",
      },
      {
        heading: "Auroville & Matrimandir - km 185",
        description:
          "Visit the international township dedicated to human unity. Walk through peaceful shaded red-earth pathways to view the golden geodesic Matrimandir dome and enjoy organic artisan sourdough cafes.",
      },
      {
        heading: "White Town (French Quarter) & Promenade Beach",
        description:
          "End your journey wandering past colonial mustard-yellow villas with bougainvillea draped over high compound walls, authentic French bakeries, and evening walks along Goubert Avenue.",
      },
    ],
    itineraryTips: [
      "Optimal Departure Time: Start early between 5:30 AM and 6:30 AM from Chennai to watch the sunrise over the sea and avoid city traffic.",
      "Toll Transparency: Toll gates at Uthandi and Hanumanthai are billed at actuals based on FastTag deductions.",
      "Return Options: OMR Taxi offers both one-way drops and budget-friendly same-day or multi-day round-trip packages.",
    ],
    vehicleRecommendations: [
      {
        category: "Prime Sedan (Dzire / Etios)",
        capacity: "4 Passengers",
        luggage: "2-3 Suitcases",
        rate: "₹25/km (₹4,200 starting)",
        bestFor: "Couples, small families, and weekend corporate getaways wanting smooth AC comfort.",
      },
      {
        category: "Toyota Innova Crysta",
        capacity: "6-7 Passengers",
        luggage: "5 Large Bags",
        rate: "₹22/km Package",
        bestFor: "Groups and multigenerational families seeking executive captain seats and maximum legroom.",
      },
      {
        category: "6-Seater SUV (Ertiga)",
        capacity: "5-6 Passengers",
        luggage: "3 Medium Bags",
        rate: "₹35/km",
        bestFor: "Families traveling with extra beach gear and children desiring elevated highway views.",
      },
      {
        category: "Compact Hatchback",
        capacity: "4 Passengers",
        luggage: "2 Medium Bags",
        rate: "₹25/km",
        bestFor: "Solo travelers or couples on a budget-conscious coastal excursion.",
      },
    ],
    whatsappMessage: "Hi OMR Taxi, I would like to book the Chennai to Pondicherry outstation package.",
  },
  {
    slug: "chennai-to-tirupati-temple-darshan",
    title: "Chennai to Tirupati Temple Darshan: 200km in 3 Hours",
    subtitle:
      "A complete pilgrimage guide covering early morning pickup strategies, optimal highway routes, toll transparency, and stress-free temple darshan.",
    distance: "200 km",
    duration: "3 - 3.5 Hours",
    routeHighlight: "Via NH 716 / Tiruvallur or NH 16 Tada Corridor",
    imageUrl: "/images/tirupati.jpg",
    badge: "Temple Darshan",
    oneWayPrice: 4500,
    readTime: "6 min read",
    publishedDate: "October 2026",
    intro:
      "Millions of pilgrims journey from Chennai to Tirumala-Tirupati every year to seek the sacred blessings of Lord Venkateswara (Balaji). Situated roughly 200 kilometers northwest of Chennai, Tirupati can be smoothly reached in about 3 to 3.5 hours via the Tiruvallur-Tiruttani highway or the Tada-Srikalahasti highway corridor. To ensure a peaceful, spiritually focused pilgrimage without the physical exhaustion of crowded public buses or strict railway timetables, OMR Taxi Perungudi offers customized temple tour packages with experienced chauffeurs well-versed in temple timings, ghat road guidelines, and parking protocols.",
    whyChooseCab: [
      "Early Morning 3:00 AM Doorstep Pickup: We arrive right on time at your apartment so you can comfortably reach the foothills before morning rush.",
      "Ghat Road Highway Veterans: Experienced chauffeurs skilled at navigating the uphill and downhill Tirumala ghat roads safely.",
      "Multiple Shrine Flexibility: Easily visit Padmavathi Ammavari Temple (Tiruchanur) and Srikalahasti on the same round-trip without changing vehicles.",
      "Luggage & Elderly Friendly: Door-to-door transit ensures elderly family members are spared from walking long distances with pilgrimage bags.",
    ],
    keyHighlights: [
      {
        heading: "Route Selection: Smooth 4-Lane Corridors",
        description:
          "Our drivers select the fastest route based on live traffic—either via Chennai Bypass &rarr; Tiruvallur &rarr; Tiruttani &rarr; Puttur &rarr; Tirupati, or via NH 16 Karanodai &rarr; Tada &rarr; Srikalahasti &rarr; Tirupati.",
      },
      {
        heading: "Sri Padmavathi Ammavari Temple (Tiruchanur)",
        description:
          "Traditional pilgrimage protocol recommends seeking the blessings of Goddess Padmavathi at Tiruchanur before ascending Tirumala hill. Our driver schedules this stop seamlessly.",
      },
      {
        heading: "Alipiri Toll & Security Gate Foothills",
        description:
          "All private vehicles undergo mandatory security screening at Alipiri. Our chauffeurs guide you through the FASTag toll deduction and luggage screening efficiently.",
      },
      {
        heading: "Tirumala Hill Top & Darshan Coordination",
        description:
          "Once atop the Seven Hills, your chauffeur drops you conveniently close to the reporting complexes (Vaikuntam Queue Complex / CRO Office) and waits at designated parking zones while you complete darshan.",
      },
      {
        heading: "Optional Extension: Srikalahasteeswara Temple",
        description:
          "Located just 36 km from Tirupati, Srikalahasti is famous worldwide for the Vayu Lingam and Rahu-Ketu Sarpa Dosha Nivarana poojas. Easily covered in our 1-day package.",
      },
    ],
    itineraryTips: [
      "Darshan Slot Advice: Coordinate your pickup time with your TTD Special Entry Darshan (SED ₹300) reporting slot. A 4:00 AM pickup from Chennai comfortably aligns with a 9:00 AM or 10:00 AM reporting slot.",
      "Tolls & Permits: Andhra Pradesh transport permits and highway toll gates are charged at actuals with receipts.",
      "Zero Midnight Surcharge: OMR Taxi does not levy late-night extra fees; we dispatch on time 24/7.",
    ],
    vehicleRecommendations: [
      {
        category: "Toyota Innova Crysta",
        capacity: "6-7 Passengers",
        luggage: "5 Suitcases",
        rate: "₹22/km Package",
        bestFor: "The gold standard for family pilgrimages—smooth suspension on ghat roads and superior comfort for elderly parents.",
      },
      {
        category: "Prime Sedan (Dzire / Etios)",
        capacity: "4 Passengers",
        luggage: "3 Bags",
        rate: "₹25/km (₹4,500 starting)",
        bestFor: "Small families seeking quiet, punctual AC travel for same-day darshan.",
      },
      {
        category: "6-Seater SUV (Ertiga)",
        capacity: "5-6 Passengers",
        luggage: "3-4 Bags",
        rate: "₹35/km",
        bestFor: "Groups of 5 to 6 devotees wanting comfortable seating at a cost-effective per-person rate.",
      },
      {
        category: "Hatchback",
        capacity: "4 Passengers",
        luggage: "2 Bags",
        rate: "₹25/km",
        bestFor: "Solo devotees or couples on a quick pilgrimage trip.",
      },
    ],
    whatsappMessage: "Hi OMR Taxi, I would like to book the Chennai to Tirupati outstation package.",
  },
  {
    slug: "chennai-to-vellore-highway-guide",
    title: "Chennai to Vellore (150km): Complete 3-Hour Highway Guide",
    subtitle:
      "A fast 6-lane highway drive along NH 48 to the Sripuram Golden Temple and premier CMC Hospital healthcare visits with dedicated chauffeur comfort.",
    distance: "150 km",
    duration: "2.5 - 3 Hours",
    routeHighlight: "Via Chennai-Bengaluru Highway (NH 48 / AH 45)",
    imageUrl: "/images/vellore.jpg",
    badge: "Golden Temple",
    oneWayPrice: 3500,
    readTime: "5 min read",
    publishedDate: "October 2026",
    intro:
      "Connecting Chennai to the historical fortress city of Vellore across 150 kilometers, the Chennai–Bengaluru Highway (NH 48 / AH 45) is one of the fastest, smoothest multi-lane highway corridors in Tamil Nadu. Whether you are traveling for a spiritual visit to the world-renowned Sripuram Golden Temple (Malaikodi), attending a specialized medical consultation at Christian Medical College (CMC) Hospital, or exploring the grand 16th-century granite ramparts of Vellore Fort, booking a private cab with OMR Taxi Perungudi guarantees a comfortable, reliable, and punctual journey without the stress of train bookings or crowded buses.",
    whyChooseCab: [
      "Direct Hospital & Clinic Transfers: For medical travelers visiting CMC Hospital (Ida Scudder Campus or Ranipet Campus), we provide gentle, prompt door-to-door pickups.",
      "Speedy 6-Lane Transit: Avoid city transfers and reach Vellore comfortably in under 3 hours via the well-maintained NH 48 expressway.",
      "Flexible Temple Itinerary: Take your time walking through Sripuram's Star Path without worrying about driver waiting meter traps.",
      "Sanitized AC Cabs: Pristine interiors, bottled water availability, and polite highway chauffeurs.",
    ],
    keyHighlights: [
      {
        heading: "Sripuram Golden Temple (Sri Lakshmi Narayani)",
        description:
          "A modern architectural wonder gilded with over 1,500 kilograms of pure gold leaf. The sanctum is set inside an expansive 100-acre eco-friendly star-shaped path with engraved messages of spiritual wisdom.",
      },
      {
        heading: "Vellore Fort & Jalakandeswarar Temple",
        description:
          "Constructed in the 16th century during the Vijayanagara era, this imposing fort features massive double stone walls and a wide water moat. Inside stands the intricately sculpted Jalakandeswarar Temple, renowned for its ornate monolith pillars.",
      },
      {
        heading: "Christian Medical College (CMC) Vellore",
        description:
          "One of Asia's most respected medical institutions. Hundreds of patients from Chennai and outstation cities rely on OMR Taxi for scheduled treatments, safe post-surgery discharges, and outpatient visits.",
      },
      {
        heading: "Expressway Food Pitstops",
        description:
          "NH 48 hosts top highway restaurants near Sriperumbudur and Walajapet (Murugan Idli Shop, Highway Star, Starbucks, and traditional Tamil Nadu vegetarian mess halls).",
      },
    ],
    itineraryTips: [
      "Medical Travel Tip: If visiting CMC for doctor appointments, request an early 5:30 AM departure to reach the hospital registration counters before 8:30 AM.",
      "Golden Temple Protocol: Strict dress codes apply (traditional attire recommended). Cell phones and cameras are collected at security counters before entering.",
      "Toll Breakdown: FastTag toll booths at Sriperumbudur, Chennasamudram, and Walajapet are billed transparently at actuals.",
    ],
    vehicleRecommendations: [
      {
        category: "Toyota Innova Crysta",
        capacity: "6-7 Passengers",
        luggage: "5 Suitcases",
        rate: "₹22/km Package",
        bestFor: "The premier recommendation for medical patients needing reclinable seating and utmost road shock absorption.",
      },
      {
        category: "Prime Sedan (Dzire / Etios)",
        capacity: "4 Passengers",
        luggage: "3 Bags",
        rate: "₹25/km (₹3,500 starting)",
        bestFor: "Ideal for business executives, doctors, and small families on a one-day pilgrimage.",
      },
      {
        category: "6-Seater SUV (Ertiga)",
        capacity: "5-6 Passengers",
        luggage: "3-4 Bags",
        rate: "₹35/km",
        bestFor: "Spacious travel for families visiting both Sripuram and Vellore Fort.",
      },
      {
        category: "Compact Hatchback",
        capacity: "4 Passengers",
        luggage: "2 Bags",
        rate: "₹25/km",
        bestFor: "Fast, economical one-way drops between Chennai and Vellore.",
      },
    ],
    whatsappMessage: "Hi OMR Taxi, I would like to book the Chennai to Vellore outstation package.",
  },
  {
    slug: "kanchipuram-temple-silk-saree-tour",
    title: "Kanchipuram Temple & Silk Saree Shopping Tour (80km / Half-Day)",
    subtitle:
      "Explore the historic City of a Thousand Temples, sacred Dravidian architecture, and master handloom silk weaving cooperatives on a flexible family day trip.",
    distance: "80 km",
    duration: "2 - 2.5 Hours",
    routeHighlight: "Via NH 48 / Bangalore Highway Corridor",
    imageUrl: "/images/kancheepuram.jpg",
    badge: "Temple & Silk Tour",
    oneWayPrice: 2000,
    readTime: "5 min read",
    publishedDate: "October 2026",
    intro:
      "Located just 80 kilometers west of Chennai, Kanchipuram (Kanchi) is revered as one of the seven sacred pilgrimage centers (Sapta Puri) of India and was the legendary capital of the Pallava dynasty. Famed worldwide for its monumental Dravidian temple architecture and authentic, hand-woven pure mulberry silk sarees embellished with pure gold zari, Kanchipuram makes for the ultimate half-day or full-day family outing from Chennai. With OMR Taxi Perungudi, your chauffeur handles all congested heritage streets, multi-temple parking spots, and shopping halts while your family relaxes in climate-controlled comfort.",
    whyChooseCab: [
      "Effortless Multi-Temple Hopping: Visit 4 major temples in a single morning without hailing local autos or walking under the hot sun.",
      "Trunk Space for Shopping: Secure, spacious boot space for safely stowing valuable silk saree boxes while you explore temple complexes.",
      "Trusted Local Guidance: Our drivers know the locations of official Tamil Nadu weaver cooperatives with genuine Silk Mark certifications.",
      "Flexible Half-Day Timing: Leave after breakfast, complete your temple darshan and shopping, and be comfortably back in Chennai by tea time.",
    ],
    keyHighlights: [
      {
        heading: "Sri Ekambaranathar Temple (Prithvi Lingam)",
        description:
          "One of the Pancha Bhoota Sthalams representing the Earth element. Marvel at the soaring 59-meter Raja Gopuram and the sacred 3,500-year-old mango tree that yields four distinct varieties of mangoes.",
      },
      {
        heading: "Sri Kamakshi Amman Temple (Shakti Peetham)",
        description:
          "The divine epicenter of Kanchipuram. Unlike other towns, Kamakshi Amman is the sole Shakti shrine in the city. The sanctum radiates serenity and spiritual peace with its golden vimanam.",
      },
      {
        heading: "Kailasanathar Temple (8th-Century Pallava Architecture)",
        description:
          "The oldest surviving temple structure in Kanchipuram, constructed by Pallava king Rajasimha using reddish sandstone. Renowned worldwide for exquisite bas-relief sculptures of Lord Shiva in dynamic dance postures.",
      },
      {
        heading: "Sri Varadharaja Perumal Temple",
        description:
          "A massive 23-acre Vishnu temple featuring the famous 100-pillar hall with delicate stone chain links carved from a single rock, and the revered Athi Varadar wooden idol.",
      },
      {
        heading: "Authentic Kanchipuram Silk Saree Weavers",
        description:
          "Discover the centuries-old weaving traditions on Gandhi Road and Mettu Street. Buy genuine, certified wedding silks directly from government weaver societies with zero middleman commissions.",
      },
    ],
    itineraryTips: [
      "Temple Timings: Most temples close between 12:30 PM and 4:00 PM. We recommend starting from Chennai by 6:30 AM to cover morning darshan before noon, followed by a traditional thali lunch and afternoon saree shopping.",
      "Authenticity Check: Look for the government-approved Silk Mark and India Handloom Brand tags on every saree purchased.",
      "Affordable Pricing: Starting from ₹2,000 one-way drop or customized same-day round-trip packages.",
    ],
    vehicleRecommendations: [
      {
        category: "Prime Sedan (Dzire / Etios)",
        capacity: "4 Passengers",
        luggage: "3 Bags",
        rate: "₹25/km (₹2,000 starting)",
        bestFor: "The most popular choice for family shopping day trips—secure trunk space and smooth AC cruising.",
      },
      {
        category: "Toyota Innova Crysta",
        capacity: "6-7 Passengers",
        luggage: "5 Bags",
        rate: "₹22/km Package",
        bestFor: "Generous seating for joint family wedding shopping and elderly temple visits.",
      },
      {
        category: "6-Seater SUV (Ertiga)",
        capacity: "5-6 Passengers",
        luggage: "3-4 Bags",
        rate: "₹35/km",
        bestFor: "Spacious comfort for 5 to 6 passengers exploring temple corridors.",
      },
      {
        category: "Compact Hatchback",
        capacity: "4 Passengers",
        luggage: "2 Bags",
        rate: "₹25/km",
        bestFor: "A quick, affordable half-day run for couples or solo shoppers.",
      },
    ],
    whatsappMessage: "Hi OMR Taxi, I would like to book the Chennai to Kancheepuram outstation package.",
  },
];
