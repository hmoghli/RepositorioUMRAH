import React from 'react';
/*import './article.css'; // Importa el archivo CSS personalizado */

const Article = () => {
  return (
    <article className="article-container">
      <div className="post-cover article-image">
        <a href="https://umrah.es/es/hajj-y-umrah-iva/" aria-hidden="true" tabIndex="-1">
          <img
            src="https://umrah.es/es/wp-content/uploads/2022/01/15-VAT-in-Saudi-Arabia-1.jpg"
            alt="Hajj y Umrah: Nuevo IVA = Nuevo aumento de precios"
            srcSet="https://umrah.es/es/wp-content/uploads/2022/01/15-VAT-in-Saudi-Arabia-1.jpg 689w, https://umrah.es/es/wp-content/uploads/2022/01/15-VAT-in-Saudi-Arabia-1-600x345.jpg 600w"
            sizes="(max-width: 689px) 100vw, 689px"
          />
        </a>
      </div>
      <header className="entry-header">
        <h2 className="entry-title">
          <a href="https://umrah.es/es/hajj-y-umrah-iva/" rel="bookmark" className="article-title">
            Hajj y Umrah: Nuevo IVA = Nuevo aumento de precios
          </a>
        </h2>
      </header>
      <div className="entry-content article-content">
        Hajj y Umrah y el nuevo IVA: Hajj y Umrah: El coste económico (y financiero) de la crisis sanitaria que vivimos...
      </div>
    </article>
  );
};

export default Article;
