
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const contents = [
	{
		title: "Product Design",
		text: "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores.",
	},
	{
		title: "Tracking",
		text: "Urna molestie at eleme ntum eu facilisis sed odio Male suada fames.",
	},
	{
		title: "Analytics",
		text: "It’s no secret that the digital industry is booming. From exciting startups to global brands.",
	},
	{
		title: "Marketing",
		text: "More off this less hello salamander lied porpoise much over tightly circa horse taped.",
	},
	{
		title: "Distribution",
		text: "This is a factor in the economy of a nation, and the administration takes the major choices.",
	},
	{
		title: "Feedback",
		text: "Banking crises have developed many times banking sector as a whole.",
	},
];

const ContentItem = ({ item, index }) => (
	<div className="xl:p-4">
		<div className="w-12 h-12 rounded-full text-xl inline-flex justify-center items-center bg-blue-600 text-white mb-4">
			{index}
		</div>
		<h4 className="font-bold text-xl mb-4">{item.title}</h4>
		<p className="opacity-80 mb-0">{item.text}</p>
	</div>
);

ContentItem.propTypes = {
	item: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};

const Header = () => {
	return (
		<section className="ezy__howitworks2 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-12 gap-6">
					<div className="col-span-12 md:col-span-6">
						<h1 className="text-3xl font-bold md:text-[45px] leading-tight mb-6">
							Lorem ipsum dolor sit amet consectetur adipisicing elit
						</h1>
						<p className="text-[17px] leading-normal opacity-80">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Perferendis sit, adipisci consectetur repellendus magni quae totam
							temporibus. Quibusdam eos magnam, vel perferendis cupiditate
							doloremque qui.
						</p>
					</div>
					<div className="col-span-12 md:col-span-5 md:col-start-8 relative">
						<a
							href="#!"
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] bg-blue-600 text-white text-lg inline-flex justify-center items-center cursor-pointer rounded-full mb-6"
						>
							<FontAwesomeIcon icon={faPlay} />
						</a>
						<img
							src="https://cdn.easyfrontend.com/pictures/blog/blog_13_3.jpg"
							alt=""
							className="max-w-full h-auto mx-auto rounded-[20px]"
						/>
					</div>
				</div>
				<div className="grid grid-cols-6 gap-6 justify-center items-center mt-12">
					{contents.map((item, i) => (
						<div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
							<ContentItem index={i + 1} item={item} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Header;