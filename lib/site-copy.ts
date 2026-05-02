export type Language = 'en' | 'am'

export const languageOptions: Array<{ value: Language; label: string; shortLabel: string }> = [
  { value: 'en', label: 'English', shortLabel: 'EN' },
  { value: 'am', label: 'አማርኛ', shortLabel: 'አማ' },
]

export const siteCopy = {
  en: {
    brand: {
      line1: 'Emmanuel Baptist Church',
      line2: 'of Ethiopia',
    },
    nav: {
      links: [
        { href: '#home', label: 'Home' },
        { href: '#announcements', label: 'Announcements' },
        { href: '#about', label: 'About' },
        { href: '#mission', label: 'Mission' },
        { href: '#values', label: 'Values' },
        { href: '#faith', label: 'Faith' },
        { href: '#leadership', label: 'Leadership' },
        { href: '#contact', label: 'Contact' },
      ],
      joinTelegram: 'Join Telegram',
      contactUs: 'Contact Us',
      openMenu: 'Open menu',
      language: 'Language',
    },
    hero: {
      badge: 'Serving Ethiopia since 1960 G.C',
      titleStart: 'Proclaiming the Gospel.',
      titleHighlight: 'Making Disciples.',
      titleEnd: 'Planting Healthy Churches.',
      description:
        'Emmanuel Baptist Church of Ethiopia is a gospel-centered Baptist denomination serving Ethiopia since 1960 G.C, committed to proclaiming Christ, making true disciples, and strengthening and planting biblical local churches.',
      stats: [
        { value: '143', label: 'Local Churches' },
        { value: '132,456', label: 'Believers Nationwide' },
        { value: '65+', label: 'Years of Ministry' },
      ],
      scroll: 'Scroll to explore',
    },
    about: {
      badge: 'Our Heritage',
      title: 'About Emmanuel Baptist Church',
      intro:
        'The history of Emmanuel Baptist Church of Ethiopia is marked by gospel witness, doctrinal conviction, persecution, perseverance, and ongoing church multiplication across the country.',
      legacyTitle: 'A Legacy of Faithfulness',
      paragraph1:
        'Emmanuel Baptist Church was planted in 1960 G.C in Addis Ababa by missionaries of the Baptist Bible Fellowship from the United States. In 1962 G.C, a four-story church building was erected at Arat Kilo on land granted by Emperor Haile Selassie I, and the congregation moved there in 1963 G.C.',
      paragraph2:
        'The ministry later included the Baptist Bible Institute, where many Ethiopian ministers were trained. Even after the building was confiscated in 1981 G.C and the church was forced into scattered underground gatherings, the work continued. Today EBCE serves through 143 local churches and continues to preach the Gospel, disciple believers, and strengthen churches.',
      imageAlt: 'Historical ministry photo',
      historyTitle: 'Our History',
      historySubtitle: 'Key moments in the life of EBCE',
      timeline: [
        {
          year: '1960 G.C',
          title: 'Church Planted',
          description:
            'Emmanuel Baptist Church was planted in Addis Ababa by missionaries of the Baptist Bible Fellowship from the United States.',
        },
        {
          year: '1962 G.C',
          title: 'Building Erected',
          description:
            'A four-story building was erected on land in Arat Kilo, establishing a permanent home for the church.',
        },
        {
          year: '1963 G.C',
          title: 'New Home',
          description:
            'The church moved into the new building, marking a significant milestone in its growth.',
        },
        {
          year: '1963 G.C',
          title: 'Bible School Founded',
          description:
            'A Bible school called Baptist Bible Institute was established to train ministers and church leaders.',
        },
        {
          year: '1981 G.C',
          title: 'Period of Trial',
          description:
            'The church building was confiscated without compensation during a time of political upheaval.',
        },
        {
          year: '1981-1991 G.C',
          title: 'Underground Faith',
          description:
            'The church continued faithfully through scattered underground meetings, demonstrating remarkable perseverance.',
        },
        {
          year: '1991 G.C',
          title: 'Freedom Restored',
          description:
            'Religious freedom returned to Ethiopia, though the original church buildings were not returned.',
        },
        {
          year: 'Today',
          title: 'Growing Denomination',
          description:
            'Today the denomination operates with nearly 143 local churches, continuing to plant churches and make disciples across Ethiopia.',
        },
      ],
    },
    mission: {
      badge: 'Our Purpose',
      title: 'Vision, Mission & Strategy',
      intro:
        'The document emphasizes a Great Commission ministry shaped by biblical teaching, leadership development, church strengthening, and mission among unreached people.',
      tabs: {
        vision: 'Vision',
        mission: 'Mission',
        strategy: 'Strategy',
      },
      visionTitle: 'Our Vision',
      visionText:
        'Our vision is to glorify God by faithfully preaching the Gospel, making true disciples of Jesus Christ, and planting biblical, healthy churches that transform communities and advance the Kingdom of God.',
      missionTitle: 'Our Mission',
      missionText:
        'Our mission is to proclaim the Gospel of Jesus Christ, disciple believers to grow in biblical faith and obedience, and establish and strengthen healthy local churches that faithfully teach the Word of God and reproduce new disciples and churches.',
      strategyTitle: 'Ministry Strategy',
      strategyText: 'Our ministry strategy follows the biblical mandate of the Great Commission.',
      strategyItems: [
        {
          title: 'Evangelism',
          description: 'Faithfully proclaiming the Gospel of Jesus Christ to all people',
        },
        {
          title: 'Discipleship',
          description: 'Equipping believers through biblical teaching, mentoring, and spiritual formation',
        },
        {
          title: 'Church Planting',
          description: 'Planting and strengthening biblically faithful and multiplying local churches',
        },
      ],
    },
    values: {
      badge: 'What We Stand For',
      title: 'Our Core Values',
      intro:
        'These core values define how EBCE approaches doctrine, leadership, discipleship, and church multiplication.',
      items: [
        {
          title: 'Biblical Authority',
          description:
            'We believe the Holy Bible is the inspired, infallible, and authoritative Word of God and the final standard for faith, doctrine, and ministry.',
        },
        {
          title: 'Christ-Centered Gospel',
          description:
            'We are committed to faithfully proclaiming the Gospel of Jesus Christ as the only way of salvation for all people.',
        },
        {
          title: 'Disciple-Making',
          description:
            'We prioritize making true disciples who grow in spiritual maturity, obey Christ’s commands, and disciple others.',
        },
        {
          title: 'Healthy Local Churches',
          description:
            'We are committed to planting and strengthening biblical, healthy, and reproducing local churches.',
        },
        {
          title: 'Prayer and Dependence',
          description:
            'We believe that effective ministry depends on prayer and the power of the Holy Spirit.',
        },
        {
          title: 'Servant Leadership',
          description:
            'We value humble, godly, and accountable leadership that reflects the character of Christ.',
        },
        {
          title: 'Mission & Multiplication',
          description:
            'We are committed to evangelism, missions, and multiplying churches among all peoples.',
        },
      ],
    },
    faith: {
      badge: 'What We Believe',
      title: 'Statement of Faith',
      intro:
        'This section presents a concise doctrinal summary prepared for website use.',
      articlesTitle: 'Articles of Faith',
      articlesSubtitle: 'Essential beliefs of Emmanuel Baptist Church of Ethiopia',
      showSummary: 'Show Summary Version',
      showExtended: 'Show Extended Doctrinal Statement',
      articles: [
        {
          title: 'The Bible',
          summary:
            'We believe the Holy Bible is the inspired, infallible, and authoritative Word of God and the final authority for faith and practice.',
          extended:
            'We believe the sixty-six books of the Old and New Testaments are God-breathed Scripture and the final standard for faith, doctrine, and ministry.',
        },
        {
          title: 'God',
          summary:
            'We believe there is one true God who eternally exists in three persons: the Father, the Son, and the Holy Spirit.',
          extended:
            'We believe in the one living and true God, Creator of heaven and earth, eternally existing as Father, Son, and Holy Spirit.',
        },
        {
          title: 'Jesus Christ',
          summary:
            'We believe that Jesus Christ is the Son of God, fully God and fully man, who lived, died, rose, and will return again.',
          extended:
            'We believe Jesus Christ was born of a virgin, lived a sinless life, died on the cross for our sins, rose from the dead, and will return in glory.',
        },
        {
          title: 'Salvation',
          summary:
            'We believe salvation is by grace alone through faith alone in Jesus Christ, not by human works.',
          extended:
            'All who repent and believe in Christ are forgiven, born again by the Holy Spirit, and receive eternal life as a free gift of God.',
        },
        {
          title: 'The Holy Spirit',
          summary:
            'We believe the Holy Spirit regenerates, indwells, and empowers believers to live godly lives and serve God.',
          extended:
            'The Holy Spirit convicts of sin, gives new birth, illumines Scripture, seals believers, and equips the church for worship, witness, and service.',
        },
        {
          title: 'The Church',
          summary:
            'We believe the church is the body of Christ, made up of all true believers.',
          extended:
            'We believe the church is called to worship God, preach the Gospel, make disciples, and plant healthy churches under the authority of Scripture.',
        },
        {
          title: 'Baptism and the Lord’s Supper',
          summary:
            'We believe in believer’s baptism by immersion and the Lord’s Supper as ordinances given by Christ to the church.',
          extended:
            'Baptism and the Lord’s Supper are ordinances instituted by Christ for His church and practiced in obedience to His command.',
        },
        {
          title: 'The Return of Christ',
          summary:
            'We believe that Jesus Christ will personally return to judge the living and the dead and establish His eternal kingdom.',
          extended:
            'We believe Christ will return visibly and gloriously, raise the dead, judge all people in righteousness, and bring His kingdom to completion.',
        },
      ],
    },
    leadership: {
      badge: 'Our Leadership',
      title: "Leadership & President's Message",
      intro: 'Faithful servants leading our denomination with biblical conviction and pastoral care.',
      messageTitle: 'Message from the President',
      messageIntro: [
        'Grace and peace to you in the name of our Lord Jesus Christ.',
        'I am deeply grateful to God for the privilege of serving as President of the Emmanuel Baptist Church of Ethiopia. We firmly believe that this is a strategic time for the preaching of the Gospel in our nation.',
        'Our generation is in great need of the saving message of Jesus Christ, and the church must faithfully proclaim this good news with conviction and dedication.',
      ],
      messageFull: [
        'Our calling as a denomination is clear. We are committed to proclaiming the Gospel, making true disciples of our Lord Jesus Christ, and planting new biblical and healthy churches. At the same time, we are devoted to strengthening and guiding existing churches so they remain faithful to the Word of God.',
        'Equipping ministers and raising a new generation of leaders with sound biblical teaching is also a central priority of our ministry. Strong churches require well-prepared leaders who faithfully teach Scripture, shepherd God’s people, and lead according to biblical principles.',
        'Over the past years, our denominational office has been actively engaged in encouraging evangelism, supporting church planting efforts, strengthening congregations, and training pastors and ministry leaders. We remain committed to expanding this work across Ethiopia and beyond.',
        'I invite you to join us in prayer, partnership, and faithful service as we work together to fulfill the mission God has entrusted to His church.',
      ],
      boardChairMessageTitle: 'Message from the Board Chair',
      boardChairMessageIntro: [
        'Grace and peace to you in the name of our Lord Jesus Christ.',
        'I am grateful to God for the faithful work being carried out through the Emmanuel Baptist Church of Ethiopia. As our President has clearly stated, our denomination is committed to the mission of preaching the Gospel, making true disciples of Jesus Christ, and planting biblical and healthy churches.',
        'Over the past years, we have witnessed encouraging progress as our churches and leaders have labored together to strengthen existing congregations, establish new churches, and equip ministers with sound biblical teaching. These efforts continue to guide our denomination as we seek to remain faithful to the Word of God and the Great Commission.',
      ],
      boardChairMessageFull: [
        'As the Board, we remain committed to supporting and guiding this vision so that our churches may continue to grow in biblical faithfulness and gospel impact.',
        'May the Lord continue to bless and strengthen our ministry for the advancement of His Kingdom.',
      ],
      readLess: 'Read less',
      readFull: 'Read full message',
      name: 'Pastor Yonas Fikadu',
      role: 'President, Emmanuel Baptist Church of Ethiopia',
      boardChairName: 'Afera Asmerom',
      boardChairRole: 'Board Chair, Emmanuel Baptist Church of Ethiopia',
      profileAlt: 'Leadership portrait',
      boardChairProfileAlt: 'Board Chair portrait',
      president: 'President',
      boardChair: 'Board Chair',
      servingSince: 'Serving Since',
      credentials: 'Credentials',
      credentialsValue: 'BA, M.Div. in Theology, Doctor of Ministry (D.Min.), B.A. in Leadership and Management',
      email: 'Email',
      phone: 'Phone',
      affiliationsTitle: 'Affiliations & Partnerships',
      affiliationsSubtitle: 'Emmanuel Baptist Church of Ethiopia is affiliated with',
      legal:
        'Emmanuel Baptist Church of Ethiopia is a legally registered religious organization under the laws of the Federal Democratic Republic of Ethiopia through the Ethiopian Council of Gospel Believers’ Churches, holding Registration Certificate No. 0824.',
    },
    announcement: {
      title: 'Latest Announcements',
      scrollHint: 'Scroll sideways to see more',
    },
    contact: {
      badge: 'Get in Touch',
      title: 'Contact Us',
      intro:
        'We would love to hear from you. Reach out for inquiries, partnership opportunities, or to learn more about Emmanuel Baptist Church of Ethiopia.',
      infoTitle: 'Contact Information',
      officeAddress: 'Office Address',
      officePhone: 'Office Phone',
      email: 'Email',
      emailFuture: 'Future: ebce@ebceethiopia.org',
      legalStatus: 'Legal Status',
      legalStatusBody:
        "Registered through the Ethiopian Council of Gospel Believers' Churches under Registration Certificate No. 0824.",
      telegram: 'Telegram Community',
      joinTelegram: 'Join our Telegram group',
      mapPlaceholder: 'Open church location in Google Maps',
      formTitle: 'Send us a Message',
      formIntro:
        'Use this form for ministry inquiries, partnerships, or questions about EBCE churches and leadership.',
      successTitle: 'Message Sent!',
      successBody: 'Thank you for reaching out. We will respond to your inquiry soon.',
      sendAnother: 'Send Another Message',
      firstName: 'First Name',
      firstNamePlaceholder: 'Your first name',
      lastName: 'Last Name',
      lastNamePlaceholder: 'Your last name',
      emailAddress: 'Email Address',
      emailPlaceholder: 'your@email.com',
      subject: 'Subject',
      subjectPlaceholder: 'How can we help you?',
      message: 'Message',
      messagePlaceholder: 'Write your message here...',
      sending: 'Sending...',
      sendMessage: 'Send Message',
    },
    footer: {
      description:
        'A Baptist denomination in Ethiopia committed to Gospel proclamation, biblical discipleship, leadership development, and healthy church multiplication.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      focus: 'Our Focus',
      focusItems: [
        'Gospel Proclamation',
        'Biblical Discipleship',
        'Church Planting',
        'Leadership Development',
        'Mission Among Unreached People',
        'Strengthening Healthy Churches',
      ],
      joinTelegram: 'Join Telegram',
      rights: 'All rights reserved.',
      builtFor: 'Built for gospel ministry, discipleship, and church multiplication.',
    },
  },
  am: {
    brand: {
      line1: 'አማኑኤል ባፕቲስት ቤተ ክርስቲያን',
      line2: 'በኢትዮጵያ',
    },
    nav: {
      links: [
        { href: '#home', label: 'መነሻ' },
        { href: '#announcements', label: 'ማስታወቂያዎች' },
        { href: '#about', label: 'ስለ እኛ' },
        { href: '#mission', label: 'ተልዕኮ' },
        { href: '#values', label: 'እሴቶች' },
        { href: '#faith', label: 'እምነታችን' },
        { href: '#leadership', label: 'መሪነት' },
        { href: '#contact', label: 'አግኙን' },
      ],
      joinTelegram: 'ቴሌግራም ይቀላቀሉ',
      contactUs: 'አግኙን',
      openMenu: 'ምናሌ ክፈት',
      language: 'ቋንቋ',
    },
    hero: {
      badge: 'ከ1952 E.C ጀምሮ በኢትዮጵያ እያገለገልን',
      titleStart: 'ወንጌልን እናበስራለን።',
      titleHighlight: 'ደቀ መዛሙርትን እናፈራለን።',
      titleEnd: 'ጤናማ አብያተ ክርስቲያናትን እንተክላለን።',
      description:
        'አማኑኤል ባፕቲስት ቤተ ክርስቲያን በኢትዮጵያ ከ1952 E.C ጀምሮ የሚያገለግል በወንጌል የተመሰረተ ባፕቲስት ማህበር ሲሆን ክርስቶስን ለማወጅ፣ እውነተኛ ደቀ መዛሙርትን ለማፍራት እና መጽሐፍ ቅዱሳዊ የአካባቢ አብያተ ክርስቲያናትን ለማጠናከርና ለመትከል የተሰጠ ነው።',
      stats: [
        { value: '143', label: 'የአካባቢ አብያተ ክርስቲያናት' },
        { value: '132,456', label: 'አማኞች በአገር አቀፍ' },
        { value: '65+', label: 'ዓመታት አገልግሎት' },
      ],
      scroll: 'ወደ ታች ይመልከቱ',
    },
    about: {
      badge: 'ታሪካችን',
      title: 'ስለ አማኑኤል ባፕቲስት ቤተ ክርስቲያን',
      intro:
        'የአማኑኤል ባፕቲስት ቤተ ክርስቲያን ታሪክ በወንጌል ምስክርነት፣ በመጽሐፍ ቅዱሳዊ እምነት፣ በመከራ መቋቋም እና በሀገር አቀፍ የቤተ ክርስቲያን መባዛት ታውቋል።',
      legacyTitle: 'የታማኝነት ቅርስ',
      paragraph1:
        'አማኑኤል ባፕቲስት ቤተ ክርስቲያን በ1952 E.C በአዲስ አበባ ከአሜሪካ የመጡ የBaptist Bible Fellowship ሚስዮናውያን ተተክላ ተጀመረች። በ1954 E.C በአራት ኪሎ በንጉሠ ነገሥት ኃይለ ሥላሴ በተሰጠ መሬት ላይ አራት ፎቅ ሕንፃ ተሠርቶ ጉባኤው በ1955 E.C ወደዚያ ተዘዋወረ።',
      paragraph2:
        'ከዚያ በኋላ አገልግሎቱ ብዙ የኢትዮጵያ አገልጋዮችን ያሰለጠነውን የBaptist Bible Institute አካቶ ቀጠለ። ሕንፃው በ1973 E.C ቢወሰድም ቤተ ክርስቲያኒቱ በተበተኑ ምስጢራዊ ስብሰባዎች ብትቀጥልም ሥራው አልቆምም። ዛሬ በ143 የአካባቢ አብያተ ክርስቲያናት ያገለግላል፣ ወንጌልን ይሰብካል፣ አማኞችን ያስተምራል እና አብያተ ክርስቲያናትን ያጠናክራል።',
      imageAlt: 'የታሪካዊ አገልግሎት ፎቶ',
      historyTitle: 'ታሪካችን',
      historySubtitle: 'በኢቢሲኢ ሕይወት ውስጥ ዋና ክስተቶች',
      timeline: [
        {
          year: '1952 E.C',
          title: 'ቤተ ክርስቲያን ተከለች',
          description: 'አማኑኤል ባፕቲስት ቤተ ክርስቲያን በአዲስ አበባ ከአሜሪካ የመጡ ሚስዮናውያን ተከለች።',
        },
        {
          year: '1954 E.C',
          title: 'ሕንፃው ተሠራ',
          description: 'በአራት ኪሎ ላይ አራት ፎቅ ሕንፃ ተሠርቶ ለቤተ ክርስቲያን ቋሚ ማዕከል ሆነ።',
        },
        {
          year: '1955 E.C',
          title: 'ወደ አዲስ ቤት መግባት',
          description: 'ጉባኤው ወደ አዲሱ ሕንፃ ተዛወረ እና እድገቱ አዲስ ደረጃ ላይ ደረሰ።',
        },
        {
          year: '1955 E.C',
          title: 'የመጽሐፍ ቅዱስ ትምህርት ቤት ተመሠረተ',
          description: 'አገልጋዮችን እና መሪዎችን ለማሰልጠን Baptist Bible Institute ተቋቋመ።',
        },
        {
          year: '1973 E.C',
          title: 'የፈተና ዘመን',
          description: 'በፖለቲካዊ ለውጥ ዘመን የቤተ ክርስቲያኑ ሕንፃ ያለ ካሳ ተወሰደ።',
        },
        {
          year: '1973-1983 E.C',
          title: 'በምስጢር ታማኝነት',
          description: 'ቤተ ክርስቲያኒቱ በተበተኑ ስብሰባዎች ውስጥ በታማኝነት ቀጠለች።',
        },
        {
          year: '1983 E.C',
          title: 'ነፃነት ተመለሰ',
          description: 'በኢትዮጵያ የሃይማኖት ነፃነት ተመለሰ፣ ግን የመጀመሪያዎቹ ሕንፃዎች አልተመለሱም።',
        },
        {
          year: 'ዛሬ',
          title: 'በእድገት ላይ ያለ ማህበር',
          description: 'ዛሬ ማህበሩ በ143 የአካባቢ አብያተ ክርስቲያናት ይሰራል።',
        },
      ],
    },
    mission: {
      badge: 'ዓላማችን',
      title: 'ራዕይ፣ ተልዕኮ እና ስትራቴጂ',
      intro:
        'ይህ አገልግሎት በታላቁ ተልዕኮ ላይ የተመሰረተ ሲሆን በመጽሐፍ ቅዱሳዊ ትምህርት፣ በመሪነት እድገት፣ በቤተ ክርስቲያን ማጠናከር እና ያልደረሳቸው ሕዝቦች መካከል በሚደረግ ተልዕኮ ይታወቃል።',
      tabs: {
        vision: 'ራዕይ',
        mission: 'ተልዕኮ',
        strategy: 'ስትራቴጂ',
      },
      visionTitle: 'ራዕያችን',
      visionText:
        'የእግዚአብሔርን ክብር በታማኝ የወንጌል ስብከት፣ በእውነተኛ የኢየሱስ ክርስቶስ ደቀ መዛሙርት ማፍራት እና ማህበረሰብን የሚለውጡ መጽሐፍ ቅዱሳዊ ጤናማ አብያተ ክርስቲያናትን በመትከል ማክበር ነው።',
      missionTitle: 'ተልዕኮአችን',
      missionText:
        'የእኛ ተልዕኮ የኢየሱስ ክርስቶስን ወንጌል ማወጅ፣ አማኞችን በመጽሐፍ ቅዱሳዊ እምነትና ታዛዥነት እንዲያድጉ ማስተማር እና የእግዚአብሔርን ቃል በታማኝነት የሚያስተምሩ ጤናማ የአካባቢ አብያተ ክርስቲያናትን መመስረትና ማጠናከር ነው።',
      strategyTitle: 'የአገልግሎት ስትራቴጂ',
      strategyText: 'የአገልግሎታችን ስትራቴጂ የታላቁን ተልዕኮ መጽሐፍ ቅዱሳዊ ትእዛዝ ይከተላል።',
      strategyItems: [
        {
          title: 'ወንጌል ስብከት',
          description: 'የኢየሱስ ክርስቶስን ወንጌል ለሁሉም ሕዝብ በታማኝነት ማወጅ',
        },
        {
          title: 'ደቀ መዛሙርት ማፍራት',
          description: 'አማኞችን በመጽሐፍ ቅዱሳዊ ትምህርት፣ መሪነት እና መንፈሳዊ እድገት ማበረታታት',
        },
        {
          title: 'ቤተ ክርስቲያን መትከል',
          description: 'መጽሐፍ ቅዱሳዊ ታማኝ እና የሚባዙ የአካባቢ አብያተ ክርስቲያናትን መትከልና ማጠናከር',
        },
      ],
    },
    values: {
      badge: 'የምንቆምለት',
      title: 'ዋና እሴቶቻችን',
      intro: 'እነዚህ እሴቶች ኢቢሲኢ በትምህርት፣ በመሪነት፣ በደቀ መዛሙርት ሥራ እና በቤተ ክርስቲያን መባዛት እንዴት እንደሚመራ ያሳያሉ።',
      items: [
        {
          title: 'የመጽሐፍ ቅዱስ ሥልጣን',
          description: 'መጽሐፍ ቅዱስ የእግዚአብሔር የተነፈሰ የማይሳሳት እና የመጨረሻ መመዘኛ ቃል መሆኑን እናምናለን።',
        },
        {
          title: 'በክርስቶስ የተመሰረተ ወንጌል',
          description: 'የኢየሱስ ክርስቶስን ወንጌል ለሁሉም ሰው በታማኝነት ለማወጅ ቆርጠን ተነስተናል።',
        },
        {
          title: 'ደቀ መዛሙርት ማፍራት',
          description: 'በመንፈሳዊ ብስለት የሚያድጉ፣ የክርስቶስን ትእዛዝ የሚታዘዙ እና ሌሎችን የሚያስተምሩ ደቀ መዛሙርትን እናስቀድማለን።',
        },
        {
          title: 'ጤናማ የአካባቢ አብያተ ክርስቲያናት',
          description: 'መጽሐፍ ቅዱሳዊ፣ ጤናማ እና የሚባዙ የአካባቢ አብያተ ክርስቲያናትን ለመትከልና ለማጠናከር ተጠናቅቀናል።',
        },
        {
          title: 'ጸሎትና በእግዚአብሔር መደገፍ',
          description: 'ውጤታማ አገልግሎት በጸሎትና በመንፈስ ቅዱስ ኃይል እንደሚቆም እናምናለን።',
        },
        {
          title: 'አገልጋይ መሪነት',
          description: 'የክርስቶስን ባህሪ የሚያንጸባርቅ ትሑት፣ ቅዱስ እና ተጠያቂ መሪነትን እናከብራለን።',
        },
        {
          title: 'ተልዕኮ እና መባዛት',
          description: 'በወንጌል ስብከት፣ በሚስዮን እና በአብያተ ክርስቲያን መባዛት ቁርጠኞች ነን።',
        },
      ],
    },
    faith: {
      badge: 'የምናምነው',
      title: 'የእምነት መግለጫ',
      intro: 'ይህ ክፍል ለድረ ገጹ የተዘጋጀ አጭር የትምህርት ማጠቃለያ ያቀርባል።',
      articlesTitle: 'የእምነት አንቀጾች',
      articlesSubtitle: 'የአማኑኤል ባፕቲስት ቤተ ክርስቲያን መሠረታዊ እምነቶች',
      showSummary: 'አጭር ማጠቃለያ አሳይ',
      showExtended: 'የተራዘመ የእምነት መግለጫ አሳይ',
      articles: [
        {
          title: 'መጽሐፍ ቅዱስ',
          summary: 'መጽሐፍ ቅዱስ የተነፈሰ፣ የማይሳሳት እና የመጨረሻ ሥልጣን ያለው የእግዚአብሔር ቃል መሆኑን እናምናለን።',
          extended: 'የብሉይና የአዲስ ኪዳን ስልሳ ስድስቱ መጻሕፍት ከእግዚአብሔር የተነፈሱ መሆናቸውን እናምናለን።',
        },
        {
          title: 'እግዚአብሔር',
          summary: 'እግዚአብሔር አንድ እውነተኛ አምላክ ሲሆን በአብ፣ በወልድ እና በመንፈስ ቅዱስ ሦስት አካላት ለዘላለም ይኖራል ብለን እናምናለን።',
          extended: 'ሰማይና ምድር ፈጣሪ አንዱ ሕያውና እውነተኛ አምላክ መሆኑን እናምናለን።',
        },
        {
          title: 'ኢየሱስ ክርስቶስ',
          summary: 'ኢየሱስ ክርስቶስ የእግዚአብሔር ልጅ፣ ፍጹም አምላክና ፍጹም ሰው ሲሆን እንደኖረ፣ እንደሞተ፣ እንደተነሣ እና ዳግመኛ እንደሚመጣ እናምናለን።',
          extended: 'ከድንግል እንደተወለደ፣ ኃጢአት አልባ እንደኖረ፣ በመስቀል ላይ ስለ ኃጢአታችን እንደሞተ እና በክብር እንደሚመለስ እናምናለን።',
        },
        {
          title: 'መዳን',
          summary: 'መዳን በጸጋ ብቻ በእምነት ብቻ በኢየሱስ ክርስቶስ እንጂ በሰው ሥራ አይደለም ብለን እናምናለን።',
          extended: 'በክርስቶስ የሚያምኑ እና የሚጸጸቱ ሁሉ ይቅርታ፣ አዲስ ሕይወት እና ዘላለማዊ ሕይወት ይቀበላሉ።',
        },
        {
          title: 'መንፈስ ቅዱስ',
          summary: 'መንፈስ ቅዱስ አማኞችን እንደገና ይወልዳል፣ በውስጣቸው ይኖራል እና ለቅዱስ ኑሮ ይበረታታቸዋል ብለን እናምናለን።',
          extended: 'መንፈስ ቅዱስ ስለ ኃጢአት ያሳምናል፣ አዲስ ልደትን ይሰጣል፣ መጽሐፍን ያበራል እና ቤተ ክርስቲያንን ያዘጋጃል።',
        },
        {
          title: 'ቤተ ክርስቲያን',
          summary: 'ቤተ ክርስቲያን ከሁሉም እውነተኛ አማኞች የተሠራ የክርስቶስ ሰውነት ናት ብለን እናምናለን።',
          extended: 'ቤተ ክርስቲያን እግዚአብሔርን ለማምለክ፣ ወንጌልን ለመስበክ፣ ደቀ መዛሙርትን ለማፍራት እና ጤናማ አብያተ ክርስቲያናትን ለመትከል ተጠርታለች።',
        },
        {
          title: 'ጥምቀት እና የጌታ ራት',
          summary: 'የአማኞችን ጥምቀት በመጥመቅ እና የጌታን ራት እንደ ክርስቶስ ለቤተ ክርስቲያን የሰጠ ሥርዓት እናምናለን።',
          extended: 'ጥምቀትና የጌታ ራት ክርስቶስ ለቤተ ክርስቲያኑ ያቆመው ሥርዓት ነው።',
        },
        {
          title: 'የክርስቶስ ዳግም መምጣት',
          summary: 'ኢየሱስ ክርስቶስ በአካል ተመልሶ ሕያዋንንና ሙታንን እንደሚፈርድ እና ዘላለማዊ መንግሥቱን እንደሚያቋቁም እናምናለን።',
          extended: 'ክርስቶስ በግልጽ ክብር እንደሚመጣ፣ ሙታንን እንደሚያስነሣ እና በጽድቅ እንደሚፈርድ እናምናለን።',
        },
      ],
    },
    leadership: {
      badge: 'መሪነታችን',
      title: 'መሪነት እና የፕሬዚዳንቱ መልእክት',
      intro: 'ማህበራችንን በመጽሐፍ ቅዱሳዊ እምነት እና በእረኝነት እንክብካቤ የሚመሩ ታማኝ አገልጋዮች።',
      messageTitle: 'ከፕሬዚዳንቱ የተላለፈ መልእክት',
      messageIntro: [
        'በጌታችን በኢየሱስ ክርስቶስ ስም ጸጋና ሰላም ለእናንተ ይሁን።',
        'በኢትዮጵያ አማኑኤል ባፕቲስት ቤተ ክርስቲያን ፕሬዚዳንት ሆኜ ማገልገል የሰጠኝን እድል ስለ እግዚአብሔር እጅግ አመሰግናለሁ። ይህ በሀገራችን ወንጌል ለመስበክ ወሳኝ ጊዜ መሆኑን እናምናለን።',
        'ትውልዳችን የኢየሱስ ክርስቶስን የሚያድን መልእክት በጣም ይፈልጋል፣ ቤተ ክርስቲያንም ይህን ምሥራች በታማኝነት ማወጅ አለባት።',
      ],
      messageFull: [
        'እንደ ማህበር ጥሪያችን ግልጽ ነው። ወንጌልን ለማወጅ፣ እውነተኛ የጌታችን ኢየሱስ ክርስቶስ ደቀ መዛሙርትን ለማፍራት እና አዳዲስ መጽሐፍ ቅዱሳዊ ጤናማ አብያተ ክርስቲያናትን ለመትከል ቁርጠኞች ነን።',
        'አገልጋዮችን ማብቃት እና በጠንካራ የመጽሐፍ ቅዱስ ትምህርት አዲስ ትውልድ መሪዎችን ማስነሳት የአገልግሎታችን አስፈላጊ ክፍል ነው።',
        'ባለፉት ዓመታት የማህበራችን ቢሮ ወንጌል ስብከትን ለማበረታታት፣ የቤተ ክርስቲያን መትከልን ለማገዝ፣ ጉባኤዎችን ለማጠናከር እና እረኞችን ለማሰልጠን በትጋት ሰርቷል።',
        'እግዚአብሔር ለቤተ ክርስቲያኑ የሰጠውን ተልዕኮ በአንድነት እንፈጽም ዘንድ በጸሎት፣ በአጋርነት እና በታማኝ አገልግሎት እንድትቀላቀሉ እጋብዛችኋለሁ።',
      ],
      boardChairMessageTitle: 'ከቦርድ ሰብሳቢው የተላለፈ መልእክት',
      boardChairMessageIntro: [
        'በጌታችን በኢየሱስ ክርስቶስ ስም ጸጋና ሰላም ለእናንተ ይሁን።',
        'በኢትዮጵያ አማኑኤል ባፕቲስት ቤተ ክርስቲያን እየተከናወነ ላለው ታማኝ አገልግሎት እግዚአብሔርን አመሰግናለሁ። ፕሬዚዳንታችን በግልጽ እንደገለጹት ማህበራችን ወንጌልን ለመስበክ፣ እውነተኛ የኢየሱስ ክርስቶስ ደቀ መዛሙርትን ለማፍራት እና መጽሐፍ ቅዱሳዊ ጤናማ አብያተ ክርስቲያናትን ለመትከል ቁርጠኛ ነው።',
        'ባለፉት ዓመታት ቤተ ክርስቲያናችንና መሪዎቻችን በአንድነት ተግተው ነባር ጉባኤዎችን ሲያጠናክሩ፣ አዳዲስ ቤተ ክርስቲያናትን ሲተክሉ እና አገልጋዮችን በጠንካራ መጽሐፍ ቅዱሳዊ ትምህርት ሲያበቁ የሚያበረታታ እድገት አይተናል። እነዚህ ጥረቶች ለቃሉ እና ለታላቁ ተልዕኮ ታማኝ ሆነን እንድንቀጥል ማህበራችንን እየመሩ ናቸው።',
      ],
      boardChairMessageFull: [
        'እንደ ቦርድ ይህን ራእይ በመደገፍና በመምራት ቤተ ክርስቲያናችን በመጽሐፍ ቅዱሳዊ ታማኝነትና በወንጌል ተጽእኖ እንዲያድጉ ቁርጠኞች ሆነን እንቀጥላለን።',
        'ጌታ ለመንግሥቱ መስፋፋት አገልግሎታችንን መባረክና ማበርታት እንዲቀጥል እጸልያለሁ።',
      ],
      readLess: 'አነስ አሳይ',
      readFull: 'ሙሉ መልእክቱን አንብብ',
      name: 'ፓስተር ዮናስ ፍቃዱ',
      role: 'ፕሬዚዳንት፣ አማኑኤል ባፕቲስት ቤተ ክርስቲያን በኢትዮጵያ',
      boardChairName: 'Afera Asmerom',
      boardChairRole: 'የቦርድ ሰብሳቢ፣ አማኑኤል ባፕቲስት ቤተ ክርስቲያን በኢትዮጵያ',
      profileAlt: 'የመሪው ፎቶ',
      boardChairProfileAlt: 'የቦርድ ሰብሳቢው ፎቶ',
      president: 'ፕሬዚዳንት',
      boardChair: 'የቦርድ ሰብሳቢ',
      servingSince: 'ከዚህ ጀምሮ አገልግሎት',
      credentials: 'የትምህርት ደረጃ',
      credentialsValue: 'BA, M.Div. in Theology, Doctor of Ministry (D.Min.), B.A. in Leadership and Management',
      email: 'ኢሜይል',
      phone: 'ስልክ',
      affiliationsTitle: 'ግንኙነቶች እና አጋርነቶች',
      affiliationsSubtitle: 'አማኑኤል ባፕቲስት ቤተ ክርስቲያን ከእነዚህ ጋር ተባብራለች',
      legal:
        'አማኑኤል ባፕቲስት ቤተ ክርስቲያን በኢትዮጵያ በወንጌላውያን አማኞች ቤተ ክርስቲያናት ምክር ቤት አማካኝነት በሕጋዊ ምዝገባ የተመዘገበች የሃይማኖት ድርጅት ናት።',
    },
    announcement: {
      title: 'የቅርብ ጊዜ ማስታወቂያዎች',
      scrollHint: 'ተጨማሪ ለማየት ወደ ጎን ያንሸራትቱ',
    },
    contact: {
      badge: 'ያግኙን',
      title: 'አግኙን',
      intro: 'ጥያቄ፣ አጋርነት ወይም ስለ አማኑኤል ባፕቲስት ቤተ ክርስቲያን በኢትዮጵያ ተጨማሪ ለማወቅ ይገናኙን።',
      infoTitle: 'የመገናኛ መረጃ',
      officeAddress: 'የቢሮ አድራሻ',
      officePhone: 'የቢሮ ስልክ',
      email: 'ኢሜይል',
      emailFuture: 'ወደፊት፡ ebce@ebceethiopia.org',
      legalStatus: 'ሕጋዊ ሁኔታ',
      legalStatusBody: 'በወንጌላውያን አማኞች ቤተ ክርስቲያናት ምክር ቤት አማካኝነት በምዝገባ ቁጥር 0824 ተመዝግቧል።',
      telegram: 'የቴሌግራም ማህበረሰብ',
      joinTelegram: 'የቴሌግራም ቡድናችንን ይቀላቀሉ',
      mapPlaceholder: 'የቤተ ክርስቲያን አድራሻን በGoogle Maps ክፈት',
      formTitle: 'መልእክት ላኩልን',
      formIntro: 'ለአገልግሎት ጥያቄዎች፣ ለአጋርነት ወይም ስለ ቤተ ክርስቲያናትና መሪዎች ጥያቄ ይህን ቅጽ ይጠቀሙ።',
      successTitle: 'መልእክትዎ ተልኳል!',
      successBody: 'ስለ መጻፍዎ እናመሰግናለን። በቅርቡ እንመልስልዎታለን።',
      sendAnother: 'ሌላ መልእክት ላክ',
      firstName: 'የመጀመሪያ ስም',
      firstNamePlaceholder: 'የእርስዎ የመጀመሪያ ስም',
      lastName: 'የአባት ስም',
      lastNamePlaceholder: 'የእርስዎ የአባት ስም',
      emailAddress: 'ኢሜይል አድራሻ',
      emailPlaceholder: 'your@email.com',
      subject: 'ርዕስ',
      subjectPlaceholder: 'ምን ልንረዳዎ እንችላለን?',
      message: 'መልእክት',
      messagePlaceholder: 'መልእክትዎን እዚህ ይጻፉ...',
      sending: 'በመላክ ላይ...',
      sendMessage: 'መልእክት ላክ',
    },
    footer: {
      description:
        'በኢትዮጵያ ውስጥ ለወንጌል ስብከት፣ ለመጽሐፍ ቅዱሳዊ ደቀ መዛሙርት ሥራ፣ ለመሪነት እድገት እና ለጤናማ ቤተ ክርስቲያን መባዛት የተሰጠ ባፕቲስት ማህበር።',
      quickLinks: 'ፈጣን አገናኞች',
      contact: 'አግኙን',
      focus: 'ትኩረታችን',
      focusItems: [
        'ወንጌል ስብከት',
        'መጽሐፍ ቅዱሳዊ ደቀ መዛሙርት',
        'ቤተ ክርስቲያን መትከል',
        'መሪነት እድገት',
        'ያልደረሳቸው ሕዝቦች መካከል ተልዕኮ',
        'ጤናማ አብያተ ክርስቲያናትን ማጠናከር',
      ],
      joinTelegram: 'ቴሌግራም ይቀላቀሉ',
      rights: 'መብቱ የተጠበቀ ነው።',
      builtFor: 'ለወንጌል አገልግሎት፣ ለደቀ መዛሙርት ሥራ እና ለቤተ ክርስቲያን መባዛት የተሠራ።',
    },
  },
} as const

export type SiteCopy = (typeof siteCopy)[Language]
