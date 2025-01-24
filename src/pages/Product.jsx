import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

const features = [
	{
		icon: faCog,
		title: "An engaged audience",
		desc: "Stars their behold whales our moving also living midst kind fill you're first beginning one life meat lesser. Saying all.",
	},
	{
		icon: faSlidersH,
		title: "Teachable experience",
		desc: "You've used (and loved!) our product, have created your own online course or have helped others create their own courses.",
	},
];

const FeaturedItem = ({ feature, index }) => {
	return (
		<div
			className={classNames("bg-slate-100 dark:bg-slate-800 rounded-xl p-6", {
				"mb-6": !index,
			})}
		>
			<div className="flex items-center mb-4">
				<div className="flex items-center justify-center text-base p-4 text-white rounded-xl bg-blue-600 mr-3">
					<FontAwesomeIcon icon={feature.icon} />
				</div>
				<h4 className="text-xl">{feature.title}</h4>
			</div>
			<p className="opacity-80 px-2">{feature.desc}</p>
		</div>
	);
};

FeaturedItem.propTypes = {
	feature: PropTypes.object.isRequired,
	index: PropTypes.number,
};

const Product = () => {
	return (
		<section className="py-24 md:py-36 bg-white dark:bg-[#0b1727] text-black dark:text-white relative overflow-hidden z-10">
			<div className="container px-4 mx-auto">
				<div className="flex justify-center text-center">
					<div>
						<h1 className="text-3xl font-bold leading-tight md:text-[45px] mb-12">
							The reasons behind our immense success...
						</h1>
					</div>
				</div>
				<div className="grid grid-cols-12 gap-6">
					<div className="col-span-12 lg:col-span-6">
						<img
							src="https://cdn.easyfrontend.com/pictures/services/service20.png"
							alt=""
							className="max-w-full h-auto md:mt-12"
						/>
					</div>
					<div className="col-span-12 lg:col-span-5 mt-12">
						{features.map((feature, i) => (
							<FeaturedItem feature={feature} key={i} index={i} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
export default Product;