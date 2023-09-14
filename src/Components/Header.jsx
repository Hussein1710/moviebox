import React from 'react'
import Logo from "../assets/Logo.png";
import SearchBar from "./SearchBar";
import Menu from "../assets/Menu.png";
import Imdb from "../assets/Imdb.png";
import Tomato from "../assets/Tomato.png";
import { AiOutlineRight } from "react-icons/ai";
import {GoVideo} from "react-icons/go"
const Header = () => {
  const divStyle = {
    backgroundImage: 'url("src/assets/backPoster.png")',
    backgroundSize: 'cover',
    height: '100%',
  };
  
	return (
		<div className="h-[535px] w-full">
			<div style={divStyle}  >
				<div className="flex justify-between ">
					<img src={Logo} alt="logo" className="text-[10px]" />
					<SearchBar />
					<div className="flex justify-center items-center gap-4">
						<p className="text-white text-[16px]">Sign in</p>
						<img src={Menu} alt="Menu" className="" />
					</div>
				</div>
				<div className="w-[350px] mt-10 ml-2 flex flex-col items-start">
					<h1 className="text-white text-[25px] md:text-[35px] font-bold leading-10 w-[250px]  ">
						John Wick 3 : Parabellum
					</h1>
					<div className="flex gap-2 mt-2">
						<img src={Imdb} alt="IMDB" />
						<p className="text-white text-[10px] ">86.0 / 100</p>
						<img src={Tomato} alt="rotten-tomatoes" />
						<p className="text-white text-[10px]">97%</p>
					</div>
					<p className="text-white text-[18px] md:text-[24px] mt-3">
						John Wick is on the run after killing a member of the international
						assassins' guild, and with a $14 million price tag on his head, he is
						the target of hit men and women everywhere.
					</p>
					<button className="bg-[#BE123C] flex items-center gap-2 text-white px-2 py-2 rounded-md mt-4 hover:bg-[#8d364c]">
					  <GoVideo />	Watch later
					</button>
				</div>
			</div>
			<div className="flex justify-between ">
				<h1 className="text-black text-[25px] font-bold">Featured Movie</h1>
				<div className="flex items-center justify-center gap-1 hover:cursor-pointer">
					<p className="text-red-600 text-[14px]">See more </p>
					<AiOutlineRight size={12} />
				</div>
			</div>
		</div>
	);
};

export default Header;
