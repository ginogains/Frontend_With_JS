// TASK 1 — FakeStore API + Array Methods

function task1() {

    const apiUrl = "https://fakestoreapi.com/products";

    fetch(apiUrl)

        .then(response => response.json())

        .then(products => {

            products.forEach(product => {

                console.log(
                    `Title: ${product.title}
Price: $${product.price}
Category: ${product.category}
-------------------------`
                );

            });

            const productDetails = products.map(product => {

                return {
                    title: product.title,
                    price: product.price
                };

            });

            console.log(productDetails);

            const expensiveProducts = products.filter(product => {

                return product.price > 100;

            });

            console.log(expensiveProducts);

            const electronicsProduct = products.find(product => {

                return product.category === "electronics";

            });

            console.log(electronicsProduct);

            const totalPrice = products.reduce((total, product) => {

                return total + product.price;

            }, 0);

            console.log(`Total: $${totalPrice.toFixed(2)}`);

            const sortedProducts = [...products].sort((a, b) => {

                return b.price - a.price;

            });

            sortedProducts.forEach(product => {

                console.log(
                    `${product.title} - $${product.price}`
                );

            });

        })

        .catch(error => {

            console.log("Error fetching products:", error);

        })

        .finally(() => {

            console.log("\nTask 1 completed.");

        });

}



// TASK 2 — Product Category Dashboard

function task2() {

    const apiUrl = "https://fakestoreapi.com/products";

    fetch(apiUrl)

        .then(response => response.json())

        .then(products => {

            const totalProducts = products.length;

            console.log(`\nTotal Products: ${totalProducts}`);

            const electronics = products.filter(product => {

                return product.category === "electronics";

            });

            console.log(`\nElectronics: ${electronics.length}`);

            const jewelery = products.filter(product => {

                return product.category === "jewelery";

            });

            console.log(`Jewelery: ${jewelery.length}`);

            const mensClothing = products.filter(product => {

                return product.category === "men's clothing";

            });

            console.log(`Men's Clothing: ${mensClothing.length}`);

            const womensClothing = products.filter(product => {

                return product.category === "women's clothing";

            });

            console.log(`Women's Clothing: ${womensClothing.length}`);

            const sortedProducts = [...products].sort((a, b) => {

                return b.price - a.price;

            });

            const highestPrice = sortedProducts[0].price;

            console.log(`\nHighest Price: $${highestPrice}`);

            const lowestPrice =
                sortedProducts[sortedProducts.length - 1].price;

            console.log(`Lowest Price: $${lowestPrice}`);

            const totalPrice = products.reduce((total, product) => {

                return total + product.price;

            }, 0);

            const averagePrice = totalPrice / products.length;

            console.log(`Average Price: $${averagePrice.toFixed(2)}`);

        })

        .catch(error => {

            console.log("Dashboard Error:", error);

        });

}


// TASK 3 — User & Post API

function task3() {

    const usersApi =
        "https://jsonplaceholder.typicode.com/users";

    const postsApi =
        "https://jsonplaceholder.typicode.com/posts";

    fetch(usersApi)

        .then(response => response.json())

        .then(users => {

            users.forEach(user => {

                console.log(user.name);

            });

            users.forEach(user => {

                console.log(
                    `${user.name} - ${user.email}`
                );

            });

            const user5 = users.find(user => {

                return user.id === 5;

            });

            console.log("\n--- USER ID 5 ---");
            console.log(user5);

            const city = "South Christy";

            const cityUsers = users.filter(user => {

                return user.address.city === city;

            });

            console.log(`\n--- USERS FROM ${city} ---`);
            console.log(cityUsers);

            return fetch(postsApi);

        })

        .then(response => response.json())

        .then(posts => {

            const user1Posts = posts.filter(post => {

                return post.userId === 1;

            });

            user1Posts.forEach(post => {

                console.log(post.title);

            });

            const postCount = user1Posts.length;

            console.log(
                `\nUser ID 1 created ${postCount} posts.`
            );

            const longTitlePost = posts.find(post => {

                return post.title.length > 50;

            });

            console.log(longTitlePost);

        })

        .catch(error => {

            console.log("User/Post API Error:", error);

        });

}



// TASK 4 — API + SEARCH

function task4() {

    const apiUrl = "https://fakestoreapi.com/products";


    const category = prompt(
        "Enter product category:"
    ).toLowerCase();


    const maxPrice = Number(
        prompt("Enter maximum price:")
    );


    fetch(apiUrl)

        .then(response => response.json())

        .then(products => {

            const filteredProducts = products.filter(product => {

                return (
                    product.category === category &&
                    product.price <= maxPrice
                );

            });


            console.log(
                `Category: ${category}`
            );

            console.log(
                `Maximum Price: $${maxPrice}`
            );


            if (filteredProducts.length === 0) {

                console.log(
                    "\nNo products found."
                );

            } else {

                filteredProducts.forEach(product => {

                    console.log(
                        `\nProduct: ${product.title}
Price: $${product.price}
Category: ${product.category}`
                    );

                });

            }

        })

        .catch(error => {

            console.log("Search Error:", error);

        });

}


// TASK 5 — API SHOPPING CART

function task5() {

    const apiUrl = "https://fakestoreapi.com/products";


    fetch(apiUrl)

        .then(response => response.json())

        .then(products => {


            products.forEach(product => {

                console.log(
                    `ID: ${product.id}
Product: ${product.title}
Price: $${product.price}
-----------------------------`
                );

            });

            const input = prompt(
                "Enter product IDs separated by commas:\nExample: 1,3,5"
            );


            const selectedIds = input
                .split(",")
                .map(id => Number(id.trim()));

            const cart = products.filter(product => {

                return selectedIds.includes(product.id);

            });

            cart.forEach((product, index) => {

                console.log(
                    `Product ${index + 1}: ${product.title}
Price: $${product.price}
`
                );

            });

            const total = cart.reduce((sum, product) => {

                return sum + product.price;

            }, 0);


            let discount = 0;


            if (total > 200) {

                discount = 20;

            } else if (total > 100) {

                discount = 10;

            }


            const discountAmount = total * discount / 100;


            const finalAmount = total - discountAmount;


            console.log(`Total: $${total.toFixed(2)}`);

            console.log(`Discount: ${discount}%`);

            console.log(
                `Final Amount: $${finalAmount.toFixed(2)}`
            );

        })

        .catch(error => {

            console.log("Cart Error:", error);

        });

}



// TASK 6 — FAKESTORE PRODUCT REPORT

function task6() {

    const apiUrl = "https://fakestoreapi.com/products";


    fetch(apiUrl)

        .then(response => response.json())

        .then(products => {

            console.log(
                `\nTotal Products: ${products.length}`
            );


            console.log("\n--- ALL PRODUCTS ---");

            products.forEach(product => {

                console.log(
                    `${product.title} - $${product.price}`
                );

            });


            const productNames = products.map(product => {

                return product.title;

            });

            productNames.forEach(name => {

                console.log(`- ${name}`);

            });



            const expensiveProducts = products.filter(product => {

                return product.price > 100;

            });


            expensiveProducts.forEach(product => {

                console.log(
                    `${product.title} - $${product.price}`
                );

            });



            const electronicsProduct = products.find(product => {

                return product.category === "electronics";

            });


            console.log(
                `${electronicsProduct.title} - $${electronicsProduct.price}`
            );


            const totalPrice = products.reduce((total, product) => {

                return total + product.price;

            }, 0);


            console.log(
                `\nTotal Product Value: $${totalPrice.toFixed(2)}`
            );


            const hasProductAbove500 = products.some(product => {

                return product.price > 500;

            });


            console.log(
                `\nAny Product Above $500: ${hasProductAbove500}`
            );


            const allProductsAbove1 = products.every(product => {

                return product.price > 1;

            });


            console.log(
                `All Products Above $1: ${allProductsAbove1}`
            );

            const sortedProducts = [...products].sort((a, b) => {

                return b.price - a.price;

            });


            sortedProducts.forEach(product => {

                console.log(
                    `${product.title} - $${product.price}`
                );

            });

        })

        .catch(error => {

            console.log(
                "\nAPI Error:",
                error
            );

        })

        .finally(() => {

            console.log(
                "\n========== PRODUCT REPORT COMPLETED =========="
            );

        });

}


task1();

task2();

task3();

task4();

task5();

task6();