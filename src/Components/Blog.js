import React from 'react';

const Blog = ({img}) => {
    return (
        <div className="blog">
            <img src={img} alt="" />
            <h3>JUNE 21, 2019 ADMIN  3</h3>
            <h2>
            Why Lead Generation is Key for Business Growth
            </h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
    );
};

export default Blog;