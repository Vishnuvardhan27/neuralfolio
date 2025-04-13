export const scrollToSection = (selector) => {
    const section = document.querySelector(selector);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };
  