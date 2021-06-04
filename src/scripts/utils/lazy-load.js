import lozad from 'lozad';

const lazyLoad = () => {
  const observer = lozad('.lozad', {
    threshold: 0.1,
    loaded: (element) => {
      element.classList.add('loaded');
    },
  });
  observer.observe();
};

export default lazyLoad;
