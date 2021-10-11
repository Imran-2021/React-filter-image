import React from 'react';
import FakeData from '../FakeData';

const Catagory = ({filterImage,setItems,catagorItems}) => {
    return (
        <div>
            <div className="mt-5 text-center main-heading">
                <div className="d-flex,justify-content-around ">
                    {
                        catagorItems.map((x) => {
                            return(
                                <button className="btn btn-primary m-3" onClick={()=>filterImage(x)}>{x}</button>
                            )
                        })
                    }
                    
                    {/* <button className="btn btn-primary m-3" onClick={()=>filterImage("hdd")}>hdd</button>
                    <button className="btn btn-primary m-3" onClick={()=>filterImage("hddd")}>hddd</button>
                    <button className="btn btn-primary m-3" onClick={()=>filterImage("hdddd")}>hdddd</button>
                    <button className="btn btn-primary m-3" onClick={()=>filterImage("dh")}>dh</button>
                    <button className="btn btn-primary m-3" onClick={()=>setItems(FakeData)}>All</button> */}
                </div>
            </div>
        </div>
    );
};

export default Catagory;