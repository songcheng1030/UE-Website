let pos = { top: 0, left: 0, x: 0, y: 0 };
let flag = false;

export const mouseMoveHandler = (e: any, scrollRef: any) => {
  if (flag) {
    const container = scrollRef.current;
    const dx = e.clientX - pos.x;
    container.scrollLeft = pos.left - dx;
  }
};

export const mouseUpHandler = (scrollRef: any) => {
  flag = false;
  const container = scrollRef.current;
  container.style.cursor = "grab";
  container.style.removeProperty("user-select");
};

export const mouseDownHandler = (e: any, scrollRef: any) => {
  const container = scrollRef.current;
  container.style.cursor = "grabbing";
  container.style.userSelect = "none";
  pos = {
    left: container.scrollLeft,
    top: container.scrollTop,
    x: e.clientX,
    y: e.clientY,
  };
  flag = true;
};
