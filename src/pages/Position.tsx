// import Header from "../components/Header";

function Position() {
  return (
    <>
      {/* <Header /> */}
      <main className="border-2 border-solid border-black bg-gray-500 w-4/5 ml-[10%] mt-[5%] h-[80vh] relative">
        <div className="item">1. Default</div>
        <div className="item">2. Static</div>
        <div className="item relative -right-5">3. Relative</div>
        <div className="item absolute right-0 -bottom-3">4. Absolute</div>
        <div className="item fixed left-0 bottom-0">5. Fixed</div>
        <div className="item sticky top-0.5">6. Sticky</div>
      </main>
    </>
  );
}

export default Position;
