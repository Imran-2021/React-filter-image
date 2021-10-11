import React from 'react';

const Menu = ({items}) => {
    return (
        <div>
            <div className="m-5">
                <div className="row ">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            {
                                items.map((element)=>{
                                    const {id,image,name,description,catagory,price} = element;
                                    // console.log(id,image,name,description,catagory,price);
                                    return(
                                        <div  className="col-12 col-md-6 col-lg-6 col-sl-4 " key={id}>
                                <div className="row ">
                                    {/* for image  */}
                                    <div className="col-md-6 col-12 col-lg-4">
                                        <img src={image} width="100%" height="200"alt=""className="image-fluid" />
                                </div>
                                {/* description */}
                                <div className="col-md-6 col-12 col-lg-8">
                                        <div className="pt-4 pb-3">
                                            <p>{id}</p>
                                            <h1>{name}</h1>
                                            <p>{catagory}</p>
                                            <h2>{price}</h2>
                                            <a href=""><button className="btn btn-primary">click</button></a>
                                            <p>{description} </p>
                                        </div>
                                </div>
                                </div>

                            </div>
                                    )
                                })
                            }
                            
                        </div>
                       
                       
                    </div>
                   

                </div>
            </div>
        </div>
    );
};

export default Menu;