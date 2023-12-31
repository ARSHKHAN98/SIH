import "./navbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
	// const { setSearch } = useState("");
	// const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="navbar">
			<div className="left">
				<Link to="/" style={{ textDecoration: "none" }}>
					<span>Edu</span>
				</Link>
				{/* conditional search bar */}
				{/* <div className="search">
					<input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
					<SearchOutlinedIcon />
				</div> */}
			</div>
			<div className="right">
				{true ? <WbSunnyOutlinedIcon className="icons" /> : <DarkModeOutlinedIcon className="icons" />}
				<div className="logout">
					<div className="dropdown">
						<button className="dropdown-toggle" onClick={toggleDropdown}>
							<span className="name">Name</span>
							<span className={`arrow ${isOpen ? "open" : ""}`}>&#9662;</span>
						</button>
						{isOpen && (
							<div className="dropdown-menu">
								{/* <div className="menu-item">
									<Link to={`/profile/${user._id}`} style={{ textDecoration: "none", color: "inherit" }} onClick={() => setIsOpen(false)}>
										<span className="name">{user.name}</span>
									</Link>
								</div> */}
								<div className="menu-item">Logout</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
