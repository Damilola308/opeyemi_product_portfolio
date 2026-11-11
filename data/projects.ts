export type Project = { slug:string; number:string; name:string; type:'BUILT'|'DESIGNED'|'EXPERIMENT'; summary:string; description:string; role:string; tools:string[]; accent:string; details:string[]; screens:string[]; disclaimer:string; snapshot?:{problem:string;solution:string}; };

export const projects: Project[] = [
  {
    "slug": "pawluck",
    "number": "01",
    "name": "Pawluck",
    "type": "DESIGNED",
    "summary": "Leftover party food, matched with dogs that need it.",
    "description": "A mobile product concept exploring how surplus food from events could be redirected to dog owners and rescuers, with safety guidance built into the experience.",
    "role": "Product concept and UI/UX design",
    "tools": [
      "Figma",
      "Product thinking",
      "Mobile UX"
    ],
    "accent": "mint",
    "details": [
      "Pawluck connects dog owners and rescuers with event hosts, caterers and party planners who have surplus food available for collection.",
      "The core journey moves from local discovery to item-level safety information, pickup requests and an approved collection pass. Hosts get a simple listing flow with location privacy controls.",
      "The concept treats animal safety and trust as product requirements. Food-safety labels are placeholders and would need veterinary review before any real-world use."
    ],
    "screens": [
      "Onboarding",
      "Discover parties",
      "Listing detail",
      "Pickup pass",
      "Host view"
    ],
    "disclaimer": "Fictional product design concept. Names, counts and example postcodes are illustrative. Food-safety labels are placeholders, not veterinary advice."
  },
  {
    "slug": "ona",
    "number": "02",
    "name": "Ona",
    "type": "DESIGNED",
    "summary": "Navigation built on asking locals, not just following a map.",
    "description": "A social messaging concept for getting around Lagos, Abuja and Oyo through local directions, voice notes, landmark photos and destination confirmation.",
    "role": "Product concept and UI/UX design",
    "tools": [
      "Figma",
      "Product thinking",
      "Mobile UX"
    ],
    "accent": "orange",
    "details": [
      "Ona explores a community-powered way to navigate unfamiliar places. Instead of relying only on turn-by-turn directions, users ask nearby locals for practical guidance.",
      "The five-screen flow covers city onboarding, asking a local, chatting with guides, combining answers into a route and saving a building-level destination code.",
      "The postcode examples in the concept are illustrative. Any real integration would require validation against the official postcode format, platform access and coverage."
    ],
    "screens": [
      "Onboarding",
      "Ask a local",
      "Chat with locals",
      "Community route",
      "My postcodes"
    ],
    "disclaimer": "Fictional product design concept. Example postcodes are illustrative and should not be treated as verified live postcode integrations."
  },
  {
    "slug": "ajo",
    "number": "03",
    "name": "Ajo",
    "type": "DESIGNED",
    "summary": "Credit for people the banks can't see.",
    "description": "A mobile credit product concept that explores how everyday financial activity could help people understand credit eligibility and loan terms.",
    "role": "Product concept and UI/UX design",
    "tools": [
      "Figma",
      "Product thinking",
      "Mobile UX"
    ],
    "accent": "green",
    "details": [
      "Ajo is designed around the needs of market traders, freelancers, gig workers and young salaried people who may have limited formal credit histories.",
      "The experience covers phone-first onboarding, a credit dashboard with plain-language score drivers, a loan offer with visible repayment costs, repayment tracking and business cash-flow insights.",
      "The concept prioritises transparency: total repayment, instalments and key terms are visible before a user commits. It is a design concept, not an operating lending service."
    ],
    "screens": [
      "Onboarding",
      "Credit dashboard",
      "Loan offer",
      "Repayments",
      "Business insights"
    ],
    "disclaimer": "Fictional product design concept. It is not a live lending product or a credit assessment service."
  },
  {
    "slug": "hallchop",
    "number": "04",
    "name": "Hallchop",
    "type": "DESIGNED",
    "summary": "Group-order campus food, delivered to your hall.",
    "description": "A mobile delivery concept bringing campus cafeterias into one place and supporting delivery or handoff to students in University of Ibadan halls.",
    "role": "Product concept and UI/UX design",
    "tools": [
      "Figma",
      "Product thinking",
      "Mobile UX"
    ],
    "accent": "violet",
    "details": [
      "Hallchop addresses the friction of ordering food across a campus where cafeterias are distributed and residence access can complicate delivery.",
      "The proposed journey includes open cafeteria discovery, menu browsing, structured hall and room checkout, live delivery tracking and shared group orders.",
      "The concept gives visibility to delivery fees and handoff options, and treats group ordering as a practical way to reduce duplicated delivery costs."
    ],
    "screens": [
      "Home",
      "Cafeteria menu",
      "Checkout",
      "Live tracking",
      "Group order"
    ],
    "disclaimer": "Fictional student design concept. It is not affiliated with the University of Ibadan or any cafeteria; vendor names are illustrative."
  },
  {
    "slug": "cura-hmo",
    "number": "05",
    "name": "Cura HMO",
    "type": "DESIGNED",
    "summary": "One dashboard for HMO claims, providers and risk.",
    "description": "A desktop web-console concept for helping Nigerian HMOs review claims, monitor provider networks and surface potential risk patterns.",
    "role": "Product concept and UI/UX design",
    "tools": [
      "Figma",
      "Product thinking",
      "Dashboard UX"
    ],
    "accent": "blue",
    "details": [
      "Cura explores a unified workspace for claims officers, medical directors, provider-network managers and fraud analysts.",
      "The five-screen concept includes an executive overview, claims queue, provider network, member profile and fraud-and-risk review.",
      "The interface focuses on surfacing operational priorities, keeping supporting context close to decisions and making potential anomalies easier to investigate. Any AI risk flag would require validation, explainability and human review."
    ],
    "screens": [
      "Executive overview",
      "Claims queue",
      "Provider network",
      "Member profile",
      "Fraud & risk"
    ],
    "disclaimer": "Fictional product design concept. Metrics, claims and provider data shown in the mockups are illustrative."
  },
  {
    "slug": "rapada",
    "number": "06",
    "name": "Rapada",
    "type": "DESIGNED",
    "summary": "Don't abandon it at move-out. Hand it on.",
    "description": "A mobile app concept that helps University of Ibadan hall residents give away, swap or sell items to the next resident. The name comes from the Yoruba irapada, meaning redemption: every item gets a second chance, and the hall community builds a small circular economy.",
    "role": "Product concept and UI/UX design",
    "tools": [
      "Figma",
      "FigJam",
      "Mobile UX"
    ],
    "accent": "orange",
    "details": [
      "Why this problem: from my own experience, the things left behind at move-out (beds, pots, clothes, shoes, buckets, stoves, travel boxes) are often exactly what the next resident needs at move-in. Today they are usually abandoned in the room, or priced informally between buyers and sellers. Leaving things behind wins because it takes no effort, and hall WhatsApp groups bury the listings that do get posted.",
      "Who it is for: finalists clearing their rooms, freshers who need a starter kit, and careful sellers who want a safe handover. Trust (no-shows, hygiene, meeting strangers) is the main concern, so it shapes almost every decision in the concept.",
      "Onboarding: pick your hall from the real UI list and say whether you are a fresher, continuing student or finalist. Browsing needs no account. Verification is tiered: phone OTP to claim and chat, student mail to post and sell, with no ID photos collected.",
      "Feed: items from your hall come first, with category chips and \"New today\" on by default. Give, Swap and Offers tags are visible on every card, and the hall challenge counts items rehomed rather than money, so no hall feels poorer.",
      "Item detail: every piece is tagged Good, Fair or Note, with a hygiene reminder, a verified-student badge and a 2-hour claim hold. Reliability is shown as completed pickups (for example 9 of 10) instead of stars, and gate pickup is the default.",
      "Handover pass: a pass with the code, place and time, a short checklist and a four-digit code to finish. Cash or transfer happens at handover, with no in-app payments in version one. Code confirmation feeds the reliability score and the REDEEMED stamp.",
      "Post items: photograph the pile, auto-detect items, choose Give, Swap or Sell for each, and publish. Move-out mode drops unsold prices over time, then switches the item to Give. Bulk posting, a suggested price range and automatic hall and pickup spot keep it to seconds.",
      "Also considered: swaps show both items side by side with a \"roughly balanced\" bar, and freshers can browse and claim with a phone number only. Chat, swap negotiation, a Wanted board and profile screens exist as wireframes and are not shown here."
    ],
    "screens": [
      "Onboarding",
      "Feed",
      "Item detail",
      "Handover pass",
      "Post items"
    ],
    "disclaimer": "Design concept, not affiliated with the University of Ibadan. Names, counts and prices are illustrative. Research beyond my own experience as a UI student is assumed (hypotheses), not measured.",
    "snapshot": {
      "problem": "Move-out leftovers get abandoned, or buried in hall WhatsApp groups.",
      "solution": "A hall-first app to give, swap or sell, with a safe handover."
    }
  }
];
