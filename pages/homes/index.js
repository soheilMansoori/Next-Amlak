import React, { useEffect, useState } from "react";
import db from "./../../data/db.json";
import Home from "@/components/modules/Home/Home";

function index() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("-1");
  const [homes, setHomes] = useState([...db.homes]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;
  const numberOfPages = Math.ceil(homes.length / pageSize)
  const pagination = Array.from(Array(numberOfPages).keys()).reverse()
  // console.log(pagination);

  // search homes
  useEffect(() => {
    const newHomes = db.homes.filter((home) => home.title.includes(search));
    setHomes(newHomes);
  }, [search]);

  // filter homes
  useEffect(() => {
    switch (sort) {
      case "price": {
        const newHomes = [...homes].sort((a, b) => a.price - b.price);
        setHomes(newHomes);
        break;
      }
      case "room": {
        const newHomes = [...homes].sort((a, b) => a.roomCount - b.roomCount);
        setHomes(newHomes);
        break;
      }
      case "meterage": {
        const newHomes = [...homes].sort((a, b) => a.meterage - b.meterage);
        setHomes(newHomes);
        break;
      }
      default: {
        setHomes([...db.homes]);
      }
    }
  }, [sort]);



  return (
    <div className="home-section" id="houses">
      <div className="home-filter-search">
        <div className="home-filter">
          <select defaultValue={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="-1">انتخاب کنید</option>
            <option value="price">بر اساس قیمت</option>
            <option value="room">بر اساس تعداد اتاق</option>
            <option value="meterage">بر اساس اندازه</option>
          </select>
        </div>
        <div className="home-search">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="جستجو کنید"
          />
        </div>
      </div>
      {homes.length ? (
        <>
          {/* homes */}
          <div className="homes">
            {homes.slice(((pageSize * currentPage) - pageSize), (pageSize * currentPage)).map((home) => (
              <Home key={home.id} {...home} />
            ))}
          </div>
          {/* pagination */}
          <ul className="pagination__list">
            {pagination.map(page => (
              <li className={`pagination__item ${currentPage === page + 1 && 'active'}`} key={page} onClick={() => setCurrentPage(page + 1)}>
                {page + 1}
              </li>
            ))}
          </ul>

        </>
      ) : (
        <div>هیج خانه ایی یافت نشد</div>
      )}

    </div>
  );
}

export default index;