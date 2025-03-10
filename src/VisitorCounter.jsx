

function VisitorCounter() {
  var visitCount = localStorage.getItem("page_view");
  if (!visitCount) {
    visitCount = 0;
  }
  visitCount = Number(visitCount) +1;
  localStorage.setItem("page_view", visitCount);
  return visitCount;
}
export default VisitorCounter