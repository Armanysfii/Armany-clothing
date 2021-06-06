import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component.js";
import React from "react";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(function (collection) {
          return (
            <CollectionPreview
              key={collection.id}
              title={collection.title}
              items={collection.items}
            />
          );
        })}
      </div>
    );
  }
}

export default ShopPage;
