export function onWheel(e: any, scrollRef: any) {
  // e.preventDefault();
  const container = scrollRef.current;
  const containerScrollPosition = scrollRef.current?.scrollLeft;
  container?.scrollTo({
    top: 0,
    left: containerScrollPosition + e.deltaY,
  });
}
function preventScroll(e: any) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}

export function disableScroll() {
  document.body.style.overflow = "hidden";
  //   document.body.addEventListener('wheel', preventScroll);
  //   const body = document.querySelector('body');
  //   body?.addEventListener('wheel', preventScroll);
}
export function enableScroll() {
  document.body.style.overflow = "unset";
  // document.body.removeEventListener('wheel', preventScroll);
}
