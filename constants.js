module.exports = {
  PROJECT_DATE_FROM: "2023-11-06T14:00:00.000Z",
  PROJECT_DATE_TO: "2023-11-13",
  PROJECT_REGISTRATION_DEADLINE: "2023-10-17",
  PROJECT_REGISTRATION_DEADLINE_PROLONGED: "2023-10-21",
  FORMAT: "offline",
  REGISTRATION_LINK:
    "https://docs.google.com/forms/d/e/1FAIpQLSei4Aa2vMfd9F2ZSus63vMrZnOSOz0Tm91-5slZStzendAWHg/viewform",
  CATEGORIES: {
    CASE_STUDY: {
      header: "Case study",
      text: [
        "Запропонуй інновативне",
        "вирішення поставленої проблеми",
        "та презентуй свою ідею",
      ],
    },
    INNOVATIVE_DESIGN: {
      header: "Innovative design",
      text: [
        "Створи власне інженерне диво",
        "з необхідним функціоналом",
        "для вирішення поставленої задачі",
      ],
    },
  },
  PARTNERS: Array.from(
    { length: 12 },
    (partner, index) => `Partner${index + 1}`,
  ),
  ORGANIZERS: [
    {
      position: "Main Organizer",
      name: "Павло Сірук",
      email: "paul.sirius.02@gmail.com",
      image: "mo.png",
    },
    {
      position: "CR Resp",
      name: "Маргарита Войцешук",
      email: "rita.voitseshuk@best-kyiv.org",
      image: "cr.png",
    },
    {
      position: "Pax Resp",
      name: "Олена Бондаренко",
      email: "lenabondarenko@best-kyiv.org",
      image: "pax.png",
    },
    {
      position: "PR Resp",
      name: "Даша Белінська",
      email: "daryna.belinska@best-kyiv.org",
      image: "pr.png",
    },
    {
      position: "Marketing Designer",
      name: "Віктор Шоломинський",
      email: "sholomynskij.v@gmail.com",
      image: "marketing.png",
    },
    {
      position: "Brand Designer",
      name: "Олександра Василенко",
      email: "sanchoysvasilev@gmail.com",
      image: "brand.png",
    },
    {
      position: "HR Resp",
      name: "Крістіна Дахал",
      email: "kristina.dakhal@best-kyiv.org",
      image: "hr.png",
    },
    {
      position: "Media Resp",
      name: "Михайло Алєксєєв",
      email: "mihail.alekseev@best-kyiv.org",
      image: "media.png",
    },
    {
      position: "Logist",
      name: "Діана Лісовська",
      email: "diana.lisovska@best-kyiv.org",
      image: "logist.png",
    },
    {
      position: "Topic Resp",
      name: "Михайло Воронов",
      email: "mykhailovoronov@gmail.com",
      image: "topic.png",
    },
    {
      position: "Day Resp",
      name: "Олег Борисевич",
      email: "borysevych.oleh87@gmail.com",
      image: "day.png",
    },
  ],
  ABOUT_BEST_ABBREVIATION: "BEST — Board of European Students of Technology. ",
  ABOUT_BEST_0:
    "Ми міжнародна волонтерська організація, що об'єднує студентів технічних спеціальностей усієї Європи.",
  ABOUT_BEST_1:
    "Ми організовуємо змагання, курси та інші івенти, що допомагають студентам прокачати свої навички, продемонструвати їх представникам провідних компаній України та кайфово провести час.",
  FAQ: [
    {
      question: "Участь безкоштовна?",
      answer: "Так, участь у ARC абсолютно безкоштовна",
    },
    {
      question: "Хто може взяти участь?",
      answer: "У змаганнях можуть брати участь студенти київських ЗВО",
    },
    {
      question: "Де відбуваються змагання?",
      answer:
        "Більша частина проєкту буде проходити на КПІ. Деталі шукайте в наших соцмережах!",
    },
    {
      question: "Яка кількість людей у команді?",
      answer: "У команді має бути до 4 учасників, усі з одного університету",
    },
    {
      question: "Що робити, якщо я не маю команди?",
      answer: "Реєструйся, і ми підберемо тобі команду",
    },
    {
      question: "В якому форматі проводяться змагання?",
      answer: "Змагання відбудуться в офлайн форматі",
    },
    {
      question: "Що відбувається в разі повітряної тривоги?",
      answer:
        "В разі оголошення повітряної тривоги змагання зупиняються. Усіх учасників просимо прямувати до найближчого укриття",
    },
    {
      question: "Який необхідний рівень знань для участі?",
      answer:
        "Для участі потрібні знання в сферах інженерії або бізнес-аналізу. Їх наявність буде перевірена на етапі відбору!",
    },
  ],
  SOCIAL_NETWORKS: [
    {
      name: "Website",
      icon: "website.svg",
      link: "https://best-kyiv.org/",
    },
    {
      name: "Instagram",
      icon: "instagram.svg",
      link: "https://www.instagram.com/best_kyiv/",
    },
    {
      name: "Telegram",
      icon: "telegram.svg",
      link: "https://t.me/bestkyiv",
    },
    {
      name: "Facebook",
      icon: "facebook.svg",
      link: "https://www.facebook.com/best.kyiv/?ref=page_internal",
    },
    {
      name: "LinkedIn",
      icon: "linkedin.svg",
      link: "https://www.linkedin.com/company/best-kyiv/",
    },
  ],
};
