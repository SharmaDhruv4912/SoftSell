import { useCallback } from 'react';

const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Adding a small delay to ensure any state changes have happened
      setTimeout(() => {
        // Scroll with a smooth animation
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  }, []);

  return scrollToSection;
};

export default useScrollToSection;
