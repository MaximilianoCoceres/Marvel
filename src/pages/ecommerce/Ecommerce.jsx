import { useState, useEffect, React } from "react";
import CardEcommerce from "../../components/cardEcommerce";
import "./ecommerce.css";
import MenuEcommerce from "../../components/MenuEcommerce";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";

const Ecommerce = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const urlAPI =
    "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=1dd2e74f4145327245e3f2f3516a4606&hash=49a3e359342525361336285c9a303dce";

  useEffect(() => {
    fetch(urlAPI)
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoading(false));
  }, []);

  return (
    <div className="menu__container ">
      <div className="ecommerce__menu">
        <MenuEcommerce></MenuEcommerce>
      </div>
      <div className="ecommerce">
        <div className="container ">
          <div className="row ">
            {loading ? (
              <Loading />
            ) : (
              data.data?.results?.map((user) => (
                <CardEcommerce
                  key={user.id}
                  title={user.title}
                  img={user.thumbnail.path + "." + user.thumbnail.extension}
                  price={
                    user.prices[0].price === 0
                      ? "agotado"
                      : "$" + user.prices[0].price
                  }
                  pages={user.pageCount}
                ></CardEcommerce>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ecommerce;
