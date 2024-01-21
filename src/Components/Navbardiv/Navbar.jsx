
const Jobtitle=['Jobs','Companies','About','Contact','Blog','Login','Register']

const Navbar = () => {
    return (
        <div>
            <div className="navbar flex justify-between items-center p-[3rem]">
                <div className="logoDiv">
                    <h1 className="logo text-[25px] text-blueColor"><strong>Job</strong>Search</h1>
                </div>

                <div className="menu flex gap-8">
                    {
                        Jobtitle.map(item=><li className="menulist text-[#6f6f6f] hover:text-blueColor" key={item}>{item}</li>)
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;