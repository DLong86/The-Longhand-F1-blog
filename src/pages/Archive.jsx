function Archive({ articles }) {
  return (
    <div className="w-[90%] m-auto mt-20 ">
      <div className="flex gap-4 mx-2">
        <p className="text-[#2ecc71] font-bold">newest</p>
        <p className="text-[#3498db] font-bold">oldest</p>
      </div>
      <ul className="">
        {articles.map((article) => (
          <li key={article.id} className="p-2 border-1 m-2">
            <div className="flex justify-between">
              <h1 className="font-bold text-2xl">{article.title}</h1>
              <p className="text-[#FF7E70] underline cursor-pointer">read</p>
            </div>
            <p>{article.content}</p>
            <small>{new Date().toISOString().split("T")[0]}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Archive;
