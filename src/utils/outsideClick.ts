const outsideClick = (element: HTMLElement, className: string) => {
  const listenerCb = (event: MouseEvent) => {
    if (
      !element.contains(event.target as Node) &&
      element.classList.contains(className)
    ) {
      element.classList.toggle(className);
      document.removeEventListener('mousedown', listenerCb);
    }
  };

  const init = () => {
    document.addEventListener('mousedown', listenerCb);
  }

  const remove = () => {
    document.removeEventListener('mousedown', listenerCb);
  }

  return {
    init,
    remove
  }
}

export default outsideClick;
