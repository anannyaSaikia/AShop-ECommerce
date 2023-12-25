import style from "../styles/Navbar.module.css";
import { logo } from "./Logo";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
    const [toggle, setToggle] = useState(true);

    return (
        <>
            <nav className={style.navbar}>
                {logo}
                <ul>
                    <li>
                        <a to='/products'>All Products</a>
                    </li>
                </ul>

                <p>Hi, <span>name</span></p>

                <div className={style.cart}>
                    <MdOutlineShoppingCart size={25} />
                    <p>0</p>
                </div>

                <button><a to='/login'>Login</a></button>
            </nav>

            <div id={style.mobilenav} /* style={{"display" : "none"}} */>
                <div onClick={() => setToggle((prev) => !prev)}>
                    {
                        toggle ? <FiMenu size={25} /> : <RxCross1 size={25} />
                    }
                </div>
                {
                    toggle
                        ? ""
                        : <div id={style.menu}>
                            <ul>
                                <li>
                                    <a to='/products'>All Products</a>
                                </li>
                            </ul>
                            <div>Hi, <span>name</span></div>
                            <button><a to='/login'>Login</a></button>
                        </div>

                }
            </div>
        </>
    )
}

export default Navbar