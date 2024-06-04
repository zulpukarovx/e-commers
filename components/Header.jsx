"use client";
import Link from "next/link";
import Nav from "./Nav";
import CartSideBar from "./CartSideBar";
import { CgShoppingBag } from "react-icons/cg";
import Image from "next/image";
import logo from "../product_images/nike-logo.png";
import { useShoppingCart } from "use-shopping-cart";

const Header = () => {
  const { cartCount, handleCartClick } = useShoppingCart();
  return (
    <header className="bg-white shadow-lg sticky top-0 py-8 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="p-2" href="/">
          <Image src={logo} width={40} height={40} />
        </Link>
        <div className="flex items-center gap-5">
          <Nav />
          <div
            onClick={() => handleCartClick()}
            className="relative cursor-pointer"
          >
            <CgShoppingBag className="text-[26px]" />
            <span
              className="absolute bg-primary text-white w-5 h-5
            -bottom-2 -right-1 rounded-full justify-center items-center flex font-medium text-sm"
            >
              {cartCount}
            </span>
          </div>
          <CartSideBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
