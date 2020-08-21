const mouse = {
  x: 0,
  y: 0
};
function handleMouseMove(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}
document.addEventListener("mousemove", handleMouseMove);
export default mouse;
