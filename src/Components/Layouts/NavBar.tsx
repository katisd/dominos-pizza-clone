import Link from "next/link";
import React from "react";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import { useShoppingCart } from "../context/CartContext";

const NavBar = () => {
  const { getSumQuantity, getSumPrice } = useShoppingCart();
  return (
    <div className="container navbar fixed inset-x-0 top-0 z-50 mx-auto w-full bg-base-100">
      <div className="flex-1">
        <Link href={"/"} className="btn-ghost btn text-xl normal-case">
          Domino&apos;s Pizza
        </Link>
      </div>
      <ThemeSwitch />
      <div className="flex-none">
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle btn">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {getSumQuantity()}
              </span>
            </div>
          </label>
          {/* TODO: cart item */}
          <div
            tabIndex={0}
            className="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">
                {getSumQuantity()} Items
              </span>
              <span className="text-info">Subtotal: {getSumPrice()}</span>
              <div className="card-actions">
                <button className="btn-primary btn-block btn">View cart</button>
              </div>
            </div>
          </div>
        </div>
        {/* profile */}
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <div className="w-10 rounded-full">
              <Image
                width={100}
                height={100}
                src="/people.jfif"
                alt="profile"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
