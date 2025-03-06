function Archive({ articles }) {
  return (
    <div className="w-[90%] m-auto mt-12 ">
      <div className="flex gap-4 mx-2">
        <p className="text-[#2ecc71] font-bold text-xl cursor-pointer">
          newest
        </p>
        <p className="text-[#3498db] font-bold text-xl cursor-pointer">
          oldest
        </p>
      </div>
      <ul className="">
        {articles.map((article) => (
          <li key={article.id} className="p-2 border-1 mx-2 mb-6 mt-4">
            <h1 className="font-bold text-2xl">{article.title}</h1>
            <p>{article.content}</p>
            <div className="flex justify-between items-center  ">
              <small className=" text-xsm opacity-50 font-light">
                {new Date().toISOString().split("T")[0]}
              </small>
              <p className="text-[#fb6f92] underline cursor-pointer">read</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Archive;
