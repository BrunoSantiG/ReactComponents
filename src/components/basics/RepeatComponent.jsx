import React from "react";
import Products from "../../data/Products";

export default (props) => {
	function getProdutos() {
		return Products.map((product) => {
			return (
				<tr key={product.id}>
					<td>{product.id}</td>
					<td>{product.name}</td>
					<td>{product.price}</td>
				</tr>
			);
		});
	}
	return (
		<div>
			<h2>React components examples</h2>
			<table>
				<tbody>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Price</th>
					</tr>
					{getProdutos()}
				</tbody>
			</table>
		</div>
	);
};
