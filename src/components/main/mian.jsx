import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useEffect } from "react";
import { useState } from "react";

const Main = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosRef = collection(db, "menu");
    getDocs(productosRef).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);

  return (
    <main>
      <section className="menu">
        {productos.map((prod) => (
          <article className="burguer">
            <img key={prod.id} src={prod.img} alt={prod.nombre} />
            <h3>{prod.nombre}</h3>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Main;
