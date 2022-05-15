import axios from "axios";

interface Search {
    text: string;
}

interface Create {
    title: string;
    thumbnail: String;
    rating: number;
    authors: Array<string>;
}

interface Delete {
    id: String;
}

export const getBook = async (text: Search) => {
    console.log("text", text.text);
    return await axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${text.text}`)
        .then((res) => {
            return res.data.items;
        })
        .catch((err) => console.log(err));
};

export const createWishlist = async (data: Create) => {
    console.log("boody", data);
    const body = JSON.stringify({ ...data });
    return await axios
        .post("http://localhost:9000/api/v1/wishlist/create-wishlist", body, {
            headers: { "Content-type": "application/json" },
        })
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err));
};

export const getWishlist = async () => {
    return await axios
        .get("http://localhost:9000/api/v1/wishlist/get-wishlist")
        .then((res) => {
            console.log("res", res);
            return res.data.data;
        })
        .catch((err) => console.log("err", err));
};

export const deleteWishlist = async (id: Delete) => {
    console.log("id", id);
    return await axios
        .delete(`http://localhost:9000/api/v1/wishlist/delete-wishlist/${id}`)
        .then((res) => {
            return res;
        })
        .catch((err) => console.log("err", err));
};
