import React from 'react';
import ProductsInDB from './ProductsInDB';

function ContentProductsInDB(){
    return(
      <React.Fragment>
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">D-HC | Clothes</h1>
					</div>
					<div className="row">
            <ProductsInDB/>
        	</div>
				</div>
      </React.Fragment>
    )

}
export default ContentProductsInDB