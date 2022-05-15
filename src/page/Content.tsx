import React, { useEffect, useState } from "react";
import "bulma/css/bulma.min.css";
import { createWishlist, getBook } from "../function/books";
import { AiFillLike } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
const Content = () => {
    const [searchText, setSearchText] = useState<string>("");
    const [listBook, setListBook] = useState<any>([]);
    // const [storingDataWishlist, setStoringDataWishlist] = useState<any>({});

    useEffect(() => {
        if (searchText != "") {
            setTimeout(() => {
                getBook({ text: searchText }).then((data) => {
                    setListBook(data.map((d: any) => d.volumeInfo));
                });
            }, 1000);
        }
    }, [searchText]);

    const handleWishlist = (data: any) => {
        var proceed = window.confirm("Are you sure you want to proceed?");
        if (proceed) {
            createWishlist(data).then(() => alert("Wishlist has been create"));
        } else {
            //don't proceed
            alert("Wishlist not created");
        }
    };

    // console.log(storingDataWishlist);

    return (
        <div className="content-container">
            <div className="wrapper">
                <div className="search-input">
                    <a href="" target="_blank" hidden></a>
                    <input
                        type="text"
                        placeholder="Type to search.."
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    {searchText != "" && (
                        <div style={{ padding: 10 }}>
                            {/* <!-- here list are inserted from javascript --> */}
                            {listBook.map((d: any, i: any, a: any) => (
                                <div
                                    style={{
                                        // backgroundColor: "red",
                                        borderBottomWidth: 1,
                                        borderBottomColor: "black",
                                        marginBottom: 10,
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        display: "flex",
                                    }}
                                >
                                    <div
                                        style={{
                                            flexDirection: "row",
                                            display: "flex",
                                        }}
                                    >
                                        <img
                                            src={`${d.imageLinks?.thumbnail}`}
                                        />
                                        <div
                                            style={{
                                                marginLeft: 5,
                                                flexDirection: "column",
                                                display: "flex",
                                            }}
                                        >
                                            <text
                                                style={{ fontWeight: "bold" }}
                                            >
                                                {d.title}
                                            </text>
                                            <text>
                                                Authors :{" "}
                                                {d?.authors
                                                    ?.map((d: any) => d)
                                                    .join(",") || "-"}
                                            </text>
                                            <text>
                                                Rating : {d?.averageRating || 0}
                                            </text>
                                        </div>
                                    </div>
                                    <AiFillLike
                                        // className="left-arrow"
                                        onClick={() =>
                                            handleWishlist({
                                                title: d.title,
                                                authors: d.authors,
                                                thumbnail:
                                                    d.imageLinks.thumbnail,
                                                rating: d.averageRating || 0,
                                            })
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Content;
