import React, { useEffect, useState } from "react";
import { Table, Image } from "antd";
import "antd/dist/antd.css";
import { getWishlist, deleteWishlist } from "../function/books";
import { AiFillDelete } from "react-icons/ai";
const WishList = () => {
    const [listWishlist, setListWishlist] = useState<any>([]);

    useEffect(() => {
        getWishlist().then((res) => setListWishlist(res));
    }, []);

    const handleDeleteWishlist = (id: any) => {
        var process = window.confirm("Are you sure you want to delete?");
        if (process) {
            deleteWishlist(id)
                .then(() => alert(`Wishlish has been deleted with id ${id}`))
                .then(() => getWishlist().then((res) => setListWishlist(res)));
        } else {
            alert("Wishlist not deleted");
        }
    };
    console.log("lw", listWishlist);
    const columns = [
        {
            title: "Image",
            dataIndex: "thumbnail",
            key: "thumbnail",
            render: (t: any, r: any) => (
                <Image width={70} src={`${r.thumbnail}`} />
            ),
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Authors",
            dataIndex: "authors",
            key: "",
        },
        {
            title: "Rating",
            dataIndex: "rating",
            key: "rating",
        },
        {
            title: "Actions",
            dataIndex: "",
            key: "",
            render: (t: any, r: any) => (
                <AiFillDelete
                    style={{ width: 40, height: 40 }}
                    color="red"
                    onClick={() => handleDeleteWishlist(r._id)}
                />
            ),
        },
    ];
    return (
        <div className="wishlist-container">
            <div className="wishlist-child">
                <Table columns={columns} dataSource={listWishlist} />
            </div>
        </div>
    );
};
export default WishList;
